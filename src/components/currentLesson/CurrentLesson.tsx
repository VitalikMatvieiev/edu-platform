import { CurrentLessonProps } from '../../types/components/componentType';
import defaultCoursePhoto from '../../img/defaultCoursePhoto.png';
import styles from './_currentLesson.module.scss';

export const CurrentLesson: React.FC<CurrentLessonProps> = ({
  lessonCurrentNumber,
  allLessonsCount,
  courseName,
  lessonName,
  courseId,
}) => {
  const handleClick = (courseId: number) => {
    console.log(`Open course page with ID: ${courseId}`);
  };

  return (
    <div
      className={styles['cl-card']}
      data-testid="cl-card"
      onClick={() => handleClick(courseId)}
    >
      <img src={defaultCoursePhoto} className={styles['image']} alt="Course" />

      <div className={styles['content']}>
        <h2 className={styles['course-name']}>{courseName}</h2>
        <h3 className={styles['lesson-name']}>{lessonName}</h3>

        <div className={styles['card-info']} data-testid="card-info">
          <div className={styles['prop-name']}>Lesson</div>

          <div className={styles['prop-value']}>
            {lessonCurrentNumber}/{allLessonsCount}
          </div>
        </div>
      </div>
    </div>
  );
};
