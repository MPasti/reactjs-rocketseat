import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Matheus" content="teste" />
          <Post author="Matheus" content="teste 2" />
        </main>
      </div>
    </>
  );
}

export default App;
