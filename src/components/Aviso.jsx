import { Info } from '../lib/icons'

const Aviso = ({ text }) => {
  return (
    <div className='text-secondary items-center justify-center flex gap-x-3 mt-2 leading-tight'>
      <span className='text-primary'>
        <Info />
      </span>
      <span> {text}</span>
    </div>
  )
}

export default Aviso
