import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="https://github.com/mBaharlou">Mohammad Baharlou</a> | W16
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <h3>developed by Mohammad Baharlou ✔︎</h3>
      </footer>
    </>
  );
}

export default Layout;
