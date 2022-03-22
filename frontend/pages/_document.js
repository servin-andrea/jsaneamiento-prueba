//Obtenido de https://nextjs.org/docs/messages/no-stylesheets-in-head-component
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
            {/* Icono de la app en la pestaña de la página */}
            <link rel='icon' type='image/x-icon' href='/logo.ico' />
            {/* Fuente Roboto de tamaños 300, 400 y 600 */}
            <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;600&display=swap' rel='stylesheet'/>
            {/* Fuente Roboto de tamaños 300, 400 y 600 */}
            <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap' rel='stylesheet' />
            {/* Js de bootstrap */}
            <script src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js' integrity='sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p' crossOrigin='anonymous'></script>
            <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js' integrity='sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF' crossOrigin='anonymous'></script>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}