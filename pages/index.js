import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>안녕하세요</div>
        <div>여기는 HAVE RIZZ 의 공간입니다</div>
      </main>
    </>
  );
}
