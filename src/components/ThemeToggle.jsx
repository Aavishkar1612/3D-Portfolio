import useTheme from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-white dark:text-black transition"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;