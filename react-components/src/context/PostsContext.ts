import React from 'react';
import { IPost } from '../types';

export type PostsContextType = {
  posts: IPost[];
  addPost: (post: IPost | null) => void;
};

export const PostsContext = React.createContext<PostsContextType>({
  posts: [],
  addPost: () => {},
});
