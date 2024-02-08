import './_instructorsPage.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { HeaderInstructors } from '../../components/headerInstructors/headerInstructors';
import { getInstructors } from '../../redux/instructors/instructorsAction';
import {filterByCategory, searchInstructors} from '../../redux/instructors/instructorsSlice';
import InstructorCard from '../../components/instructorCard/instructorCard';
import { InstructorCategory } from '../../components/instructorCategory/instructorCategory';

const InstructorsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.instructorsReducer);

  const categoriesData = () => {
    const instructorsArray = data.instructors;
    const categorySet = new Set(
      instructorsArray.flatMap((instructor) => instructor.category),
    );
    return Array.from(categorySet);
  };

  const categories = categoriesData();
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    dispatch(getInstructors());
  }, []);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    dispatch(searchInstructors(e.target.value));
  };

  const categoryHandler = (category: string) => {
    dispatch(filterByCategory(category));
    setSearchValue('');
  };

  return (
    <div className="instructors-container">
      <HeaderInstructors value={searchValue} onChange={searchHandler} />
      <div className="instructors-categories-container">
        <InstructorCategory
          index={0.5}
          category={'All instructors'}
          onClick={() => categoryHandler('')}
        />
        {categories.map((category, index) => (
          <InstructorCategory
            key={index}
            index={index}
            category={category}
            onClick={() => categoryHandler(category)}
          />
        ))}
      </div>
      <div className="instructors-cards-container">
        {data.filteredInstructors.map((instructor) => (
          <InstructorCard
            key={instructor.id}
            category={instructor.category}
            name={instructor.name}
            email={instructor.email}
          />
        ))}
      </div>
    </div>
  );
};

export default InstructorsPage;
