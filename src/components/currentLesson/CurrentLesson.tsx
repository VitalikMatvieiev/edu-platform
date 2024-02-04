import './_currentLesson.scss';
import { CurrentLessonProps } from "../../types/components/componentType"
import defaultCoursePhoto from '../../img/defaultCoursePhoto.png';

const CurrentLesson: React.FC<CurrentLessonProps> = ({
  courseId,
  courseName,
  lessonName,
  lessonCurrentNumber,
  allLessonsCount,
}) => {
  
  const OnClickHandler = (courseId: number) => {
    console.log(`Open course page with ID: ${courseId}`);
  }

  return ( 
    <div className="cl-card" data-testid="cl-card" onClick={() => OnClickHandler(courseId)}>
      <img src={defaultCoursePhoto} className="image" alt="Course" />
      <div className="content">
        <h2 className="course-name">{courseName}</h2>
        <h3 className="lesson-name">{lessonName}</h3>
        <div className="card-info" data-testid="card-info">
          <div className="prop-name">Lesson</div>
          <div className="prop-value">{lessonCurrentNumber}/{allLessonsCount}</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentLesson;