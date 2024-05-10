import { User } from '#src/models/user'
import { Service } from '@athenna/ioc'
import bcrypt from 'bcrypt'

@Service()
export class UserService {
  public async getAll() {
    return User.findMany()
  }

  public async getById(Id: string) {
    return User.query().where('id', Id).find()
  }

  public async getByEmail(Email: string) {
    return User.query().where('email', Email).find()
  }

  public async create(data: Partial<User>) {
    data.password = await bcrypt.hash(data.password, 10)
    const user = await User.create(data)

    return user
  }
}
