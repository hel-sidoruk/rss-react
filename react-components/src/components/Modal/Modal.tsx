import { ReactNode, useEffect, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

type Props = { onClose: () => void; children: ReactNode };

export const Modal = ({ onClose, children }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const close = () => {
    onClose();
    document.body.style.overflow = 'auto';
  };

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

  return createPortal(
    <div className={styles.modal} onClick={close}>
      <div onClick={stopPropagation} className={styles.content}>
        <button className={styles.btn} onClick={close}></button>
        {children}
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement
  );
};
