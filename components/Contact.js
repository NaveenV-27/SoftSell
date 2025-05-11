"use client";
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="bg-slate-900 text-white py-8 px-4 md:px-6 lg:px-8 w-full md:w-4/5 lg:w-3/5 xl:w-2/5 rounded-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">Thank You!</h2>
        <div className="bg-slate-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">We've received your message</h3>
          <div className="space-y-2">
            <p><span className="font-medium">Name:</span> {formData.name}</p>
            <p><span className="font-medium">Email:</span> {formData.email}</p>
            <p><span className="font-medium">Company:</span> {formData.company}</p>
            <p><span className="font-medium">License Type:</span> {formData.licenseType}</p>
            <p><span className="font-medium">Message:</span> {formData.message}</p>
          </div>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="mt-6 bg-indigo-500 hover:bg-indigo-600 py-2 sm:py-3 px-4 sm:px-6 rounded font-semibold"
          >
            Submit Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-slate-900 text-white py-8 px-4 md:px-6 lg:px-8 w-full md:w-4/5 lg:w-3/5 xl:w-2/5 rounded-2xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="mx-auto grid gap-4 sm:gap-6">
        <input 
          type="text" 
          name="name"
          placeholder="Name*" 
          required 
          value={formData.name}
          onChange={handleChange}
          className="p-2 sm:p-3 rounded bg-white text-black w-full" 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email*" 
          required 
          value={formData.email}
          onChange={handleChange}
          className="p-2 sm:p-3 rounded bg-white text-black w-full" 
        />
        <input 
          type="text" 
          name="company"
          placeholder="Company" 
          value={formData.company}
          onChange={handleChange}
          className="p-2 sm:p-3 rounded bg-white text-black w-full" 
        />
        <select 
          name="licenseType"
          required 
          value={formData.licenseType}
          onChange={handleChange}
          className="p-2 sm:p-3 rounded bg-white text-black w-full"
        >
          <option value="">Select License Type</option>
          <option value="Enterprise Software">Enterprise Software</option>
          <option value="Antivirus Suite">Antivirus Suite</option>
          <option value="Creative Tools">Creative Tools</option>
        </select>
        <textarea 
          name="message"
          placeholder="Message" 
          rows="4" 
          value={formData.message}
          onChange={handleChange}
          className="p-2 sm:p-3 rounded bg-white text-black w-full"
        ></textarea>
        <button 
          type="submit" 
          className="bg-indigo-500 hover:bg-indigo-600 py-2 sm:py-3 px-4 sm:px-6 rounded font-semibold w-full sm:w-auto"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;