import Head from 'next/head'
import { useRouter } from 'next/router'

const Clientes = () => {

    const router = useRouter()
    const {pid} = router.query

    return (
      <>
        <Head>
          <title>Detalles del Cliente</title>
        </Head>
        <h1>Cliente: {pid}</h1>
      </>
    )
  
}
  
Clientes.layout = 'AdminLayout'
export default Clientes