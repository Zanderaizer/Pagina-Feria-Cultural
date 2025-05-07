import express from 'express'
import { dirname } from 'path'
import { fileUrlToPath} from 'url'

const app = express()
const __dirname = dirname(fileUrlToPath(import.meta.url))

app.set('views', path.join(__dirname, "views"))
app.set('view engine', "ejs")
app.use(express.static(path.join(__dirname, "public")))



app.get('/', (req, res)=>{
    res.send("Hola Mundo desde la web")
})

export default app 