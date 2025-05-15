import express from 'express'
import path from 'path'
import { fileURLToPath} from 'url'
import router from './routes/index.routes.js'

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.set('views', path.join(__dirname, "views"))
app.set('view engine', "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(router)

export default app