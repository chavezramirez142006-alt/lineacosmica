import './Carrito.css';
import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Swal from 'sweetalert2';

function Carrito() {

    const [productos, setProductos] = useState(
        JSON.parse(
            localStorage.getItem('carrito')
        ) || []
    );

    const guardarCarrito = (nuevoCarrito) => {

        setProductos(nuevoCarrito);

        localStorage.setItem(
            'carrito',
            JSON.stringify(nuevoCarrito)
        );

    };

    const vaciarCarrito = () => {

        localStorage.removeItem('carrito');

        setProductos([]);

    };

    const realizarCompra = () => {

        if (productos.length === 0) {

            Swal.fire({
                title: 'Carrito vacío',
                text: 'Agrega productos antes de comprar.',
                icon: 'warning'
            });

            return;

        }

        Swal.fire({
            title: '¡Compra realizada!',
            text: 'Tu compra se realizó correctamente.',
            icon: 'success',
            confirmButtonColor: '#39ff14'
        });

        localStorage.removeItem('carrito');

        setProductos([]);

    };

    const aumentarCantidad = (id, imagen) => {

        const nuevoCarrito = productos.map(producto =>

            producto.id === id &&
                producto.imagen === imagen

                ? {
                    ...producto,
                    cantidad: producto.cantidad + 1
                }

                : producto

        );

        guardarCarrito(nuevoCarrito);

    };

    const disminuirCantidad = (id, imagen) => {

        const nuevoCarrito = productos.map(producto =>

            producto.id === id &&
                producto.imagen === imagen

                ? {
                    ...producto,
                    cantidad:
                        producto.cantidad > 1
                            ? producto.cantidad - 1
                            : 1
                }

                : producto

        );

        guardarCarrito(nuevoCarrito);

    };

    const eliminarProducto = (id, imagen) => {

        const nuevoCarrito = productos.filter(

            producto => !(
                producto.id === id &&
                producto.imagen === imagen
            )

        );

        guardarCarrito(nuevoCarrito);

    };

    const total = productos.reduce(

        (acum, producto) =>

            acum +

            parseFloat(
                producto.precio.replace('S/ ', '')
            ) *

            producto.cantidad,

        0

    );

    return (

        <>
            <Navbar />

            <section className="carrito">

                <h1 className="titulo-carrito">
                    Carrito
                </h1>

                <div className="contenedor-carrito">

                    {productos.length === 0 ? (

                        <p className="carrito-vacio">
                            No hay productos en el carrito
                        </p>

                    ) : (

                        productos.map(producto => (

                            <div
                                key={`${producto.id}-${producto.imagen}`}
                                className="card-carrito"
                            >

                                <img
                                    className="imagen-carrito"
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                />

                                <h3 className="nombre-carrito">
                                    {producto.nombre}
                                </h3>

                                <p className="cantidad-texto">
                                    Cantidad: {producto.cantidad}
                                </p>

                                <div className="contador-carrito">

                                    <button
                                        onClick={() =>
                                            disminuirCantidad(
                                                producto.id,
                                                producto.imagen
                                            )
                                        }
                                    >
                                        -
                                    </button>

                                    <span>
                                        {producto.cantidad}
                                    </span>

                                    <button
                                        onClick={() =>
                                            aumentarCantidad(
                                                producto.id,
                                                producto.imagen
                                            )
                                        }
                                    >
                                        +
                                    </button>

                                </div>

                                <button
                                    className="btn-eliminar"
                                    onClick={() =>
                                        eliminarProducto(
                                            producto.id,
                                            producto.imagen
                                        )
                                    }
                                >
                                    Eliminar
                                </button>

                            </div>

                        ))

                    )}

                </div>

                <h2
                    key={total}
                    className="total-carrito"
                >
                    Total: S/ {total.toFixed(2)}
                </h2>

                <button
                    className="btn-vaciar"
                    onClick={vaciarCarrito}
                >
                    Vaciar carrito
                </button>

                <button
                    className="btn-comprar"
                    onClick={realizarCompra}
                >
                    Realizar Compra
                </button>

            </section>

        </>

    );

}

export default Carrito;