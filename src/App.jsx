import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Anderson"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut molestiae facere, aliquam odit quis incidunt rem, recusandae nulla dolore eligendi iusto voluptatibus nobis? Vitae aspernatur autem magnam optio perspiciatis?"
          />
          <Post author="James Bond" content="Esse é o post do James Bond" />
        </main>
      </div>
    </>
  );
}
