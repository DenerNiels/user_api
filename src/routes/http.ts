import { Route } from '@athenna/http'

Route.group(() => {
  Route.get('/users', 'UserController.index')
}).prefix('/api/v1')
