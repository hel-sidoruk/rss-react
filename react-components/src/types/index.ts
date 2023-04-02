export interface IPost {
  id: string;
  text: string;
  image: string;
  tag: string;
  date: string;
  gender: 'Female' | 'Male' | '';
}
export type ErrorsState = {
  text: string;
  tag: string;
  date: string;
  image: string;
  check: string;
  gender: string;
};

export type FormProps = {
  errors: ErrorsState;
  image: string | ArrayBuffer;
  formRef: React.RefObject<HTMLFormElement>;
  success: boolean;
  onSubmit: (e: React.FormEvent) => void;
  changeImage: (image: string | ArrayBuffer) => void;
};
