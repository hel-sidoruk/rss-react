import { IPost } from '../../types';
import { Card } from '../Card';
import styles from './posts.module.scss';

export const Posts = ({ posts }: { posts: IPost[] }) => {
  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};
