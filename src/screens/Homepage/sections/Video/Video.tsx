import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

export default function VideoCarouselSection() {
  // State for current video index, modal, and screen size
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Function to extract YouTube video ID from URL
  const extractYouTubeId = (url) => {
    // Handle YouTube Shorts URLs
    if (url.includes('/shorts/')) {
      const shortsMatch = url.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
      return shortsMatch ? shortsMatch[1] : null;
    }
    
    // Handle regular YouTube URLs
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Function to get YouTube thumbnail URL
  const getYouTubeThumbnail = (url) => {
    const videoId = extractYouTubeId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "/thumbnail.png";

  };

  // Function to get YouTube embed URL
  const getYouTubeEmbedUrl = (url) => {
    const videoId = extractYouTubeId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : null;
  };
  

  // Video data array
  const originalVideos = [
    {
      id: 6,
      title: "From financing e-rickshaw to i-rickshaws | chargeup x Shivakari",
      description: "The inspiring story of Pratibha Das",
      url: "https://youtu.be/a2QQYXzs2jQ"
    },
    {
      id: 1,
      title: "How E-Rickshaw Drivers Drove a Greener Tomorrow",
      description: "A story about sustainable transportation and environmental impact",
      url: "https://youtu.be/mkLsnM9b_y8?si=elwqvXncaieKohSM"
    },
    {
      id: 12,
      title: "EV Podcast with Dr Satish Mittal | Chief Digital Officer, Chargeup",
      description: "A story about sustainable transportation and environmental impact",
      url: "https://www.youtube.com/watch?v=WaQ5zjNQ_gI"
    },
    
    
    {
      id: 5,
      title: "Making EV lending hassle free and scalable with charegup platform",
      description: "The inspiring story of Pratibha Das",
      url: "https://youtu.be/OrrJxqMYgIQ"
    },
    
     {
      id: 7,
      title: "Powered by Bappa, Driven by chargeup | Sukhkarta Dukhharta ✨",
      description: "The inspiring story of Pratibha Das",
      url: "https://www.youtube.com/watch?v=hiSAWlagKgs"
    },
     {
      id: 8,
      title: "Enabling last mile drivers with upto 40% higher earnings, but how? ",
      description: "The inspiring story of Pratibha Das",
      url: "https://www.youtube.com/shorts/tl-m-a7gEzM"
    },
     
     {
      id: 10,
      title: "Unhone rukawatein hatakar raaste banaye…",
      description: "The inspiring story of Pratibha Das",
      url: "https://www.youtube.com/shorts/6D7sqEHNeAg"
    },
    {
      id: 11,
      title: "Women Who Drive Change | A Tribute to Real-Life Devis | Devi | Trilok x Chargeup",
      description: "The inspiring story of Pratibha Das",
      url: "https://www.youtube.com/shorts/B773CNM3aY4"
    },
    {
      id: 2,
      title: "Jyoti Kashyab - An #Atmanirbhar woman earning 40,000/month by driving an E-Rickshaw| #BadlavKiLehar",
      description: "The journey of Jyoti becoming financially independent",
      url: "https://youtu.be/vOfeJ8P95fw?si=_E7oKYEwtltgbWlu"
    },
    {
      id: 9,
      title: "How can a platform solve for the entire EV ecosystem as a single stop solution?",
      description: "The inspiring story of Pratibha Das",
      url: "https://www.youtube.com/shorts/sRpQnBrrGcM"
    },
    {
      id: 3,
      title: "Azaadi Ki Awaaz: Chargeup Ka Vishwas #independenceday #78thindependenceday",
      description: "Celebrating freedom and independence with Chargeup",
      url: "https://youtu.be/qkccV1xW8iE?si=NgCMO918GlJ-unrt"
    },    
    {
      id: 4,
      title: "Pratibha Das - Ek Atmanirbhar Mahila E-rickshaw chalak ki Kahani | Badlav Ki Lehar",
      description: "The inspiring story of Pratibha Das",
      url: "https://youtu.be/uxwZTdbwp2s?si=AZfA3Q8ALsF71CpA"
    },
    
  ];

  // Create extended array for infinite loop by duplicating videos
  const extendedVideos = [
    ...originalVideos.slice(-3), // Last 3 videos at the beginning for smooth backward transition
    ...originalVideos,            // Original videos
    ...originalVideos.slice(0, 3) // First 3 videos at the end for smooth forward transition
  ];

  // Update slides per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSlidesPerView(3); // 3 videos on large screens
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2); // 2 videos on medium screens
      } else {
        setSlidesPerView(1); // 1 video on small screens
      }
    };

    // Initial call
    handleResize();

    // Listen for window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize to start from the first real video (after the duplicate videos at the beginning)
  useEffect(() => {
    setCurrentIndex(3); // Start at index 3 (after the 3 duplicate videos at the beginning)
  }, []);

  // Handle infinite scrolling by resetting position when reaching duplicates
  useEffect(() => {
    if (!isTransitioning) return;

    const resetPosition = () => {
      setIsTransitioning(false);
      
      // If we're at the beginning duplicates, jump to the end of real videos
      if (currentIndex <= 0) {
        setCurrentIndex(originalVideos.length);
      }
      // If we're at the end duplicates, jump to the beginning of real videos  
      else if (currentIndex >= originalVideos.length + 3) {
        setCurrentIndex(3);
      }
      
      // Re-enable transitions after a brief delay
      setTimeout(() => setIsTransitioning(true), 50);
    };

    const timer = setTimeout(resetPosition, 500); // Match CSS transition duration
    return () => clearTimeout(timer);
  }, [currentIndex, originalVideos.length]);

  // Handle navigation for infinite loop
  const handlePrevious = () => {
    setCurrentIndex(prev => prev - 1);
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => prev + 1);
  };

  // Function to handle video thumbnail click
  const handleVideoClick = (videoIndex) => {
    // Calculate the real video index (accounting for the 3 duplicate videos at the beginning)
    let realIndex = videoIndex - 3;
    if (realIndex < 0) realIndex = originalVideos.length + realIndex;
    if (realIndex >= originalVideos.length) realIndex = realIndex - originalVideos.length;
    
    setCurrentIndex(videoIndex);
    setIsModalOpen(true);
    // Pause autoplay when modal is open
    clearInterval(intervalRef.current);
    setIsAutoplay(false);
  };

  // Set up autoplay for carousel
  useEffect(() => {
    if (isAutoplay) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 3000); // Change slide every 3 seconds
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, isAutoplay]);

  // Pause autoplay when hovering over carousel
  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    if (isAutoplay) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isModalOpen]);

  // Calculate how much to translate based on current index and slides per view
  const getTranslateX = () => {
    const slideWidth = 100 / slidesPerView;
    return currentIndex * slideWidth;
  };

  // Get the real current video index for modal and indicator dots
  const getRealCurrentIndex = () => {
    let realIndex = currentIndex - 3;
    if (realIndex < 0) realIndex = originalVideos.length + realIndex;
    if (realIndex >= originalVideos.length) realIndex = realIndex - originalVideos.length;
    return realIndex;
  };

  return (
    <section className="w-full py-8 md:py-4 mb-6 md:mb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section title */}
        <div className="flex flex-row items-center justify-center py-12 sm:py-12 gap-4">     
          <div className="flex gap-2">
            <div className="w-2 h-2 mt-1 rounded-full bg-[#0D8948]"></div>
            <div className="w-3 h-3 mt-0.5 rounded-full bg-[#07584D]"></div>
            <div className="w-4 h-4 rounded-full bg-[#002751]"></div>
          </div>
          
          <h2 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-[#0D8948] to-[#002751] bg-clip-text text-transparent">
            CHARGEUP STORIES
          </h2>
          
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full bg-[#002751]"></div>
            <div className="w-3 h-3 mt-0.5 rounded-full bg-[#07584D]"></div>
            <div className="w-2 h-2 mt-1 rounded-full bg-[#0D8948]"></div>
          </div>
        </div>
        
        {/* Video carousel */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={carouselRef}
        >
          {/* Main carousel */}
          <div className="overflow-hidden">
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${getTranslateX()}%)` }}
            >
              {extendedVideos.map((video, index) => (
                <div 
                  key={`${video.id}-${index}`} 
                  className={`flex flex-col flex-shrink-0 px-2
                    ${slidesPerView === 1 ? 'w-full' : 
                    slidesPerView === 2 ? 'w-1/2' : 
                    'w-1/3'}
                  `}
                >
                  <div 
                    className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden cursor-pointer group"
                    onClick={() => handleVideoClick(index)}
                  >
                    <img 
                      src={getYouTubeThumbnail(video.url)} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/thumbnail.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-60 transition-all duration-300">
                      {/* <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-orange-500 text-white group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-6 w-6 md:h-8 md:w-8 ml-1" />
                      </div> */}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-6 px-1">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Indicator dots - shows dots only for original videos */}
        <div className="flex justify-center gap-2 mt-8">
          {originalVideos.map((_, index) => {
            const realCurrentIndex = getRealCurrentIndex();
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index + 3)} // Add 3 to account for duplicates at beginning
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                  index === realCurrentIndex
                    ? "w-6 md:w-8 bg-[#002751]" 
                    : "bg-gray-300 hover:bg-[#0F9547]"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 md:p-10"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="w-full max-w-5xl bg-black rounded-lg overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black bg-opacity-50 border-0 hover:bg-opacity-70 flex items-center justify-center"
              aria-label="Close video"
            >
              <X className="h-4 w-4 md:h-5 md:w-5 text-white" />
            </button>

            <div className="aspect-video w-full">
              {getYouTubeEmbedUrl(originalVideos[getRealCurrentIndex()]?.url) ? (
                <iframe
                  src={getYouTubeEmbedUrl(originalVideos[getRealCurrentIndex()]?.url) || undefined}
                  title={originalVideos[getRealCurrentIndex()]?.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900 text-white p-4 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">
                    {originalVideos[getRealCurrentIndex()]?.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 text-center">
                    Unable to load video. Please check the video URL.
                  </p>
                  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-orange-500 text-white">
                    <Play className="h-6 w-6 md:h-8 md:w-8 ml-1" />
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    Video URL: {originalVideos[getRealCurrentIndex()]?.url}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      </section>
    );
  }