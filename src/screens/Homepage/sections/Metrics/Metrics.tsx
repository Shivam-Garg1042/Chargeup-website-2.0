import { Card, CardContent } from "../../../../components/ui/card";
import { useState, useEffect } from "react";
import { Leaf, Route, Banknote, Users } from "lucide-react";

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
      suffix: " Lac+",
      description: "CO₂ Emission Saved",
      targetValue: 1,
      icon: (
        <div className="rounded-full bg-emerald-900 p-3">
          <Leaf size={36} className="text-white" />
        </div>
      ),
    },
    {
      key: "kms",
      value: "8",
      suffix: "K+",
      description: "KMs run",
      targetValue: 8,
      icon: (
        <div className="rounded-full bg-emerald-900 p-3">
          <Route size={36} className="text-white" />
        </div>
      ),
    },
    {
      key: "income",
      value: "7.8",
      suffix: "K+",
      description: "Driver Income Generated",
      targetValue: 7.8,
      icon: (
        <div className="rounded-full bg-emerald-900 p-3">
          <Banknote size={36} className="text-white" />
        </div>
      ),
    },
    {
      key: "drivers",
      value: "5000",
      suffix: "+",
      description: "Drivers",
      targetValue: 5000,
      icon: (
        <div className="rounded-full bg-emerald-900 p-3">
          <Users size={36} className="text-white" />
        </div>
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
        <div className="relative w-full py-16 sm:py-20 md:py-28 lg:py-32 lg:h-[420px]">
          <div className="absolute w-full h-full top-0 left-0 [background:radial-gradient(50%_50%_at_50%_100%,rgba(0,33,24,1)_0%,rgba(0,40,29,1)_53%,rgba(2,2,2,1)_100%)]" />
          <div className="absolute w-full h-[30%] bottom-0 left-0 [background:radial-gradient(50%_50%_at_51%_0%,rgba(6,91,66,1)_0%,rgba(2,4,3,1)_100%)]" />
          <div className="absolute w-full h-[30%] bottom-0 left-0 bg-[#00000066] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]" />

          {/* Decorative graphic - hidden on small screens */}
          <div className="hidden md:flex flex-col w-[200px] lg:w-[403px] items-start gap-px absolute top-[93px] right-0 overflow-hidden opacity-[0.87] animate-pulse">
            <div className="relative w-[250px] lg:w-[458px] h-[150px] lg:h-[323.74px] mr-[-55.00px]">
              <div className="relative h-[250px] lg:h-[324px]">
                <img
                  className="absolute w-[200px] md:w-[250px] lg:w-[421px] h-auto top-0 left-[37px]"
                  alt="Vector"
                  src="/vector-5.svg"
                />
                <div className="absolute w-[40px] md:w-[50px] lg:w-[98px] h-[40px] md:h-[50px] lg:h-[98px] top-[100px] md:top-[150px] lg:top-[225px] left-0 rounded-full border-[8px] md:border-[10px] lg:border-[16.38px] border-solid border-black" />
                <div className="absolute w-[40px] md:w-[50px] lg:w-[98px] h-[40px] md:h-[50px] lg:h-[98px] top-[100px] md:top-[150px] lg:top-[225px] left-[160px] md:left-[200px] lg:left-[335px] rounded-full border-[8px] md:border-[10px] lg:border-[16.38px] border-solid border-black" />
                <div className="absolute w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5 top-[115px] md:top-[170px] lg:top-[266px] left-[15px] md:left-[25px] lg:left-[39px] bg-[#043a2a] rounded-[8px] lg:rounded-[10.08px]" />
                <div className="absolute w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5 top-[115px] md:top-[170px] lg:top-[266px] left-[175px] md:left-[220px] lg:left-[374px] bg-[#043a2a] rounded-[8px] lg:rounded-[10.08px]" />
                <img
                  className="absolute w-[50px] md:w-[70px] lg:w-[114px] h-auto top-[90px] md:top-[130px] lg:top-[190px] left-0"
                  alt="Vector"
                  src="/vector-4.svg"
                />
              </div>
            </div>
          </div>

          {/* Title and subtitle */}
          <div className="absolute top-[40px] sm:top-[40px] md:top-[60px] lg:top-[100px] left-0 w-full flex flex-col items-center px-4 ">
            <h2 className="font-medium text-white text-[26px] sm:text-[28px] md:text-[36px] lg:text-[54px] text-center tracking-[-0.5px] sm:tracking-[-1px] lg:tracking-[-1.28px] leading-[1.2] lg:leading-[80px] font-['Plus_Jakarta_Sans',Helvetica] px-4 sm:px-8 md:px-12">
              Creating impact with every Ride 
            </h2>
          </div>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative mt-[70px] sm:mt-[-80px] md:mt-[-90px] lg:mt-[-85px] px-4 sm:px-6 md:px-8 max-w-[1320px] w-full h-full mb-8">
          {metricCards.map((card, index) => (
            <div key={index} className="relative flex justify-center">
              {/* Half-in-half-out icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 z-10">
                {card.icon}
              </div>
              
              <Card
                className={`w-full rounded-[20px] shadow-[1px_16px_16px_#3440541a] bg-background-colorswhite transform transition-all duration-500 hover:shadow-lg ${
                  isVisible ? "opacity-100 translate-y-1" : "opacity-0 translate-y-10"
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transitionDelay: `${index * 150}ms` 
                }}
              >
                <CardContent className="flex flex-col items-center justify-center p-4 pt-8">
                  <div className="flex items-center justify-center">
                    <span className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-center tracking-[-0.5px] sm:tracking-[-0.8px] lg:tracking-[-1.2px] leading-[1.2] font-['Plus_Jakarta_Sans',Helvetica] font-medium text-text-colors950">
                      {isVisible ? formatCount(card.key, counts[card.key]) : "0"}
                    </span>
                    <span className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-center tracking-[-0.5px] sm:tracking-[-0.8px] lg:tracking-[-1.2px] leading-[1.2] font-['Plus_Jakarta_Sans',Helvetica] font-medium text-black-600">
                      {card.suffix}
                    </span>
                  </div>
                  <div className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-text-colors500 text-sm sm:text-base md:text-lg lg:text-xl text-center tracking-[0] leading-6 lg:leading-7">
                    {card.key === "co2" ? (
                      <>CO<sub>2</sub> Emission Saved</>
                    ) : (
                      card.description
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
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