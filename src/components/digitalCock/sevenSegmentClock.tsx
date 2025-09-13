import styled from "styled-components";
import { useClock } from "../../hooks/useClocks";
import { segmentPatterns } from "./utils";

const SevenSegmentClock = () => {
  const time = useClock();

  return (
    <SegmentContainer>
      {[...time].map((char, i) => (
        <SevenSegmentDigit key={i} char={char} />
      ))}
    </SegmentContainer>
  );
};

const SevenSegmentDigit = ({ char }: { char: string }) => {
  if (char === ":") {
    return <Colon />;
  }

  const segments = segmentPatterns[char] || segmentPatterns["0"];

  return (
    <DigitContainer>
      <Segment className="segment-a" $active={segments[0]} />
      <Segment className="segment-b" $active={segments[1]} />
      <Segment className="segment-c" $active={segments[2]} />
      <Segment className="segment-d" $active={segments[3]} />
      <Segment className="segment-e" $active={segments[4]} />
      <Segment className="segment-f" $active={segments[5]} />
      <Segment className="segment-g" $active={segments[6]} />
    </DigitContainer>
  );
};

const Colon = () => (
  <ColonContainer>
    <ColonDot />
    <ColonDot />
  </ColonContainer>
);

const SegmentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #000;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px #e60000;
`;

const DigitContainer = styled.div`
  position: relative;
  width: 60px;
  height: 100px;
  margin: 0 5px;
`;

const Segment = styled.div<{ $active: boolean }>`
  position: absolute;
  background-color: ${(props) => (props.$active ? "#e60000" : "#333")};
  box-shadow: ${(props) => (props.$active ? "0 0 10px #ff0000" : "none")};
  transition: all 0.1s ease;

  /* Horizontal segments */
  &.segment-a {
    top: 0;
    left: 10px;
    width: 40px;
    height: 8px;
    border-radius: 4px;
  }

  &.segment-g {
    top: 46px;
    left: 10px;
    width: 40px;
    height: 8px;
    border-radius: 4px;
  }

  &.segment-d {
    bottom: 0;
    left: 10px;
    width: 40px;
    height: 8px;
    border-radius: 4px;
  }

  /* Vertical segments */
  &.segment-b {
    top: 8px;
    right: 0;
    width: 8px;
    height: 40px;
    border-radius: 4px;
  }

  &.segment-c {
    bottom: 8px;
    right: 0;
    width: 8px;
    height: 40px;
    border-radius: 4px;
  }

  &.segment-e {
    bottom: 8px;
    left: 0;
    width: 8px;
    height: 40px;
    border-radius: 4px;
  }

  &.segment-f {
    top: 8px;
    left: 0;
    width: 8px;
    height: 40px;
    border-radius: 4px;
  }
`;

const ColonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100px;
  margin: 0 10px;
`;

const ColonDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #e60000;
  border-radius: 50%;
  box-shadow: 0 0 10px #ff0000;
`;

export default SevenSegmentClock;
