import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.head}>
        <div className={styles.logo}>
          <h1>Next-Ecom2</h1>
        </div>
        <div className={styles.smicons}>
          <ul className={styles.smiconslist}>
            <li>FaceBook</li>
            <li>Twitter</li>
            <li> Insta</li>
            <li>WhatsApp</li>
          </ul>
        </div>
      </div>
      <div className={styles.nav}>
        <ul className={styles.navList}>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>About</li>
        </ul>
      </div>
      <hr className={styles.line} />
      <div className={styles.bottom}>
        <h6>@ 2022 Company. Inc</h6>
      </div>
    </div>
  );
}
