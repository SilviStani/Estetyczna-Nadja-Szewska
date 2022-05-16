import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href='/'>
        <Image src='/img/logo.png'
        height='50px' 
        width='50px' 
        alt='estetica Nadja Szewska'
        className={styles.imgIninio}/>
        </Link>
        <Link href='/products/facial' className={styles.list}>Estetica Profesional Facial</Link>
        <Link href='/products/corporal' className={styles.list}>Estetica Profesional Corporal</Link>
        <Link href='/products/maquillaje' className={styles.list}>Maquillaje Profesional</Link>
        <Link href='/products/microblanding' className={styles.list}>Técnica Dermopen/Microblanding/Microshading</Link>
        <Link href='/products/manicuria' className={styles.list}>Belleza de manos</Link>
        <Link href='/contact' className={styles.list}>Contacto</Link>
    </div>
  )
}

export default Navbar;