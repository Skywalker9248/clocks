import styled from 'styled-components'
import { useClock } from '../../hooks/useClocks'

const TextClock = styled.div`
  font-size: 3rem;
  font-family: monospace;
  color: ${({ theme }) => theme.text};
`

const DefaultClock = () => {
  const time = useClock()
  return <TextClock>{time}</TextClock>
}

export default DefaultClock
