import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Savio-Anjos.png"
            alt=""
          />
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
          👉 <a href="">jane.design/doctorcare</a>{" "}
        </p>

        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
