import { useEffect, useState } from 'react'
import { Bull } from './icons'

const ImageComponent = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return isLoading ? (
    <div className='h-full w-full flex items-center justify-center'>
      <div className='pulse'>
        <Bull />
      </div>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className='h-full w-full object-cover object-center'
    />
  )
}

export default ImageComponent
