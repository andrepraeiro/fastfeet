import { Router } from 'express';

import UserController from '../app/controllers/Admin/UserController';
import RecipientController from '../app/controllers/Admin/RecipientController';
import DeliverymanController from '../app/controllers/Admin/DeliverymanController';
import DeliveryController from '../app/controllers/Admin/DeliveryController';
import DeliveryProblemsController from '../app/controllers/Admin/DeliveryProblemController';

// import authMiddleware from '../app/middlewares/auth';

const routes = new Router();
// routes.use(authMiddleware);

routes.put('/admin/users', UserController.update);

routes.post('/admin/recipients', RecipientController.store);
routes.put('/admin/recipients/:id', RecipientController.update);

routes.get('/admin/deliverymans', DeliverymanController.index);
routes.post('/admin/deliverymans', DeliverymanController.store);
routes.put('/admin/deliverymans/:id', DeliverymanController.update);
routes.delete('/admin/deliverymans/:id', DeliverymanController.delete);

routes.get('/admin/deliveries', DeliveryController.index);
routes.post('/admin/deliveries', DeliveryController.store);
routes.put('/admin/deliveries/:id', DeliveryController.update);
routes.delete('/admin/deliveries/:id', DeliveryController.delete);

routes.get('/admin/delivery/problems', DeliveryProblemsController.index);

export default routes;
