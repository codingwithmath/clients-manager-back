import { Client } from '../entities/Client';

export interface IClientsRepository {
  create(client: Client): Promise<void>;
  read(): Promise<Client[] | []>;
  update(client: Client): Promise<Client>;
  delete(id: number): Promise<void>;
  findByCpf(cpf: string): Promise<void | Client>;
  findById(id: number): Promise<void | Client>;
  createAddress(address: Address, clientId: number): Promise<void>;
}
