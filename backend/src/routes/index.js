import { Router } from 'express';

import Admin from './admin.route';
import User from './user.route';
import Session from './session.route';
import File from './file.route';
import Deliveryman from './deliveryman.route';
import authMiddleware from '../app/middlewares/auth';

const routes = new Router();

routes.use(User);
routes.use(Session);
routes.use(Deliveryman);
routes.use(File);

// Authenticated by token
routes.use(authMiddleware);
routes.use(Admin);

export default routes;
