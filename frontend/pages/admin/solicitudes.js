import Head from 'next/head'

const Solicitudes = () => {
    return (
        <>
            <Head>
                <title>Solicitudes</title>
            </Head>
            <h1>Hola desde la página de Solicitudes</h1>
        </>
    )
}

Solicitudes.layout = 'AdminLayout'
export default Solicitudes