import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.container}>
        <Link href='/'>
        <Image src='/img/logo.png'
        height='50px' 
        width='50px' 
        alt='estetica Nadja Szewska'
        className={styles.imgIninio}/>
        </Link>
        <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href='/products/facial'>Estetica Profesional Facial</Link>
        </li>
        <li className={styles.listItem}><Link href='/products/corporal' >Estetica Profesional Corporal</Link></li>
        <li className={styles.listItem}><Link href='/products/maquillaje' >Maquillaje Profesional</Link></li>
        <li className={styles.listItem}><Link href='/products/microblanding' >Dermopen/Microblanding/Microshading</Link></li>
        <li className={styles.listItem}><Link href='/products/manicuria' >Belleza de manos</Link></li>
        <li className={styles.listItem}><Link href='/contact' >Contacto</Link></li>
        </ul>

        <div className={styles.hamburguer} onClick={() => setOpen(!open)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <ul onClick={()=>setOpen(false)} className={styles.menu} style={{right: open ? '0px' : '-50vw'}}>
        <li className={styles.menuItem}><Link href='/products/corporal' >Estetica Corporal</Link></li>
        <li className={styles.menuItem}><Link href='/products/maquillaje' >Maquillaje</Link></li>
        <li className={styles.menuItem}><Link href='/products/microblanding' >Dermo&Micro</Link></li>
        <li className={styles.menuItem}><Link href='/products/manicuria' >Belleza manos</Link></li>
        <li className={styles.menuItem}><Link href='/contact' >Contacto</Link></li> 
        </ul>

        </div>
  )
}

export default Navbar;