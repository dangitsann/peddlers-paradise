import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Peddler's Paradise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my Peddler's Paradise!" />
        <p className="description">
          Let's get the menu up in this bish.
        </p>
      </main>

      <Footer />
    </div>
  )
}
