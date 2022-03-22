import Head from 'next/head'

const Facturacion = () => {
    return (
        <>
            <Head>
                <title>Facturacion</title>
            </Head>
            <h1>Hola desde la sección facturación de caja</h1>
        </>
    )
}

Facturacion.layout = 'AdminLayout'
export default Facturacion