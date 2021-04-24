import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'
import { User } from './User';

@Entity("Messages")
class Message {

  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  //Tratar o atributo de relacionamento como campo @Column (ficando o SGBD a parte da verificação), ou
  //Ou trazer o objeto que representa o campo

  @JoinColumn({ name: "user_id"})
  @ManyToOne( () => User)
  user: User;

  @Column()
  user_id: string;

  @Column()
  text: string;

  @CreateDateColumn()
  created_at: Date;


  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }






}

export { Message }