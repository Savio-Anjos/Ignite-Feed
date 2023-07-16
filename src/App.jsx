import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.whapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolores recusandae dignissimos consequatur ut debitis impedit delectus reprehenderit reiciendis, aspernatur autem enim nulla magnam neque tempore. Necessitatibus officiis eaque non."
          />

          <Post
            author="Pedro Henrique"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolores recusandae dignissimos consequatur ut debitis impedit delectus reprehenderit reiciendis, aspernatur autem enim nulla magnam neque tempore. Necessitatibus officiis eaque non."
          />
        </main>
      </div>
    </div>
  );
}
