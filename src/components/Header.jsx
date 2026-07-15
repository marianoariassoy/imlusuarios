const Header = ({ title, description = '', emoji = '' }) => {
  return (
    <header className='flex flex-col gap-y-1 text-center'>
      {emoji && <div className='text-3xl'>{emoji}</div>}
      <h1 className='font-bold text-primary text-xl'>{title}</h1>
      <div className='text-base'>{description}</div>
    </header>
  )
}

export default Header
