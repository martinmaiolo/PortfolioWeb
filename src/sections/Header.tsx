export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed z-10 top-3 w-full">
      <nav className="bgBlur flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10">
        <a href="#" className="nav-item">
          Inicio
        </a>
        <a href="#" className="nav-item">
          Proyectos
        </a>
        <a href="#" className="nav-item">
          Sobre mi
        </a>
        <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70">
          Contacto
        </a>
      </nav>
    </div>
  );
};
