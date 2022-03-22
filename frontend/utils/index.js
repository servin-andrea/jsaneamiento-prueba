import AdminLayout from '../components/admin/layouts/adminLayout'
import DefaultLayout from '../components/admin/layouts/defaultLayout'

/**
 * Obtiene el nombre del layout a utilizar definido al final de las páginas como la propiedad 'layout' y retorna el 
 * Layout al cual corresponde, si es que no se especificó un layout el retorno es el DefaultLayout 
 * (Ver en components/layout) 
 */
 export const getLayout = component => {
    const Layouts = { AdminLayout }
    return Layouts[component.layout] || DefaultLayout
}//Idea obtenida de https://simplernerd.com/nextjs-multiple-layouts/