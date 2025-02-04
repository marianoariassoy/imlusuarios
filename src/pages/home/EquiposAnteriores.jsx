import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from '../../components/Item'

const CapitanEquiposAnteriores = ({ id }) => {
  const { data, loading } = useFetch(`/captain/${id}/teams`)
  if (loading) return <Loader />
  if (data === null) return null
  const actual_season = 5
  let dataFiltered = []
  if (data) dataFiltered = data.filter(item => item.season !== actual_season)

  if (dataFiltered.length > 1)
    return (
      <section className='fade-in flex flex-col gap-y-3 bg-base-200 p-4 rounded-lg shadow-lg'>
        <h1 className='text-sm font-medium text-primary'>Equipos anteriores</h1>

        <div className='flex flex-col text-sm'>
          {dataFiltered.map((item, index) => (
            <div
              key={index}
              className='flex items-center justify-between gap-x-3 hover:bg-base-100 cursor-pointer py-2'
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

export default CapitanEquiposAnteriores
