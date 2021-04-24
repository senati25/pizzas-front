import styles from './styles.module.css';

const SpinnerDashboard = () => (
  <main className={styles.spinner}>
    <div className={styles.dank__ass__loader}>
      <div className={styles.row}>
        <div
          className={`${styles.arrow} ${styles.up} ${styles.outer} ${styles.outer__18}`}
        ></div>
        <div
          className={`${styles.arrow} ${styles.down} ${styles.outer} ${styles.outer__17}`}
        ></div>
        <div
          className={`${styles.arrow} ${styles.up} ${styles.outer} ${styles.outer__16}`}
        ></div>
        <div
          className={`${styles.arrow} ${styles.down} ${styles.outer} ${styles.outer__15}`}
        ></div>
        <div
          className={`${styles.arrow} ${styles.up} ${styles.outer} ${styles.outer__14}`}
        ></div>
      </div>
      <div className={styles.row}>
        <div
          className={`${styles.arrow} ${styles.up} ${styles.outer}  ${styles.outer__1}`}
        ></div>
        <div
          className={`${styles.arrow} ${styles.down} ${styles.outer} ${styles.outer__2} `}
        ></div>
        <div
          className={`${styles.arrow} ${styles.up}  ${styles.inner} ${styles.inner__6}`}
        ></div>
        <div
          className={`${styles.arrow} ${styles.down} ${styles.inner} ${styles.inner__5}`}
        ></div>
        <div
          className={`${styles.arrow} ${styles.up} ${styles.inner} ${styles.inner__4}`}
        ></div>
        <div
          className={`${styles.arrow} ${styles.down} ${styles.outer} ${styles.outer__13}`}
        ></div>
        <div
          className={`${styles.arrow} ${styles.up} ${styles.outer} ${styles.outer__12}`}
        ></div>
      </div>
      <div className={styles.row}>
        <div
          className={`${styles.arrow} ${styles.down} ${styles.outer} ${styles.outer__3}`}
        ></div>
        <div
          className={`${styles.arrow} ${styles.up} ${styles.outer} ${styles.outer__4}`}
        ></div>
        <div
          className={`${styles.arrow} ${styles.down} ${styles.inner} ${styles.inner__1}`}
        ></div>
        <div
          className={`${styles.arrow} ${styles.up} ${styles.inner} ${styles.inner__2}`}
        ></div>
        <div
          className={`${styles.arrow} ${styles.down} ${styles.inner} ${styles.inner__3}`}
        ></div>
        <div
          className={`${styles.arrow} ${styles.up} ${styles.outer} ${styles.outer__11}`}
        ></div>
        <div
          className={`${styles.arrow} ${styles.down} ${styles.outer} ${styles.outer__10}`}
        ></div>
      </div>
      <div className={styles.row}>
        <div
          className={`${styles.arrow} ${styles.down} ${styles.outer} ${styles.outer__5} `}
        ></div>
        <div
          className={`${styles.arrow} ${styles.up} ${styles.outer} ${styles.outer__6} `}
        ></div>
        <div
          className={`${styles.arrow} ${styles.down} ${styles.outer} ${styles.outer__7}`}
        ></div>
        <div
          className={`${styles.arrow} ${styles.up} ${styles.outer} ${styles.outer__8}`}
        ></div>
        <div
          className={`${styles.arrow} ${styles.down} ${styles.outer} ${styles.outer__9}`}
        ></div>
      </div>
    </div>
  </main>
);

export default SpinnerDashboard;
