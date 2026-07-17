import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Loader from '../../components/Loader'
import { Input, Button } from '../../ui'
import { texts } from '../../lib/data'
import Validation from '../../components/Validation'
import Messages from '../../components/Messages'
import Header from '../../components/Header'
import toast, { Toaster } from 'react-hot-toast'

const index = () => {
  const [sending, setSending] = useState(false)
  const [sended, setSended] = useState(false)
  const [error, setError] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    if (error) {
      toast.error(error, { position: 'bottom-right', className: 'text-sm bg-primary text-white', duration: 4000 })
    }
  }, [error])

  const onSubmit = async data => {
    setSending(true)
    try {
      const response = await axios.post('https://api.imltenis.com.ar/users/forgotpassword', data)
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
    <section className='w-full max-w-md m-auto '>
      <div className='flex flex-col gap-y-6'>
        {!sended ? (
          <Header
            title='Recuperar contraseña'
            description='Ingresá tu email y te enviaremos un enlace para restablecer tu contraseña 😉'
          />
        ) : (
          <Messages text='Se envio un enlace a tu correo para restablecer tu contraseña 👍' />
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={sended ? 'hidden' : ''}
        >
          <div className='form-control'>
            <Input
              type='email'
              title='Email'
              placeholder='Ingrea tu email'
              register={register('email', {
                required: texts.required,
                maxLength: 50,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Dirección de correo electrónico inválida'
                }
              })}
            />
            {errors.email && <Validation text={errors.email.message} />}
          </div>
          <div className='form-control mt-6 flex items-center justify-center'>
            {sending ? (
              <div className='mt-6'>
                <Loader />
              </div>
            ) : (
              <Button>Enviar</Button>
            )}
          </div>
        </form>
      </div>

      <Toaster />
    </section>
  )
}

export default index
