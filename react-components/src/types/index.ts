export interface IPost {
  id: string;
  title: string;
  image: string;
  tags: string[];
  date: string;
  gender: 'Female' | 'Male' | '';
}
export type ErrorsState = {
  title: string;
  tags: string;
  date: string;
  image: string;
  check: string;
  gender: string;
};
export type ClearErrorFn = (error: keyof ErrorsState) => void;
