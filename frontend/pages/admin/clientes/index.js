import Head from 'next/head'

const Clientes = () => {
    return (
        <>
            <Head>
                <title>Clientes</title>
            </Head>
            <h1>Hola desde la página clientes</h1>
        </>
    )
}

Clientes.layout = 'AdminLayout'
export default Clientes