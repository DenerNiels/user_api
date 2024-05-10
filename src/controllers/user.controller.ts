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

  public async store({ response, request }: Context) {
    const data = request.only(['name', 'email', 'password'])
    const user = await this.userService.create(data)

    return response.status(201).send(user)
  }

  public async show({ request, response }: Context) {
    const id = request.param('id')
    const user = await this.userService.getById(id)

    return response.status(200).send(user)
  }

  public async update({ request, response }: Context) {
    const id = request.param('id')
    const user = await this.userService.getById(id)

    user.name = request.body.name
    user.email = request.body.email
    user.password = request.body.password

    await user.save()
    return response.status(200).send(user)
  }
}
