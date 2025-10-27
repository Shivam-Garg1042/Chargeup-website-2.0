import { useState, useEffect } from 'react';

const BatteryIcon = ({ isCharging = false, level = 100 }) => (
  <div className="relative">
    <svg width="60" height="30" viewBox="0 0 60 30" className="text-[#0D8948]">
      {/* Battery body */}
      <rect x="2" y="6" width="50" height="18" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
      {/* Battery tip */}
      <rect x="52" y="10" width="6" height="10" rx="2" fill="currentColor"/>
      {/* Battery fill */}
      <rect 
        x="4" 
        y="8" 
        width={`${(level / 100) * 46}`} 
        height="14" 
        rx="2" 
        fill="currentColor"
        className={`transition-all duration-1000 ${isCharging ? 'animate-pulse' : ''}`}
      />
      {/* Lightning bolt for charging */}
      {isCharging && (
        <path 
          d="M25 10 L20 18 L24 18 L19 22 L24 14 L20 14 Z" 
          fill="white" 
          className="animate-pulse"
        />
      )}
    </svg>
  </div>
);

const ChargingDots = () => (
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 rounded-full bg-[#0D8948] animate-bounce" style={{ animationDelay: '0ms' }}></div>
    <div className="w-3 h-3 rounded-full bg-[#07584D] animate-bounce" style={{ animationDelay: '150ms' }}></div>
    <div className="w-4 h-4 rounded-full bg-[#002751] animate-bounce" style={{ animationDelay: '300ms' }}></div>
    <div className="w-3 h-3 rounded-full bg-[#07584D] animate-bounce" style={{ animationDelay: '450ms' }}></div>
    <div className="w-2 h-2 rounded-full bg-[#0D8948] animate-bounce" style={{ animationDelay: '600ms' }}></div>
  </div>
);

export default function OpenPositions() {
  const [batteryLevel, setBatteryLevel] = useState(0);
  const isCharging = true;

  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryLevel(prev => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="careers" className="h-auto py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with gradient decorative dots */}
        <div className="flex flex-row items-center justify-center py-12 sm:py-12 gap-4 mb-4">     
          <div className="flex gap-2">
            <div className="w-2 h-2 mt-1 rounded-full bg-[#0D8948]"></div>
            <div className="w-3 h-3 mt-0.5 rounded-full bg-[#07584D]"></div>
            <div className="w-4 h-4 rounded-full bg-[#002751]"></div>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal text-center">
            <span className="text-[#0D8948] font-bold ">Career</span> Opportunities
          </h1>
          
          <div className="flex gap-2">
             <div className="w-4 h-4 rounded-full bg-[#002751]"></div>
            <div className="w-3 h-3 mt-0.5 rounded-full bg-[#07584D]"></div>
            <div className="w-2 h-2 mt-1 rounded-full bg-[#0D8948]"></div>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Battery charging animation */}
          <div className="relative">
            <BatteryIcon isCharging={isCharging} level={batteryLevel} />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="text-xs text-[#07584D] font-medium">
                {Math.round(batteryLevel)}%
              </div>
            </div>
          </div>

          {/* Main message */}
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Appreciate you checking in 😃
            </h2>
            
            <p className="text-xl md:text-2xl bg-gradient-to-r from-[#0D8948] to-[#002751] bg-clip-text text-transparent font-semibold">
              The next openings are powering up soon. Stay connected!
            </p>
          </div>

          {/* Call to action */}
          <div className="bg-gradient-to-r from-[#0D8948] to-[#002751] rounded-xl p-8 text-white max-w-3xl mt-8">
            {/* <h3 className="text-xl font-semibold mb-4">Stay in the Loop</h3>
            <p className="mb-6 opacity-90">
              Be the first to know when exciting opportunities become available. 
              Connect with us and be part of the ChargeUp journey!
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <a 
                href="mailto:careers@chargeup.in" 
                className="bg-white text-[#0D8948] hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
              >
                Send Resume
              </a> */}
              <a 
                href="https://www.linkedin.com/company/chargeup-solutions-pvt-ltd/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0D8948] font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
              >
                Follow on LinkedIn
              </a>
            </div>
          </div>

          {/* Fun fact */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              💡 Fun Fact: Our team is currently 100% charged and ready for new talent to join the mission!
            </p>
          </div>
          {/* Charging animation dots */}
          <div className="py-6">
            <ChargingDots />
          </div>

          {/* Info cards */}
          {/* <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#0D8948] hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#0D8948] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Innovation Driven</h3>
              <p className="text-gray-600 text-sm">
                Join us in revolutionizing the EV ecosystem with cutting-edge technology and sustainable solutions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#07584D] hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#07584D] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Growth Culture</h3>
              <p className="text-gray-600 text-sm">
                Be part of a dynamic team where your ideas matter and your career accelerates with our mission.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#002751] hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#002751] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Impact First</h3>
              <p className="text-gray-600 text-sm">
                Make a real difference in the lives of drivers and contribute to India's sustainable mobility future.
              </p>
            </div>
          </div> */}

          
        </div>
      </div>
    </section>
  );
};

