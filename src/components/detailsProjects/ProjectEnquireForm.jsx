"use client";
import { useState } from "react";
import Image from "next/image"; // Use this if you're using Next.js

export default function ProjectEnquireForm({ image }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg(""); // Reset success message
    setErrorMsg(""); // Reset error message

    try {
      const response = await fetch("/api/inquiryform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMsg("Message Submitted Successfully!");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        setErrorMsg("Error submitting the form");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMsg("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-8 px-4 md:px-12 bg-white rounded-lg m-3 sm:m-4 shadow-lg flex flex-col md:flex-row">
      <div className="md:w-1/2 flex justify-center items-center">
        <Image
          src={image} // Replace with your image path
          alt="Property Image"
          width={500} // Adjust width as needed
          height={400} // Adjust height as needed
          layout="responsive"
          className="rounded-lg shadow-md object-cover"
        />
      </div>
      <div className="md:w-1/2 p-3 sm:p-6">
        <h2 className="text-3xl font-bold text-[#657b0e] mb-6 mt-2 sm:mt-0 text-center">
          Enquire About This Property
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-lg font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8fae15]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8fae15]"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-semibold">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8fae15]"
              required
            />
          </div>
          {/* Display messages here */}
          {successMsg && (
            <div className="mb-4 text-green-600">{successMsg}</div>
          )}
          {errorMsg && <div className="mb-4 text-red-600">{errorMsg}</div>}
          <button
            type="submit"
            className="bg-[#8fae15] w-full text-white px-6 py-3 rounded-lg hover:bg-[#657b0e] transition-all flex items-center justify-center"
            disabled={loading}
          >
            {loading ? <span className="loader"></span> : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
