'use client';

import React, { useState } from 'react';
import styles from './player.module.css';
import Image from 'next/image';

function Player() {
  const [player, setPlayer] = useState({
    audio: typeof Audio !== "undefined" && new Audio('/assets/audio/background-sound.mp3'),
    isPlaying: false,
  });

  const setPlayPause = () => {
    // Get state of song
    let isPlaying = player.isPlaying;

    if (player.audio) {
      if (isPlaying) {
        // Pause the song if it is playing
        player.audio.pause();
      } else {
        player.audio.play();
      }
    }

    // Change the state of song
    setPlayer({...player, isPlaying: !isPlaying });
  };

  return (
    <div className={styles.player}>
      <button className={player.isPlaying ? styles.playing : ''} type="button" onClick={setPlayPause}>
        <Image src={`/assets/${player.isPlaying ? 'sound' : 'zzz'}.png`} alt="pause" width={50} height={50} />
        <Image src="/assets/girasol.png" alt="pause" width={50} height={50} />
      </button>
    </div>
  );
}

export default Player;