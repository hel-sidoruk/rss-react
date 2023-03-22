import React, { useRef } from 'react';
import styles from './input.module.scss';

type Props = { image: string | ArrayBuffer; changeImage: (s: string | ArrayBuffer) => void };

export const FileInput = ({ image, changeImage }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const readImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && e.target.result) changeImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && readImage(e.target.files[0]);
  };

  const click = () => inputRef.current?.click();
  return (
    <div className={styles.fileUpload}>
      <input onChange={selectFile} accept="image/*" ref={inputRef} type="file" />
      <div className={styles.fileField} onClick={click}>
        <div className={styles.btn}>Upload file</div>
        {image && <img src={image as string} />}
      </div>
    </div>
  );
};
