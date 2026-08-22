import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Equipos from './Equipos'
import { Button } from '../../ui'
import { useAuth } from '../../context'
import Messages from '../../components/Messages'
import { Alert } from '../../lib/icons'
import Aviso from '../../components/Aviso'
import Confetti from '../../components/Confetti'

const Index = () => {
  const { userData, isLoggedIn } = useAuth()
  const idCaptain = userData?.id

  const [team, setTeam] = useState({
    id: null,
    tournament_type: 1
  })
  const [players, setPlayers] = useState([])

  const [formation, setFormation] = useState({
    D1P1: null,
    D1P2: null,
    D2P1: null,
    D2P2: null,
    S1P1: null
  })

  const [formationMessage, setFormationMessage] = useState(null)

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const response = await axios.get(`https://api.imltenis.com.ar/captain/${idCaptain}/teams/${team.id}/players`)

        setPlayers(response.data)

        setFormation({
          D1P1: null,
          D1P2: null,
          D2P1: null,
          D2P2: null,
          S1P1: null
        })

        setFormationMessage(null)
      } catch (error) {
        console.log(error)
      }
    }

    if (idCaptain && team.id) {
      getPlayers()
    }
  }, [idCaptain, team.id])

  if (!isLoggedIn) {
    return <Messages text='🥲 Debes estar logeado para ver este contenido' />
  }

  const matchesMode1 = [
    {
      name: 'Doble 1',
      type: 'D1',
      double: true
    },
    {
      name: 'Doble 2',
      type: 'D2',
      double: true
    },
    {
      name: 'Single',
      type: 'S1',
      double: false
    }
  ]

  const matchesMode3 = [
    {
      name: 'Doble 1',
      type: 'D1',
      double: true
    },
    {
      name: 'Doble 2',
      type: 'D2',
      double: true
    }
  ]

  const handleFormationChange = (position, playerId) => {
    const player = players.find(player => String(player.id) === String(playerId))

    setFormation(prev => ({
      ...prev,
      [position]: player || null
    }))
  }

  const getAvailablePlayers = position => {
    const selectedPlayers = Object.entries(formation)
      .filter(([currentPosition, player]) => {
        return currentPosition !== position && player
      })
      .map(([, player]) => String(player.id))

    return players.filter(player => {
      return !selectedPlayers.includes(String(player.id))
    })
  }

  const handleTestFormation = () => {
    const positions =
      team.tournament_type === 1 ? ['D1P1', 'D1P2', 'D2P1', 'D2P2', 'S1P1'] : ['D1P1', 'D1P2', 'D2P1', 'D2P2']

    const allPlayersSelected = positions.every(position => formation[position])

    if (!allPlayersSelected) {
      setFormationMessage('⚠️ Te falta seleccionar jugadores')
      return
    }

    const selectedPlayers = positions.map(position => formation[position])

    const bestPlayer = selectedPlayers.reduce((best, player) => {
      return Number(player.pos) < Number(best.pos) ? player : best
    })

    const isBestPlayerInD1 = formation.D1P1.id === bestPlayer.id || formation.D1P2.id === bestPlayer.id

    if (!isBestPlayerInD1) {
      setFormationMessage(`😢 La formación no es correcta. ${bestPlayer.name} debe estar en Doble 1.`)

      return
    }

    setFormationMessage('💪🏻 La formación es correcta.')
  }

  const matches = Number(team.tournament_type) === 1 ? matchesMode1 : matchesMode3

  return (
    <section className='fade-in flex flex-col gap-y-6 max-w-2xl mx-auto'>
      {formationMessage === '💪🏻 La formación es correcta.' && <Confetti />}

      <Header
        title='Test de formación'
        emoji='👮🏻‍♂️'
      />

      <Equipos
        idCaptain={idCaptain}
        team={team}
        setTeam={setTeam}
      />

      <div className='flex flex-col gap-y-4 my-4'>
        {matches.map((item, index) => {
          const player1 = `${item.type}P1`
          const player2 = `${item.type}P2`

          return (
            <div
              key={index}
              className='flex gap-x-2 items-center'
            >
              <div className='w-20'>
                <h2 className='text-primary font-semibold'>{item.name}</h2>
              </div>

              <div className='grid grid-cols-2 gap-x-2 flex-1'>
                <select
                  className='select select-bordered border-primary w-full text-base'
                  value={formation[player1]?.id || ''}
                  onChange={e => handleFormationChange(player1, e.target.value)}
                  name={player1}
                >
                  <option value=''>Selecciona un jugador</option>

                  {getAvailablePlayers(player1).map(player => (
                    <option
                      key={player.id}
                      value={player.id}
                    >
                      {Number(player.pos) + 1}. {player.name}
                    </option>
                  ))}
                </select>

                {item.double && (
                  <select
                    className='select select-bordered border-primary w-full text-base'
                    value={formation[player2]?.id || ''}
                    onChange={e => handleFormationChange(player2, e.target.value)}
                    name={player2}
                  >
                    <option value=''>Selecciona un jugador</option>

                    {getAvailablePlayers(player2).map(player => (
                      <option
                        key={player.id}
                        value={player.id}
                      >
                        {Number(player.pos) + 1}. {player.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {formationMessage && <div className='text-secondary font-medium text-center text-base'>{formationMessage}</div>}

      <div>
        <button
          className='w-full border-none bg-white/5 h-12 rounded-lg hover:bg-white/10 transition-all font-medium'
          onClick={handleTestFormation}
        >
          Testear formación 🔥
        </button>
      </div>

      <Aviso text='De los cuatro doblistas convocados para la serie, el jugador con mejor ranking deberá ser asignado obligatoriamente al Doble 1.' />
    </section>
  )
}

export default Index
