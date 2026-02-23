const Input = ({ type, title, placeholder, register }) => {
  return (
    <div>
      <label className='label'>
        <span className='label-text text-primary font-medium'>{title}</span>
      </label>
      <input
        type={type}
        className='w-full input input-bordered border-primary'
        placeholder={placeholder}
        {...register}
      />
    </div>
  )
}

export default Input
