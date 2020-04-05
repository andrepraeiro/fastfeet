import { Router } from 'express';

import DeliveryController from '../app/controllers/Deliveryman/DeliveryController';
import DeliveryCollectController from '../app/controllers/Deliveryman/DeliveryCollectController';
import DeliveryDeliverController from '../app/controllers/Deliveryman/DeliveryDeliverController';
import DeliveryProblemController from '../app/controllers/Deliveryman/DeliveryProblemController';

const routes = new Router();

routes.get('/deliveryman/:id/deliveries', DeliveryController.index);
routes.post(
  '/deliveryman/:deliverymanId/deliveries/:deliveryId/collect',
  DeliveryCollectController.store
);
routes.post(
  '/deliveryman/:deliverymanId/deliveries/:deliveryId/deliver',
  DeliveryDeliverController.store
);

// Delivery Problems

routes.post(
  '/deliveryman/:deliverymanId/deliveries/:deliveryId/problems',
  DeliveryProblemController.store
);

export default routes;
