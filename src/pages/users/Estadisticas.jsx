import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { Ray, Heart } from '../../components/icons'
import EstadisticasItem from './EstadisticasItem'
import Messages from '../users/Messages'

const Estadisticas = ({ id }) => {
  const { data, loading } = useFetch(`/users/stats/${id}`)
  if (loading) return <Loader />
  if (!data)
    return (
      <div className='font-medium text-secondary text-center text-sm mb-4'>
        Todavia no tenemos estadísticas tuyas 🥲
      </div>
    )

  const info = [
    {
      title: 'Juegos',
      number: data[0].matches_total,
      icon: <Ray />
    },
    {
      title: 'Ganados',
      number: data[0].matches_won,
      icon: <Heart />
    },
    {
      title: 'Sets',
      number: data[0].sets_total,
      icon: <Ray />
    },
    {
      title: 'Ganados',
      number: data[0].sets_won,
      icon: <Heart />
    }
  ]

  return (
    <section className='grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6 bg-black/20 p-6 rounded-2xl'>
      {info.map((item, index) => (
        <EstadisticasItem
          key={index}
          item={item}
        />
      ))}
    </section>
  )
}

export default Estadisticas
