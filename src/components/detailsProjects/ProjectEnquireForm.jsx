"use client";
import { useState } from 'react';

export default function ProjectEnquireForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Enquiry Submitted!');
    // Add logic to handle form submission here (e.g., send data to backend)
  };

  return (
    <section className="py-8 px-12 bg-white rounded-lg m-4 shadow-lg">
      <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Enquire About This Property</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-lg font-semibold">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-semibold">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-semibold">Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-200">
          Submit Enquiry
        </button>
      </form>
    </section>
  );
}
