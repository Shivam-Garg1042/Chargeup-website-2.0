import { useState, useEffect, useRef } from 'react';

export default function ChargeupJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fillPercentage, setFillPercentage] = useState(0);
  const autoScrollRef = useRef(null);
  const autoScrolling = useRef(true);
  
  const milestones = [
    {
      year: "",
      title: "Founded in 2019",
      description: "Laid the foundation to transform EV mobility and driver livelihoods."
    },
    {
      year: "Sep 2021",
      title: "1,000 active drivers reached",
      description: "Early traction proved strong product-market fit."
    },
    {
      year: "Dec 2022",
      title: "$2.5M Pre-Series A funding raised (existing investors)",
      description: "Continued backing underscored investor confidence"
    },
    {
      year: "Jan 2024",
      title: " Partnership with 1st NBFC Partner : Ascend Capital (NBFC)",
      description: " Unlocking financing access for thousands of drivers"
    },
    {
      year: "Dec 2024",
      title: "EBITDA positive, 7,000 drivers across 16 cities",
      description: "— Scaled sustainably while deepening market presence —"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        setActiveIndex(prevIndex => {
          const nextIndex = (prevIndex + 1) % milestones.length;
          // Set fill percentage based on next index
          setFillPercentage(nextIndex * 25);
          return nextIndex;
        });
      }, 5000); // Change milestone every 5 seconds
    };

    if (autoScrolling.current) {
      startAutoScroll();
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [milestones.length]);

  // Handle manual navigation
  const handleNavClick = (index) => {
    // Stop auto-scrolling when user interacts
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrolling.current = false;
    }
    
    setActiveIndex(index);
    setFillPercentage(index * 25);
  };

  // Animate fill percentage when activeIndex changes
  useEffect(() => {
    // Target fill percentage based on active index (0-100%)
    const targetFill = Math.min(100, activeIndex * 25);
    
    // Animate from current to target
    let start = fillPercentage;
    const duration = 1000; // 1 second
    const startTime = performance.now();
    
    const animateFill = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smoother animation
      const easeOutCubic = progress => 1 - Math.pow(1 - progress, 3);
      const easedProgress = easeOutCubic(progress);
      
      const currentFill = start + (targetFill - start) * easedProgress;
      setFillPercentage(currentFill);
      
      if (progress < 1) {
        requestAnimationFrame(animateFill);
      }
    };
    
    requestAnimationFrame(animateFill);
  }, [activeIndex]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between md:px-36 md:pt-40 pt-8 md:pb-48 pb-12 bg-gray-50">
      {/* Custom Battery Images Section */}
      <div className="flex flex-col items-center mb-12 md:mb-0">
        {/* Container for battery images */}
        <div className="relative w-40">
          {/* Place for different battery images based on state */}
          {/* Battery image for 0% filled - showing when activeIndex is 0 */}
          <div className={`transition-opacity duration-500 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}>
            <img
              className="w-[90%] h-[90%]"
              alt="Battery 0%"
              src="/battery1.png" // Replace with your actual image path
            />
          </div>
          
          {/* Battery image for 25% filled - showing when activeIndex is 1 */}
          <div className={`transition-opacity duration-500 ${activeIndex === 1 ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}>
            <img
              className="w-[85%] h-[84%]"
              alt="Battery 25%"
              src="/battery2.png" // Replace with your actual image path
            />
          </div>
          
          {/* Battery image for 50% filled - showing when activeIndex is 2 */}
          <div className={`transition-opacity duration-500 ${activeIndex === 2 ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}>
            <img
              className="w-[90%] h-[90%] "
              alt="Battery 50%"
              src="/battery3.png" // Replace with your actual image path
            />
          </div>
          
          {/* Battery image for 75% filled - showing when activeIndex is 3 */}
          <div className={`transition-opacity duration-500 ${activeIndex === 3 ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}>
            <img
              className="w-[90%] h-[90%]"
              alt="Battery 75%"
              src="/battery4.png" // Replace with your actual image path
            />
          </div>
          
          {/* Battery image for 100% filled - showing when activeIndex is 4 */}
          <div className={`transition-opacity duration-500 ${activeIndex === 4 ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}>
            <img
              className="w-[90%] h-[90%]"
              alt="Battery 100%"
              src="/battery5.png" // Replace with your actual image path
            />
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="w-full md:w-3/4 border-none shadow-none">
        <div className="flex flex-col items-center justify-center py-0 px-6 md:px-0 max-w-4xl mx-auto">
          <div className="flex flex-col items-start md:gap-8 gap-4 w-full">
            <h2 className="w-full font-sans text-2xl md:text-2xl  text-center leading-tight text-gray-900">
              <span className="font-medium">{milestones[activeIndex].year} </span>
            </h2>
            <h3 className="w-full font-sans text-4xl md:text-5xl  text-center leading-tight text-gray-900">

              <span className="font-medium">{milestones[activeIndex].title} </span>
              {/* <span className="font-bold">{milestones[activeIndex].year}</span> */}
            </h3>
            <p className="w-full font-sans font-normal text-lg md:text-xl lg:text-2xl text-center leading-relaxed text-gray-600">
              {milestones[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}