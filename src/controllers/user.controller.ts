import type { UserService } from '#src/services/user.service'
import { Controller, type Context } from '@athenna/http'

import { Inject } from '@athenna/ioc'

@Controller()
export class UserController {
  @Inject()
  public userService: UserService

  public async index({ response }: Context) {
    const users = await this.userService.getAll()
    return response.status(200).send(users)
  }
}
