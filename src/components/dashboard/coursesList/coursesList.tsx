import './coursesList.scss';
import { useEffect, useState } from 'react';
import { EnrolledCoursesData } from '../../../types/components/componentType';
import EnrolledCardOfCourse from '../enrolled-card-of-course/enrolled-card-of-course';
import { DashboardService } from '../../../services/dashboard-service';

const defaultCoursePhoto = "data:image/jpeg;base64,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"

// Test data which we will get from backend
const testData = [{
  id: "1",
  title: 'Title 1',
  imageUrl: defaultCoursePhoto,
  category: 'Uncategorized',
  timeOfClasses: 'Wednesday, 11AM',
  numberOfStudents: 0,
  completedChapterLength: 4,
  chaptersLength: 12,
},
{
  id: "2",
  title: 'Title 2',
  imageUrl: defaultCoursePhoto,
  category: 'Uncategorized',
  timeOfClasses: 'Wednesday, 11AM',
  numberOfStudents: 0,
  completedChapterLength: 4,
  chaptersLength: 20,
},
{
  id: "3",
  title: 'Title 2',
  imageUrl: defaultCoursePhoto,
  category: 'Uncategorized',
  timeOfClasses: 'Wednesday, 11AM',
  numberOfStudents: 0,
  completedChapterLength: 7,
  chaptersLength: 20,
},
{
  id: "4",
  title: 'Title 2',
  imageUrl: defaultCoursePhoto,
  category: 'Uncategorized',
  timeOfClasses: 'Wednesday, 11AM',
  numberOfStudents: 0,
  completedChapterLength: 4,
  chaptersLength: 15,
},]

const EnrolledCoursesList = () => {
    //let courseDetails; //= [] as EnrolledCoursesData[];
    const [courseData, setCourseData] = useState<EnrolledCoursesData[]>([]);

    const getCourseDetails = async () => {
      const response = await DashboardService.getProfile();
      setCourseData(testData) //in implementation replace testData by response
    };
   
    useEffect(() => {
      getCourseDetails();
    }, []);

    return(
      <div className='enrolled-card'>
        {courseData.map(contents => (
          <EnrolledCardOfCourse
              key={contents.id} 
              id={contents.id}
              title={contents.title}
              imageUrl={contents.imageUrl}
              category={contents.category}
              timeOfClasses={contents.timeOfClasses}
              numberOfStudents={contents.numberOfStudents}
              completedChapterLength={contents.completedChapterLength}
              chaptersLength={contents.chaptersLength}
          />
        ))}
      </div>
    )
  };
  
  export default EnrolledCoursesList; 