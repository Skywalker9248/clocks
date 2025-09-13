import { styled } from 'styled-components';
import { useClock } from '../../hooks/useClocks';
import { DIGITS } from './utils';

function DotMatrixDigit({ digit }: { digit: string }) {
  const matrix = DIGITS[digit as keyof typeof DIGITS];

  return (
    <DigitContainer>
      {matrix.map((row, rowIndex) => (
        <DotRow key={rowIndex}>
          {row.map((dot, colIndex) => (
            <Dot
              key={colIndex}
              $isOn={!!dot}
            />
          ))}
        </DotRow>
      ))}
    </DigitContainer>
  );
}

function DotMatrixClock() {
  const time = useClock()

  return (
    <DotMatrixContainer>
      {time.split('').map((char, index) => (
        <DotMatrixDigit key={index} digit={char} />
      ))}
    </DotMatrixContainer>
  );
}

const DotMatrixContainer = styled.div`
  display: flex;
  gap: clamp(8px, 1.5vw, 20px);
  justify-content: center;
  align-items: center;
  padding: clamp(12px, 2vw, 24px);
  background: black;
  border-radius: 12px;
  width: 100%;
  max-width: 95vw;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    gap: clamp(6px, 2vw, 12px);
    padding: clamp(8px, 2vw, 16px);
    max-width: 98vw;
  }
  
  @media (max-width: 480px) {
    gap: clamp(4px, 1.5vw, 8px);
    padding: clamp(6px, 1.5vw, 12px);
    max-width: 100vw;
    border-radius: 8px;
  }
`;

const DigitContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(2px, 0.3vw, 4px);
  
  @media (max-width: 480px) {
    gap: clamp(1px, 0.2vw, 3px);
  }
`;

const DotRow = styled.div`
  display: flex;
  gap: clamp(2px, 0.3vw, 4px);
  
  @media (max-width: 480px) {
    gap: clamp(1px, 0.2vw, 3px);
  }
`;

const Dot = styled.div<{ $isOn: boolean }>`
  width: clamp(14px, 3vw, 28px);
  height: clamp(14px, 3vw, 28px);
  border-radius: 50%;
  background-color: ${({ $isOn }) => 
    $isOn ? '#00ff88' : 'rgba(255, 255, 255, 0.15)'
  };
  box-shadow: ${({ $isOn }) => 
    $isOn 
      ? '0 0 clamp(6px, 1.2vw, 12px) #00ff88, inset 0 1px 0 rgba(255, 255, 255, 0.4)' 
      : 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
  };
  transition: all 0.15s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    width: clamp(10px, 4vw, 18px);
    height: clamp(10px, 4vw, 18px);
    
    &:hover {
      transform: scale(1.02);
    }
  }
  
  @media (max-width: 480px) {
    width: clamp(8px, 5vw, 14px);
    height: clamp(8px, 5vw, 14px);
    box-shadow: ${({ $isOn }) => 
      $isOn 
        ? '0 0 clamp(4px, 1vw, 8px) #00ff88, inset 0 1px 0 rgba(255, 255, 255, 0.3)' 
        : 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
    };
    
    &:hover {
      transform: none;
    }
  }
  
  @media (max-width: 360px) {
    width: clamp(6px, 6vw, 12px);
    height: clamp(6px, 6vw, 12px);
  }
`;

export default DotMatrixClock;
