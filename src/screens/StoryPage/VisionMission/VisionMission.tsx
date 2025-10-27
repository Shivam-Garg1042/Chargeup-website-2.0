import { useState } from "react";

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState("vision");

  // Data for the tabs with separate images using green/blue palette
  const tabOptions = [
    {
      id: "vision",
      label: "Our Vision",
      content: {
        title: "Empowering Tomorrow's Drivers",
        description:
          "To become the largest driver platform, empowering millions of last-mile drivers with easy EV ownership and higher earnings making them financially independent.",
        image: "/driver2.png",
        alt: "Vision - Empowering drivers with sustainable transportation",
        gradient: "from-[#0F9547] to-[#0C7D49]",
        accentColor: "#0F9547"
      },
    },
    {
      id: "mission",
      label: "Our Mission",
      content: {
        title: "1 Million Drivers by 2030",
        description:
          "Chargeup is not just enabling EV adoption, it's building the digital infrastructure of India's new driver economy that simplifies EV ownership and increases their daily earnings.",
        image: "/mission.png",
        alt: "Mission - Building digital infrastructure for driver economy",
        gradient: "from-[#033F4F] to-[#002751]",
        accentColor: "#033F4F"
      },
    },
  ];

  const activeContent = tabOptions.find((tab) => tab.id === activeTab)?.content;

  return (
    <section className="relative flex flex-col w-full py-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#0F9547]/10 to-[#033F4F]/10 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#033F4F]/10 to-[#0F9547]/10 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="flex flex-col w-full max-w-screen-xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 w-full">
          {/* Tab buttons column */}
          <div className="flex md:flex-col gap-4 z-20 lg:sticky lg:top-8">
            {tabOptions.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative px-8 py-4 rounded-2xl text-lg md:text-xl font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap shadow-lg
                  ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.content.gradient} text-white shadow-xl`
                      : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#0F9547]/30 hover:shadow-xl"
                  }`}
              >
                {/* Active indicator */}
                {activeTab === tab.id && (
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
                )}
                
                <span className="relative z-10">{tab.label}</span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F9547] to-[#033F4F] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* Animated divider */}
          <div className="hidden lg:block relative">
            <div className={`w-1 h-full bg-gradient-to-b ${activeContent?.gradient} mx-6 rounded-full transition-all duration-500`}></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
          </div>

          {/* Content section with animation */}
          <div className="flex flex-col lg:flex-row gap-8 flex-1">
            <div className="flex flex-col gap-6 flex-1 animate-fadeIn">
              {/* Title with gradient */}
              <h2 className={`font-bold text-gray-900 text-3xl md:text-4xl lg:text-5xl leading-tight`}>
                <span className={`bg-gradient-to-r ${activeContent?.gradient} bg-clip-text text-transparent`}>
                  {activeContent?.title}
                </span>
              </h2>
              
              {/* Description with better typography */}
              <p className="  font-normal text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed md:mr-14">
                {activeContent?.description}
              </p>
              
              {/* Statistics or CTA could go here */}
              {/* <div className="flex items-center gap-4 mt-4">
                <div className={`w-12 h-1 bg-gradient-to-r ${activeContent?.gradient} rounded-full`}></div>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {activeTab === "vision" ? "Our Future" : "Our Goal"}
                </span>
              </div> */}
            </div>
            
            {/* Dynamic image with enhanced styling */}
            <div className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-br ${activeContent?.gradient} rounded-3xl opacity-20 transform rotate-3 group-hover:rotate-6 transition-transform duration-300`}></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300">
                <img 
                  src={activeContent?.image} 
                  alt={activeContent?.alt}
                  className="w-full md:w-80 lg:w-96 h-64 md:h-80 object-cover rounded-2xl"
                />
                
                {/* Image overlay with icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
                  {activeTab === "vision" ? (
                    <svg className="w-6 h-6" style={{color: '#0F9547'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" style={{color: '#033F4F'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}