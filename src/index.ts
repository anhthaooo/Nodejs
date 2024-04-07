import express from 'express'
import databaseService from '~/services/database.services'
const app = express()
import usersRouter from '~/routes/users.routes'
import { defaultErrorHandler } from './middlewares/error.middlewares'
databaseService.connect()
const port = 4000
app.use(express.json())
app.use('/users', usersRouter)
app.use(defaultErrorHandler)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
