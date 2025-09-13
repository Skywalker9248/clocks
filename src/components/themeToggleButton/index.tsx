import styled from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
};

const Button = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  background: none;
  border: none;
  padding: 0;
`;

export default ThemeToggleButton;
