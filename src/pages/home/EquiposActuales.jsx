import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from '../../components/Item'
import Messages from '../../components/Messages'

const CapitanEquiposAnteriores = ({ id }) => {
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
      <h1 className='text-sm font-medium text-primary'>Equipos actuales</h1>

      <div className='flex flex-col gap-y-3 text-sm'>
        {dataFiltered.map((item, index) => (
          <div
            key={index}
            className='flex items-center gap-3 justify-between hover:bg-base-100 cursor-pointer py-2'
            onClick={() => handleClick(item.id)}
          >
            <Item
              title={item.name + ' ' + item.tournament_name}
              image={item.image}
            />
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                fill='currentColor'
                className='w-4 h-4'
              >
                <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z' />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CapitanEquiposAnteriores
