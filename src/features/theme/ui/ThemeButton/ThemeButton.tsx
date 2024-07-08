import { useTheme } from "@/app/providers/ThemeProvider";
import { themeIcons } from "@/shared/assets";
import styles from "./styles.module.css";

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <img
      className={styles.themeIcon}
      src={isDark ? themeIcons.light : themeIcons.dark}
      width={30}
      alt="theme"
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;
