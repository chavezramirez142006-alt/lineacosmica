import './Contacto.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contacto = () => {

    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const [cargando, setCargando] = useState(false);

    const manejarCambio = (e) => {
        const { name, value } = e.target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    const manejarEnvio = async (e) => {

        e.preventDefault();

        setCargando(true);

        try {

            const templateParams = {
                nombre: formulario.nombre,
                email: formulario.email,
                mensaje: formulario.mensaje
            };

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            Swal.fire({
                title: '¡Mensaje enviado!',
                text: 'Gracias por contactarte.',
                icon: 'success',
                confirmButtonColor: '#39ff14'
            });

            setFormulario({
                nombre: '',
                email: '',
                mensaje: ''
            });

        } catch (error) {

            console.error(error);

            Swal.fire({
                title: 'Error',
                text: 'No se pudo enviar el mensaje.',
                icon: 'error'
            });

        } finally {

            setCargando(false);

        }

    };

    return (
        <section id="contacto" className="contacto">

            <div className="contacto-texto">

                <h1>Ponte en Contacto</h1>

                <p>
                    Tenes alguna duda <br />
                    contactate por correo o vía WhatsApp
                </p>

            </div>

            <form
                className="contacto-formulario"
                onSubmit={manejarEnvio}
            >

                <label>Nombre</label>

                <input
                    className="nombre-input"
                    type="text"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                    required
                />

                <label>Tu correo</label>

                <input
                    className="email-input"
                    type="email"
                    name="email"
                    value={formulario.email}
                    onChange={manejarCambio}
                    required
                />

                <label>Mensaje</label>

                <textarea
                    rows="6"
                    name="mensaje"
                    value={formulario.mensaje}
                    onChange={manejarCambio}
                    required
                />

                <button
                    type="submit"
                    disabled={cargando}
                >
                    {cargando ? 'Enviando...' : 'Enviar'}
                </button>

            </form>

            <div className="contacto-info">

                <div className="dato">
                    <h3>Email</h3>

                    <a href="mailto:chavezramirez142006@gmail.com">
                        chavezramirez142006@gmail.com
                    </a>
                </div>

                <div className="dato">
                    <h3>Ubicación</h3>
                    <p>Lima - Perú</p>
                </div>

                <a
                    href="https://wa.me/51960633632?text=Hola,%20quiero%20más%20información."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-box"
                >
                    <h2>WhatsApp</h2>
                </a>

                <div className="dato">
                    <h3>Número</h3>
                    <p>+51 960 633 632</p>
                </div>

            </div>

        </section>
    );
};

export default Contacto;