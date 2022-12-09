import { Client } from '../../../../entities/Client';
import { IClientsRepository } from '../../../../repositories/IClientsRepository';
import { ICreateClientRequestDTO } from './CreateClientDTO';

export class CreateClientUseCase {
  constructor(private clientsRepository: IClientsRepository) {}

  async execute(data: ICreateClientRequestDTO) {
    const clientAlreadyExists = await this.clientsRepository.findByCpf(data.cpf);

    if (clientAlreadyExists) {
      throw new Error('Client already exists.');
    }

    const client = new Client(data);

    const id = await this.clientsRepository.create(client);

    return {
      ...client,
      id
    };
  }
}
