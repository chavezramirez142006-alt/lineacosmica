import './Hero.css';

import { useState } from 'react';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import caja from '../../assets/caja.png';
import producto1 from '../../assets/producto1.jpeg';
import producto2 from '../../assets/producto2.jpg';
import bufanda from '../../assets/bufanda.webp';

const Hero = () => {

  const imagenes = [
    producto1,
    producto2,
    bufanda
  ];

  const [indice, setIndice] = useState(0);

  const siguiente = () => {

    setIndice((prev) =>
      prev === imagenes.length - 1 ? 0 : prev + 1
    );

  };

  const anterior = () => {

    setIndice((prev) =>
      prev === 0 ? imagenes.length - 1 : prev - 1
    );

  };

  return (

    <section id="inicio" className="hero">

      {/* TEXTO IZQUIERDA */}

      <div className="hero-texto">

        <h1>Linea Cósmica</h1>
           <p>
              Descubre la fusión perfecta entre estilo y tecnología en Línea Cósmica.
              Nuestra tienda online ofrece una amplia gama de ropa, accesorios y
              electrodomésticos que combinan diseño vanguardista con funcionalidad.
              Desde prendas de moda hasta gadgets innovadores, encuentra todo lo que
              necesitas para destacar con estilo en tu vida diaria.
            </p>

        <img
          src={caja}
          alt=""
          className="ovni"
        />

      </div>

      {/* SLIDER */}

      <div className="slider-container">

        <button className="flecha izquierda" onClick={anterior}>
          <FaArrowLeft />
        </button>

        <div className="slider">

          <img
            src={imagenes[indice]}
            alt=""
            className="imagen-slider"
          />

        </div>

        <button className="flecha derecha" onClick={siguiente}>
          <FaArrowRight />
        </button>

      </div>

    </section>

  );
};

export default Hero;