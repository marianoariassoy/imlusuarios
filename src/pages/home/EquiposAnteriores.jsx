import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from '../../components/Item'

const CapitanEquiposAnteriores = ({ id }) => {
  const { data, loading } = useFetch(`/captain/${id}/teams`)
  if (loading) return <Loader />
  if (data === null) return null
  const actual_season = +import.meta.env.VITE_ACTUAL_SESION
  let dataFiltered = []
  if (data) dataFiltered = data.filter(item => item.season !== actual_season)

  if (dataFiltered.length > 0)
    return (
      <section className='fade-in flex flex-col gap-y-3'>
        <h1 className='font-semibold text-primary'>{'Equipos anteriores (' + dataFiltered.length + ')'}</h1>

        <div className='bg-black/15 px-4 py-4 md:px-6 rounded-xl shadow-lg'>
          <div className='flex flex-col text-sm overflow-x-auto pb-2'>
            {dataFiltered.map((item, index) => (
              <div
                key={index}
                className='py-2'
              >
                <Item
                  title={item.name + ' ' + item.tournament_name}
                  image={item.image}
                  link=''
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default CapitanEquiposAnteriores
