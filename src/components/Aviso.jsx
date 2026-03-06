import { Info, Alert } from '../lib/icons'

const Aviso = ({ text, alert }) => {
  return (
    <div className='text-secondary flex gap-x-1 mt-2 leading-tight text-sm'>
      <span className='text-primary'>{alert ? <Alert /> : <Info />}</span>
      <span> {text}</span>
    </div>
  )
}

export default Aviso
