import React, { useState } from 'react';
import { Calendar as BigCalendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';

import { CalendarPlus } from 'lucide-react';
import { Button } from '../ui/button';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const initialEvents = [
  {
    title: 'Team Meeting',
    start: new Date(2025, 5, 10, 10, 0),
    end: new Date(2025, 5, 10, 11, 0),
  },
  {
    title: 'Project Review',
    start: new Date(2025, 5, 12, 14, 0),
    end: new Date(2025, 5, 12, 15, 30),
  },
];

export const Calendar = () => {
  const [myEvents, setMyEvents] = useState(initialEvents);
  const [view, setView] = useState(Views.MONTH); // default view
  const [date, setDate] = useState(new Date());  // current date

  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8 pb-6 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Calendar</h1>
        <Button className="flex items-center gap-2 cursor-pointer">
          <CalendarPlus size={16} />
          Add Event
        </Button>
      </div>

      {/* Big Calendar */}
      <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow-md overflow-hidden">
        <BigCalendar
          localizer={localizer}
          events={myEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          views={['month', 'week', 'day', 'agenda']}
          view={view}
          date={date}
          onView={setView}
          onNavigate={(newDate) => setDate(newDate)}
        />
      </div>
    </div>
  );
};
