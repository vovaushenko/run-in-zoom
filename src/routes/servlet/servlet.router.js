import express from 'express';
import servletController from './servlet.controller.js';

const servletRouter = express.Router();

servletRouter.get('/', servletController.getTokenAndRedirect);

export { servletRouter };
