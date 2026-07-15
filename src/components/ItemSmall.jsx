import Image from './Image'

const TitleRow = ({ image, title }) => {
  return (
    <div className='flex items-center gap-x-3 overflow-x-auto text-base'>
      <div className='avatar'>
        <div className='w-10 rounded-full'>
          <Image
            src={image}
            alt={title}
          />
        </div>
      </div>
      <div>{title}</div>
    </div>
  )
}

export default TitleRow
