import Counter from './Counter'

const EstadisticasItem = ({ item }) => {
  return (
    <article className='flex flex-col'>
      <div className='opacity-70'>{item.title}</div>
      <div className='flex items-center justify-between'>
        <div className='font-black text-primary text-3xl'>
          <Counter finalNumber={item.number} />
        </div>
        <div className='text-primary'>{item.icon}</div>
      </div>
    </article>
  )
}

export default EstadisticasItem
