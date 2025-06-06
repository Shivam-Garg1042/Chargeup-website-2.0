import { useState } from "react";
import { X, MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const ConfirmationModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm" style={{ marginLeft: '0px' }}>
      <div className="bg-[#013c4c] text-white rounded-lg shadow-xl p-6 w-full max-w-md text-center mx-4">
        <p className="text-lg w-auto h-auto">Thank you! Your partnership request has been sent.</p>
      </div>
    </div>
  );
};

export default function PartnerModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    contact: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  // API service function for partner form submission
  const submitPartnerForm = async (formData) => {
    // Replace with your actual API URL
    const API_BASE_URL = 'https://contact-forms-api-624167443867.us-central1.run.app/api';
    
    const response = await fetch(`${API_BASE_URL}/partner`, {
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

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      await submitPartnerForm(formData);
      setShowConfirmationModal(true);
      setTimeout(() => {
        setFormData({ name: "", companyName: "", email: "", contact: "", message: "" });
        setShowConfirmationModal(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting partner form:', error);
      setError('Failed to send partnership request. Please try again.');
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
        className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm p-4"
        onClick={handleOverlayClick}
      >
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 z-10 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Left side - Contact Info */}
            <div className="hidden lg:flex flex-col justify-center p-12 bg-gray-50">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-3">Partner with Us</h1>
                <p className="text-gray-600 mb-12">Let us know about you</p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <MapPin className="text-gray-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        300/3, 1st Floor, MG Road, Sultanpur, New Delhi – 110030
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <Phone className="text-gray-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Contact Details</h3>
                      <p className="text-gray-600 text-sm">1800-123-0181</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <Mail className="text-gray-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      <p className="text-gray-600 text-sm">info@echargeup.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-semibold text-gray-900 mb-4">Follow Us :</h3>
                  <div className="flex space-x-3">
                    {[
                      { Icon: FaFacebook, color: "bg-blue-600" },
                      { Icon: FaInstagram, color: "bg-pink-600" },
                      { Icon: FaTwitter, color: "bg-blue-400" },
                      { Icon: FaLinkedin, color: "bg-blue-700" }
                    ].map(({ Icon, color }, index) => (
                      <a
                        key={index}
                        href="#"
                        className={`${color} text-white p-3 rounded-full hover:opacity-80 transition-opacity shadow-lg`}
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Form */}
            <div className="bg-[#1a2332] text-white px-8 py-4 lg:p-12 flex flex-col justify-center">
              {/* Mobile header */}
              <div className="lg:hidden mb-4">
                <h1 className="text-3xl font-bold text-white mb-2">Partner with Us</h1>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded text-red-200 text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-0 text-gray-300">
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
                    className="w-full px-0 py-2 bg-transparent border-0 border-b border-gray-600 focus:outline-none focus:border-orange-400 text-white placeholder-gray-500 text-lg transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium mb-0 text-gray-300">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    placeholder="Company Name"
                    className="w-full px-0 py-2 bg-transparent border-0 border-b border-gray-600 focus:outline-none focus:border-orange-400 text-white placeholder-gray-500 text-lg transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-0 text-gray-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="w-full px-0 py-2 bg-transparent border-0 border-b border-gray-600 focus:outline-none focus:border-orange-400 text-white placeholder-gray-500 text-lg transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium mb-0 text-gray-300">
                    Contact
                  </label>
                  <div className="flex items-center border-b border-gray-600 focus-within:border-orange-400 transition-colors">
                    <div className="flex items-center gap-2 pr-3">
                      <span className="text-gray-400">+91</span>
                    </div>
                    <input
                      type="tel"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      placeholder="999 999 9999"
                      className="flex-1 px-0 py-2 bg-transparent border-0 focus:outline-none text-white placeholder-gray-500 text-lg"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-0 text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell about your company"
                    rows={2}
                    className="w-full px-0 py-2 bg-transparent border-0 border-b border-gray-600 focus:outline-none focus:border-orange-400 text-white placeholder-gray-500 resize-none text-lg transition-colors"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full mt-8 py-3 bg-[#0D8948] hover:bg-[#08644B] text-gray-100 font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'} 
                  {!loading && <span className="text-xl">→</span>}
                </button>
              </div>
              
              {/* Mobile contact info */}
              <div className="lg:hidden mt-8 pt-6 border-t border-gray-600">
                <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                  <div>
                    <p className="text-gray-400 mb-1">Phone</p>
                    <p className="text-white">1800-123-0181</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Email</p>
                    <p className="text-white text-xs">info@echargeup.com</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-400 text-sm mb-3">Follow Us:</p>
                  <div className="flex space-x-3">
                    {[
                      { Icon: FaFacebook, color: "bg-blue-600" },
                      { Icon: FaInstagram, color: "bg-pink-600" },
                      { Icon: FaTwitter, color: "bg-blue-400" },
                      { Icon: FaLinkedin, color: "bg-blue-700" }
                    ].map(({ Icon, color }, index) => (
                      <a
                        key={index}
                        href="#"
                        className={`${color} text-white p-2 rounded-full hover:opacity-80 transition-opacity`}
                      >
                        <Icon size={14} />
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