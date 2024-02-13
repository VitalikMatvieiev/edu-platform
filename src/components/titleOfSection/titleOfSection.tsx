import { TitleOfSectionProps } from '../../types/components/componentType';
import styles from './_titleOfSection.module.scss';

export const TitleOfSection: React.FC<TitleOfSectionProps> = ({ titleText }) => {
  return (
    <>
      <h1 className={styles['title-text']}>{titleText}</h1>
    </>
  );
};
