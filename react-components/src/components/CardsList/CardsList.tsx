import { mockPosts } from '../../utils/mockPosts';
import { Card } from '../Card';
import styles from './cardslist.module.scss';

export const CardsList = () => {
  return (
    <div className={styles.list}>
      {mockPosts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};
