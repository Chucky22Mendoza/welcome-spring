import type { Metadata } from "next";
import styles from '../page.module.css';
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Poema para ti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className={styles.container} style={{ padding: '0' }}>
        {children}
      </main>
    </>
  );
}
