import Head from 'next/head'

const Morosos = () => {
    return (
        <>
            <Head>
                <title>Morosos</title>
            </Head>
            <h1>Hola desde la sección morosos de reportes</h1>
        </>
    )
}

Morosos.layout = 'AdminLayout'
export default Morosos