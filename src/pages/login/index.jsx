import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { BeatLoader } from 'react-spinners'
import { Input, Button } from '../../ui'
import { texts } from '../../components/data'
import { useAuth } from '../../context'
import Error from '../../components/Error'
import Messages from '../../components/Messages'
import Header from '../../components/Header'

const index = () => {
  const { login } = useAuth()
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    setSending(true)
    try {
      const response = await axios.post('https://imltenis.com.ar/api/users/login', data)
      if (response.data.success) {
        const token = response.data.token
        login(token)
        navigate('/home')
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
        <Header
          title='¡Hola! 👋'
          description='Ingresa tus datos para acceder a tu cuenta'
        />

        <div className='w-full max-w-md m-auto'>
          {error && <Messages text={error} />}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control'>
              <Input
                type='email'
                title='Email'
                placeholder='Ingresa tu email'
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
            <div className='form-control'>
              <Input
                type='password'
                title='Contraseña'
                placeholder='Ingresa tu contraseña'
                register={register('password', {
                  required: texts.required,
                  validate: value => value.length > 4 || 'La longitud debe ser mayor a 4 caracteres'
                })}
              />
              {errors.password && <Error text={errors.password.message} />}
            </div>
            <div className='mt-2'>
              <Link
                to='/recuperar-password'
                className='hover:text-primary text-sm'
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <div className='form-control mt-6 flex items-center justify-center'>
              {sending ? (
                <div className='mt-6'>
                  <BeatLoader />
                </div>
              ) : (
                <Button>Ingresar</Button>
              )}
            </div>
          </form>
        </div>
        <div className='text-center'>
          <a
            href='https://imltenis.com.ar/bienvenido'
            className='hover:text-primary text-secondary text-sm'
            target='_blank'
            rel='noopener noreferrer'
          >
            👉 Si no estas registrado hacé clic acá
          </a>
        </div>
      </div>
      <Helmet>
        <title>IML Tenis Login</title>
      </Helmet>
    </section>
  )
}

export default index
