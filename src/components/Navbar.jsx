export default function Navbar({ theme, setTheme }) {
  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      <h1 color={theme === "dark" ? "#fff" : "#000"}>Galaxy-Tech</h1>
    </div>
  );
}
// things to look for
//backdrop blur in tailwind css
