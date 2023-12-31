import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/Savio-Anjos.png" />
          <div className={styles.authorInfo}>
            <strong>Sávio Anjos</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="16 de Julho às 08:13h " dateTime="2023-16-11 08:13:30">
          Públicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. </p>

        <p>
          É ump rojeto que fiz no NLW Return, evento da Rocketseat. O nome do
          projeto é
        </p>

        <p>DoctorCare 🚀 </p>

        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href=""> #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="Submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
