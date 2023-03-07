const router = require('../routes.js')
const Cliente = require('../../controllers/cliente.js')


//Post Method
router.post('/cliente', async (req, res) => {
    let data = Cliente.save(req.body)
    if (data) {
        res.status(200).json("created")
    } else {
        res.status(400).json({ message: data })
    }
})

//Get all Method
router.get('/cliente', async (req, res) => {
    let data = await Cliente.getAll()
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: data })
    }
})

//Get by ID Method
router.get('/cliente/:phone', async (req, res) => {
    //console.log(req.params.phone)
    let data = await Cliente.getByPhone(req.params.phone)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: data })
    }
})

//Update by ID Method
router.patch('/cliente/:phone', async (req, res) => {
    let data = await Cliente.update(req.params.phone, req.body)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: data })
    }
})

//Delete by ID Method
router.delete('/cliente/:phone', async (req, res) => {
    let data = await Cliente.drop(req.params.phone)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: data })
    }
})