import { useTheme } from "../context/useTheme";

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Switch to {theme === "light" ? "Dark" : "Light"} Theme</button>;
}
