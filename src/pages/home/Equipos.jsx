import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from '../../components/Item'
import Messages from '../../components/Messages'
import Aviso from '../../components/Aviso'

const CaptainEquipoActuales = ({ id }) => {
  const { data, loading } = useFetch(`/captain/${id}/teams`)
  if (loading) return <Loader />
  if (data === null) return <Messages text='🥲 No tenes equipos en la temporada actual' />

  const actual_season = +import.meta.env.VITE_ACTUAL_SESION
  let dataFiltered = []
  if (data) {
    dataFiltered = data.filter(item => item.season === actual_season)
  }
  if (dataFiltered.length === 0) return <Messages text='🥲 No tenes equipos en la temporada actual' />

  return (
    <section className='fade-in flex flex-col gap-y-3'>
      <h1 className='font-semibold text-primary'>{'Equipos compitiendo (' + dataFiltered.length + ')'}</h1>

      <div className='bg-black/15 p-6 rounded-xl shadow-lg'>
        <div className='flex flex-col text-sm overflow-x-auto'>
          {dataFiltered.map((item, index) => (
            <div
              key={index}
              className='py-2'
            >
              <Item
                title={item.name + ' — ' + item.tournament_name}
                image={item.image}
                link={`/equipos/${item.id}`}
              />
            </div>
          ))}
        </div>
      </div>

      <Aviso
        text='¡Ojo! Podes modificar las listas de buena fe hasta el 15 de Agosto.'
        alert={true}
      />
    </section>
  )
}

export default CaptainEquipoActuales
