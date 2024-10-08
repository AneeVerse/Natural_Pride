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

      setTimeout(() => {
        setIsOpen(false); // Close the popup after submission
      }, 2000);
    }
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
          <div className="bg-white relative rounded-lg shadow-lg p-8  w-11/12 md:w-3/5 lg:w-1/3">
            <h2 className="text-2xl font-bold mb-6 text-[#657b0e]">
              Inquiry Form
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                  className="w-full p-3 border border-gray-300 rounded-lg"
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
                  className="w-full p-3 border border-gray-300 rounded-lg"
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
                  className="w-full p-3 border border-gray-300 rounded-lg"
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
                {loading ? <span className="loader"></span> : "Submit"}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-black absolute top-0 right-5  hover:underline"
              >
                <IoMdClose className="w-7 h-7" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default InquiryFormPopup;
