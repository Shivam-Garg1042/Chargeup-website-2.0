import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export default function VideoCarouselSection() {
  // State for current video index, modal, and screen size
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Video data array
  const videos = [
    {
      id: 1,
      title: "How E-Rickshaw Drivers Drove a Greener Tomorrow",
      thumbnail: "/api/placeholder/400/225",
      description: "A story about sustainable transportation and environmental impact",
      url: "https://youtu.be/By3Rj918Q7U?si=sDB9m4PN-Ujp8-J0"
    },
    {
      id: 2,
      title: "Jyoti Kashyab - An #Atmanirbhar woman earning 40,000/month by driving an E-Rickshaw| #BadlavKiLehar",
      thumbnail: "/api/placeholder/400/225",
      description: "The journey of Jyoti becoming financially independent",
      url: "https://youtu.be/By3Rj918Q7U?si=sDB9m4PN-Ujp8-J0"
    },
    {
      id: 3,
      title: "Azaadi Ki Awaaz: Chargeup Ka Vishwas #independenceday #78thindependenceday",
      thumbnail: "/api/placeholder/400/225",
      description: "Celebrating freedom and independence with Chargeup",
      url: "https://youtu.be/By3Rj918Q7U?si=sDB9m4PN-Ujp8-J0"
    },
    {
      id: 4,
      title: "Pratibha Das - Ek Atmanirbhar Mahila E-rickshaw chalak ki Kahani | Badlav Ki Lehar",
      thumbnail: "/api/placeholder/400/225",
      description: "The inspiring story of Pratibha Das",
      url: "https://youtu.be/By3Rj918Q7U?si=sDB9m4PN-Ujp8-J0"
    }
  ];

  // Calculate total pages based on slides per view
  const totalPages = Math.ceil(videos.length / slidesPerView);

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

  // Update current page when slides per view changes
  useEffect(() => {
    // Ensure we don't go beyond the last page
    if (currentPage >= totalPages) {
      setCurrentPage(totalPages - 1);
    }
  }, [slidesPerView, totalPages, currentPage]);

  // Handle navigation
  const handlePrevious = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : totalPages - 1));
  };
  
  const handleNext = () => {
    setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  // Function to handle video thumbnail click
  const handleVideoClick = (index) => {
    setCurrentIndex(index);
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
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentPage, isAutoplay, totalPages]);

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

  // Get current visible videos based on current page and slides per view
  const getVisibleVideos = () => {
    const startIndex = currentPage * slidesPerView;
    const endIndex = Math.min(startIndex + slidesPerView, videos.length);
    return videos.slice(startIndex, endIndex);
  };

  return (
    <section className="w-full  py-16 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Chargeup Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Watch the inspiring stories of people who are driving change with Chargeup
          </p>
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
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div 
                  key={`page-${pageIndex}`} 
                  className="w-full flex-shrink-0 flex flex-wrap justify-center gap-4 md:gap-6"
                >
                  {videos.slice(
                    pageIndex * slidesPerView, 
                    Math.min((pageIndex + 1) * slidesPerView, videos.length)
                  ).map((video) => (
                    <div 
                      key={video.id} 
                      className={`flex flex-col 
                        ${slidesPerView === 1 ? 'w-full' : 
                         slidesPerView === 2 ? 'w-full md:w-[calc(50%-12px)]' : 
                         'w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]'}
                      `}
                    >
                      <div 
                        className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden cursor-pointer group"
                        onClick={() => handleVideoClick(pageIndex * slidesPerView + videos.slice(
                          pageIndex * slidesPerView, 
                          Math.min((pageIndex + 1) * slidesPerView, videos.length)
                        ).findIndex(v => v.id === video.id))}
                      >
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-orange-500 text-white group-hover:scale-110 transition-transform duration-300">
                            <Play className="h-6 w-6 md:h-8 md:w-8 ml-1" />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-6 px-1">
                        <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                          {video.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows - only show if we have more than one page */}
          {totalPages > 1 && (
            <>
              {/* <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                className="absolute top-1/3 -left-2 md:left-4 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/80 border-0 shadow-lg hover:bg-white z-10"
                aria-label="Previous videos"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-gray-900" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="absolute top-1/3 -right-2 md:right-4 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/80 border-0 shadow-lg hover:bg-white z-10"
                aria-label="Next videos"
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-gray-900" />
              </Button> */}
            </>
          )}
        </div>
        
        {/* Indicator dots - only show if we have more than one page */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                  index === currentPage 
                    ? "w-6 md:w-8 bg-orange-500" 
                    : "bg-gray-300 hover:bg-orange-300"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-10"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="w-full max-w-5xl bg-black rounded-lg overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 border-0 hover:bg-black/70"
              aria-label="Close video"
            >
              <X className="h-4 w-4 md:h-5 md:w-5 text-white" />
            </Button>

            <div className="aspect-video w-full">
              {/* This would be the actual video embed. For now showing a placeholder */}
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900 text-white p-4 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">
                  {videos[currentIndex].title}
                </h3>
                <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 text-center">
                  Video URL: {videos[currentIndex].url}
                </p>
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-orange-500 text-white">
                  <Play className="h-6 w-6 md:h-8 md:w-8 ml-1" />
                </div>
                <p className="mt-6 md:mt-8 text-sm md:text-base text-gray-400 text-center max-w-2xl">
                  This is where the actual YouTube video would be embedded.
                  In a production environment, this would be replaced with an iframe
                  embedding the YouTube video using the URL provided.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}