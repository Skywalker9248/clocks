import styled from "styled-components";
import { useClock } from "../../hooks/useClocks";

const DefaultClock = () => {
  const time = useClock();
  return <TextClock>{time}</TextClock>;
};

const TextClock = styled.div`
  font-size: 5rem;
  font-family: monospace;
  color: ${({ theme }) => theme.text};
`;

export default DefaultClock;
