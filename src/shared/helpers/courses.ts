import {
  Category,
  CategoryCount,
  Instructor,
  InstructorCount,
  Level,
  LevelCount,
} from '../../types/components/componentType';

// Function, which gets array of objects with property - instructor
export const getInstructorCounts = (data: Instructor[]): InstructorCount[] => {
  // Use reduce to calculate the quantities of each instructor
  return data.reduce((acc: InstructorCount[], item) => {
    // Search instructor in acc
    const existingItem = acc.find(
      (accItem) => accItem.instructor === item.instructor,
    );
    // If instructor already exists, increase its quantity by 1
    if (existingItem) {
      existingItem.quantity++;
    } else {
      // If there is no instructor, add a new object with an instructor and an initial number of 1
      acc.push({ instructor: item.instructor, quantity: 1 });
    }

    return acc;
  }, []);
};

// Function, which gets array of objects with property - category
export const getCategoryCounts = (data: Category[]): CategoryCount[] => {
  return data.reduce((acc: CategoryCount[], item) => {
    const existingItem = acc.find(
      (accItem) => accItem.category === item.category,
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      acc.push({ category: item.category, quantity: 1 });
    }

    return acc;
  }, []);
};

// Function, which gets array of objects with property - level
export const getLevelCounts = (data: Level[]): LevelCount[] => {
  return data.reduce((acc: LevelCount[], item) => {
    const existingItem = acc.find((accItem) => accItem.level === item.level);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      acc.push({ level: item.level, quantity: 1 });
    }

    return acc;
  }, []);
};
