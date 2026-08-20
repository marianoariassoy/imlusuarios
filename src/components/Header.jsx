const Header = ({ title, description = '', emoji = '' }) => {
  return (
    <header className='flex flex-col text-center text-base'>
      {emoji && <div className='text-3xl'>{emoji}</div>}
      <h1 className='font-bold text-primary text-xl'>{title}</h1>
      <p>{description}</p>
    </header>
  )
}

export default Header
