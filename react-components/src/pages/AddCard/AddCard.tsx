import { useState } from 'react';
import { AddCardForm } from '../../components/AddCardForm';
import { Posts } from '../../components/Posts';
import { IPost } from '../../types';
import styles from './add-card.module.scss';

export const AddCard = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const addPost = (post: IPost) => setPosts((posts) => [...posts, post]);

  return (
    <div className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>Add Card</h1>
        <AddCardForm addPost={addPost} />
        <Posts posts={posts} />
      </div>
    </div>
  );
};
