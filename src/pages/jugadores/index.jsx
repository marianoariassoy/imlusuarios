import { useState } from 'react'
import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import TitleRow from '../../components/TitleRow'
import Header from '../../components/Header'

const index = () => {
  const { data, loading } = useFetch(`/players`)
  const [filterText, setFilterText] = useState('')

  if (loading) return <Loader />

  const handleFilterChange = event => {
    setFilterText(event.target.value)
  }

  const filteredPlayers = filterText
    ? data.filter(player => player.name.toLowerCase().includes(filterText.toLowerCase()))
    : []

  return (
    <section className='fade-in flex flex-col gap-y-6 max-w-md m-auto'>
      <Header
        title='Jugadores'
        emoji='🧑👩'
      />

      <input
        type='text'
        placeholder='Buscar por nombre o apellido'
        value={filterText}
        onChange={handleFilterChange}
        className='input input-bordered w-full text-sm'
      />

      <div className='overflow-x-auto text-sm'>
        <table className='table w-full'>
          <tbody>
            {filteredPlayers.map(item => (
              <tr key={item.id}>
                <TitleRow
                  num=''
                  image={item.image}
                  title={item.name}
                  link={`/jugadores/${item.id}`}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Helmet>
        <title>IML Tenis Jugadores</title>
      </Helmet>
    </section>
  )
}

export default index
