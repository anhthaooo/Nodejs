import express, { Router } from 'express'
import { register, wrap } from 'module'
import { loginController, registerController } from '~/controllers/users.controllers'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
import { validate } from '~/utils/validation'
const usersRouter = Router()
usersRouter.post('/login', loginValidator, wrapRequestHandler(loginController))
/**
 * Description. Register a new user
 * Path: /register
 * Method: Post
 * Body{ name: string, email: string, pasword: string,confirm _password: string,
 * date of birth: ISO8601}
 */
usersRouter.post('/register', registerValidator, wrapRequestHandler(registerController))
export default usersRouter
