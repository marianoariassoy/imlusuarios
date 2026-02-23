const getRatingLabel = value => {
  switch (value) {
    case 1:
      return 'Muy mala 😢'
    case 2:
      return 'Regular 😔'
    case 3:
      return 'Buena 👍🏻'
    case 4:
      return 'Muy buena 💪🏻'
    case 5:
      return 'Excelente 🫶🏻'
    default:
      return ''
  }
}

const RatingLabel = ({ value }) => {
  const numericValue = Number(value)

  if (!numericValue) return null

  return <p className={`text-center text-sm mt-3 font-medium text-secondary`}>{getRatingLabel(numericValue)}</p>
}

export default RatingLabel
