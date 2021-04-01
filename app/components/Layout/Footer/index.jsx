import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const Footer = () => (
  <footer className={styles.footerContainer}>
    <div className={styles.section}>
      <h3 className={styles.footerContainer__title}>INVIAGGIO</h3>
      <div className={styles.section__content}>
        <p>
          Ofrecemos a nuestros clientes una amplia variedad de pizzas elaborados
          con materia prima de alta calidad que permite mantener su frescura y
          brindar ese «toque casero» que nos caracteriza.
        </p>
      </div>
    </div>
    <div className={styles.section}>
      <h3 className={styles.footerContainer__title}>AYUDA Y SERVICIOS</h3>

      <ul
        className={`${styles.section__content} ${styles.helpAndServices__links}`}
      >
        <Link href="/">
          <a className={styles.links__item} role="listitem">
            Eventos
          </a>
        </Link>
        <Link href="/">
          <a className={styles.links__item}>Contacto</a>
        </Link>
        <Link href="/">
          <a className={styles.links__item}>Galerias</a>
        </Link>
        <Link href="/">
          <a className={styles.links__item}>Terminos y condiciones</a>
        </Link>
      </ul>
    </div>

    <div className={styles.section}>
      <h3 className={styles.footerContainer__title}>CONTACTENOS</h3>
      <div className={styles.section__content}>
        <div>
          <div>
            <i className="fas fa-phone-square-alt" /> 982629234
          </div>

          <div>
            <i className="fas fa-envelope-open" /> pizinviaggio@web.com
          </div>
        </div>

        <div className={styles.contact__socialLinks}>
          <i className="fab fa-facebook-square fa-3x" />
          <i className="fab fa-instagram fa-3x" />
          <i className="fab fa-twitter-square fa-3x" />
          <i className="fab fa-youtube-square fa-3x" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
