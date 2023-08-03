import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/Savio-Anjos.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authoAndTime}>
              <strong>Sávio Anjos</strong>
              <time
                title="16 de Julho às 08:13h "
                dateTime="2023-16-11 08:13:30"
              >
                Cerca de uma hora atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
      </div>

      <footer>
        <button>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </button>
      </footer>
    </div>
  );
}
