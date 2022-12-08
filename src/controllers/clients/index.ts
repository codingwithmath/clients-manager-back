import { MySqlClientsRepository } from '../../repositories/implementations/MySqlClientsRepository';
import { ClientsController } from './ClientsController';
import { CreateClientUseCase } from './useCases/CreateClient/CreateClientUseCase';
import { CreateClientAddressUseCase } from './useCases/CreateClientAddress/CreateClientAddressUseCase';
import { DeleteClientUseCase } from './useCases/DeleteClient/DeleteClientUseCase';
import { ReadClientsUseCase } from './useCases/ReadClients/ReadClientsUseCase';
import { UpdateClientUseCase } from './useCases/UpdateClient/UpdateClientUseCase';

const mySqlClientsRepository = new MySqlClientsRepository();

const createClientUserCase = new CreateClientUseCase(mySqlClientsRepository);
const readClientsUseCase = new ReadClientsUseCase(mySqlClientsRepository);
const createClientAddressUseCase = new CreateClientAddressUseCase(mySqlClientsRepository);
const deleteClientUseCase = new DeleteClientUseCase(mySqlClientsRepository);
const updateClientUseCase = new UpdateClientUseCase(mySqlClientsRepository);

const clientsController = new ClientsController(
  createClientUserCase,
  readClientsUseCase,
  createClientAddressUseCase,
  deleteClientUseCase,
  updateClientUseCase
);

export { createClientUserCase, clientsController };
