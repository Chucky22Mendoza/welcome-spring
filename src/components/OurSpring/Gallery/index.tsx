import React from 'react'
import styles from'./gallery.module.css'

const pieImages = [
  'Nuestra boda',
  'Bonita navidad',
  'Bonito jardín',
  'Tlajomulco de Zúñiga',
  'Revelación de sexo',
  'Lucha libre',
  'Nuestra lavadora',
  'Día de campo',
  'Día en casa',
  'Playita',
  'Cine',
  'Primera navidad',
  'Estadio Akron',
  'Baby shower',
];

function Gallery() {
  const images = Array.from({ length: 14 }, ((_, i) => (
    <div key={`gallery${i}`} className={styles['imagen-galeria']}>
        <img src={`/assets/gallery/${i + 1}.jpg`} alt={String(i)} loading="lazy" />
        <div className={styles['animacion-imagen']} />
        <div className={styles.pie}>
          <span>{pieImages[i]}</span>
        </div>
    </div>
  )));

  return (
    <div className={styles['contenedor-galeria']}>
      {images}
    </div>
  )
}

export default Gallery