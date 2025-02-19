import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Users } from "lucide-react";
import { db } from "../firebase/config.js";
import { collection, addDoc, getCountFromServer, onSnapshot } from "firebase/firestore";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dep: "",
    level: "",
    isStudent: true, // New state for student status
  });
  const [registrants, setRegistrants] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRegistrantCount = async () => {
      try {
        const collectionRef = collection(db, "registrants");
        const snapshot = await getCountFromServer(collectionRef);
        setRegistrants(snapshot.data().count);

        const unsubscribe = onSnapshot(collectionRef, async () => {
          const updatedSnapshot = await getCountFromServer(collectionRef);
          setRegistrants(updatedSnapshot.data().count);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching registrant count:", error);
      }
    };

    fetchRegistrantCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Prepare data to save
      const { dep, level, isStudent, ...baseData } = formData;
      const dataToSave = isStudent ? { ...baseData, dep, level } : baseData;

      await addDoc(collection(db, "registrants"), dataToSave);

      toast({
        title: "Registration Successful!",
        description: "You're all set for A Night To Remember!",
        duration: 5000,
      });

      setFormData({ name: "", email: "", phone: "", dep: "", level: "", isStudent: true });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        duration: 5000,
      });
      console.error("Error saving registration: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
      <div className="flex items-center justify-center space-x-2 mb-6">
        <Users className="w-5 h-5 text-event-purple" />
        <span className="text-sm font-medium text-black">
          Current Registrants: {registrants}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4 text-black">
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

          {/* Checkbox to indicate student status */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="isStudent"
              checked={!formData.isStudent}
              onChange={() => setFormData((prev) => ({ ...prev, isStudent: !prev.isStudent }))}
              className="w-5 h-5"
            />
            <label className="text-sm">I am not a student</label>
          </div>

          {/* Show Department & Level only if the user is a student */}
          {formData.isStudent && (
            <>
              <input
                type="text"
                name="dep"
                value={formData.dep}
                onChange={handleChange}
                placeholder="Department"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-event-purple focus:ring-2 focus:ring-event-purple-light outline-none transition-all"
              />
              <input
                type="text"
                name="level"
                value={formData.level}
                onChange={handleChange}
                placeholder="Level"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-event-purple focus:ring-2 focus:ring-event-purple-light outline-none transition-all"
              />
            </>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-event-purple text-white py-3 rounded-lg hover:bg-event-purple-dark transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
        >
          {loading ? "Registering..." : "Register Now"}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
