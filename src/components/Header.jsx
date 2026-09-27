const Header = ({ title, description = '', emoji = '' }) => {
  return (
    <header className='flex flex-col text-center text-base'>
      {emoji && <div className='text-2xl'>{emoji}</div>}
      <h1 className='font-bold text-primary text-lg'>{title}</h1>
      <p className='text-secondary'>{description}</p>
    </header>
  )
}

export default Header
