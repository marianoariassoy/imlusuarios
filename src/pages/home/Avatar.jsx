import Image from '../../components/Image'

const Avatar = ({ data }) => {
  return (
    <header className='flex flex-col gap-y-2 items-center'>
      <div className='avatar flex justify-center'>
        <div className='w-20 rounded-full'>
          <Image
            src={data.image}
            alt={data.name}
          />
        </div>
      </div>
      <div className='text-center'>
        <h1 className='font-bold text-base text-primary'>¡Hola {data.name}!</h1>
        <h2 className='text-xl'>🙂</h2>
      </div>
    </header>
  )
}

export default Avatar
