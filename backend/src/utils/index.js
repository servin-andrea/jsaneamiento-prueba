import Barrios from "../resources/models/barrio.model";

export const syncDb = async () => {
  try {
   // await Barrios.sync();
    console.log("\n Conexion a la BD exitosa\n");
  } catch (error) {
    console.log("\n\tOcurrió un error con la conexion a la BD\n", error.message);
  }
};
