import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from '../../components/Item'
import Players from './Players'
import axios from 'axios'
import { BeatLoader } from 'react-spinners'
import Messages from '../../components/Messages'

const Integrantes = ({ id }) => {
  const [sending, setSending] = useState(false)
  const [sended, setSended] = useState(false)
  const [error, setError] = useState(null)
  const { data, loading } = useFetch(`/users/teams/${id}/players`)
  const [team, setTeam] = useState([])
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    if (data) {
      setTeam(data)
      setAmount(data.length)
    }
  }, [data])

  useEffect(() => {
    setAmount(team.length)
  }, [team])

  if (loading) return <Loader />

  const addToTeam = player => {
    if (team.length < 20) {
      const itemExists = team.some(item => item.id === +player.id)

      if (!itemExists) {
        setError(null)
        setSended(null)
        setTeam([...team, { ...player, pos: 1 }])
        setAmount(team.length)
      } else {
        setError('Este jugador ya pertenece al equipo 💪')
      }
    } else {
      setError('LLegaste al máximo de integrantes 🔥')
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  const removeFromTeam = id => {
    setTeam(team.filter(item => item.id !== id))
  }

  const updatePlayer = (id, pos) => {
    setTeam(team.map(player => (player.id == id ? { ...player, pos } : player)))
  }

  const updateTeam = async () => {
    setSending(true)
    try {
      const response = await axios.post(`https://imltenis.com.ar/api/users/update-team/${id}`, team)
      if (response.data.success) {
        setSended(response.data.message)
        setSending(false)
        setError(null)
        setTeam(team.sort((a, b) => a.pos - b.pos))
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      } else {
        setError(response.data.message)
        setSending(false)
      }
    } catch (error) {
      setError(error)
      setSending(false)
    }
  }

  return (
    <section className='fade-in flex flex-col gap-y-4'>
      {team && !team.length > 0 && <Messages text='El equipo aún no tiene integrantes 🥲' />}

      {team && team.length > 0 && (
        <>
          <div>
            <h1 className='text-primary text-sm text-center font-semibold'>🔥 Lista de buena fe</h1>
            <p className='text-sm'>
              La lista debe estar ordenada según el nivel actual de cada jugador, siendo el primero el de mejor nievel y
              el último el de nivel más bajo.
            </p>
          </div>

          {error && <Messages text={error} />}
          {sended && <Messages text={sended} />}

          <div className='text-sm overflow-x-auto w-full'>
            <table className='table mb-3'>
              <thead>
                <tr>
                  <th>Posición</th>
                  <th>Nombre y Apellido</th>
                  <th align='right'>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {team &&
                  team.map(item => (
                    <tr key={item.id}>
                      <td width={50}>
                        <select
                          className='select text-sm border-white/10'
                          onChange={e => updatePlayer(item.id, e.target.value)}
                        >
                          {[...Array(20)].map((_, i) => (
                            <option
                              key={i}
                              value={i + 1}
                              selected={item.pos === i + 1}
                            >
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <Item
                          image={item.image}
                          title={item.name}
                          link=''
                        />
                      </td>

                      <td align='right'>
                        <button onClick={() => removeFromTeam(item.id)}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                            fill='currentColor'
                            className='w-4 h-4 hover:text-primary'
                          >
                            <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z' />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className='text-sm text-secondary mb-4 text-center'>Cantidad de jugadores: {amount}</div>

          <div className='text-center mb-3'>
            {sending ? (
              <div className='mt-6'>
                <BeatLoader />
              </div>
            ) : (
              <div className='flex gap-x-3 justify-center'>
                <button
                  className='btn'
                  onClick={updateTeam}
                >
                  🚀 Guardar lista
                </button>
                <Link
                  className='btn'
                  to='/home'
                >
                  Volver
                </Link>
              </div>
            )}
          </div>
        </>
      )}

      <Players addToTeam={addToTeam} />
    </section>
  )
}

export default Integrantes
