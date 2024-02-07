import React from 'react';
import { CustomCalendarTileProps } from '../../types/components/componentType';

export const CustomCalendarTile: React.FC<CustomCalendarTileProps> = ({
  date,
  view,
  events,
}) => {
  const dateString = date.toDateString();
  const eventData = events[dateString] || {
    courseName: '',
    instructorName: '',
    date,
  };
  const { courseName, instructorName } = eventData;

  const truncatedCourseName =
    courseName.length > 25 ? courseName.substring(0, 25) + '...' : courseName;

  return (
    <div
      className={`custom-calendar-tile ${view}`}
      data-testid="custom-calendar-tile"
    >
      <p className="date">{date.getDate()}</p>
      {truncatedCourseName && (
        <p className="course-name" data-testid="course-name">
          {truncatedCourseName}
        </p>
      )}
      {instructorName && (
        <p className="instructor-name" data-testid="instructor-name">
          {instructorName}
        </p>
      )}
    </div>
  );
};

