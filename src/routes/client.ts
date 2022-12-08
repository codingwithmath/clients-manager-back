import { Router } from 'express';
import { clientsController } from '../controllers/clients';

const router = Router();

router.post('/clients', (request, response) => {
  return clientsController.createClient(request, response);
});

router.get('/clients', (request, response) => {
  return clientsController.readClients(request, response);
});

router.post('/client/:id/address', (request, response) => {
  return clientsController.createClientAddress(request, response);
});

router.delete('/client/:id', (request, response) => {
  return clientsController.deleteClient(request, response);
});

router.put('/client/:id', (request, response) => {
  return clientsController.updateClient(request, response);
});

export default router;
