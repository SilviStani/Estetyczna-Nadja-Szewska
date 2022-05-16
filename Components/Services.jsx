import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Services.module.css'

const Services = ({services}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Servicio de Estética</h1>
        <h1 className={styles.subtitle}>Corporal y Facial</h1>
        <div className={styles.services}>
        {services.map( service => (
            <Link 
            passHref
            key={service.id} 
            href={`/products/${service.name}`}>
               <div className={styles.service}>
                   <div className={styles.desc}>{service.desc}</div>
                   <span className={styles.cat}>{service.title}</span>
                   <div className={styles.media}>
                          {/* <video 
                           src={service.video}
                           autoPlay 
                           loop 
                           className={styles.video}/>*/}
                           <Image 
                           className={styles.media}
                           src={service.photo} 
                           width="1000px"
                           height="1000px"
                           objectFit='cover' 
                           alt='' />
                   </div>
               </div>

            </Link>
        ) )}
        </div>
    </div>
  )
}

export default Services