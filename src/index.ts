import express, { Request, Response, NextFunction } from 'express'
import databaseService from '~/services/database.services'
const app = express()
import usersRouter from '~/routes/users.routes'
const port = 4000
app.use(express.json())
app.use('/users', usersRouter)
databaseService.connect()
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log('Lỗi là', err.message)
  res.status(400).json({ error: err.message })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
