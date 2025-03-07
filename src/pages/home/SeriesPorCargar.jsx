import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Messages from '../../components/Messages'
import Series from './Series'
import Aviso from '../../components/Aviso'

const SeriesPorCargar = ({ id }) => {
  const { data, loading } = useFetch(`/captain/${id}/series`)
  if (loading) return <Loader />
  if (!data) return <Messages text='No tenes ningún resultado para cargar 👍' />

  return (
    <section className='fade-in flex flex-col gap-y-3'>
      <h1 className='text-sm font-semibold text-primary'>{data.length > 1 ? 'Próximas series' : 'Próxima serie'}</h1>
      <div className='flex flex-col bg-black/20 p-4 rounded-lg shadow-2xl'>
        <Series data={data} />
      </div>

      <Aviso text='En caso de que tu equipo resulte ganador, deberás cargar los resultados correspondientes.' />
    </section>
  )
}

export default SeriesPorCargar
