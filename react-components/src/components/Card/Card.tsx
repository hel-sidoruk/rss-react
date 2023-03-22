import styles from './card.module.scss';
import { IPost } from '../../types';

export const Card = ({ post }: { post: IPost }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img src={post.image} alt="Card image" />
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.title}>{post.text}</h3>
        <div className={styles.info}>
          <p>{new Date(post.date as string).toLocaleDateString()}</p>
          <p>{post.gender}</p>
        </div>
        <ul className={styles.tags}>
          {post.tags.map((tag) => (
            <li key={post?.id + tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
        <p>The user agreed to post this</p>
      </div>
    </div>
  );
};
