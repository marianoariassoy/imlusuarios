const Input = ({ type, title, placeholder, register }) => {
  return (
    <div>
      <label className='label'>
        <span className='label-text text-primary font-medium text-base'>{title}</span>
      </label>
      <input
        type={type}
        className='w-full input input-bordered border-primary text-sm'
        placeholder={placeholder}
        {...register}
      />
    </div>
  )
}

export default Input
