import 'dotenv/config';
import cors from 'cors';
import path from 'path';

import routes from '../routes';

import '../database';

const express = require('express');

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
);
app.use(routes);

module.exports = app;
