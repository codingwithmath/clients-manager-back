import { IClientsRepository } from '../../../../repositories/IClientsRepository';
import { IUpdateClientRequestDTO } from './UpdateClientDTO';

export class UpdateClientUseCase {
  constructor(private clientsRepository: IClientsRepository) {}

  async execute({ name, birthDate, rg, cpf, phone }: IUpdateClientRequestDTO, id: number): Promise<void> {
    const clientExists = await this.clientsRepository.findById(id);

    if (!clientExists) {
      throw new Error('Client dont exists.');
    }

    await this.clientsRepository.update({ id, name, birthDate, rg, cpf, phone });
  }
}
