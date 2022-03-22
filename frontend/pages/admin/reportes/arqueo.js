import Head from 'next/head'

const Arqueo = () => {
    return (
        <>
            <Head>
                <title>Arqueo de Caja</title>
            </Head>
            <h1>Hola desde la sección arqueo de reportes</h1>
        </>
    )
}

Arqueo.layout = 'AdminLayout'
export default Arqueo