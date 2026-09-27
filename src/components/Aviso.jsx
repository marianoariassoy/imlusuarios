import { Info, Alert } from '../lib/icons'

const Aviso = ({ text, alert }) => {
  return (
    <div className='text-secondary flex items-center gap-x-2 mt-2 leading-tight'>
      <span className='text-primary shrink-0 text-lg'>{alert ? <Alert /> : <Info />}</span>
      <span>{text}</span>
    </div>
  )
}

export default Aviso
