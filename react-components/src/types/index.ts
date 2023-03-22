export interface IPost {
  id: string;
  text: string;
  image: string;
  tags: string[];
  date: string;
  gender: 'Female' | 'Male' | '';
}
export type ErrorsState = {
  text: string;
  tags: string;
  date: string;
  image: string;
  check: string;
  gender: string;
};
export type ClearErrorFn = (error: keyof ErrorsState) => void;
