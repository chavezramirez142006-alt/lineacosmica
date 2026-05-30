import './Accesorios.css';
import { Link } from 'react-router-dom';
import { accesorios } from '../../Data/AccesoriosD';

const Accesorios = () => {

  return (

    <section
      id="accesorios"
      className="accesorios"
    >

      <h1>ACCESORIOS</h1>

      <div className="contenedor-productos">

        {accesorios.map((producto) => (

          <Link
            to={`/producto/${producto.id}`}
            className="card-link"
            key={producto.id}
          >

            <div className="card-producto">

              <img
                src={producto.imagen}
                alt={producto.nombre}
              />

              <div className="info-producto">

                <h2>{producto.nombre}</h2>

                <p className="precio">
                  {producto.precio}
                </p>

                <button className="btn-carrito">
                  Agregar Carrito
                </button>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );

};

export default Accesorios;