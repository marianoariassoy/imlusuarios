import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Messages from '../../components/Messages'
import Series from './Series'
import Aviso from '../../components/Aviso'

const SeriesPorCargar = ({ id }) => {
  const { data, loading } = useFetch(`/captain/${id}/series`)
  if (loading) return <Loader />
  if (!data) return <Messages text='No tenes series por cargar 👍' />

  return (
    <section className='fade-in flex flex-col gap-y-3'>
      <Aviso
        emoji='👉'
        text='A continuación podrás ver tus próximas series y, en caso de que tu equipo resulte ganador, deberás cargar los
          resultados correspondientes'
      />

      <div className='flex flex-col gap-y-6 bg-base-200 p-4 rounded-lg shadow-lg'>
        <Series data={data} />
      </div>
    </section>
  )
}

export default SeriesPorCargar
