import { IClientsRepository } from '../../../../repositories/IClientsRepository';

export class DeleteClientUseCase {
  constructor(private clientsRepository: IClientsRepository) {}

  async execute(clientId: number): Promise<void> {
    const clientExists = await this.clientsRepository.findById(clientId);

    if (!clientExists) {
      throw new Error('Client dont exists.');
    }

    await this.clientsRepository.delete(clientId);
  }
}
