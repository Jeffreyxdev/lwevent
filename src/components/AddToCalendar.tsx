
import React from 'react';
import { Calendar } from 'lucide-react';
import { createEvents } from 'ics';
import { Button } from './ui/button';

const AddToCalendar = () => {
  const handleAddToCalendar = () => {
    const event = {
      start: [2025, 2, 28, 16, 0], // February 28, 2025, 4:00 PM
      end: [2025, 2, 28, 22, 0],   // Assuming 6 hours duration
      title: 'A Night To Remember - Ritman University',
      description: 'Join us for an unforgettable evening of entertainment and celebration at Ritman Stadium. In collaboration with BELIEVERS\' LOVEWORLD UNIUYO.',
      location: 'RITMAN STADIUM',
      organizer: { name: 'Students\' Union Government, Ritman University' }
    };

    createEvents([event], (error: Error | undefined, value: string) => {
      if (error) {
        console.error(error);
        return;
      }

      // Create a Blob from the .ics file content
      const blob = new Blob([value], { type: 'text/calendar;charset=utf-8' });
      
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', 'a-night-to-remember.ics');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
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
