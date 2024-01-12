import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Typography } from '@mui/material';
import { EnrolledCoursesData } from '../../../types/components/componentType';
import './enrolled-card.scss';
import { CourseProgress } from '../course-progress/course-progress';


const EnrolledCardOfCourse = (props: EnrolledCoursesData) => {
  const defaultCoursePhoto = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fonline-course&psig=AOvVaw3-KJ2IgoZorpiPitvk4TzH&ust=1705082347155000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCLCO2vH01YMDFQAAAAAdAAAAABAI"
  return (
    <Card sx={{ maxWidth: '100%', padding: '5px', borderRadius: '20px', display: 'flex' }}>
      <CardMedia
        component="img"
        alt="Course Photo"
        sx={{ borderRadius: '20px', width: '40%', padding: '5px 5px'}}
        src={props?.imageUrl ?? defaultCoursePhoto}
      />
      <CardContent sx={{ width:"100%", paddingLeft: '10px', marginTop: '5px' }}>
        <Box>
          <Typography sx={{ lineHeight: '1.2' }} variant="h6" component="div" role='course-title'> 
            {props?.title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {props?.category}
          </Typography>
        </Box>
        <Box sx={{ padding: '10px 0' }}>
          <p>{props?.numberOfStudents} students enrolled</p>
        </Box>
        <Box sx={{ padding: '5px 0' }}>
          <p>{props?.timeOfClasses}</p>
        </Box>
        <Box sx={{ padding: '10px 0' }}>
            <CourseProgress
              completedChapter={props?.completedChapterLength || 0}
              allChapter={props?.chaptersLength || 0}
            />
        </Box>
      </CardContent>
    </Card>
  );
};

export default EnrolledCardOfCourse;