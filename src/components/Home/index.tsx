'use client';

import React from 'react';
import styles from './home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <section className={styles.container}>
      <Image src="/assets/portada3.png" fill alt="portada" />
      <Link href="/our-spring">
        <h2>Celebrar la primavera contigo</h2>
        <Image src="/assets/tulipanes.png" alt="tulipanes" height={300} width={200} />
      </Link>
      <Link href="/list">
        <h2>Actividades para celebrar</h2>
        <Image src="/assets/tulipanes.png" alt="tulipanes" height={300} width={200} />
      </Link>
      <Link href="/poem">
        <h2>Poema para ti</h2>
        <Image src="/assets/tulipanes.png" alt="tulipanes" height={300} width={200} />
      </Link>
      <Link href="/surprise">
        <h2>Sorpresa</h2>
        <Image src="/assets/tulipanes.png" alt="tulipanes" height={300} width={200} />
      </Link>
      <h1>
        Evelin, esposa mía,
        <Typewriter
          words={[' en este día de primavera', ' mi corazón florece con amor por ti, mi bella esposa', ' eres la luz que ilumina mi vida y la fragancia que llena mi alma de alegría']}
          loop={5}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={100}
          delaySpeed={2000}
        />
      </h1>
    </section>
  );
}

export default Home;
