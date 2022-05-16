import React from 'react'
import Image from 'next/image'
import styles from "../styles/Intro.module.css"

const Intro = () => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <h1 className={styles.title}><span className={styles.brand}>Estetyczna</span> Nadja Szewska</h1>
            <p className={styles.desc}>
                Crear descripcion acerca de Estetyczna Nadja Szewska
            </p>
            <button className={styles.button}>Descubre</button>
        </div>
        <div className={styles.card}>
            <Image src='/img/flores.jpg'
                   layout='fill'
                   objectFit='cover' 
                   alt='estetica Nadja Szewska'/>
        </div>
    </div>
  )
}

export default Intro