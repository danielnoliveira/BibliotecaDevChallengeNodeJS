import { Obras } from "../../entities/Obras";


class Utils {

  MapperObra(obra:Obras){
    return {...obra,autores:obra.autores.split(";")}
  }
}

export {Utils};