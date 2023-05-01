import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  let ano = new Date();
  let fecha = ano.getUTCFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.cardOne}>
        <h1 className={styles.title}>Estetyczna Nadja Szewska</h1>
      </div>
      <div className={styles.cardTwo}>
        <p>
          Villa General Belgrano <br /> Córdoba
        </p>
        <p>
          @ {fecha} Estetyczna Nadja Szewska <br />
          <b>ALL RIGHTS RESERVED</b>
        </p>
      </div>
      <div className={styles.cardThree}>
        <div className={styles.social}>
          <p>Sígueme ó Escríbeme</p>
          <p>
            <a
            className={styles.socialIcons}
              href="https://www.instagram.com/estetyczna_nadja_szewska/"
              passHref
              target="blank"
            >
              <Image
                src="/img/instagram.png"
                width="40px"
                height="40px"
                alt=""
              />
            </a>
            <Link
            className={styles.socialIcons} href="/contact">
              <Image
                src="/img/whatsapp.png"
                width="40px"
                height="40px"
                alt=""
              />
            </Link>
          </p>
        </div>
        <div className={styles.dev}>
          <a
            href="https://wa.me/5491163632288"
            passHref
            target="blank"
            className={styles.a}
          >
           <p>Desarrollado por:</p> 
            <Image
              src="/img/laptop_wave.png"
              width="80px"
              height="80px"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
