import type { Metadata } from "next";
import styles from '../page.module.css';
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Citas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className={`${styles.container} ${styles.surprise}`} style={{ paddingTop: '10px' }}>
        {children}
      </main>
    </>
  );
}
