import { Client } from '../../../../entities/Client';
import { IClientsRepository } from '../../../../repositories/IClientsRepository';
import { ICreateClientAddressDTO } from './CreateClientAddressDTO';

export class CreateClientAddressUseCase {
  constructor(private clientsRepository: IClientsRepository) {}

  async execute(data: ICreateClientAddressDTO, clientId: number): Promise<void> {
    const clientExists = await this.clientsRepository.findById(clientId);

    if (!clientExists) {
      throw new Error('Client already exists.');
    }

    await this.clientsRepository.createAddress(data, clientId);
  }
}
