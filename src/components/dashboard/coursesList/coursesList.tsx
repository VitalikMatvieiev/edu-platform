import { useEffect, useState } from 'react';
import { EnrolledCoursesData } from '../../../types/components/componentType';
import { EnrolledCardOfCourse } from '../enrolledCardOfCourse/enrolledCardOfCourse';
import { DashboardService } from '../../../services/dashboard-service';
import { Grid } from '@mui/material';

const defaultCoursePhoto = 'src/img/defaultCoursePhoto.png';

// Test data which we will get from backend
const testData = [
  {
    id: '1',
    title: 'React Basics',
    imageUrl: defaultCoursePhoto,
    category: 'Uncategorized',
    timeOfClasses: 'Wednesday, 11AM',
    numberOfStudents: 0,
    completedChapterLength: 4,
    chaptersLength: 12,
  },
  {
    id: '2',
    title: 'React Advanced',
    imageUrl: defaultCoursePhoto,
    category: 'Uncategorized',
    timeOfClasses: 'Wednesday, 11AM',
    numberOfStudents: 0,
    completedChapterLength: 4,
    chaptersLength: 20,
  },
  {
    id: '3',
    title: 'React Testing',
    imageUrl: defaultCoursePhoto,
    category: 'Uncategorized',
    timeOfClasses: 'Wednesday, 11AM',
    numberOfStudents: 0,
    completedChapterLength: 7,
    chaptersLength: 20,
  },
  {
    id: '4',
    title: 'React Performance',
    imageUrl: defaultCoursePhoto,
    category: 'Uncategorized',
    timeOfClasses: 'Wednesday, 11AM',
    numberOfStudents: 0,
    completedChapterLength: 4,
    chaptersLength: 15,
  },
];

export const EnrolledCoursesList = () => {
  const [courseData, setCourseData] = useState<EnrolledCoursesData[]>([]);

  const getCourseDetails = async () => {
    /* eslint-disable */
    // @ts-ignore: Unreachable code error
    const response = await DashboardService.getProfile();
    /* eslint-enable */
    setCourseData(testData); //in implementation replace testData by response
  };

  useEffect(() => {
    getCourseDetails();
  }, []);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {courseData.map((contents) => (
        <Grid item xs={4} sm={4} md={6} role="card-grid" key={contents.id}>
          <EnrolledCardOfCourse
            id={contents.id}
            title={contents.title}
            imageUrl={contents.imageUrl}
            category={contents.category}
            timeOfClasses={contents.timeOfClasses}
            numberOfStudents={contents.numberOfStudents}
            completedChapterLength={contents.completedChapterLength}
            chaptersLength={contents.chaptersLength}
          />
        </Grid>
      ))}
    </Grid>
  );
};
