import React from 'react';
import styles from './activities.module.css';
import Link from 'next/link';

type Props = {
  card: {
    src: string;
    h2: string;
    p: string;
    link: string;
  }
}

function Card({ card }: Props) {
  return (
    <div className={styles['custom-card']}>
      <div className={styles['img-box']}>
        <img src={card.src} alt={card.h2} />
      </div>
      <div className={styles['custom-content']}>
        <h2>{card.h2}</h2>
        <p>{card.p}</p>
        <Link href={card.link}>Más información</Link>
      </div>
    </div>
  );
}

export default Card;
