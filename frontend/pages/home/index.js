import { isNil } from "lodash";
import { useEffect, useCallback } from "react";
import useGetAll from "../../api/useGetAll";
import Navbar from "../../components/Navbar";

const Home = () => {
  const { data, loading, error, execute } = useGetAll("excuse");

  const handleLoadData = useCallback(async () => {
    try {
      await execute();
      console.log("NUEVO DATO OBTENIDO");
    } catch (_error) {
      console.log("ERROR AL OBTENER EL DATO");
    }
  }, [execute]);

  useEffect(() => {
    handleLoadData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container text-center">
        <h1>Home page</h1>
        <h3>
          Show a data from:{" "}
          <a target="_blank" href="https://excuser.herokuapp.com/">
            https://excuser.herokuapp.com
          </a>
        </h3>
        {loading && <h2>Cargando...</h2>}
        {!isNil(error) && (
          <h2
            style={{ color: "red" }}
          >{`Error al cargar el dato: ${error}`}</h2>
        )}
        {data.map((d) => (
          <div key={d.id}>
            <h6>ID: {d.id}</h6>
            <h6>CATEGORY: {d.category}</h6>
            <h6>EXCUSE: {d.excuse}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
