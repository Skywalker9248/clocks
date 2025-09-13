const DIGITS = {
  "0": [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  "1": [
    [0, 1, 0],
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  "2": [
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ],
  "3": [
    [1, 1, 1],
    [0, 0, 1],
    [0, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  "4": [
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
  ],
  "5": [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  "6": [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  "7": [
    [1, 1, 1],
    [0, 0, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  "8": [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  "9": [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  ":": [[0], [1], [0], [1], [0]],
};

// Seven-segment patterns for digits 0-9 and colon
const segmentPatterns: { [key: string]: boolean[] } = {
    '0': [true, true, true, true, true, true, false],   // a,b,c,d,e,f
    '1': [false, true, true, false, false, false, false], // b,c
    '2': [true, true, false, true, true, false, true],   // a,b,d,e,g
    '3': [true, true, true, true, false, false, true],   // a,b,c,d,g
    '4': [false, true, true, false, false, true, true],  // b,c,f,g
    '5': [true, false, true, true, false, true, true],   // a,c,d,f,g
    '6': [true, false, true, true, true, true, true],    // a,c,d,e,f,g
    '7': [true, true, true, false, false, false, false], // a,b,c
    '8': [true, true, true, true, true, true, true],     // a,b,c,d,e,f,g
    '9': [true, true, true, true, false, true, true],    // a,b,c,d,f,g
    ':': [false, false, false, false, false, false, false], // colon (handled separately)
  }

export { DIGITS, segmentPatterns };
