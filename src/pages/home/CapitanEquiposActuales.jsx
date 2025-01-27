import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from '../../components/Item'
import Messages from '../../components/Messages'

const CapitanEquiposAnteriores = ({ id }) => {
  const { data, loading } = useFetch(`/captain/${id}/teams/actual`)
  if (loading) return <Loader />

  if (data) if (data.length === 0) return <Messages text='No tenes equipos capitaneados en la actual temporada 🥲' />

  return (
    <section className='fade-in flex flex-col gap-y-3 bg-base-200 p-4 rounded-xl pb-6 '>
      <h1 className='text-center text-sm font-semibold text-primary'>👉 Equipos actuales</h1>
      <div className='flex flex-col gap-y-3 lg:items-center text-sm'>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex items-center gap-3 justify-between'
          >
            <Item
              title={item.name + ' ' + item.tournament_name}
              image={item.image}
              link={`/integrantes/${item.id}`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CapitanEquiposAnteriores
