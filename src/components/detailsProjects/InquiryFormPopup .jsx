"use client";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
const InquiryFormPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry Submitted!");
    setIsOpen(false); // Close the popup after submission
    // Logic to send form data to backend (if required)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // Show popup after 5 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white relative rounded-lg shadow-lg p-8 w-11/12 md:w-1/3">
            <h2 className="text-2xl font-bold mb-6 text-[#657b0e]">Inquiry Form</h2>
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
             
              <button type="submit" className="bg-[#8fae15] w-full text-white px-6 py-3 rounded-lg hover:bg-[#657b0e] transition-all">
                Submit
              </button>
              <button type="button" onClick={() => setIsOpen(false)} className="text-black absolute top-0 right-5  hover:underline">
                <IoMdClose className="w-7 h-7"/>
              </button>
            </form>
         
          </div>
        </div>
      )}
    </>
  );
};

export default InquiryFormPopup;
