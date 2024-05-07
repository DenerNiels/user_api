import { User } from '#src/models/User'
import { Service } from '@athenna/ioc'

@Service()
export class UserService {
  public async getAll() {
    return User.findMany()
  }
}
