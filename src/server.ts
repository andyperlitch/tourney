import express from 'express'
import { setupDB } from './setup-db'
import asyncHandler from './utils/asyncHandler'
import validateRouter from './routes/validateRouter'

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/validate', validateRouter)
setupDB()

app.get(
  '/',
  asyncHandler(async (req, res) => {}),
)

app.listen(5000, () => {
  console.log('server listening on port 5000')
})
