import { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Input, Button, Select } from '../../ui'
import Validation from '../../components/Validation'
import { texts } from '../../lib/data'
import useFetch from '../../hooks/useFetch'
import { BeatLoader } from 'react-spinners'
import toast, { Toaster } from 'react-hot-toast'
import Aviso from '../../components/Aviso'

const Serie = ({ serie, match }) => {
  const [sending, setSending] = useState(false)
  const [sended, setSended] = useState(false)
  const [error, setError] = useState(null)
  const [showPlayers, setShowPlayers] = useState(true)
  const { data: playersHome, loading: loadingPlayersHome } = useFetch(`/teams/${serie.home_id}/players`)
  const { data: playersAway, loading: loadingPlayersAway } = useFetch(`/teams/${serie.away_id}/players`)

  useEffect(() => {
    if (error) {
      toast.error(error, { position: 'bottom-right', className: 'text-sm bg-primary text-white', duration: 4000 })
    }
  }, [error])

  useEffect(() => {
    if (sended) {
      toast.success(sended, { position: 'bottom-right', className: 'text-sm bg-tertiary text-white', duration: 4000 })
    }
  }, [sended])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    setSending(true)
    setSended(null)
    const URL = `https://api.imltenis.com.ar/series/${serie.id}/scores/${match.id}/update`
    try {
      const response = await axios.post(URL, data)
      if (response.data.success) {
        setSended(response.data.message)
        setSending(false)
      } else {
        setError(response.data.message)
        setSending(false)
      }
    } catch (error) {
      setError(error)
      setSending(false)
    }
  }

  const double = match.type_id === 1 || match.type_id === 2

  return (
    <div className={sended ? 'opacity-50' : ''}>
      <h2 className='text-primary text-lg font-semibold text-center mb-3'>{match.type}</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-y-3'
      >
        <div
          className='w-full flex gap-x-4 justify-center'
          id='puntos'
        >
          <div className='flex-1'>
            <div className='form-control'>
              <Input
                type='number'
                title='Set 1 Local'
                placeholder='-'
                register={register('set1_home', {
                  required: texts.required,
                  min: { value: 0, message: 'El valor mínimo es 0' },
                  max: { value: 7, message: 'El valor máximo es 7' },
                  pattern: { value: /^\d+$/, message: 'Solo se permiten números' }
                })}
              />
              {errors.set1_home && <Validation text={errors.set1_home.message} />}
            </div>
            <div className='form-control'>
              <Input
                type='number'
                title='Set 2 Local'
                placeholder='-'
                register={register('set2_home', {
                  required: texts.required,
                  min: { value: 0, message: 'El valor mínimo es 0' },
                  max: { value: 7, message: 'El valor máximo es 7' },
                  pattern: { value: /^\d+$/, message: 'Solo se permiten números' }
                })}
              />
              {errors.set2_home && <Validation text={errors.set2_home.message} />}
            </div>
            <div className='form-control'>
              <Input
                type='number'
                title='Super TB Local'
                placeholder='-'
                register={register('set3_home', {
                  min: { value: 0, message: 'El valor mínimo es 0' },
                  max: { value: 20, message: 'El valor máximo es 20' },
                  pattern: { value: /^\d+$/, message: 'Solo se permiten números' }
                })}
              />
              {errors.set3_home && <Validation text={errors.set3_home.message} />}
            </div>
          </div>
          <div className='flex-1'>
            <div className='form-control'>
              <Input
                type='number'
                title='Set 1 Visitante'
                placeholder='-'
                register={register('set1_away', {
                  required: texts.required,
                  min: { value: 0, message: 'El valor mínimo es 0' },
                  max: { value: 7, message: 'El valor máximo es 7' },
                  pattern: { value: /^\d+$/, message: 'Solo se permiten números' }
                })}
              />
              {errors.set1_away && <Validation text={errors.set1_away.message} />}
            </div>
            <div className='form-control'>
              <Input
                type='number'
                title='Set 2 Visitante'
                placeholder='-'
                register={register('set2_away', {
                  required: texts.required,
                  min: { value: 0, message: 'El valor mínimo es 0' },
                  max: { value: 7, message: 'El valor máximo es 7' },
                  pattern: { value: /^\d+$/, message: 'Solo se permiten números' }
                })}
              />
              {errors.set2_away && <Validation text={errors.set2_away.message} />}
            </div>
            <div className='form-control'>
              <Input
                type='number'
                title='Super TB Visitante'
                placeholder='-'
                register={register('set3_away', {
                  min: { value: 0, message: 'El valor mínimo es 0' },
                  max: { value: 20, message: 'El valor máximo es 20' },
                  pattern: { value: /^\d+$/, message: 'Solo se permiten números' }
                })}
              />
              {errors.set3_away && <Validation text={errors.set3_away.message} />}
            </div>
          </div>
        </div>

        {showPlayers && (
          <div
            className='flex gap-x-4'
            id='jugadores'
          >
            <div className='flex-1'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text font-medium '>{double ? 'Jugadores Locales' : 'Jugador Local'}</span>
                </label>
                {loadingPlayersHome ? (
                  <BeatLoader />
                ) : (
                  playersHome && (
                    <>
                      <Select
                        options={playersHome}
                        register={register('player1_home', { required: texts.required })}
                        title='Selecioná'
                      />
                      {errors.player1_home && <Validation text={errors.player1_home.message} />}
                    </>
                  )
                )}
              </div>
              {double ? (
                <div className='form-control mt-3'>
                  {loadingPlayersHome ? (
                    <BeatLoader />
                  ) : (
                    playersHome && (
                      <>
                        <Select
                          options={playersHome}
                          register={register('player2_home', { required: texts.required })}
                          title='Selecioná'
                        />
                        {errors.player2_home && <Validation text={errors.player2_home.message} />}
                      </>
                    )
                  )}
                </div>
              ) : null}
            </div>
            <div className='flex-1'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text font-medium '>
                    {double ? 'Jugadores Visitantes' : 'Jugador Visitante'}
                  </span>
                </label>
                {loadingPlayersAway ? (
                  <BeatLoader />
                ) : (
                  playersAway && (
                    <>
                      <Select
                        options={playersAway}
                        register={register('player1_away', { required: texts.required })}
                        title='Selecioná'
                      />
                      {errors.player1_away && <Validation text={errors.player1_away.message} />}
                    </>
                  )
                )}
              </div>
              {double ? (
                <div className='form-control mt-3'>
                  {loadingPlayersHome ? (
                    <BeatLoader />
                  ) : (
                    playersAway && (
                      <>
                        <Select
                          options={playersAway}
                          register={register('player2_away', { required: texts.required })}
                          title='Selecioná'
                        />
                        {errors.player2_away && <Validation text={errors.player2_away.message} />}
                      </>
                    )
                  )}
                </div>
              ) : null}
            </div>
          </div>
        )}

        <div className='flex justify-between items-center gap-x-4'>
          <div className='flex-1'>Estado del partido:</div>
          <div className='flex-1'>
            <select
              {...register('status')}
              defaultValue='1'
              className='select select-bordered w-full'
              onChange={e => setShowPlayers(e.target.value === '1' ? true : false)}
            >
              <option value='1'>🔥 Finalizado</option>
              <option value='2'>🥲 W.O.</option>
            </select>
          </div>
        </div>

        {!sended ? (
          <div className='flex justify-center'>
            {sending ? (
              <div className='mt-6'>
                <BeatLoader />
              </div>
            ) : (
              <Button>✅ Confirmar resultado</Button>
            )}
          </div>
        ) : null}

        <Aviso text='Solo podrás confirmar el partido una vez, en caso de error, contactate con tu coordinador.' />
      </form>

      <Toaster />
    </div>
  )
}

export default Serie
