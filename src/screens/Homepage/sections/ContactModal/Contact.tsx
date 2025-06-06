import { useState } from "react";
import { X } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MapPin, Phone, Mail } from "lucide-react";

const ConfirmationModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm" style={{ marginLeft: '0px' }}>
      <div className="bg-[#013c4c] text-white rounded-lg shadow-xl p-6 w-full max-w-md text-center mx-4">
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
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  // Updated API service functions using fetch instead of axios
  const submitContactForm = async (formData) => {
    // Replace with your actual API URL
    const API_BASE_URL = 'https://contact-forms-api-624167443867.us-central1.run.app/api';
    
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await submitContactForm(formData);
      setShowConfirmationModal(true);
      setTimeout(() => {
        setFormData({ name: "", contact: "", message: "" });
        setShowConfirmationModal(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to send message. Please try again.');
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
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 md:text-gray-500 md:hover:text-gray-700 text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side - Contact Info (Hidden on mobile) */}
            <div className="hidden md:block p-8 md:p-12">
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
                      className="bg-[#0C7D49] text-white p-3 rounded-full hover:bg-[#023350] transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right side - Form (Full width on mobile) */}
            <div className="bg-[#041620] text-white p-6 md:p-12 col-span-1 md:col-span-1">
              {/* Mobile-only header */}
              <div className="block md:hidden mb-4">
                <h2 className="text-2xl font-bold text-white mb-2">Contact Us</h2>
              </div>
              
              {error && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded text-red-200 text-sm">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
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
                  className="w-full py-4 bg-[#0C7D49] text-gray-50 font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-[#023350] transition-colors text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'} 
                  {!loading && <span className="ml-1">→</span>}
                </button>
              </form>
              
              {/* Mobile-only contact info at bottom */}
              <div className="block md:hidden mt-8 pt-8 border-t border-gray-600">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="text-gray-400" size={16} />
                    <span className="text-gray-300">1800-123-0181</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-gray-400" size={16} />
                    <span className="text-gray-300">info@echargeup.com</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="text-gray-300 text-sm mb-3">Follow Us:</p>
                  <div className="flex space-x-3">
                    {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="bg-[#0C7D49] text-white p-2 rounded-full hover:bg-[#023350] transition-colors"
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showConfirmationModal && <ConfirmationModal onClose={() => setShowConfirmationModal(false)} />}
    </>
  );
};

export default ContactModal;