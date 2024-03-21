import type { Metadata } from "next";
import styles from '../page.module.css';
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nuestra primavera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className={styles.container} style={{ paddingTop: '10px' }}>
        {children}
      </main>
    </>
  );
}
