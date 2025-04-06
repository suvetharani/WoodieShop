import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUsFeedback = () => {
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData({ ...feedbackData, [name]: value });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
    console.log(feedbackData);
    setFeedbackData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto my-10 p-6 flex justify-center items-start gap-10">
      
      {/* Contact Us Section */}
      <div className="w-1/2 h-[400px] bg-[#EAD196] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-[#7D0A0A] mb-4">Contact Us</h2>
        <p className="text-[#7D0A0A] mb-4">Reach out to us through these channels:</p>
        
        {/* Phone */}
        <div className="flex items-center mb-4">
          <FaPhoneAlt className="text-[#7D0A0A] mr-3" />
          <p className="text-[#7D0A0A]">+1 (123) 456-7890</p>
        </div>

        {/* Email */}
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-[#7D0A0A] mr-3" />
          <p className="text-[#7D0A0A]">support@woodieshop.com</p>
        </div>

        {/* Address */}
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-[#7D0A0A] mr-3" />
          <p className="text-[#7D0A0A]">123 Woodie Street, Nature Town</p>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="w-1/2 h-[400px] bg-[#BF3131] p-6 rounded-lg shadow-lg text-[#EEEEEE]">
        <h2 className="text-2xl font-bold mb-4">Feedback</h2>
        <form onSubmit={handleFeedbackSubmit}>
          {/* Name Field */}
          <input
            type="text"
            name="name"
            value={feedbackData.name}
            onChange={handleFeedbackChange}
            placeholder="Your Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md text-[#7D0A0A]"
            required
          />

          {/* Email Field */}
          <input
            type="email"
            name="email"
            value={feedbackData.email}
            onChange={handleFeedbackChange}
            placeholder="Your Email"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md text-[#7D0A0A]"
            required
          />

          {/* Message Field (Smaller Size) */}
          <textarea
            name="message"
            value={feedbackData.message}
            onChange={handleFeedbackChange}
            placeholder="Your Message"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md text-[#7D0A0A]"
            rows="3"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#EAD196] text-[#7D0A0A] px-5 py-2 rounded-md hover:bg-[#EEEEEE] transition duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsFeedback;
