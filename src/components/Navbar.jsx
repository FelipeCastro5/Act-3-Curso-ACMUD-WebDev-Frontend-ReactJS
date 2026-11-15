import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
  const { tema, toggleTema } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Inicio
        </NavLink>
        <NavLink to="/productos" className={({ isActive }) => (isActive ? 'active' : '')}>
          Productos
        </NavLink>
        <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contacto
        </NavLink>
      </div>

      <button className="btn-tema" onClick={toggleTema}>
        Modo: {tema === 'light' ? 'Claro ☀️' : 'Oscuro 🌙'}
      </button>
    </nav>
  );
}

export default Navbar;
