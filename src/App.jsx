import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Electrodomesticos from './components/Electrodomesticos/Electrodomesticos';
import Contacto from './components/Contacto/Contacto.jsx';
import Ropa from './components/Ropa/Ropa';
import Accesorios from './components/Accesorios/Accesorios';

import ProductoDetalle from './Pages/ProductoDetalle.jsx';


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Ropa />
              <Accesorios />
              <Electrodomesticos />
              <Contacto />
            </>
          }
        />

        <Route
          path="/producto/:id"
          element={<ProductoDetalle />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;