import { useEffect, useState } from 'react'
import { Button } from '../../ui'
import toast, { Toaster } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { BeatLoader } from 'react-spinners'
import Messages from '../../components/Messages'
import axios from 'axios'
import RatingLabel from './RatingLabel'

const SurveyForm = ({ id_captain, id_serie }) => {
  const [sending, setSending] = useState(false)
  const [sended, setSended] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'bottom-right',
        className: 'text-sm bg-primary text-white z-[1090]',
        duration: 4000
      })
    }
  }, [error])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    setSending(true)
    setSended(null)
    const URL = `https://api.imltenis.com.ar/surveys/${id_serie}/${id_captain}`
    try {
      const response = await axios.post(URL, data)
      if (response.data.success) {
        setSended(true)
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

  const experienceValue = watch('experience')
  const predispositionValue = watch('predisposition')

  if (sended) return <Messages text='Muchas gracias por compartir tus opiniones y comentarios 🙏🏻' />

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-y-3'
      >
        <div className='flex flex-col gap-y-4'>
          <article className='px-4 py-6 bg-black/15 rounded-2xl shadow-lg'>
            <h2 className='font-semibold text-center leading-snug text-primary'>
              ¿Cómo fue tu experiencia general con el equipo rival? 👌🏻
            </h2>
            <p className='text-secondary text-center leading-snug'>
              Tu respuesta nos permite evaluar el clima deportivo de cada fecha.
            </p>
            <div className='rating mt-2 flex justify-center gap-x-1'>
              <input
                type='radio'
                className='rating-hidden'
                aria-label='clear'
                defaultChecked
                value='0'
                {...register('experience')}
              />
              <input
                type='radio'
                className='mask mask-star bg-primary'
                aria-label='1 star'
                value='1'
                {...register('experience')}
              />
              <input
                type='radio'
                className='mask mask-star bg-primary'
                aria-label='2 star'
                value='2'
                {...register('experience')}
              />
              <input
                type='radio'
                className='mask mask-star bg-primary'
                aria-label='3 star'
                value='3'
                {...register('experience')}
              />
              <input
                type='radio'
                className='mask mask-star bg-primary'
                aria-label='4 star'
                value='4'
                {...register('experience')}
              />
              <input
                type='radio'
                className='mask mask-star bg-primary'
                aria-label='5 star'
                value='5'
                {...register('experience')}
              />
            </div>
            <RatingLabel value={experienceValue} />
          </article>
          <article className='px-4 py-6 bg-black/15 rounded-2xl shadow-lg'>
            <h2 className='font-semibold text-center leading-snug text-primary'>
              ¿Cómo fue la predisposición y la camaradería del capitán rival? 🤝
            </h2>
            <p className='text-secondary text-center leading-snug'>
              Tu mirada nos ayuda a reconocer las buenas conductas y a seguir fomentando un clima de respeto y
              compañerismo.
            </p>
            <div className='rating mt-2 flex justify-center gap-x-1'>
              <input
                type='radio'
                className='rating-hidden'
                aria-label='clear'
                defaultChecked
                value='0'
                {...register('predisposition')}
              />
              <input
                type='radio'
                className='mask mask-star bg-primary'
                aria-label='1 star'
                value='1'
                {...register('predisposition')}
              />
              <input
                type='radio'
                className='mask mask-star bg-primary'
                aria-label='2 star'
                value='2'
                {...register('predisposition')}
              />
              <input
                type='radio'
                className='mask mask-star bg-primary'
                aria-label='3 star'
                value='3'
                {...register('predisposition')}
              />
              <input
                type='radio'
                className='mask mask-star bg-primary'
                aria-label='4 star'
                value='4'
                {...register('predisposition')}
              />
              <input
                type='radio'
                className='mask mask-star bg-primary'
                aria-label='5 star'
                value='5'
                {...register('predisposition')}
              />
            </div>
            <RatingLabel value={predispositionValue} />
          </article>
          <article className='px-4 py-6 bg-black/15 rounded-2xl shadow-lg'>
            <h2 className='font-semibold text-center leading-snug text-primary'>
              ¿Considerás otorgarle un punto Fair Play a tu rival? 🏅
            </h2>
            <p className='text-secondary text-center leading-snug'>
              Reconocer los buenos gestos, el respeto y la buena predisposición ayuda a fortalecer el espíritu deportivo
              y hace que la competencia sea cada vez mejor para todos.
            </p>
            <div className='mt-2 flex gap-x-2 justify-center'>
              <label>No</label>
              <input
                type='radio'
                className='radio radio-secondary'
                defaultChecked
                value='0'
                {...register('fppoints')}
              />
              <label>Si</label>
              <input
                type='radio'
                className='radio radio-primary'
                value='1'
                {...register('fppoints')}
              />
            </div>
          </article>
          <article className='px-4 py-6 bg-black/15 rounded-2xl shadow-lg'>
            <h2 className='font-semibold text-center leading-snug text-primary'>¿Compartieron un Tercer tiempo? 🍻</h2>
            <p className='text-secondary text-center leading-snug'>
              Este momento fuera de la cancha fortalece los vínculos entre equipos, promueve el respeto y suma al
              espíritu de camaradería que queremos para los equipos.
            </p>
            <div className='mt-2 flex gap-x-2 justify-center'>
              <label>No</label>
              <input
                type='radio'
                className='radio radio-secondary'
                defaultChecked
                value='0'
                {...register('thirdtime')}
              />
              <label>Si</label>
              <input
                type='radio'
                className='radio radio-primary'
                value='1'
                {...register('thirdtime')}
              />
            </div>
          </article>
          <article className='px-4 py-6 bg-black/15 rounded-2xl shadow-lg'>
            <h2 className='font-semibold text-center text-primary'>Dejanos el comentario que quieras. ✍🏻</h2>
            <p className='text-secondary text-center leading-snug'>
              Podés aprovechar este espacio para compartir sugerencias, observaciones o también para dejar comentarios
              lindos sobre la experiencia vivida.
            </p>
            <textarea
              rows='4'
              className='mt-4 w-full rounded-xl bg-white/10 p-2 text-sm outline-none'
              {...register('comments')}
            ></textarea>
          </article>
        </div>

        {!sended ? (
          <div className='flex justify-center'>
            {sending ? (
              <div className='mt-6'>
                <BeatLoader />
              </div>
            ) : (
              <Button>Enviar encuesta</Button>
            )}
          </div>
        ) : null}
      </form>
      <Toaster />
    </>
  )
}

export default SurveyForm
