import {Request, Response} from 'express';
import { ObraServices } from '../services/ObraServices';


class ObraControllers {
  async  getAll(request:Request, response:Response){
    const obraServices = new ObraServices();
    const results = await obraServices.getAllAsync();

    return response.json(results);
  }

  async Create(request:Request, response:Response){
    const {titulo, editora, foto} = request.body;
    const obraServices = new ObraServices();
    const novaObra = await obraServices.CreateAsync(titulo,editora,foto);
    return response.json(novaObra);
  }
}

export {ObraControllers};