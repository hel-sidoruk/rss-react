import { Component } from 'react';
import { tags } from '../../../utils';
import styles from './dropdown.module.scss';

type Props = { error: string };

export class Dropdown extends Component<Props> {
  render() {
    return (
      <div className={styles.field}>
        <select id="dropdown" defaultValue="" className={styles.dropdown}>
          <option disabled hidden value="">
            Select tag
          </option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <p>{this.props.error}</p>
      </div>
    );
  }
}
