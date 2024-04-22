import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello world</h1>
      <h2>Subtitulo</h2>
        <p>outro paragrafo de texto</p>
        <br/>
        <p>outro paragrafo de texto</p>
      <div>
        <h2>outro Subtitulo</h2>
      </div>
    </main>
  );
}
