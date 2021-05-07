import { EntityRepository, Repository } from "typeorm";
import { Obras } from "../entities/Obras";

@EntityRepository(Obras)
class ObraRepository extends Repository<Obras> {

}

export {ObraRepository};