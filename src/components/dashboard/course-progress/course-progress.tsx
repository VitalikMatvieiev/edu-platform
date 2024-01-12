import { Box, LinearProgress } from '@mui/material';
import { CourseProgressProps } from '../../../types/components/componentType';


export const CourseProgress = ({
    completedChapter,
    allChapter,
}: CourseProgressProps) => {
    const customColor1 = '#FF0000';
    const customColor2 = '#ECECEC';
    
    const progressPercent = allChapter != 0 
      ? completedChapter / allChapter * 100
      : 0;
    return(
        <div>
            <LinearProgress
            valueBuffer={100}
            value={progressPercent}
            variant='buffer'
            sx={{marginBottom:"7px", borderRadius: '20px',
              '& .MuiLinearProgress-bar1Buffer': {
                backgroundColor: customColor1, 
              },
              '.MuiLinearProgress-bar2Buffer': {
                backgroundColor: customColor2,
              },
            }}
            />
            <Box sx={{display: "flex", justifyContent:"space-between"}}>
              <Box sx={{}}>
                {completedChapter}/{allChapter} lessons
              </Box>
              <Box>
                {Math.round(progressPercent)}% completed
              </Box>
            </Box>
        </div>
    )
}