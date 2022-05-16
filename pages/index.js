import Head from 'next/head'
import Intro from '../Components/Intro.jsx'
import Services from '../Components/Services.jsx'
import styles from '../styles/Home.module.css'
import { data } from '../data' 

export default function Home({services}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Estetica Integral</title>
        <meta name="description" content="Cuidado Personal" />
      </Head>
     <Intro/>
     <Services services={services}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  }
}