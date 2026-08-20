const ButtonForm = ({ children }) => {
  return (
    <button className='w-full border-none bg-white/5 h-12 rounded-lg hover:bg-white/10 transition-all font-medium'>
      {children}
    </button>
  )
}

export default ButtonForm
