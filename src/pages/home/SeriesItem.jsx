import { Link } from 'react-router-dom'
import Item from '../../components/Item'

const Fixture = ({ data }) => {
  return data.map(item => (
    <div
      key={item.id}
      className='flex flex-col gap-y-4 text-sm bg-black/15 p-4 rounded-2xl shadow-lg whitespace-nowrap overflow-x-auto mb-2'
    >
      <div className='flex items-center gap-x-2 whitespace-nowrap'>
        <Item
          title={item.home_name}
          image={item.home_image}
          link=''
        />
        ⚡️
        <Item
          title={item.away_name}
          image={item.away_image}
          link=''
        />
        <span className='text-secondary'>—</span>
        <span className='text-primary'>
          {item.date} {item.hour !== '-' ? `${item.hour}` : ''}
        </span>
        <span>{item.tournament_name}</span>
        <span className='text-secondary'>—</span>
        <span className='pr-4 text-secondary'>#{item.id}</span>
      </div>
      <div>
        <div className='flex items-center gap-x-2'>
          <Link
            to={`/series/${item.id}`}
            className='btn-2'
          >
            Resultados
          </Link>

          <Link
            to={`/encuestas/${item.id}`}
            className='btn-2'
          >
            Encuesta
          </Link>
        </div>
      </div>
    </div>
  ))
}

export default Fixture
