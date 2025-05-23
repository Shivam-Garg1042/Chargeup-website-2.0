import { useState } from "react";
import { X } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';
import { MapPin, Phone, Mail } from "lucide-react";

const ConfirmationModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm" style={{ marginLeft: '0px' }}>
      <div className="bg-[#013c4c] text-white rounded-lg shadow-xl p-6 w-full max-w-md text-center ">
        <p className="text-lg w-auto h-auto">Thank you! Your message has been sent.</p>
      </div>
    </div>
  );
};

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      await axios.post(`${API_URL}/api/contact`, formData);
      setShowConfirmationModal(true);
      setTimeout(() => {
        setFormData({ name: "", contact: "", message: "" });
        setShowConfirmationModal(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm"
        onClick={handleOverlayClick}
        style={{ marginLeft: '0px' }}
      >
        <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-auto m-4 relative overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          >
            <X size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side - Contact Info */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
              <p className="text-gray-600 mb-8">Write to us & we'll get back to you shortly!</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gray-500 mt-1" size={24} />
                  <div>
                    <p className="font-medium text-gray-700">Address</p>
                    <p className="text-gray-600">300/3, 1st Floor, MG Road, Sultanpur, New Delhi - 110030</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-gray-500 mt-1" size={24} />
                  <div>
                    <p className="font-medium text-gray-700">Contact Details</p>
                    <p className="text-gray-600">1800-123-0181</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="text-gray-500 mt-1" size={24} />
                  <div>
                    <p className="font-medium text-gray-700">Email Us</p>
                    <p className="text-gray-600">info@echargeup.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <p className="font-medium text-gray-700 mb-4">Follow Us :</p>
                <div className="flex space-x-4">
                  {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="bg-[#F8BB25] text-white p-3 rounded-full hover:bg-[#e6aa20] transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right side - Form */}
            <div className="bg-[#041620] text-white p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
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
                    required
                    placeholder="Name Name"
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-white text-white placeholder-gray-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium mb-2 text-gray-300">
                    Contact
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    placeholder="+91 999 999 9999"
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-white text-white placeholder-gray-500"
                  />
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
                    required
                    placeholder="Write to here..."
                    rows={4}
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-white text-white placeholder-gray-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#F8BB25] text-black font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-[#e6aa20] transition-colors text-lg"
                >
                  {loading ? 'Sending...' : 'Send Message'} 
                  {!loading && <span className="ml-1">→</span>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showConfirmationModal && <ConfirmationModal onClose={() => setShowConfirmationModal(false)} />}
    </>
  );
};

export default ContactModal;