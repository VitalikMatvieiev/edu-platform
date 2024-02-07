import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, CardMedia, Typography } from '@mui/material';
import { EnrolledCoursesData } from '../../../types/components/componentType';
import './_enrolledCard.scss';
import { CourseProgress } from '../courseProgress/CourseProgress';


export const EnrolledCardOfCourse = (props: EnrolledCoursesData) => {
  return (
    <Card
      sx={{
        maxWidth: '100%',
        padding: '5px',
        borderRadius: '20px',
        display: 'flex',
      }}
    >
      <CardMedia
        component="img"
        alt="Course Photo"
        sx={{ borderRadius: '20px', maxWidth: '40%', padding: '5px 5px' }}
        src={props?.imageUrl}
      />
      <CardContent
        sx={{ width: '100%', paddingLeft: '10px', marginTop: '5px' }}
      >
        <Box>
          <Typography
            sx={{ lineHeight: '1.2' }}
            variant="h6"
            component="div"
            role="course-title"
          >
            {props?.title}
          </Typography>
          <Typography
            sx={{ color: 'gray', paddingBottom: '10px' }}
            variant="subtitle2"
            component="div"
          >
            {props?.category}
          </Typography>
        </Box>
        <Box sx={{}}>
          <p>{props?.numberOfStudents} students enrolled</p>
        </Box>
        <Box sx={{ padding: '5px 0' }}>
          <p>{props?.timeOfClasses}</p>
        </Box>
        <Box sx={{ paddingTop: '15px' }}>
          <CourseProgress
            completedChapter={props?.completedChapterLength || 0}
            allChapter={props?.chaptersLength || 0}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

