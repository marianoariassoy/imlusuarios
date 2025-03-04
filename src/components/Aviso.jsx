import { Info } from '../lib/icons'

const Aviso = ({ text }) => {
  return (
    <div className='text-secondary text-sm flex gap-x-2'>
      <span className='text-primary mt-1'>
        <Info />
      </span>
      <span> {text}</span>
    </div>
  )
}

export default Aviso
