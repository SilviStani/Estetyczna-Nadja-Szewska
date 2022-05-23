import React from 'react'
import styles from '../styles/Contact.module.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

const formRef = useRef();
const [done, setDone] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_wozi7bv',
   'template_w7zs0li',
    formRef.current,
      'user_No7Wk2Xmmcxmswl29wqsY')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });

}

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Enviame un Mensaje</h1>
        <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
            <input className={styles.inputS} placeholder="Nombre" name="user_name" />
            <input className={styles.inputS} placeholder="N° Teléfono" name='user_phone'/>
            <input className={styles.inputS} placeholder="Email" name='user_email'/>
            <input className={styles.inputL} placeholder="Asunto" name='user_subject'/>
            <textarea className={styles.textArea} placeholder="Mensaje" rows={6} name='message' />
            <button className={styles.button}>Enviar</button>
            {done && 'Gracias por tu mensaje!! Te responderé a la Brevedad.'}
        </form>
    </div>
  )
}

export default Contact