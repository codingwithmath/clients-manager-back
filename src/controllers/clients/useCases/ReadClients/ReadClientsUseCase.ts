import { Client } from '../../../../entities/Client';
import { IClientsRepository } from '../../../../repositories/IClientsRepository';

export class ReadClientsUseCase {
  constructor(private clientsRepository: IClientsRepository) {}

  async execute(): Promise<Client[] | []> {
    return await this.clientsRepository.read();
  }
}
