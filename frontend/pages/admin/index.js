import Head from 'next/head'

const Home = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <h1>Hola desde el Home del admin</h1>
        </>
    )
}

Home.layout = 'AdminLayout'

export default Home