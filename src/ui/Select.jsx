const Select = ({ options, register, title, selected }) => {
  return (
    <select
      className='select select-bordered w-full max-w-xs border-primary'
      {...register}
    >
      <option
        disabled
        value=''
      >
        {title}
      </option>
      {options.map((item, index) => {
        return (
          <option
            key={index}
            value={item}
            selected={selected == item}
          >
            {item}
          </option>
        )
      })}
    </select>
  )
}

export default Select
