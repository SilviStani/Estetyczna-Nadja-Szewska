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
        <Link href='/products/facial'>Estetica Profesional Facial</Link>
        <Link href='/products/corporal'>Estetica Profesional Corporal</Link>
        <Link href='/products/maquillaje'>Maquillaje Profesional</Link>
        <Link href='/products/microblanding'>Técnica Dermopen/Microblanding/Microshading</Link>
        <Link href='/products/manicuria'>Belleza de manos</Link>
        <Link href='/contact'>Contacto</Link>
    </div>
  )
}

export default Navbar;