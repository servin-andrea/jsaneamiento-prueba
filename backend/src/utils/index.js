import Barrios from "../resources/models/barrio.model";

export const syncDb = async () => {
  try {
    await Barrios.sync(/* { force: true }).then(() => {
      console.log("Drop and re-sync db.");
    } */);
  } catch (error) {
    console.log("\n\tOcurrió un error con la conexion a la BD\n", error.message);
  }
};
