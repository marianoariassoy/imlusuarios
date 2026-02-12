const Header = ({ title, description = '', emoji = '' }) => {
  return (
    <header className='flex flex-col text-center'>
      {emoji && <div className='text-2xl'>{emoji}</div>}
      <h1 className='font-bold text-primary text-xl'>{title}</h1>
      <div className='text-base'>{description}</div>
    </header>
  )
}

export default Header
