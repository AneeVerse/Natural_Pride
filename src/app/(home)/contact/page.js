"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg(""); // Reset success message
    setErrorMsg("");   // Reset error message

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMsg('Message Submitted Successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setErrorMsg('Error submitting the form');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMsg('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-6 sm:py-12 px-3 sm:px-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#657b0e]">Contact Us</h1>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-md p-2 sm:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Form Section */}
            <div className="flex-1 bg-white rounded-lg shadow-lg px-3 py-8 sm:px-8 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-[#657b0e]">Get in Touch</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg"
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
                    className="w-full p-3 border border-gray-300 rounded-lg"
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
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-semibold">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    rows="5"
                    required
                  />
                </div>
                
              {/* Display messages here */}
              {successMsg && <div className="mb-4 text-green-600">{successMsg}</div>}
              {errorMsg && <div className="mb-4 text-red-600">{errorMsg}</div>}
                <button
                  type="submit"
                  className="bg-[#8fae15] w-full text-white px-6 py-3 rounded-lg hover:bg-[#657b0e] transition-all flex items-center justify-center"
                >
                  {loading ? <span className="loader"></span> : 'Submit'}
                </button>
              </form>
            </div>

            {/* Contact Information Section */}
            <div className="flex-1 rounded-lg shadow-lg bg-[#8fae15] text-white" style={{ backgroundImage: "url(/images/projects/project1.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
              <div className='bg-black rounded-lg h-full p-8 opacity-50'>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt className="text-3xl" />
                    <div>
                      <p className="text-lg font-semibold">Address</p>
                      <p>501, 5th Floor, G-Square Business Park, Opp.Sanpada Railway Station, Sanpada (W), Navi Mumbai-400705.</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaPhoneAlt className="text-3xl" />
                    <div>
                      <p className="text-lg font-semibold">Phone</p>
                      <p>+91 8013337222 / +91 9324289393 </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-3xl" />
                    <div>
                      <p className="text-lg font-semibold">Email</p>
                      <Link href={"mailto:pridefuture555@gmail.com"}>pridefuture555@gmail.com</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Google Map Integration */}
<section className="bg-white rounded-lg shadow-md p-4 sm:p-8 mb-12">
  <h2 className="text-3xl font-bold mb-6 text-[#657b0e]">Our Location</h2>
  <div className="w-full h-72 rounded-lg overflow-hidden">
    <iframe 
      className="w-full h-full" // Ensure iframe takes full width and height
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7050.316126490431!2d73.00786799115802!3d19.067992019852674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c145af38a625%3A0x303fd73974a38c1c!2sG-Square%20Business%20Park!5e0!3m2!1sen!2sin!4v1727850538457!5m2!1sen!2sin"
      allowFullScreen // Use camelCase for allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade" // Use camelCase for referrerPolicy
    ></iframe>
  </div>
</section>


        {/* Social Media Links */}
        <section className="bg-[#8fae15] rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Follow Us</h2>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com" className="text-white text-3xl">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" className="text-white text-3xl">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" className="text-white text-3xl">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" className="text-white text-3xl">
              <FaLinkedin />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
