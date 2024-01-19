import { InstructorCategoryProps } from '../../types/components/componentType';
import './_instructorCategory.scss';

const InstructorCategory: React.FC<InstructorCategoryProps> = ({
  category,
  index,
  onClick
}) => {
  return (
    <button className="instructors-categories" onClick={onClick}>
      <span className={`instructors-category-text ${index === 0.5 ? 'bold-category' : ''}`}>
        {category}
      </span>
    </button>
  );
};

export default InstructorCategory;
