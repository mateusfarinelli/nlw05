import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';

class UsersService {
  private userRepository: Repository<User>

  constructor() {
    this.userRepository = getCustomRepository(UsersRepository);
  }
  

  async create(email: string){    
    //verifica se o usuario existe
    const userExists = await this.userRepository.findOne({
      email
    })

    // Se existe retorna o registro
    if(userExists){
      return userExists;
    }

    //Se não existir, cria o registro
    const user = this.userRepository.create({
      email
    });

    await this.userRepository.save(user);

    return user;

  }

}

export { UsersService }