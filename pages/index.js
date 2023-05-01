import Head from "next/head";
import Intro from "../Components/Intro.jsx";
import Services from "../Components/Services.jsx";
import styles from "../styles/Home.module.css";
import { data } from "../data";

export default function Home({ services }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Estética Nadja Szewska</title>
        <meta name="description" content="Cuidado Personal" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Intro />
      <Services services={services} />
    </div>
  );
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};
