import BarrioServices from '../services/barrio.services'

export const getPerPage = async (req, res) => {
    /*
    let page = req.query.page
    let size = req.query.size
    if(!page && !size) {
        const result = await BarrioServices.getPerPage(0, 5)
        res.status(200).json(result).end()
    } else if ((!page && size) || (page && !size)) {
        res.status(400).json({ message: 'El modelo del query es ?page=x&size=x'}).end()
    } else {
        page = Number(page)
        size = Number(size)
        if(isNaN(page) || isNaN(size) || page < 0 || size < 0) {
            res.status(400).json({ message: 'page y size deben ser enteros y no deben ser menores a 0'}).end()
        } else {
            const result = await BarrioServices.getPerPage(page, size)
            res.status(200).json(result).end()
        }
    }
    */
    res.status(200).json({message:"hola desde barrio"}).end()
}

/*

export const getById = async (req, res) => {
    const id = req.params.id
    if(isNaN(Number(id))) {
        res.status(400).json({ message: 'El id debe ser tipo entero' }).end()
    } else {
        const result = await BarrioServices.getById(id)
        if(result) {
            res.status(200).json(result).end()
        } else {
            res.status(404).end()
        }
    }
}

export const create = async (req, res) => {
    const Nombre = req.body.Nombre
    if(Nombre) {
        const result = await BarrioServices.create({Nombre})
        res.status(201).json(result).end()
    } else {
        res.status(400).json({ message: 'Nombre es un campo requerido'}).end()
    }
}

export const update = async (req, res) => {
    const id = req.params.id
    if(isNaN(Number(id))) {
        res.status(400).json({ message: 'El id debe ser tipo entero' }).end()
    } else {
        const actualData = await BarrioServices.getById(id)
        if(actualData) {
            await BarrioServices.update(actualData, req.body, id)
            res.status(200).end()
        } else {
            res.status(404).end()
        }
    }
}

export const deleteById = async (req, res) => {
    const id = req.params.id
    if(isNaN(Number(id))) {
        res.status(400).json({ message: 'El id debe ser tipo entero' }).end()
    } else {
        const result = await BarrioServices.deleteById(id)
        result? res.status(200).end() : res.status(404).end()
    }
}

*/