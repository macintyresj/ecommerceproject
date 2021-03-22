import { useState } from 'react';
import { getFirestore } from '../firebase/';
import firebase from "firebase/app";
import "firebase/firestore";
import './contacto.scss';


const Contacto = () => {
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [mensaje, setMensaje] = useState("");
    const [mensajeId, setMensajeId] = useState();


    const manejarMensaje = (e) => {
        e.preventDefault()
        const datosMensaje = {
            buyer: {
                name: nombre,
                phone: telefono,
                email: email
            },
            date: firebase.firestore.FieldValue.serverTimestamp(),
        }

        const baseDeDatos = getFirestore()
        const MensajeCollection = baseDeDatos.collection("mensaje")
        MensajeCollection
            .add(datosMensaje)
            .then(({ id }) => {
                setMensajeId(id);
            })
            .finally(console.log(datosMensaje));
    }
    return (
        <>
            {
                mensajeId ?
                    <>
                        <section className="mensaje">
                            <h2>Su mensaje ha sido enviado!</h2>
                            <p>Tu consulta fue registrada con el nro: <strong>{mensajeId}</strong> </p>

                        </section>
                    </>

                    :
                    <section className="contacto">
                        <div className="contactoContainer">
                            <h1>Formulario de Contacto</h1>

                            <form onSubmit={manejarMensaje} className="contactForm">
                                <div>
                                    <p>Nombre y Apellido:</p>
                                    <input value={nombre} onChange={(e) => { setNombre(e.target.value) }} type="text" required/>
                                </div>
                                <div>
                                    <p>Telefono:</p>
                                    <input value={telefono} onChange={(e) => { setTelefono(e.target.value) }} type="text" required/>
                                </div>
                                <div>
                                    <p>Correo Electrónico:</p>
                                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" required/>
                                </div>
                                <div>
                                    <p>Mensaje:</p>
                                    <textarea value={mensaje} onChange={(e) => { setMensaje(e.target.value) }} type="text" required/>
                                </div>
                                <button type="submit">Enviar</button>
                            </form>
                        </div>
                    </section>
            }
        </>
    )
}

export default Contacto;