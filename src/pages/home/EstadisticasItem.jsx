import Counter from './Counter'

const EstadisticasItem = ({ item }) => {
  return (
    <article className='flex flex-col'>
      <div className='text-secondary text-sm'>{item.title}</div>
      <div className='flex items-center justify-between'>
        <div className='font-semibold text-primary text-2xl'>
          <Counter finalNumber={item.number} />
        </div>
      </div>
    </article>
  )
}

export default EstadisticasItem
