import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import styles from './index.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <h1><title>Peddler's Paradise</title></h1>
        <link rel="icon" href="/favicon.ico" />
        <center><img src="/whitelogo.png" alt="Logo" className={styles.logo}/></center>
      </Head>

      <main>
        <img src="/peddlers menu.jpg" alt="Menu" className={styles.menu}></img>
      </main>
    </div>
    
  )
}
