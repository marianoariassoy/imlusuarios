import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from '../../components/Item'
import Messages from '../../components/Messages'

const CapitanEquiposAnteriores = ({ id }) => {
  const { data, loading } = useFetch(`/captain/${id}/teams/actual`)
  if (loading) return <Loader />

  if (data) if (data.length === 0) return <Messages text='No tenes equipos capitaneados en la actual temporada 🥲' />

  return (
    <section className='fade-in flex flex-col gap-y-3 bg-base-200 p-4'>
      <div className=''>
        <h1 className='text-sm font-semibold text-primary'>Equipos capitaneados</h1>
        <p className='text-secondary text-sm'>
          Los siguientes equipos estan bajo tu conducción durante la temporada actual.
        </p>
      </div>

      <div className='flex flex-col gap-y-3 text-sm'>
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
            <div>
              <Link to={`/integrantes/${item.id}`}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  fill='currentColor'
                  className='w-4 h-4 hover:text-primary'
                >
                  <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z' />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CapitanEquiposAnteriores
