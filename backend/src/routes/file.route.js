import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';

import FileController from '../app/controllers/FileController';
// import authMiddleware from '../app/middlewares/auth';

const uploads = multer(multerConfig);
const routes = new Router();
// routes.use(authMiddleware);
routes.post('/files', uploads.single('file'), FileController.store);

export default routes;
