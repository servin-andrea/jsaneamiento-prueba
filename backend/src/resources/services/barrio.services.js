import Barrios from '../models/barrio.model'

const getById = async (id) => {
    const result = await Barrios.findByPk(id)
    return result?.dataValues
}

const getPerPage = async (page, size) => {
    const result = await Barrios.findAndCountAll({ limit: size, offset: (page * size) })
    const data = {
        previousPage: page? page - 1 : null,
        actualPage: page,
        nextPage: (page + 1) < Math.ceil(result.count / size)? (page + 1) : null,
        totalPages: Math.ceil(result.count / size),
        content: result.rows
    }
    return data
}

const create = async (object) => {
    const result = await Barrios.create(object)
    return result
}

const update = async (actualData, newData, id) => {
    const result = await Barrios.update(        
        { 
            Nombre: newData?.Nombre || actualData.Nombre 
        }, 
        { where: { Id: id } }
    )
    return result
}

const deleteById = async (id) => {
    const result = await Barrios.destroy({ where: { Id: id } })
    return result
}

export default { getPerPage, getById, create, update, deleteById }