import styles from "./Post.module.css";

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img
              className={styles.avatar}
              src="https://avatars.githubusercontent.com/u/117304327?v=4"
            />
            <div className={styles.authorInfo}>
              <strong>Matheus Pasti</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time
            title="29 de fevereiro de 2024"
            dateTime="2024-02-29 14:23:00"
          ></time>
        </header>
        <div className={styles.content}>
          <p>
            <p>Fala galeraa 👋 </p>

            <p>
              Acabei de subir mais um projeto no meu portifa. É um projeto que
              fiz no NLW Return, evento da Rocketseat. O nome do projeto é
            </p>

            <p>
              <a href="">👉 jane.design/doctorcare </a>
            </p>

            <p>
              <a href="">#novoprojeto #nlw #rocketseat</a>
            </p>
          </p>
        </div>
      </article>
    </>
  );
}
