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
      <h1 className='font-semibold text-primary'>{'Series actuales (' + data.length + ')'}</h1>

      <Series data={data} />

      <Aviso
        text='En caso de que tu equipo resulte ganador, deberás cargar los resultados correspondientes.'
        alert={false}
      />
      <Aviso
        text='¡No te olvides de completar la encuesta de cada serie! 😉'
        alert={true}
      />
    </section>
  )
}

export default SeriesPorCargar
