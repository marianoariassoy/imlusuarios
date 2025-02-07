import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from '../../components/Item'
import Messages from '../../components/Messages'

const CaptainEquipoActuales = ({ id }) => {
  const navigate = useNavigate()
  const { data, loading } = useFetch(`/captain/${id}/teams`)
  if (loading) return <Loader />
  if (data === null) return <Messages text='No tenes equipos capitaneados en la temporada actual 🥲' />

  const actual_season = 5
  let dataFiltered = []
  if (data) {
    dataFiltered = data.filter(item => item.season === actual_season)
  }
  if (dataFiltered.length === 0) return <Messages text='No tenes equipos capitaneados en la temporada actual 🥲' />

  const handleClick = id => {
    navigate(`/equipos/${id}`)
  }
  return (
    <section className='fade-in flex flex-col gap-y-3 bg-base-200 p-4 rounded-lg shadow-lg'>
      <h1 className='text-sm font-medium text-primary'>Equipos</h1>

      <div className='flex flex-col gap-y-3 text-sm'>
        {dataFiltered.map((item, index) => (
          <div
            key={index}
            className='py-2 hover:bg-base-100 cursor-pointer'
            onClick={() => handleClick(item.id)}
          >
            <Item
              title={item.name + ' ' + item.tournament_name}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CaptainEquipoActuales
