import React from 'react';
import styles from './activities.module.css';
import { cardsInfo } from '@/utils/Navbar';
import Card from './Card';

function Activities() {
  return (
    <div className={styles.container}>
      {cardsInfo.map((cardInfo) => <Card key={cardInfo.h2} card={cardInfo} />)}
    </div>
  );
}

export default Activities;
