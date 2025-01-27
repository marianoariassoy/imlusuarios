import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import EstadisticasItem from './EstadisticasItem'

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
      title: 'Partidos jugados',
      number: data[0].matches_total
    },
    {
      title: 'Partidos Ganados',
      number: data[0].matches_won
    },
    {
      title: 'Sets jugados',
      number: data[0].sets_total
    },
    {
      title: 'Sets ganados',
      number: data[0].sets_won
    }
  ]

  return (
    <section className='fade-in flex flex-col gap-y-3'>
      <h1 className='text-center text-primary font-bold'>Estadísticas</h1>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6 bg-black/20 p-6 rounded-2xl'>
        {info.map((item, index) => (
          <EstadisticasItem
            key={index}
            item={item}
          />
        ))}
      </div>
    </section>
  )
}

export default Estadisticas
