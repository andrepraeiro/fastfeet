import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import AdminUserController from './app/controllers/Admin/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/Admin/RecipientController';
import DeliverymanController from './app/controllers/Admin/DeliverymanController';
import FileController from './app/controllers/FileController';
import DeliveryController from './app/controllers/Admin/DeliveryController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const uploads = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);
routes.put('/admin/users', AdminUserController.update);

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

routes.post('/files', uploads.single('file'), FileController.store);

export default routes;
