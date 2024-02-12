import { InstructorCategoryProps } from '../../types/components/componentType';
import styles from './_instructorCategory.module.scss';

export const InstructorCategory: React.FC<InstructorCategoryProps> = ({
  category,
  index,
  onClick
}) => {
  return (
    <button className={styles['instructors-categories']} onClick={onClick}>
      <span className={styles[`instructors-category-text ${index === 0.5 ? 'bold-category' : ''}`]}>
        {category}
      </span>
    </button>
  );
};
