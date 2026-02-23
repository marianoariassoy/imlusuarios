import { Info } from '../lib/icons'

const Aviso = ({ text }) => {
  return (
    <div className='text-secondary flex gap-x-2 mt-2 leading-tight'>
      <span className='text-primary mt-0'>
        <Info />
      </span>
      <span> {text}</span>
    </div>
  )
}

export default Aviso
