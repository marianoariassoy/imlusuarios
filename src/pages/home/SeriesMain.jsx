import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Series from './SeriesItem'
import Aviso from '../../components/Aviso'

const SeriesPorCargar = ({ id }) => {
  const { data, loading } = useFetch(`/captain/${id}/series`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section className='fade-in flex flex-col gap-y-3'>
      <h1 className='font-semibold text-primary'>{data.length > 1 ? 'Series actuales ' : 'Serie actual '}</h1>
      <div className='flex flex-col bg-black/15 p-4 rounded-2xl shadow-2xl'>
        <Series data={data} />
      </div>

      <Aviso text='En caso de que tu equipo resulte ganador, deberás cargar los resultados correspondientes.' />
      <Aviso text='¡No te olvides de completar tus encuestas!' />
    </section>
  )
}

export default SeriesPorCargar
