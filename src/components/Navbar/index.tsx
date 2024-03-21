'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';
import { links } from '@/utils/Navbar';

function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isOpen = isMenuOpen ? styles.open : '';

  return (
    <>
      <button className={`${styles.btn} ${styles.burger} ${isOpen}`} onClick={toggleMenu}></button>
      <div className={`${styles.background} ${isOpen}`}></div>
      <div className={`${styles.menu} ${isOpen}`}>
        <nav>
          {
            links.filter((link) => link.href !== pathname).map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={toggleMenu}
                className={isMenuOpen ? styles.appear : ''}
              >
                {link.name}
              </Link>
            ))
          }
        </nav>
      </div>
    </>
  );
}

export default Navbar;