import { Request, Response } from 'express';
import { Client } from '../../entities/Client';
import { CreateClientUseCase } from './useCases/CreateClient/CreateClientUseCase';
import { CreateClientAddressUseCase } from './useCases/CreateClientAddress/CreateClientAddressUseCase';
import { DeleteClientUseCase } from './useCases/DeleteClient/DeleteClientUseCase';
import { ReadClientsUseCase } from './useCases/ReadClients/ReadClientsUseCase';
import { UpdateClientUseCase } from './useCases/UpdateClient/UpdateClientUseCase';

export class ClientsController {
  constructor(
    private createClientUseCase: CreateClientUseCase,
    private readClientsUseCase: ReadClientsUseCase,
    private createClientAddressUseCase: CreateClientAddressUseCase,
    private deleteClientUseCase: DeleteClientUseCase,
    private updateClientUseCase: UpdateClientUseCase
  ) {}

  async createClient(request: Request, response: Response): Promise<Response> {
    const { name, birthDate, rg, cpf, phone } = request.body as unknown as Client;

    try {
      await this.createClientUseCase.execute({ name, birthDate, rg, cpf, phone });

      return response.status(201).send();
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: 'Unexpected error.'
      });
    }
  }

  async readClients(request: Request, response: Response): Promise<Response> {
    try {
      const clients = await this.readClientsUseCase.execute();

      return response.status(201).send(clients);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: 'Unexpected error.'
      });
    }
  }

  async createClientAddress(request: Request, response: Response): Promise<Response> {
    const { address, city, country, complement, zipCode, neighborhood, number, reference, state } = request.body;

    const { id } = request.params;

    try {
      await this.createClientAddressUseCase.execute(
        {
          address,
          city,
          country,
          complement,
          zipCode,
          neighborhood,
          number,
          reference,
          state
        },
        Number(id)
      );

      return response.status(200).send();
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: 'Unexpected error.'
      });
    }
  }

  async deleteClient(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
      await this.deleteClientUseCase.execute(Number(id));

      return response.status(204).send();
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: 'Unexpected error.'
      });
    }
  }

  async updateClient(request: Request, response: Response): Promise<Response> {
    const { name, birthDate, rg, cpf, phone } = request.body as unknown as Client;

    const { id } = request.params;

    try {
      await this.updateClientUseCase.execute({ name, birthDate, rg, cpf, phone }, Number(id));

      return response.status(201).send();
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: 'Unexpected error.'
      });
    }
  }
}
