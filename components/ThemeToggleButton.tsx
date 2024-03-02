import { ThemeContext } from "@/utils/theme";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useContext, useState } from "react";

function ThemeToggleButton() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const { dispatch } = useContext(ThemeContext);
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newTheme: string
  ) => {
    setCurrentTheme(newTheme);
    dispatch({ type: newTheme });
  };

  return (
    <ToggleButtonGroup
      color="secondary"
      value={currentTheme}
      exclusive
      onChange={handleChange}
      aria-label="theme-color"
    >
      <ToggleButton value="light" style={{backgroundColor:'white',color:'black'}}>Light</ToggleButton>
      <ToggleButton value="dark" style={{backgroundColor:'black',color:'white'}}>Dark</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ThemeToggleButton;
