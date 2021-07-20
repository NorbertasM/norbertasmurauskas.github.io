import Head   from 'next/head'

import Footer from '../components/combined/footer/Footer'
import Header from '../components/combined/header/Header'
import Main   from '../components/combined/main/Main'
import styles from '../styles/Home.module.scss'


const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Norbertas Murauskas</title>
        <meta name="description" content="Norbert Murauskas Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home