import './ProductoDetalle.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { electrodomesticos } from '../Data/ElectrodomesticosD';
import { accesorios } from '../Data/AccesoriosD';
import { ropa } from '../Data/RopaD';

function ProductoDetalle() {

    const [cantidad, setCantidad] = useState(1);

    const { id } = useParams();

    const todosLosProductos = [
        ...electrodomesticos,
        ...accesorios,
        ...ropa
    ];

    const producto = todosLosProductos.find(
        p => p.id === Number(id)
    );

    const agregarAlCarrito = () => {

        const carrito =
            JSON.parse(
                localStorage.getItem('carrito')
            ) || [];

        const productoExistente =
            carrito.find(
                item =>
                    item.id === producto.id &&
                    item.imagen === imagenPrincipal
            );

        if (productoExistente) {

            productoExistente.cantidad += cantidad;

            productoExistente.imagen = imagenPrincipal;

        } else {

            carrito.push({
                ...producto,
                imagen: imagenPrincipal,
                cantidad
            });

        }

        localStorage.setItem(
            'carrito',
            JSON.stringify(carrito)
        );

        alert('Producto agregado al carrito');
    };

    const [imagenPrincipal, setImagenPrincipal] = useState(
        producto.imagen
    );

    if (!producto) {
        return <h2>Producto no encontrado</h2>;
    }

    return (
        <>
            <Navbar />

            <section className="detalle-producto">

                <div className="detalle-imagen">

                    <img
                        src={imagenPrincipal}

                        alt={producto.nombre}
                    />

                </div>

                <div className="detalle-info">

                    <h1 className="nombre-producto">{producto.nombre}</h1>

                    <div className="miniaturas">

                        {producto.imagenes.map((img, index) => (

                            <img
                                key={index}
                                src={img}
                                alt={producto.nombre}
                                onClick={() => setImagenPrincipal(img)}
                            />

                        ))}

                    </div>

                    <h2 className="precio">
                        {producto.precio}
                    </h2>

                    <div className="descripcion">
                        <p>{producto.descripcion}</p>
                        <p><strong>Marca:</strong> {producto.marca}</p>
                        <p><strong>Garantía:</strong> {producto.garantia}</p>
                        <p><strong>Stock:</strong> {producto.stock}</p>
                    </div>

                    <div className="cantidad-carrito">

                        <div className="contador">

                            <button
                                type="button"
                                onClick={() => setCantidad(cantidad + 1)}
                            >
                                +
                            </button>

                            <span>{cantidad}</span>

                            <button
                                type="button"
                                onClick={() =>
                                    cantidad > 1 &&
                                    setCantidad(cantidad - 1)
                                }
                            >
                                -
                            </button>

                        </div>

                        <button
                            className="btn-carrito"
                            onClick={agregarAlCarrito}
                        >
                            Añadir al Carrito
                        </button>

                    </div>



                </div>

            </section>
        </>
    );
}

export default ProductoDetalle;