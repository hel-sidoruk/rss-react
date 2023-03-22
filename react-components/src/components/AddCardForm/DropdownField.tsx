import { Dropdown } from './Dropdown';
import styles from './form.module.scss';

type Props = {
  error: string;
  tags: string[];
  change: (t: string) => void;
};

export const DropdownField = ({ error, tags, change }: Props) => {
  return (
    <div className={styles.field}>
      <Dropdown tags={tags} changeTags={change} />
      <p>{error}</p>
    </div>
  );
};
