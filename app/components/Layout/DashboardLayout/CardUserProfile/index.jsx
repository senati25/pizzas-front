import Image from 'next/image';
import React from 'react';
import useSessionDashboardContext from '../../../../hooks/useSessionDashboardContext';
import styles from './styles.module.css';

const CardUserProfile = () => {
  const { session } = useSessionDashboardContext();

  return (
    <div className={styles.cardUserProfile}>
      <div className={styles.cardUserProfile__img}>
        <Image
          src="/images/user-profile.png"
          width="16"
          height="16"
          layout="responsive"
        />
      </div>
      <h3 className={styles.cardUserProfile__name}>{session?.nombre}</h3>
      <p className={styles.cardUserProfile__rol}>
        {session?.rol.toUpperCase()}
      </p>
    </div>
  );
};

export default CardUserProfile;
