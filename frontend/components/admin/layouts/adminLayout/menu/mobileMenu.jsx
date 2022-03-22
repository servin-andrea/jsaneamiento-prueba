import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { BiLogOut } from 'react-icons/bi'

const MobileMenu = ({isMenuOpen, onShowMenuChange}) => {

    const { pathname: currentPage } = useRouter() 

    const logOut = () => {
        alert('Cerrando Sesión')
    }

    useEffect(() => {
        if(isMenuOpen) onShowMenuChange()
    }, [currentPage])

    return (
        <>
            <Link href='/admin'><a>Home</a></Link>
            <Link href='/admin/solicitudes'><a>Solicitud de Conexión</a></Link>
            <Link href='/admin/reclamos'><a>Reclamos</a></Link>
            <Link href='/admin/medidor'><a>Medidor</a></Link>
            <Link href='/admin/clientes'><a>Clientes</a></Link>
            <Link href='/admin/caja/facturacion'><a>Facturación</a></Link>
            <Link href='/admin/caja/cobros'><a>Cobros</a></Link>
            <Link href='/admin/reportes/arqueo'><a>Arqueo de Caja</a></Link>
            <Link href='/admin/reportes/morosos'><a>Lista de morosos</a></Link>
            <Link href='/admin/configuracion'><a>Configuración</a></Link>
            <div onClick={logOut}>
                Cerrar Sesión
            </div>
            <style jsx>{`
                a, div {
                    color: #fff;
                    display: block;
                    padding: .5em 1.5em;
                    font-weight: 600;
                    text-decoration: none;
                }
                a:active {
                    color: #00f
                }
            `}</style>
        </>
    )
}

export default MobileMenu