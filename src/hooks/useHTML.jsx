const useHTML = ({ text }) => {
  return (
    <div
      className='text-balance'
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default useHTML
