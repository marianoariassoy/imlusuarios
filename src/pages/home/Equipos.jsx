import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from '../../components/Item'
import Messages from '../../components/Messages'
import Aviso from '../../components/Aviso'

const CaptainEquipoActuales = ({ id }) => {
  const { data, loading } = useFetch(`/captain/${id}/teams`)
  if (loading) return <Loader />
  if (data === null) return <Messages text='🥲 No tenes equipos en la temporada actual' />

  const actual_season = 8
  let dataFiltered = []
  if (data) {
    dataFiltered = data.filter(item => item.season === actual_season)
  }
  if (dataFiltered.length === 0) return <Messages text='🥲 No tenes equipos en la temporada actual' />

  return (
    <section className='fade-in flex flex-col gap-y-3'>
      <h1 className='font-semibold text-primary'>{'Tus Equipos (' + dataFiltered.length + ')'}</h1>

      <div className='bg-white/5 px-4 py-4 md:px-6 rounded-xl'>
        <div className='flex flex-col text-sm overflow-x-auto pb-2'>
          {dataFiltered.map((item, index) => (
            <div
              key={index}
              className='py-2'
            >
              <Item
                title={item.name + ' ' + item.tournament_name}
                image={item.image}
                link={`/equipos/${item.id}`}
              />
            </div>
          ))}
        </div>
      </div>

      <Aviso
        text='¡Ojo! Podes modificar las listas de buena fe hasta el 8 de Agosto.'
        alert={true}
      />
    </section>
  )
}

export default CaptainEquipoActuales
