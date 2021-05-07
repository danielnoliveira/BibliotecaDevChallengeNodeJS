import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from 'typeorm';
import {v4 as uuid} from 'uuid';

@Entity("obras")
class Obras {

  @PrimaryColumn()
  id: string;
  
  @Column()
  titulo: string;
  
  @Column()
  editora: string;
  
  @Column()
  foto: string;
  
  @CreateDateColumn()
  created_at: Date;
  
  @UpdateDateColumn()
  updated_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}

export {Obras};