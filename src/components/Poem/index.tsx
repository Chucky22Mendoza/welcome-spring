'use client';

import React from 'react';
import styles from './poem.module.css';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

function Poem() {
  return (
    <div className={styles.poem}>
      <Image src="/assets/pergamino.png" width={438.67} height={625.33} alt="pergamino" />
      <div className={styles.text}>
        <h1>Poema para ti</h1>
        <p>
          <Typewriter
            words={['Eres la primavera que llena mi vida de color, la fragancia que perfuma mi corazón, la luz que ilumina mi camino.\n\nTe amo con la pasión del sol que calienta la tierra, con la ternura de la brisa que acaricia las flores, con la alegría de las aves que cantan en la primavera.\n\nEres mi todo, mi razón de ser, la flor más hermosa que ha florecido en mi jardín.']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={100}
            delaySpeed={2000}
            cursorColor='#0077FF'
          />
        </p>
      </div>
    </div>
  );
}

export default Poem;
