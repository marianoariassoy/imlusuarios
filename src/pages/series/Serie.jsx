import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Input, Button, Select } from '../../ui'

import Error from '../../components/Error'
import { texts } from '../../components/data'
import useFetch from '../../hooks/useFetch'
import { BeatLoader } from 'react-spinners'
import Messages from '../../components/Messages'

const Serie = ({ serie, match }) => {
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)
  const { data: playersHome, loading: loadingPlayersHome } = useFetch(`/teams/${serie.home_id}/players`)
  const { data: playersAway, loading: loadingPlayersAway } = useFetch(`/teams/${serie.away_id}/players`)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    console.log(data)
    // setSending(true)
    // try {
    //   const response = await axios.post('https://imltenis.com.ar/api/users/login', data)
    //   if (response.data.success) {
    //     const token = response.data.token
    //     login(token)
    //     navigate('/home')
    //   } else {
    //     setError(response.data.message)
    //     setSending(false)
    //   }
    // } catch (error) {
    //   setError(error)
    //   setSending(false)
    // }
  }

  const double = match.type_id === 1 || match.type_id === 2

  return (
    <div>
      <h2 className='text-primary font-semibold text-center mb-3'>{match.type}</h2>

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
                title='Set 1'
                placeholder='-'
                register={register('set1_home', {
                  required: texts.required,
                  min: { value: 0, message: 'El valor mínimo es 0' },
                  max: { value: 7, message: 'El valor máximo es 7' },
                  pattern: { value: /^\d+$/, message: 'Solo se permiten números' }
                })}
              />
              {errors.set1_home && <Error text={errors.set1_home.message} />}
            </div>
            <div className='form-control'>
              <Input
                type='number'
                title='Set 2'
                placeholder='-'
                register={register('set2_home', {
                  required: texts.required,
                  min: { value: 0, message: 'El valor mínimo es 0' },
                  max: { value: 7, message: 'El valor máximo es 7' },
                  pattern: { value: /^\d+$/, message: 'Solo se permiten números' }
                })}
              />
              {errors.set2_home && <Error text={errors.set2_home.message} />}
            </div>
            <div className='form-control'>
              <Input
                type='number'
                title='Set 3'
                placeholder='-'
                register={register('set3_home', {
                  min: { value: 0, message: 'El valor mínimo es 0' },
                  max: { value: 20, message: 'El valor máximo es 20' },
                  pattern: { value: /^\d+$/, message: 'Solo se permiten números' }
                })}
              />
              {errors.set3_home && <Error text={errors.set3_home.message} />}
            </div>
          </div>
          <div className='flex-1'>
            <div className='form-control'>
              <Input
                type='number'
                title='Set 1'
                placeholder='-'
                register={register('set1_away', {
                  required: texts.required,
                  min: { value: 0, message: 'El valor mínimo es 0' },
                  max: { value: 7, message: 'El valor máximo es 7' },
                  pattern: { value: /^\d+$/, message: 'Solo se permiten números' }
                })}
              />
              {errors.set1_away && <Error text={errors.set1_away.message} />}
            </div>
            <div className='form-control'>
              <Input
                type='number'
                title='Set 2'
                placeholder='-'
                register={register('set2_away', {
                  required: texts.required,
                  min: { value: 0, message: 'El valor mínimo es 0' },
                  max: { value: 7, message: 'El valor máximo es 7' },
                  pattern: { value: /^\d+$/, message: 'Solo se permiten números' }
                })}
              />
              {errors.set2_away && <Error text={errors.set2_away.message} />}
            </div>
            <div className='form-control'>
              <Input
                type='number'
                title='Set 3'
                placeholder='-'
                register={register('set3_away', {
                  min: { value: 0, message: 'El valor mínimo es 0' },
                  max: { value: 20, message: 'El valor máximo es 20' },
                  pattern: { value: /^\d+$/, message: 'Solo se permiten números' }
                })}
              />
              {errors.set3_away && <Error text={errors.set3_away.message} />}
            </div>
          </div>
        </div>

        <div
          className='flex gap-x-4'
          id='jugadores'
        >
          <div className='flex-1'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-medium'>
                  {double ? 'Jugadores' : 'Jugador'} {serie.home_name}
                </span>
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
                    {errors.player1_home && <Error text={errors.player1_home.message} />}
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
                      {errors.player2_home && <Error text={errors.player2_home.message} />}
                    </>
                  )
                )}
              </div>
            ) : null}
          </div>
          <div className='flex-1'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-medium'>
                  {double ? 'Jugadores' : 'Jugador'} {serie.away_name}
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
                    {errors.player1_away && <Error text={errors.player1_away.message} />}
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
                      {errors.player2_away && <Error text={errors.player2_away.message} />}
                    </>
                  )
                )}
              </div>
            ) : null}
          </div>
        </div>

        <div className='flex justify-between items-center gap-x-4'>
          <div className='flex-1 text-sm'>Estado del punto:</div>
          <div className='flex-1'>
            <select
              {...register('status')}
              className='select select-bordered w-full'
            >
              <option
                value='Finalizado'
                selected
              >
                🔥 Finalizado
              </option>
              <option value='W.O.'>🥲 W.O.</option>
            </select>
          </div>
        </div>

        <div className='flex justify-center'>
          {sending ? (
            <div className='mt-6'>
              <BeatLoader />
            </div>
          ) : (
            <Button>Guardar</Button>
          )}
        </div>

        <div className='text-secondary text-sm text-center'>
          <p>⚠️ El punto solo lo podrás guardar una vez, en caso de error, contactate con tu coordinador. </p>
        </div>
      </form>
    </div>
  )
}

export default Serie
