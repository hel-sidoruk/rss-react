export interface IPost {
  id: string;
  title: string;
  author: string;
  text: string;
  image: string;
  tags: string[];
  date: string;
}
export type ErrorsState = { title: string; author: string; text: string; tags: string };
