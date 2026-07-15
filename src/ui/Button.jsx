const ButtonForm = ({ children }) => {
  return (
    <button className='w-full max-w-md border-none bg-white/5 h-12 rounded-lg hover:bg-white/10 transition-all'>
      {children}
    </button>
  )
}

export default ButtonForm
