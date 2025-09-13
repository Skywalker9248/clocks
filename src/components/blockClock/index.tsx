import styled from "styled-components";
import { useClock } from "../../hooks/useClocks"; // Your existing hook
import { digitMap } from "./utils";
import { useState } from "react";


const getDigitIndex = (value: string, type: string): number =>
  digitMap[type].indexOf(value);

interface BlockDigitProps {
  value: string;
  type: string;
}

const BlockDigit = ({ value, type, showHiddenList }: BlockDigitProps & { showHiddenList: boolean }) => {
  const index = getDigitIndex(value, type);
  const digits = digitMap[type];

  return (
    <DigitColumn showHiddenList={showHiddenList}>
      <DigitList index={index}>
        {digits.map((d: string, i: number) => (
          <DigitBlock key={i}>{d}</DigitBlock>
        ))}
      </DigitList>
    </DigitColumn>
  );
};

const BlockClock = () => {
  const time = useClock(); // returns hh:mm:ss
  const [showHiddenList, setShowHiddenList] = useState(false);

  const [hh, mm, ss] = time.split(":");
  const [h1, h2] = hh.padStart(2, "0");
  const [m1, m2] = mm.padStart(2, "0");
  const [s1, s2] = ss.padStart(2, "0");

  const toggleListVisibilty = () => {
    setShowHiddenList(!showHiddenList);
  };

  return (
    <>
      <ShowListButton onClick={toggleListVisibilty}>
        {showHiddenList ? "Hide" : "Take a Peak"}
      </ShowListButton>
      <ClockWrapper>
        <BlockDigit value={h1} type="h1" showHiddenList={showHiddenList} />
        <BlockDigit value={h2} type="h2" showHiddenList={showHiddenList} />
        <Colon>:</Colon>
        <BlockDigit value={m1} type="m1" showHiddenList={showHiddenList} />
        <BlockDigit value={m2} type="m2" showHiddenList={showHiddenList} />
        <Colon>:</Colon>
        <BlockDigit value={s1} type="s1" showHiddenList={showHiddenList} />
        <BlockDigit value={s2} type="s2" showHiddenList={showHiddenList} />
      </ClockWrapper>
    </>
  );
};

const ShowListButton = styled.button`
  margin: 20px 20px 0;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  background: ${({ theme }) => theme.button};
  color: white;
  border: none;
  border-radius: 12px; /* rounded edges */
  font-weight: 500;

  /* subtle shadow for depth */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

  /* smooth hover transition */
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px); /* slight lift */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.97); /* click feedback */
  }
`;


const ClockWrapper = styled.div`
  display: flex;
  gap: 8px;
  background: #111;
  padding: 20px;
  border-radius: 10px;
  color: white;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const DigitColumn = styled.div<{ showHiddenList?: boolean }>`
  height: ${({ showHiddenList }) => (showHiddenList ? "350px" : "50px")};
  overflow: hidden;
  width: 30px;
  position: relative;
`;

const DigitList = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  transform: ${({ index }) => `translateY(-${index * 50}px)`};
`;

const DigitBlock = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-family: monospace;
`;

const Colon = styled.div`
  font-size: 32px;
  line-height: 50px;
`;

export default BlockClock;
