const Header = ({ title, description = '', emoji = '' }) => {
  return (
    <header className='text-center flex flex-col px-6'>
      {emoji && <div className='text-2xl'>{emoji}</div>}
      <h1 className='font-bold text-primary whitespace-nowrap text-lg'>{title}</h1>
      <div className='font-medium text-sm'>{description}</div>
    </header>
  )
}

export default Header
