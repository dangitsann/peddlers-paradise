import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Peddler's Paradise</title>
        <link rel="icon" href="/favicon.ico" />
        <center><img src="/whitelogo.png" alt="Logo" className="logo"/></center>
      </Head>
      <main>
            
        <div className="menu">
          <center>
            <iframe src="/peddlers menu.pdf" width="80%" height="800px"></iframe>
          </center>
          
        </div>
           
      </main>

      

      <Footer />
    </div>
  )
}
