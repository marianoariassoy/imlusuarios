import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Messages from '../../components/Messages'
import Series from './Series'

const SeriesPorCargar = ({ id }) => {
  const { data, loading } = useFetch(`/captain/${id}/series`)
  if (loading) return <Loader />
  if (!data) return <Messages text='No tenes series por cargar 👍' />

  return (
    <section className='fade-in flex flex-col gap-y-6 bg-base-200 p-4 rounded-lg shadow-lg'>
      <Series data={data} />
    </section>
  )
}

export default SeriesPorCargar
