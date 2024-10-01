"use client";
import { useState } from 'react';
import Image from 'next/image'; // Use this if you're using Next.js

export default function ProjectEnquireForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Enquiry Submitted!');
    // Add logic to handle form submission here (e.g., send data to backend)
  };

  return (
    <section className="py-8 px-4 md:px-12 bg-white rounded-lg m-3 sm:m-4 shadow-lg flex flex-col md:flex-row">
      <div className="md:w-1/2 flex justify-center items-center">
        <Image 
          src="/images/projects/project1.jpg" // Replace with your image path
          alt="Property Image"
          width={500} // Adjust width as needed
          height={400} // Adjust height as needed
          className="rounded-lg shadow-md" 
        />
      </div>
      <div className="md:w-1/2 p-3 sm:p-6">
        <h2 className="text-3xl font-bold text-[#657b0e] mb-6 mt-2 sm:mt-0 text-center">Enquire About This Property</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-lg font-semibold">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8fae15]"
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
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8fae15]"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-semibold">Phone</label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8fae15]"
              required
            />
          </div>
        
          <button type="submit" className="bg-[#8fae15] w-full text-white px-6 py-3 rounded-lg hover:bg-[#657b0e] transition-all duration-200">
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
