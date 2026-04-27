import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Buscador de Usuarios</h2>

      <Link to="/">Inicio</Link>
    </nav>
  );
}

export default Navbar;
