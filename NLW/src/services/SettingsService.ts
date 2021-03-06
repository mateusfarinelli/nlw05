import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface SettingsInterface {
  chat: boolean,
  username: string
}

class SettingsService {

  private  settingsRepository: Repository<Setting>

  constructor(){
    this.settingsRepository = getCustomRepository(SettingsRepository)
  }
  async create({ chat, username }: SettingsInterface){
    const userAlreadyExists = await  this.settingsRepository.findOne({
      username
    });

    if(userAlreadyExists){
      throw new Error("Usuário já existente!")
    }
  
    const settings =  this.settingsRepository.create({
      chat,
      username
    });
  
    await  this.settingsRepository.save(settings);

    return settings;  
  }
}

export { SettingsService }