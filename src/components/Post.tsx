import type { IPost } from "../services/posts";
import styles from "./Post.module.css";

function Post({
  writer_name,
  writer_thumbnail,
  thumbnail,
  title,
  text,
  createdAt,
}: IPost) {
  return (
    <div className={styles.container}>
      <img className={styles.thumbnail} src={thumbnail} alt="작성자 프로필" />
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
        <div className={styles.writer_box}>
          <img
            className={styles.writer_thumbnail}
            src={writer_thumbnail}
            alt="작성자 프로필"
          />
          <div className={styles.writer_name}>{writer_name}</div>
          <div className={styles.createdAt}>{createdAt}</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
