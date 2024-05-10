import { Route } from '@athenna/http'

Route.group(() => {
  Route.get('/users', 'UserController.index')
  Route.post('/users', 'UserController.store')
  Route.get('/users/:id', 'UserController.show')
  Route.put('/users/:id', 'UserController.update')
}).prefix('/api/v1')
