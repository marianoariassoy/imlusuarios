import { Info } from '../lib/icons'

const Aviso = ({ text }) => {
  return (
    <div className='text-secondary items-center justify-center flex gap-x-2 mt-2 leading-tight text-sm'>
      <span className='text-primary'>
        <Info />
      </span>
      <span> {text}</span>
    </div>
  )
}

export default Aviso
