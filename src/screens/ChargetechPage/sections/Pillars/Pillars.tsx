import  { useState, useEffect } from "react";

export const Pillars = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Data for the feature sections - reduced to 4 pillars
  const pillars = [
    {
      id: "01",
      title: "Asset Management",
      description: "Tech enabled predictive maintenance enabling zero downtime and quick service.",
      icon: "🚀",
      color: "#0F9547",
      imageUrl: "/pillar1.jpg",
      points: [
        "365 days running assurance",
        "Predictive failures in advance", 
        "Controlling warranty violation"
      ]
    },
    {
      id: "02", 
      title: "Default Management",
      description: "Securing EV underwriting with default prediction and real-time asset control on fingertips.",
      icon: "📱",
      color: "#0C7D49",
      imageUrl: "/pillare2.png",
      points: [
        "Predicting payment failure",
        "Remote tracking and mobilization",
        "Profiling based on driving behavior"
      ]
    },
    {
      id: "03",
      title: "Digital underwriting beyond credit score ", 
      description: "Enabling access to credits with no or low credit score.",
      icon: "🔋",
      color: "#0A704A",
      imageUrl: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=400&h=300&fit=crop",
      points: [
        "Generating qualified leads",
        "Assessment based on digital footprint",
        "Derisking EV financing"
      ]
    },
    {
      id: "04",
      title: "Increased asset life and performance",
      description: "Through our predictive tech and network of resale, repair and replace.",
      icon: "🧠",
      color: "#07584D",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      points: [
        "Reducing fault rates",
        "Increasing uptime",
        
        "Simulating driver behavior ",
      ]
    }
  ];

  // Auto-advance through pillars
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pillars.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [pillars.length]);

  return (
    <section className="bg-gradient-to-br from-[#0F9547]/10 to-[#0C7D49]/10 py-8 md:py-20 px-0 overflow-hidden h-[830px] flex items-center">
      <div className="w-full flex flex-col lg:flex-row">
        {/* Mobile Header - Only visible on mobile */}
        <div className="lg:hidden px-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Technology Pillars</h2>
          {/* <p className="text-gray-600 text-center">Discover the core technologies that power our platform</p> */}
        </div>

        {/* Left Side - Large Creative Circles - Mobile: Horizontal scroll, Desktop: Vertical */}
        <div className="relative lg:w-80 w-full lg:h-screen h-32 flex lg:items-center ">
          {/* Mobile: Horizontal scroll circles */}
          <div className="lg:hidden w-full overflow-x-auto px-4">
            <div className="flex space-x-6 pb-4">
              {pillars.map((pillar, index) => {
                const isActive = index === activeIndex;
                
                return (
                  <div
                    key={pillar.id}
                    className="flex-shrink-0 relative transition-all duration-700 ease-in-out cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Mobile Circle */}
                    <div 
                      className={`mt-2  w-20 h-20 md:w-20 md:h-20 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-white shadow-2xl relative overflow-hidden transition-all duration-500 border-2 border-white/30 ${
                        isActive ? 'scale-110' : 'scale-95 opacity-70'
                      }`}
                      style={{ 
                        backgroundColor: pillar.color,
                        boxShadow: isActive ? 
                          `0 0 30px ${pillar.color}80, 0 0 60px ${pillar.color}40` : 
                          `0 10px 20px ${pillar.color}30`
                      }}
                    >
                      <span className="relative z-10 drop-shadow-lg">{pillar.icon}</span>
                      
                      {/* Mobile active indicator */}
                      {isActive && (
                        <div 
                          className="absolute -inset-2 rounded-full animate-ping opacity-30"
                          style={{ 
                            border: `2px solid ${pillar.color}`,
                            animationDuration: '2s'
                          }}
                        ></div>
                      )}
                    </div>

                    {/* Mobile number badge */}
                    <div 
                      className={`absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                        isActive ? 'scale-110' : 'scale-90'
                      }`}
                      style={{ color: pillar.color }}
                    >
                      {pillar.id}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop: Animated background patterns */}
          <div className="absolute inset-0 overflow-hidden hidden lg:block ">
            {/* Floating geometric shapes */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-[#0F9547]/10 to-[#0C7D49]/10 rounded-2xl rotate-45 animate-pulse"></div>
            <div className="absolute top-40 left-20 w-16 h-16 bg-gradient-to-br from-[#0C7D49]/10 to-[#0A704A]/10 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
            <div className="absolute bottom-32 left-5 w-12 h-12 bg-gradient-to-br from-[#0A704A]/10 to-[#07584D]/10 rounded-lg rotate-12 animate-pulse"></div>
            <div className="absolute bottom-20 left-32 w-8 h-8 bg-gradient-to-br from-[#07584D]/10 to-[#0F9547]/10 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
            
   
          </div>

          {/* Desktop: Semi-circle container */}
          <div className="relative w-80 h-96 z-10 hidden lg:block">
            {pillars.map((pillar, index) => {
              // Position circles in a semi-circle from top to bottom
              const angle = (index * 45) - 67.5; // 45 degrees apart, starting from top-left
              const radius = 180  ;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              const isActive = index === activeIndex;
              
              let opacity = isActive ? 1 : 0.6;
              let scale = isActive ? 1.2 : 0.85;
              let zIndex = isActive ? 30 : 10;

              return (
                <div
                  key={pillar.id}
                  className="absolute transition-all duration-700 ease-in-out cursor-pointer"
                  style={{
                    left: `${x + 150}px`, // Center + offset
                    top: `${y + 180}px`, // Center + offset
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    opacity,
                    zIndex,
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Outer glow ring */}
                  <div 
                    className={`absolute -inset-8 rounded-full transition-all duration-700 ${
                      isActive ? 'animate-pulse' : ''
                    }`}
                    style={{ 
                      background: `radial-gradient(circle, ${pillar.color}15 0%, transparent 70%)`,
                      filter: isActive ? 'blur(8px)' : 'blur(4px)'
                    }}
                  ></div>

                  {/* Main Circle */}
                  <div 
                    className="w-28 h-28 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-2xl relative overflow-hidden group transition-all duration-500 border-4 border-white/30 "
                    style={{ 
                      backgroundColor: pillar.color,
                      boxShadow: isActive ? 
                        `0 0 60px ${pillar.color}80, 0 0 120px ${pillar.color}40, inset 0 0 20px ${pillar.color}60` : 
                        `0 20px 40px ${pillar.color}30, inset 0 0 15px ${pillar.color}40`
                    }}
                  >
                    {/* Animated inner gradient */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/10 rounded-full transition-transform duration-1000 ${
                        isActive ? 'animate-spin' : 'rotate-45'
                      }`}
                      style={{ animationDuration: '4s' }}
                    ></div>
                    
                    {/* Glass effect overlay */}
                    <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                    
                    {/* Icon */}
                    <span className="relative z-10 text-2xl drop-shadow-lg">{pillar.icon}</span>
                    
                    {/* Rotating border effect */}
                    {isActive && (
                      <>
                        <div 
                          className="absolute -inset-1 rounded-full animate-spin border-2 border-transparent"
                          style={{ 
                            background: `linear-gradient(45deg, ${pillar.color}, transparent, ${pillar.color}) border-box`,
                            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'exclude',
                            animationDuration: '3s'
                          }}
                        ></div>
                        <div 
                          className="absolute -inset-3 rounded-full animate-ping opacity-30"
                          style={{ 
                            border: `2px solid ${pillar.color}`,
                            animationDuration: '2s'
                          }}
                        ></div>
                      </>
                    )}
                  </div>

                  {/* Connection line to content */}
                  {isActive && (
                    <div 
                      className="absolute top-12 left-24 w-32 h-1 rounded-full animate-pulse shadow-lg"
                      style={{ 
                        background: `linear-gradient(90deg, ${pillar.color}, ${pillar.color}60, transparent)`
                      }}
                    ></div>
                  )}

                  {/* Floating number badge */}
                  <div 
                    className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                      isActive ? 'scale-110 shadow-xl' : 'scale-90'
                    }`}
                    style={{ color: pillar.color }}
                  >
                    {pillar.id}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: Vertical progress visualization */}
          <div className="absolute left-24 top-32 bottom-32 w-2 rounded-full overflow-hidden hidden lg:block">
            <div className="w-full h-full bg-gradient-to-b from-[#0F9547]/20 via-[#0C7D49]/20 to-[#07584D]/20"></div>
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#0F9547] via-[#0C7D49] to-[#07584D] rounded-full transition-all duration-700"
              style={{ 
                height: `${((activeIndex + 1) / pillars.length) * 100}%`,
                boxShadow: `0 0 20px ${pillars[activeIndex].color}60`
              }}
            ></div>
          </div>

          {/* Desktop: Creative corner accent */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#0F9547]/10 to-transparent rounded-br-full hidden lg:block"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#07584D]/10 to-transparent rounded-tr-full hidden lg:block"></div>
        </div>

        {/* Right Side - Fixed Size Content Box */}
        <div className="flex-1 px-4 md:px-8 lg:px-16 flex items-center justify-center">
          <div className="w-full max-w-4xl">
            {/* Fixed Size Content Card */}
            <div 
              className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 ease-in-out transform w-full h-[480px]"
              style={{ 
                boxShadow: `0 25px 50px -12px ${pillars[activeIndex].color}20, 0 0 0 1px ${pillars[activeIndex].color}10`
              }}
            >
              <div className="grid lg:grid-cols-2 gap-0 h-full">
                {/* Image Section - Fixed Height */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-full">
                  <img 
                    src={pillars[activeIndex].imageUrl}
                    alt={pillars[activeIndex].title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  
                  {/* Overlay gradient */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                  ></div>
                  
                  {/* Floating number badge */}
                  <div 
                    className="absolute top-4 left-4 md:top-6 md:left-6 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg"
                    style={{ backgroundColor: pillars[activeIndex].color }}
                  >
                    {pillars[activeIndex].id}
                  </div>
                </div>

                {/* Text Content Section - Fixed Height with Scroll */}
                <div className="p-6 md:p-8 lg:p-10 flex flex-col  h-full overflow-y-auto">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-4xl font-bold mb-3 md:mb-6 text-gray-900 leading-tight">
                    {pillars[activeIndex].title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-xl text-gray-600 leading-relaxed mb-4 md:mb-8">
                    {pillars[activeIndex].description}
                  </p>

                  {/* Feature highlights - Dynamic points from data */}
                  <div className="space-y-2 md:space-y-4">
                    {pillars[activeIndex].points.map((point, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div 
                          className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${pillars[activeIndex].color}20` }}
                        >
                          <span className="text-xs font-bold" style={{ color: pillars[activeIndex].color }}>✓</span>
                        </div>
                        <span className="text-sm md:text-lg text-gray-700 font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-3">
              {pillars.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-8 md:w-12 bg-gradient-to-r from-[#0F9547] to-[#0C7D49]' 
                      : 'w-2 md:w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setActiveIndex(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};