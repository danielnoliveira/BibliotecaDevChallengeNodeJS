import {Router} from 'express';
import { ObraControllers } from './controllers/ObraControllers';

const routes = Router();

const obrasController = new ObraControllers();

routes.get("/obras/",obrasController.getAll);
routes.post("/obras/",obrasController.Create);


export {routes};