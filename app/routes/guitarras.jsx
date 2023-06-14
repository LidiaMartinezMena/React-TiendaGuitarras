import { useLoaderData, Outlet, useOutletContext  } from '@remix-run/react'

import { getGuitarras } from '~/models/guitarras.server'
import ListadoGuitarras from '../components/listado-guitarras';
import styles from '~/styles/guitarras.css'

export function meta() {
  return [
    { title: "GuitarLA - Tienda de guitarras" },
    {description:"GuitarLA - Nuestra colección de guitarras"}
  ];
}

export function links() {
  return [
      {
          rel: 'stylesheet',
          href: styles
      }
  ]
}

export async function loader() {

  const guitarras = await getGuitarras()
  return guitarras.data
}

function Tienda() {
  const data = useOutletContext()
  console.log(data)
  
  const guitarras = useLoaderData()
 
  return (
    <main className='contenedor'>
        <ListadoGuitarras 
          guitarras={guitarras}
        />
      <Outlet 
        context={useOutletContext()}
      />

    </main>
  )
}
export default Tienda
