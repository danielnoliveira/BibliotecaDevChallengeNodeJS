import {Router} from 'express';
import { ObraControllers } from './controllers/ObraControllers';

const routes = Router();

const obrasController = new ObraControllers();

routes.get("/obras/",obrasController.getAll);
routes.post("/obras/",obrasController.Create);
routes.put("/obras/:id",obrasController.Update);
routes.delete("/obras/:id",obrasController.Delete);

export {routes};