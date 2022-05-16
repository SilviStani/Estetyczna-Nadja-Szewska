import React from 'react'
import styles from '../styles/Contact.module.css'


const Contact = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Enviame un Mensaje</h1>
        <form className={styles.form}>
            <input className={styles.inputS} placeholder="Nombre" />
            <input className={styles.inputS} placeholder="N° Teléfono" />
            <input className={styles.inputS} placeholder="Email" />
            <input className={styles.inputL} placeholder="Asunto" />
            <textarea className={styles.textArea} placeholder="Mensaje" rows={6} />
            <button className={styles.button}>Enviar</button>
        </form>
    </div>
  )
}

export default Contact