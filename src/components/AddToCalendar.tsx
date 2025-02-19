import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from './ui/button';

const EVENT_DETAILS = {
  title: "A Night To Remember",
  description: "Join us for an unforgettable event on February 28th!",
  location: "Ritman Stadium, Nigeria",
  start: "20250228T190000Z",
  end: "20250228T220000Z",
};

const AddToCalendar = () => {
  const handleAddToCalendar = () => {
    // Generate Google Calendar Event Link
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(EVENT_DETAILS.title)}&details=${encodeURIComponent(EVENT_DETAILS.description)}&location=${encodeURIComponent(EVENT_DETAILS.location)}&dates=${EVENT_DETAILS.start}/${EVENT_DETAILS.end}`;

    // Generate and Download ICS File
    const generateICSFile = () => {
      const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${EVENT_DETAILS.title}
DESCRIPTION:${EVENT_DETAILS.description}
LOCATION:${EVENT_DETAILS.location}
DTSTART:${EVENT_DETAILS.start}
DTEND:${EVENT_DETAILS.end}
END:VEVENT
END:VCALENDAR`;

      const blob = new Blob([icsContent], { type: "text/calendar" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "event.ics";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };

    // Open Google Calendar Link
    window.open(googleCalendarUrl, "_blank");

    // Trigger ICS File Download
    generateICSFile();
  };

  return (
    <Button
      onClick={handleAddToCalendar}
      variant="outline"
      className="bg-event-yellow/10 text-event-yellow hover:bg-event-yellow/20 border-event-yellow/20"
    >
      <Calendar className="w-4 h-4 mr-2" />
      Add to Calendar
    </Button>
  );
};

export default AddToCalendar;
