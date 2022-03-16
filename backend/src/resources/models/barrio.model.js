import { ORM, DataTypes } from '../../database'

const Barrios = ORM.define('Barrio', 
    {
        Id: { 
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

export default Barrios