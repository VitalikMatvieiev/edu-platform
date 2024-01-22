import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.scss';
import { Event } from '../../types/components/componentType';

const CalendarComponent: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  // State for managing events data (with the date as the key)
  const [events, setEvents] = useState<{ [date: string]: Event }>({});

  // Function to fetch events
  const fetchEvents = async () => {
    // Examples
    const courses: Event[] = [
      {
        courseName: 'Introduction to Programming',
        instructorName: 'John Doe',
        date: new Date('2024-01-20'),
      },
      {
        courseName: 'Web Development Basics',
        instructorName: 'Jane Smith',
        date: new Date('2024-01-15'),
      },
      {
        courseName: 'Web Development Basics',
        instructorName: 'Jane Smith',
        date: new Date('2024-01-19'),
      },
    ];

    // Reduce courses data to create eventsData object with dates as keys
    const eventsData = courses.reduce(
      (acc, course) => {
        const dateString = course.date.toDateString();
        acc[dateString] = course;
        return acc;
      },
      {} as { [date: string]: Event },
    );
    setEvents(eventsData);
  };

  // fetch events when the component render
  useEffect(() => {
    fetchEvents();
  }, []);

  // CustomCalendarTile component to render each tile in the calendar
  const CustomCalendarTile: React.FC<{ date: Date; view: string }> = ({
    date,
    view,
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

  // Function to determine the className for each tile based on the presence of events
  const tileClassName = ({ date }: { date: Date }): string | null => {
    return events[date.toDateString()] ? 'has-event' : null;
  };

  const prevLabel = <span className="custom-prev-arrow"></span>;
  const nextLabel = <span className="custom-next-arrow"></span>;

  return (
    <div className="app">
      <div className="calendar-container" data-testid="calendar-container">
        <Calendar
          prevLabel={prevLabel}
          nextLabel={nextLabel}
          value={date}
          tileContent={({ date }) => (
            <CustomCalendarTile date={date} view="month" />
          )}
          tileClassName={tileClassName}
          onClickDay={(value) => setDate(value)}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
