import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Singles from './Singles'
import Dobles from './Dobles'
import Equipos from './Equipos'
import Image from '../../components/Image'

const JugadoresContainer = () => {
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [id])

  const { data, loading } = useFetch(`/players/${id}`)
  if (loading) return <Loader />
  if (!data) return null

  const info = {
    id: data[0].id,
    name: data[0].name,
    image: data[0].image,
    age: data[0].age
  }

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='items-center flex flex-col gap-y-3'>
        <div className='avatar'>
          <div className='w-24 rounded-full'>
            <Image
              src={info.image}
              alt={info.name}
            />
          </div>
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-primary'>{info.name}</h1>
          <h2 className='opacity-70 text-sm'>{info.age}</h2>
          <span className='text-xl'>🧑</span>
        </div>
      </div>

      <Singles id={info.id} />
      <Dobles id={info.id} />
      <Equipos id={info.id} />

      <Helmet>
        <title>IML Tenis {data[0].name}</title>
      </Helmet>
    </section>
  )
}

export default JugadoresContainer
