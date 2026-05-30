import './Electrodomesticos.css';
import { Link } from 'react-router-dom';
import { electrodomesticos } from '../../Data/ElectrodomesticosD';

const Electrodomesticos = () => {

  return (

    <section
      id="electrodomesticos"
      className="electrodomesticos"
    >

      <h1>ELECTRODOMESTICOS</h1>

      <div className="contenedor-productos">

        {electrodomesticos.map((producto) => (

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

export default Electrodomesticos;