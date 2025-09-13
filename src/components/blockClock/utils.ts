const digitMap: Record<string, string[]> = {
  h1: ["0", "1", "2"],
  h2: [...Array(10).keys()].map(String),
  m1: ["0", "1", "2", "3", "4", "5"],
  m2: [...Array(10).keys()].map(String),
  s1: ["0", "1", "2", "3", "4", "5"],
  s2: [...Array(10).keys()].map(String),
};

export { digitMap };
