
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, MapPin, Users } from "lucide-react";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dep: "",
    level: "",
  });
  const [registrants, setRegistrants] = useState(42); // Starting with a base number

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistrants((prev) => prev + 1);
    toast({
      title: "Registration Successful!",
      description: "You're all set for A Night To Remember!",
      duration: 5000,
    });
    setFormData({ name: "", email: "", phone: "", dep:"", level:"" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
      <div className="flex items-center justify-center space-x-2 mb-6">
        <Users className="w-5 h-5 text-event-purple" />
        <span className="text-sm font-medium">Current Registrants: {registrants}</span>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-event-purple focus:ring-2 focus:ring-event-purple-light outline-none transition-all"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-event-purple focus:ring-2 focus:ring-event-purple-light outline-none transition-all"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-event-purple focus:ring-2 focus:ring-event-purple-light outline-none transition-all"
          />
          <input
            type="Dep"
            name="Department"
            value={formData.dep}
            onChange={handleChange}
            placeholder="Department"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-event-purple focus:ring-2 focus:ring-event-purple-light outline-none transition-all"
          />
          <input
            type="Number"
            name="Level"
            value={formData.level}
            onChange={handleChange}
            placeholder="Level"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-event-purple focus:ring-2 focus:ring-event-purple-light outline-none transition-all"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-event-purple text-white py-3 rounded-lg hover:bg-event-purple-dark transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Register Now
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
