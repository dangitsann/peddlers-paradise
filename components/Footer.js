import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
         <img src="/tiles.png" alt="JadeTile" className={styles.logo} />
      </footer>
    </>
  )
}
