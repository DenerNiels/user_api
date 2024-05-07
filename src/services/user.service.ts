import { User } from '#src/models/user'
import { Service } from '@athenna/ioc'
import bcrypt from 'bcrypt'

@Service()
export class UserService {
  public async getAll() {
    return User.findMany()
  }

  public async create(data: Partial<User>) {
    data.password = await bcrypt.hash(data.password, 10)
    const user = await User.create(data)

    return user
  }
}
