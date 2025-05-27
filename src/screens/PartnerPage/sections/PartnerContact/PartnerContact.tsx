import { useState } from "react";
import { X, MapPin, Phone, Mail } from "lucide-react";

const PartnerWithUsModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    contact: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
        setFormData({
          name: "",
          company: "",
          email: "",
          contact: "",
          message: ""
        });
      }, 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl m-4 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side - Info */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Partner with Us</h2>
            <p className="text-gray-600 mb-8">Let us know about you</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-gray-500 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-700">Address</p>
                  <p className="text-gray-600">300/3, 1st Floor, MG Road, Sultanpur, New Delhi - 110030</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-gray-500 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-700">Contact Details</p>
                  <p className="text-gray-600">1800-123-0181</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-gray-500 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-700">Email Us</p>
                  <p className="text-gray-600">info@echargeup.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <p className="font-medium text-gray-700 mb-4">Follow Us :</p>
              <div className="flex space-x-3">
                {["facebook", "instagram", "twitter", "linkedin"].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-orange-400 text-white p-2 rounded-full hover:bg-orange-500 transition-colors flex items-center justify-center w-8 h-8"
                  >
                    {social === "facebook" && (
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    )}
                    {social === "instagram" && (
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    )}
                    {social === "twitter" && (
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    )}
                    {social === "linkedin" && (
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - Form */}
          <div className="bg-[#041620] text-white p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name Name"
                  className="w-full px-4 py-2 bg-transparent border-b border-gray-600 focus:outline-none focus:border-white text-white placeholder-gray-500"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-300">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full px-4 py-2 bg-transparent border-b border-gray-600 focus:outline-none focus:border-white text-white placeholder-gray-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2 bg-transparent border-b border-gray-600 focus:outline-none focus:border-white text-white placeholder-gray-500"
                />
              </div>
              
              <div>
                <label htmlFor="contact" className="block text-sm font-medium mb-2 text-gray-300">
                  Contact
                </label>
                <div className="flex">
                  <div className="bg-transparent border-b border-gray-600 px-2 py-2 flex items-center">
                    <img src="/api/placeholder/32/24" alt="India flag" className="mr-1" />
                    <span className="text-gray-300">▼</span>
                  </div>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="999 999 9999"
                    className="w-full px-4 py-2 bg-transparent border-b border-gray-600 focus:outline-none focus:border-white text-white placeholder-gray-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell about your company"
                  rows={3}
                  className="w-full px-4 py-2 bg-transparent border-b border-gray-600 focus:outline-none focus:border-white text-white placeholder-gray-500 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-3 bg-yellow-400 text-black font-medium rounded-lg flex items-center justify-center mt-8"
              >
                {loading ? "Sending..." : "Send Message"} 
                {!loading && <span className="ml-2">→</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#013c4c] text-white rounded-lg shadow-xl p-6 w-full max-w-md text-center">
            <p className="text-lg">Thank you! Your message has been sent.</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Demo component to show the modal
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <PartnerWithUsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}