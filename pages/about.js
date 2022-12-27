import React from "react";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <div>
      <h2 className={inter.className}>
        About
        <p>This is an app to find</p>
        <p>the latest DJ and other musical events</p>
      </h2>
    </div>
  );
}
