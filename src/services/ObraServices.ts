import {getCustomRepository, Repository } from "typeorm";
import { Obras } from "../entities/Obras";
import { ObraRepository } from "../repositories/ObraRepository";


class ObraServices {
  private obraRepository: Repository<Obras>;

  constructor(){
    this.obraRepository =  getCustomRepository(ObraRepository);
  }

  async getAllAsync() {
    const result = await this.obraRepository.find();
    return result;
  }
  async CreateAsync(titulo:string,editora:string,foto:string){
    const novaObra = await this.obraRepository.create({titulo,editora,foto});
    await this.obraRepository.save(novaObra);
    return novaObra;
  }
}

export {ObraServices}