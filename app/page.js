import ExampleClientComponent from "@/components/ExampleClientComponent";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to my home page</h1>
      <ExampleClientComponent />
    </main>
  );
}
