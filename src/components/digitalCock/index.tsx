import { useState } from "react";
import styled from "styled-components";
import SevenSegmentClock from "./sevenSegmentClock";
import DefaultClock from "./digitalClock";
import DotMatrixClock from "./dotMatrixClock";

const DigitalClock = () => {
  const [clockType, setClockType] = useState<
    "default" | "sevenSegment" | "dotMatrix"
  >("default");
  const handleClockTypeChange = (
    type: "default" | "sevenSegment" | "dotMatrix"
  ) => {
    setClockType(type);
  };
  const showCurrentClock = () => {
    switch (clockType) {
      case "default":
        return <DefaultClock />;
      case "sevenSegment":
        return <SevenSegmentClock />;
      case "dotMatrix":
        return <DotMatrixClock />;
    }
  };
  return (
    <>
      <DropdownContainer>
        <StyledSelect
          value={clockType}
          onChange={(e) =>
            handleClockTypeChange(
              e.target.value as "default" | "sevenSegment" | "dotMatrix"
            )
          }
        >
          <StyledOption value="default">Default</StyledOption>
          <StyledOption value="sevenSegment">Seven Segment</StyledOption>
          <StyledOption value="dotMatrix">Dot Matrix</StyledOption>
        </StyledSelect>
      </DropdownContainer>
      {showCurrentClock()}
    </>
  );
};

const DropdownContainer = styled.div`
  margin-top: 2rem;
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
  max-width: 300px;
`;

const StyledSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  padding: 12px 40px 12px 16px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.tabBorder || '#333'};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    border-color: #e60000;
    box-shadow: 0 4px 20px rgba(230, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    border-color: #e60000;
    box-shadow: 0 0 0 3px rgba(230, 0, 0, 0.1), 0 4px 20px rgba(230, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 35px 10px 14px;
  }
`;

const StyledOption = styled.option`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 8px 12px;
  font-size: 16px;

  &:hover {
    background-color: #e60000;
  }

  &:checked {
    background-color: #e60000;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px 10px;
  }
`;

export default DigitalClock;
