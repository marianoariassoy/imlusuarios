import { useState, useEffect } from 'react'

const Counter = ({ finalNumber }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const incrementCounter = () => {
      if (count < finalNumber) {
        setCount(prevCount => prevCount + 1)
      }
    }

    const interval = setInterval(incrementCounter, 100)

    return () => {
      clearInterval(interval)
    }
  }, [count, finalNumber])

  return <span>{count}</span>
}

export default Counter
