import { Router } from "express"

const router = Router()

router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/Feria_manon', (req, res)=>{
    res.render('Feria_manon')
})

router.get('/Pagina_Reserva', (req, res)=>{
    res.render('Pagina_Reserva')
})

export default router