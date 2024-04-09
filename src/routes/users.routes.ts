import express, { Router } from 'express'
import { register, wrap } from 'module'
import { loginController, registerController } from '~/controllers/users.controllers'
import { accessTokenValidator, loginValidator, registerValidator } from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
import { validate } from '~/utils/validation'
const usersRouter = Router()
/**
 * Description. Register a new user
 * Path: /login
 * Method: Post
 * Body{ email: string, pasword: string }
 * date of birth: ISO8601}
 */
usersRouter.post('/login', loginValidator, wrapRequestHandler(loginController))
/**
 * Description. Register a new user
 * Path: /register
 * Method: Post
 * Body{ name: string, email: string, pasword: string,confirm _password: string,
 * date of birth: ISO8601}
 */
usersRouter.post('/register', registerValidator, wrapRequestHandler(registerController))

usersRouter.post(
  '/logout',
  accessTokenValidator,
  wrapRequestHandler((req, res) => {
    res.json({ message: 'Logout successfully' })
  })
)
export default usersRouter
