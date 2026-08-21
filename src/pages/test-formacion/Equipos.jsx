import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Messages from '../../components/Messages'

const Equipos = ({ idCaptain, idEquipo, setIdEquipo }) => {
  const { data, loading } = useFetch(`/captain/${idCaptain}/teams`)
  if (loading) return <Loader />
  if (data === null) return <Messages text='🥲 Ocurrió un error' />

  return (
    <select
      className='select select-bordered border-primary w-full text-base text-primary'
      defaultValue='0'
      value={idEquipo}
      onChange={e => setIdEquipo(e.target.value)}
    >
      <option
        value='0'
        disabled
      >
        Selecciona un equipo
      </option>
      {data.map((item, index) => {
        return (
          <option
            key={index}
            value={item.id}
          >
            {item.name} {item.tournament_name}
          </option>
        )
      })}
    </select>
  )
}

export default Equipos
