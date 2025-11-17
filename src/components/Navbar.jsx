export default function Navbar({ theme, setTheme }) {
  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 my-4">
      <h1 className="dark:text-white text-black font-extrabold text-4xl">Galaxy<span className="italic text-primary font-bold">tech</span></h1>
    </div>
  );
}
// things to look for
//backdrop blur in tailwind css
