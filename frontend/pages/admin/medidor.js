import Head from 'next/head'

const Medidor = () => {
    return (
        <>
            <Head>
                <title>Medidor</title>
            </Head>
            <h1>Hola desde la página de Medidor</h1>
        </>
    )
}

Medidor.layout = 'AdminLayout'
export default Medidor