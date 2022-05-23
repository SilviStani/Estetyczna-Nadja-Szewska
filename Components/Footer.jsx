import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
      <h1 className={styles.title}><span className={styles.brand}>Estetyczna </span>Nadja Szewska</h1>
      <h1 className={styles.linkTitle}>
        <a href="/contact">
        <span className={styles.linkText}>Consultas</span>
        <Image src="/img/relajarse.png" width="40px" height="40px" alt=""/>
        </a>
      </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem1}>
          Villa General Belgrano <br/> Córdoba
        </div>
        <div className={styles.cardItem}> @ 2022 Estetyczna Nadja Szewska <br />ALL RIGHTS RESERVED</div>
      </div>
      <div className={styles.cardS}>
      <div className={styles.cardItem}>
           Sígueme ó Escríbeme<br/> <a href="https://www.instagram.com/estetyczna_nadja_szewska/" passHref target='blank'><Image src="/img/instagram.png" width="40px" height="40px" alt=""></Image>
          </a>
           <a href="https://wa.me/5491127665255" passHref target='blank'> <Image src="/img/whatsapp.png" width="40px" height="40px" alt=""></Image>
           </a>
        </div>
        <div className={styles.cardItem1}>
          Web Site Developer: Silvina Staniszewski<br/>Contact me: <a href="https://wa.me/5491163632288" passHref target='blank' className={styles.a}>1163632288</a>  
        </div>
      </div>
    </div>
  )
}

export default Footer