import { Card, CardContent } from "../../../../components/ui/card";
import { useState, useEffect } from "react";
import { Leaf, Route, Banknote, Users } from "lucide-react";

export const Metrics = () => {
  // Animation states for counting effect
  const [counts, setCounts] = useState({
    co2: 0,
    kms: 0,
    income: 0,
    drivers: 0,
  });
  
  // Visibility state for animation triggers
  const [isVisible, setIsVisible] = useState(false);

  // Background image - using the uploaded forest road image
  const backgroundImageUrl = "/metrics.png";

  // Data for metric cards to enable mapping
  const metricCards = [
    {
      key: "co2",
      value: "13.8",
      suffix: " Mn Kg",
      description: "CO₂ emission saved",
      targetValue: 13.8,
      icon: (
        <div className="rounded-full bg-emerald-900 p-3">
          <Leaf size={44} className="text-white" />
        </div>
      ),
    },
    {
      key: "kms",
      value: "10",
      suffix: "Cr",
      description: "KMs run",
      targetValue: 10,
      icon: (
        <div className="rounded-full bg-emerald-900 p-3">
          <Route size={44} className="text-white" />
        </div>
      ),
    },
    {
      key: "income",
      value: "119",
      suffix: "Cr",
      description: "Driver income generated",
      targetValue: 119,
      icon: (
        <div className="rounded-full bg-emerald-900 p-3">
          <Banknote size={44} className="text-white" />
        </div>
      ),
    },
    {
      key: "drivers",
      value: "8000",
      suffix: "+",
      description: "Drivers",
      targetValue: 8000,
      icon: (
        <div className="rounded-full bg-emerald-900 p-3">
          <Users size={44} className="text-white" />
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
      <div className="flex flex-col items-center w-full ">
        {/* Background with image */}
        <div className="relative w-full py-16 sm:py-20 md:py-28 lg:py-32 lg:h-[420px] ">
          {/* Background image layer */}
          <div 
            className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
            }}
          />
          
          {/* Dark overlay for better text readability */}
          <div className="absolute w-full h-full top-0 left-0 bg-black/30 sm:bg-black/20" />
          
          {/* Optional: Additional gradient overlay for enhanced visual effect */}
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-emerald-900/40 via-emerald-800/50 to-black/80 sm:from-emerald-900/30 sm:via-emerald-800/40 sm:to-black/70" />
          
          {/* Bottom blur effect */}
          <div className="absolute w-full h-[30%] bottom-0 left-0  backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]" />

          {/* Mobile Heading - Only visible on mobile */}
          <div className=" absolute inset-0 flex items-center justify-center px-4 z-10">
            <h2 className="absolute sm:top-32 font-bold text-white text-[24px] sm:text-[52px] text-center tracking-[-0.5px] leading-[1.3] drop-shadow-lg ">
              Creating impact with every ride
            </h2>
          </div>

        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 relative mt-[70px] sm:mt-[-80px] md:mt-[-90px] lg:mt-[-85px] px-4 sm:px-6 md:px-8 max-w-[1320px] w-full h-full lg:h-[150px] mb-6 md:mb-8">
          {metricCards.map((card, index) => (
            <div key={index} className="relative flex justify-center">
              {/* Half-in-half-out icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-7 z-10">
                {card.icon}
              </div>
              
              <Card
                className={`w-full rounded-[20px] shadow-[1px_16px_16px_#3440541a] bg-white transform transition-all duration-500 hover:shadow-lg ${
                  isVisible ? "opacity-100 translate-y-3" : "opacity-0 translate-y-10"
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transitionDelay: `${index * 150}ms` 
                }}
              >
                <CardContent className="flex flex-col items-center justify-center p-4 pt-8 gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-center tracking-[-0.5px] sm:tracking-[-0.8px] lg:tracking-[-1.2px] leading-[1.2] font-medium text-gray-950">
                      {isVisible ? formatCount(card.key, counts[card.key]) : "0"}
                    </span>
                    <span className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-center tracking-[-0.5px] sm:tracking-[-0.8px] lg:tracking-[-1.2px] leading-[1.2] font-medium text-gray-950">
                      {card.suffix}
                    </span>
                  </div>
                  <div className="font-normal text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl text-center tracking-[0] leading-6 lg:leading-7">
                    {card.key === "co2" ? (
                      <>CO<sub>2</sub> emission saved</>
                    ) : (
                      card.description
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        
        
          
      </div>
    </section>
  );
};