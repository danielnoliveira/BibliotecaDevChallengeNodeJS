import {getCustomRepository, Repository } from "typeorm";
import { Obras } from "../entities/Obras";
import { ObraRepository } from "../repositories/ObraRepository";
import { Utils } from "./helpers/Utils";


class ObraServices {
  private obraRepository: Repository<Obras>;
  private utils: Utils;

  constructor(){
    this.obraRepository =  getCustomRepository(ObraRepository);
    this.utils = new Utils();
  }

  async getAllAsync() {
    const result = await this.obraRepository.find();
    return result.map(obra => {
      return this.utils.MapperObra(obra);
    });
  }
  async CreateAsync(titulo:string,editora:string,foto:string, autores:string){
    const novaObra = await this.obraRepository.create({titulo,editora,foto,autores});
    await this.obraRepository.save(novaObra);
    return this.utils.MapperObra(novaObra);
  }
  async UpdateAsync(id:string,titulo:string,editora:string,foto:string, autores:string){
    const obraExiste = await this.obraRepository.findOne(id);
    if(!obraExiste)
      return null;
    obraExiste.foto = foto ?? obraExiste.foto;
    obraExiste.titulo = titulo ?? obraExiste.titulo;
    obraExiste.editora = editora ?? obraExiste.editora;
    obraExiste.autores = autores ?? obraExiste.autores;

    await this.obraRepository.save(obraExiste);
    return this.utils.MapperObra(obraExiste);
  }
  async DeleteAsync(id:string){
    const obraExiste = await this.obraRepository.findOne(id);
    if(!obraExiste)
      return null;
    await this.obraRepository.delete(id);
    return this.utils.MapperObra(obraExiste);
  }
}

export {ObraServices}