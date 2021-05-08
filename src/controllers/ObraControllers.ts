import {Request, Response} from 'express';
import { ObraServices } from '../services/ObraServices';

interface IObraRequest {
  titulo: string;
  editora: string;
  foto: string;
  autores: string[];
}

class ObraControllers {
  async  getAll(request:Request, response:Response){
    const obraServices = new ObraServices();
    const results = await obraServices.getAllAsync();

    return response.json(results);
  }

  async Create(request:Request, response:Response){
    const {titulo, editora, foto, autores}:IObraRequest = request.body;
    const obraServices = new ObraServices();
    const novaObra = await obraServices.CreateAsync(titulo,editora,foto,autores.join(";"));
    return response.json(novaObra);
  }
  async Update(request:Request, response:Response){
    const {titulo, editora, foto, autores}:IObraRequest = request.body
    const {id} = request.params;
    const autoresL = autores!==undefined?autores.join(";"):null;
    const obraServices = new ObraServices();
    const obraAtualizada = await obraServices.UpdateAsync(id,titulo,editora,foto,autoresL);
    if(!obraAtualizada)
      return response.status(400).json({msg:"Obra não existe!!"});
    
    return response.json(obraAtualizada);
  }
  async Delete(request:Request, response:Response){
    const {id} = request.params;
    const obraServices = new ObraServices(); 
    const result = await obraServices.DeleteAsync(id);
    if(!result)
    return response.status(400).json({msg:"Obra não existe!!"});
  
  return response.json(result);
  }
}

export {ObraControllers};