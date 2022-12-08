import connection from '../../config/database';
import { Client } from '../../entities/Client';
import { IClientsRepository } from '../IClientsRepository';

export class MySqlClientsRepository implements IClientsRepository {
  async create({ id, name, birthDate, rg, cpf, phone }: Client): Promise<void> {
    const query = `INSERT INTO clients (id, name, birthDate, rg, cpf, phone) VALUES (?, ?, ?, ?, ?, ?)`;

    const params = [id, name, birthDate, rg, cpf, phone];

    return await this.query(query, params);
  }

  async read(): Promise<Client[]> {
    const query = 'SELECT * FROM `clients` c';

    const results = await this.query(query);

    const clients = results.map(async (client: Client) => {
      return {
        ...client,
        addresses: await this.findAddresses(client.id)
      };
    });

    return Promise.all(clients);
  }

  async update({ id, name, birthDate, rg, cpf, phone }: Client): Promise<Client> {
    const query = ` UPDATE clients
      SET
        name = ?,
        birthDate = ?,
        rg = ?,
        cpf = ?,
        phone = ?
      WHERE id = ?;
    `;

    const params = [name, birthDate, rg, cpf, phone, id];

    return await this.query(query, params);
  }

  async delete(id: number): Promise<void> {
    const query = 'DELETE FROM clients WHERE id = ?';

    const params = [id];

    await this.query(query, params);
  }

  async findByCpf(cpf: string): Promise<void | Client> {
    const query = 'SELECT * FROM `clients` WHERE `cpf` = ?';

    const params = [cpf];

    const client = await this.query(query, params);

    return client[0];
  }

  async createAddress(
    { id, country, state, city, neighborhood, address, number, complement, reference, zipCode }: Address,
    clientId: number
  ): Promise<void> {
    const query = `INSERT INTO addresses (
      country,
      state,
      city,
      neighborhood,
      address,
      number,
      complement,
      reference,
      zipCode,
      client_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const params = [country, state, city, neighborhood, address, number, complement, reference, zipCode, clientId];

    await this.query(query, params);
  }

  async findById(id: number): Promise<void | Client> {
    const query = 'SELECT * FROM `clients` WHERE `id` = ?';

    const params = [id];

    const client = await this.query(query, params);

    return client[0];
  }

  async findAddresses(clientId: number): Promise<void | Address> {
    const query = `SELECT * FROM addresses a WHERE a.client_id = ?`;

    const params = [clientId];

    const addresses = await this.query(query, params);

    return addresses;
  }

  query(query: string, params?: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
      connection.query(query, params, (error, results, fields) => {
        if (error) {
          reject(new Error('error while querying clients' + error.stack));
        }

        resolve(results);
      });
    });
  }
}
