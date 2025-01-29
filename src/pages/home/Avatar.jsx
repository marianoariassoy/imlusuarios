import Image from '../../components/Image'

const Avatar = ({ data }) => {
  return (
    <header className='flex gap-3 items-center bg-base-200 p-5 rounded-lg shadow-lg'>
      <div className='avatar flex justify-center'>
        <div className='w-20 rounded-full'>
          <Image
            src={data.image}
            alt={data.name}
          />
        </div>
      </div>
      <div className='flex flex-col text-sm'>
        <h1 className='font-bold text-primary'>{data.name}</h1>
        {/* <h2 className=''>🙂</h2> */}
        <span>Edad: {data.age}</span>
        <span>Tel: {data.phone}</span>
      </div>
    </header>
  )
}

export default Avatar
