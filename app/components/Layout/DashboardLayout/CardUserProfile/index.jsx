import Image from 'next/image';
import React from 'react';
import styles from './styles.module.css';

const CardUserProfile = () => (
  <div className={styles.cardUserProfile}>
    <div className={styles.cardUserProfile__img}>
      <Image
        src="/images/user-profile.png"
        width="16"
        height="16"
        layout="responsive"
      />
    </div>
    <h3 className={styles.cardUserProfile__name}>Nombre</h3>
    <p className={styles.cardUserProfile__rol}>Cargo</p>
  </div>
);

export default CardUserProfile;
