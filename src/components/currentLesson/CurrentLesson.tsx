import './_currentLesson.scss';
import { useEffect, useState } from "react"
import { CurrentLessonProps } from "../../types/components/componentType"
import defaultCoursePhoto from '../../img/defaultCoursePhoto.png';
import axios from "axios";

const CurrentLesson = () => {
const [currentLessonProps, setCurrentLessonProps] = useState<CurrentLessonProps | null>(null);

useEffect(() => {
const fetchData = async () => {
  try {
    const response = await axios.get('URL/api/currentlesson');
    const currentLessonData = response.data;

    setCurrentLessonProps({
      courseName: currentLessonData.courseName ?? "Science Basics",
      lessonName: currentLessonData.lessonName ?? "Chemistry",
      lessonCurrentNumber: currentLessonData.lessonCurrentNumber ?? 3,
      allLessonsCount: currentLessonData.allLessonsCount ?? 6,
    });
  } catch (error) {
    console.error('Error during fetching lesson details:', error);
    setCurrentLessonProps({
      courseName: "Name of the course",
      lessonName: "Name of the lesson",
      lessonCurrentNumber: 0,
      allLessonsCount: 0,
    });
  }
};

  fetchData();
}, []);

  return ( 
    <div className="cl-card">
      <img src={defaultCoursePhoto} className="cl-card-image" />
      <button className="cl-play-button">&#9658;</button>
      <div className="cl-card-content">
        <h2 className="cl-course-name">{currentLessonProps?.courseName}</h2>
        <h3 className="cl-lesson-name">{currentLessonProps?.lessonName}</h3>
        <div className="cl-card-info">
          <div className="cl-prop-name">Lesson</div>
          <div className="cl-prop-value">{currentLessonProps?.lessonCurrentNumber}/{currentLessonProps?.allLessonsCount}</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentLesson;