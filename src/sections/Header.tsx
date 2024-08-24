export const Header = () => {
  return (
    <div className="flex justify-center items-center sticky mt-3">
      <nav className="bgBlur flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          Projects
        </a>
        <a href="#" className="nav-item">
          About
        </a>
        <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70">
          Contact
        </a>
      </nav>
    </div>
  );
};
