import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from '../../components/ItemBlank'

const CapitanEquiposAnteriores = ({ id }) => {
  const { data, loading } = useFetch(`/captain/${id}/teams/last`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section className='fade-in flex flex-col gap-y-3 mt-3'>
      <h1 className='text-center text-sm font-semibold text-primary mb-3'>👉 Equipos anteriores</h1>

      <div className='flex flex-col gap-y-3 lg:items-center text-sm'>
        {data.map((item, index) => (
          <div key={index}>
            <Item
              title={item.name + ' ' + item.tournament_name}
              image={item.image}
              link={`https://imltenis.com.ar/equipos/${item.id}`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CapitanEquiposAnteriores
