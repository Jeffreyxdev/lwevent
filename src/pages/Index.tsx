
import RegistrationForm from "@/components/RegistrationForm";
import AddToCalendar from "@/components/AddToCalendar";
import { CalendarDays, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-event-purple-dark via-event-purple to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-float">
          <div className="inline-block px-4 py-1 bg-event-yellow/10 backdrop-blur-sm rounded-full text-event-yellow mb-4">
            Students' Union Government, Ritman University
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            A Night To
            <span className="block text-event-yellow mt-2">Remember</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base opacity-90 mb-6">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5" />
              <span>28th FEB, 2025 - 4PM PROMPT</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>RITMAN STADIUM</span>
            </div>
          </div>
          <AddToCalendar />
        </div>

        {/* Registration Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Register Now</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Join us for an unforgettable evening of entertainment and celebration.
              Limited spots available!
            </p>
          </div>
          
          <RegistrationForm />
        </div>

        {/* Event Details */}
        <div className="mt-24 text-center">
          <h3 className="text-xl font-semibold mb-4">In Collaboration with</h3>
          <p className="text-event-yellow text-lg">BELIEVERS' LOVEWORLD UNIUYO</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
