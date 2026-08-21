import Image from './Image'

const TitleRow = ({ image, title }) => {
  return (
    <div className='flex items-center gap-x-2 text-base'>
      <div className='avatar'>
        <div className='w-12 rounded-full'>
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
