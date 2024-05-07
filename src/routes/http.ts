import { Route } from '@athenna/http'

Route.group(() => {
  Route.get('/users', 'UserController.index')
  Route.post('/users', 'UserController.store')
}).prefix('/api/v1')
