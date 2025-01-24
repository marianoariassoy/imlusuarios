import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { BeatLoader } from 'react-spinners'
import { Helmet } from 'react-helmet'
import { Input, Button } from '../../ui'
import { texts } from '../../components/data'
import Error from './Error'
import Messages from './Messages'

const index = () => {
  const [sending, setSending] = useState(false)
  const [sended, setSended] = useState(false)
  const [error, setError] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    setSending(true)
    try {
      const response = await axios.post('https://imltenis.com.ar/api/users/forgotpassword', data)
      if (response.data.success) {
        setSended(true)
        setSending(false)
        setError(null)
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
    <section>
      <div className='flex flex-col gap-y-6'>
        {!sended ? (
          <div className='text-center text-sm px-12 text-primary font-medium'>
            Ingresá tu email y te enviaremos un enlace para restablecer tu contraseña 😉
          </div>
        ) : (
          <Messages text='Se envio un enlace a tu correo para restablecer tu contraseña 👍' />
        )}

        <div className='w-full max-w-md m-auto'>
          {error && <Messages text={error} />}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={sended ? 'hidden' : ''}
          >
            <div className='form-control'>
              <Input
                type='email'
                title='Email'
                placeholder='email'
                register={register('email', {
                  required: texts.required,
                  maxLength: 50,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Dirección de correo electrónico inválida'
                  }
                })}
              />
              {errors.email && <Error text={errors.email.message} />}
            </div>
            <div className='form-control mt-6 flex items-center justify-center'>
              {sending ? (
                <div className='mt-6'>
                  <BeatLoader />
                </div>
              ) : (
                <Button>Enviar</Button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Helmet>
        <title>IML Tenis Recupero de contraseña</title>
      </Helmet>
    </section>
  )
}

export default index
