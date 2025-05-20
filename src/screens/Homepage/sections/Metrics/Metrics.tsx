import { Card, CardContent } from "../../../../components/ui/card";
import { useState, useEffect } from "react";

export const Metrics = (): JSX.Element => {
  // Animation states for counting effect
  const [counts, setCounts] = useState({
    co2: 0,
    kms: 0,
    income: 0,
    drivers: 0,
  });
  
  // Visibility state for animation triggers
  const [isVisible, setIsVisible] = useState(false);

  // Data for metric cards to enable mapping
  const metricCards = [
    {
      key: "co2",
      value: "1",
      suffix: " Lakh+",
      description: "CO2 Emission Saved",
      targetValue: 1,
      icon: (
        <svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" 
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      key: "kms",
      value: "8",
      suffix: "k+",
      description: "KMs run",
      targetValue: 8,
      icon: (
        <svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z" 
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      key: "income",
      value: "7.8",
      suffix: "K+",
      description: "Driver Income Generated",
      targetValue: 7.8,
      icon: (
        <svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 17V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 13L12 17L16 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" 
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      key: "drivers",
      value: "5000",
      suffix: "+",
      description: "Drivers",
      targetValue: 5000,
      icon: (
        <svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" 
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" 
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  // Intersection Observer setup for triggering animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector("#metrics-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Animate counting when section becomes visible
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds animation
      const steps = 50; // number of steps
      const interval = duration / steps;

      const timers = metricCards.map((card) => {
        return setInterval(() => {
          setCounts((prevCounts) => {
            const key = card.key;
            const target = card.targetValue;
            const current = prevCounts[key];
            
            // Calculate next value with easing
            const next = current + (target - current) / 10;
            
            // If we're close enough to target, set it directly
            if (Math.abs(next - target) < 0.1) {
              return { ...prevCounts, [key]: target };
            }
            
            return { ...prevCounts, [key]: next };
          });
        }, interval);
      });

      return () => {
        timers.forEach(timer => clearInterval(timer));
      };
    }
  }, [isVisible]);

  // Format the count values for display
  const formatCount = (key, value) => {
    switch (key) {
      case "co2":
        return Math.round(value * 10) / 10;
      case "kms":
        return Math.round(value * 10) / 10;
      case "income":
        return Math.round(value * 10) / 10;
      case "drivers":
        return Math.round(value);
      default:
        return value;
    }
  };

  return (
    <section id="metrics-section" className="relative w-full bg-white overflow-hidden ">
      <div className="flex flex-col items-center w-full">
        {/* Background with gradient */}
        <div className="relative w-full py-32  lg:h-[460px]">
          <div className="absolute w-full h-full top-0 left-0 [background:radial-gradient(50%_50%_at_50%_100%,rgba(0,33,24,1)_0%,rgba(0,40,29,1)_53%,rgba(2,2,2,1)_100%)]" />
          <div className="absolute w-full h-[30%] bottom-0 left-0 [background:radial-gradient(50%_50%_at_51%_0%,rgba(6,91,66,1)_0%,rgba(2,4,3,1)_100%)]" />
          <div className="absolute w-full h-[30%] bottom-0 left-0 bg-[#00000066] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]" />

          {/* Decorative graphic - hidden on small screens */}
          <div className="hidden md:flex flex-col w-[250px] lg:w-[403px] items-start gap-px absolute top-[93px] right-0 overflow-hidden opacity-[0.87] animate-pulse">
            <div className="relative w-[300px] lg:w-[458px] h-[200px] lg:h-[323.74px] mr-[-55.00px]">
              <div className="relative h-[324px]">
                <img
                  className="absolute w-[280px] lg:w-[421px] h-auto lg:h-[278px] top-0 left-[37px]"
                  alt="Vector"
                  src="/vector-5.svg"
                />
                <div className="absolute w-[60px] lg:w-[98px] h-[60px] lg:h-[98px] top-[150px] lg:top-[225px] left-0 rounded-[49.13px] border-[10px] lg:border-[16.38px] border-solid border-black" />
                <div className="absolute w-[60px] lg:w-[98px] h-[60px] lg:h-[98px] top-[150px] lg:top-[225px] left-[220px] lg:left-[335px] rounded-[49.13px] border-[10px] lg:border-[16.38px] border-solid border-black" />
                <div className="absolute w-4 lg:w-5 h-4 lg:h-5 top-[170px] lg:top-[266px] left-[25px] lg:left-[39px] bg-[#043a2a] rounded-[10.08px]" />
                <div className="absolute w-4 lg:w-5 h-4 lg:h-5 top-[170px] lg:top-[266px] left-[240px] lg:left-[374px] bg-[#043a2a] rounded-[10.08px]" />
                <img
                  className="absolute w-[70px] lg:w-[114px] h-auto lg:h-[87px] top-[130px] lg:top-[190px] left-0"
                  alt="Vector"
                  src="/vector-4.svg"
                />
              </div>
            </div>
          </div>

          {/* Title and subtitle */}
          <div className="absolute top-[40px] md:top-[80px] lg:top-[120px] left-0 w-full flex flex-col items-center px-4 z-10">
            <h2 className="font-medium text-white text-[28px] md:text-[48px] lg:text-[54px] text-center tracking-[-1px] lg:tracking-[-1.28px] leading-[1.2] lg:leading-[80px] font-['Plus_Jakarta_Sans',Helvetica]">
              Every Ride Drives Impact - for Drivers and the Earth
            </h2>
            <p className="mt-4 md:px-[20px] lg:mt-7 max-w-[989px] text-white text-opacity-90 text-center font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[16px] md:text-[18px] lg:text-[21.3px] leading-6 lg:leading-8">
            People + Planet First. From empowering thousands of drivers to cutting carbon emissions, our rides move more than people, they move change.
            </p>
          </div>
        </div>

        {/* Metric cards */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-12 relative mt-[-20px] md:mt-[-100px] lg:mt-[-85.67px]  px-4 max-w-[1610px]">
          {metricCards.map((card, index) => (
            <Card
              key={index}
              className={` w-full sm:w-[calc(50%-8px)] lg:w-[280px] lg:h-[140px] rounded-[20px] shadow-[0px_26.67px_66.67px_#3440541a] bg-background-colorswhite transform transition-all duration-500 hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 "
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                transitionDelay: `${index * 150}ms` 
              }}
            >
              <CardContent className="flex flex-col items-center justify-center p-[16px] md:p-[8px]">
                {/* Icon at the top */}
                {/* <div className="mb-2 opacity-0 animate-fadeIn" style={{ animationDelay: `${(index * 150) + 500}ms`, animationFillMode: 'forwards' }}>
                  {card.icon}
                </div> */}
                
                <div className="flex items-center justify-center">
                  <span className="mt-[-1.33px] text-[36px] md:text-[48px] lg:text-[48px] text-center tracking-[-1px] lg:tracking-[-1.28px] leading-[1.2] lg:leading-[80px] font-['Plus_Jakarta_Sans',Helvetica] font-medium text-text-colors950">
                    {isVisible ? formatCount(card.key, counts[card.key]) : "0"}
                  </span>
                  <span className="mt-[-1.33px] text-[36px] md:text-[48px] lg:text-[48px] text-center tracking-[-1px] lg:tracking-[-1.28px] leading-[1.2] lg:leading-[80px] font-['Plus_Jakarta_Sans',Helvetica] font-medium text-black-600">
                    {card.suffix}
                  </span>
                </div>
                <div className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-text-colors500 text-lg md:text-xl lg:text-xl text-center tracking-[0] leading-7 lg:leading-10 ">
                  {card.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-500 rounded-full opacity-50 animate-ping hidden md:block"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-emerald-300 rounded-full opacity-40 animate-ping hidden md:block" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-ping hidden md:block" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </section>
  );
};