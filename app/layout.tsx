"use client";

import List from "@/components/List";
import styles from "@/styles/layout.module.css";
import "./global.css";
import { useReducer } from "react";
import { ThemeContext, themeReducer } from "@/utils/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [themeState, dispatch] = useReducer(themeReducer, {
    color: "black",
    backgroundColor: "white",
  });
  return (
    <html lang="en">
      <ThemeContext.Provider value={{ themeState, dispatch }}>
        <body className={styles.main}  style={{...themeState}}>
          <List />
          <div>{children}</div>
        </body>
      </ThemeContext.Provider>
    </html>
  );
}
