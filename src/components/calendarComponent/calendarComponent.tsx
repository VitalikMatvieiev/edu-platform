import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.scss';
import { Event } from '../../types/components/componentType';
import { CustomCalendarTile } from './customCalendarTile';

export const CalendarComponent: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  // State for managing events data (with the date as the key)
  const [events, setEvents] = useState<{ [date: string]: Event }>({});

  // Function to fetch events
  const handleFetchEvents = () => {
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
        courseName: 'Web Development',
        instructorName: 'John Doe',
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
    handleFetchEvents();
  }, []);

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
            <CustomCalendarTile date={date} view="month" events={events} />
          )}
          tileClassName={tileClassName}
          onClickDay={(value) => setDate(value)}
        />
      </div>
    </div>
  );
};
