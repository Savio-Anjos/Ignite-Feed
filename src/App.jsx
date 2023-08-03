import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Savio-Anjos.png",
      name: "Sávio Anjos",
      role: "Desenvolvedor Full-Stack",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É ump rojeto que fiz no NLW Return, evento da Rocketseat. O nome do   projeto é DoctorCare 🚀 ",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-07-03 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykebrito.png",
      name: "Maik Brito",
      role: "Educador @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É ump rojeto que fiz no NLW Return, evento da Rocketseat. O nome do   projeto é DoctorCare 🚀 ",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-07-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.whapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
