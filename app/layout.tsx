"use client";

import List from "@/components/List";
import styles from './layout.module.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.main}>
        <List/>
        <div>
        {children}
        </div>
      </body>
    </html>
  );
}
