import { useState } from "react";
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
      <div>
        <select
          onChange={(e) =>
            handleClockTypeChange(
              e.target.value as "default" | "sevenSegment" | "dotMatrix"
            )
          }
        >
          <option value="default">Default</option>
          <option value="sevenSegment">Seven Segment</option>
          <option value="dotMatrix">Dot Matrix</option>
        </select>
      </div>
      {showCurrentClock()}
    </>
  );
};

export default DigitalClock;
