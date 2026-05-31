import './Navbar.css';
import { useState } from 'react';
import logo from '../../assets/Linea.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menuAbierto, setMenuAbierto] = useState(false);

  return (

    <nav className="navbar">

      <HashLink
        smooth
        to="/#inicio"
      >
        <img
          className="logo"
          src={logo}
          alt="Línea Cósmica"
        />
      </HashLink>

      <ul className={menuAbierto ? "nav-links active" : "nav-links"}>

        <HashLink
          smooth
          to="/#inicio"
          onClick={() => setMenuAbierto(false)}
        >
          <h4>Inicio</h4>
        </HashLink>

        <HashLink
          smooth
          to="/#ropa"
          onClick={() => setMenuAbierto(false)}
        >
          <h4>Ropa</h4>
        </HashLink>

        <HashLink
          smooth
          to="/#accesorios"
          onClick={() => setMenuAbierto(false)}
        >
          <h4>Accesorios</h4>
        </HashLink>

        <HashLink
          smooth
          to="/#electrodomesticos"
          onClick={() => setMenuAbierto(false)}
        >
          <h4>Electrodomésticos</h4>
        </HashLink>

        <HashLink
          smooth
          to="/#contacto"
          onClick={() => setMenuAbierto(false)}
        >
          <h4>Contacto</h4>
        </HashLink>

        <Link to="/carrito">
          Carrito
        </Link>

      </ul>

      <div
        className="hamburguesa"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? <FaTimes /> : <FaBars />}
      </div>

    </nav>

  );
};

export default Navbar;