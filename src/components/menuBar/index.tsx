import { Navbar } from "react-bootstrap";
import ThemeToggleButton from "../themeToggleButton";
import styled from "styled-components";
import { useTheme } from "../../hooks/useTheme";

const MenuBar = () => {
  const { theme } = useTheme();
  return (
    <Navbar bg={theme === "light" ? "primary" : "dark"} className="d-flex px-3 justify-content-between">
      <BrandName>Clockworks</BrandName>
      <ThemeToggleButton />
    </Navbar>
  );
}

const BrandName = styled.div`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export default MenuBar;