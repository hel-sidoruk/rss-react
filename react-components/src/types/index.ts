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

export type FormProps = {
  errors: ErrorsState;
  image: string | ArrayBuffer;
  tags: string[];
  formRef: React.RefObject<HTMLFormElement>;
  success: boolean;
  onSubmit: (e: React.FormEvent) => void;
  changeImage: (image: string | ArrayBuffer) => void;
  changeTags: (tag: string) => void;
};

export interface IForm {
  text: string;
  date: string;
  gender: 'Male' | 'Female';
  check: boolean;
  file: FileList;
  tags: string[];
}
