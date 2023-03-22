export interface IPost {
  id: string;
  title: string;
  text: string;
  image: string;
  tags: string[];
  date: string;
}
export type ErrorsState = { title: string; text: string; tags: string };
export type ClearErrorFn = (error: keyof ErrorsState) => void;
