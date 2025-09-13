import { useEffect, useState } from 'react'

export const useClock = () => {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const format = (date: Date) => date.toLocaleTimeString('en-GB') // HH:mm:ss

  return format(time)
}
