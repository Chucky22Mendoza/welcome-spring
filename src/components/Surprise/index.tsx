'use client';

import React from 'react';
import styles from './surprise.module.css';
import { Typewriter } from 'react-simple-typewriter';

function Surprise() {
  return (
    <div className={styles.surprise}>
      <h2>
        <Typewriter
          words={['Ella sabía que él sabía, que algún día pasaría, que vendría a buscarla, con sus flores amarillas']}
          loop={5}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={100}
          delaySpeed={2000}
          cursorColor='#0077FF'
        />
      </h2>
    </div>
  )
}

export default Surprise