// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
// import { Button } from "../../../../components/ui/button";
// import { Card, CardContent } from "../../../../components/ui/card";

// export default function TestimonialSection() {
//   // State for current testimonial index and modal
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isVideoLoading, setIsVideoLoading] = useState(false);

//   // Sample testimonial data array - matching the reference image
//   const testimonials = [
//     {
//       driver: {
//         name: "Mr. Narayan",
//         location: "Driver from Odisha"
//       },
//       heading: "Narayan is earning better",
//       content: "When banks said no and private lenders asked for too much, Chargeup stepped in and my loan was approved in 48 hours, the EMI fits my income, and today I’m earning more than ever."
//     },
//     {
//       driver: {
//         name: "Mr Omprakash",
//         location: "Driver from Delhi"
//       },
//       heading: "Omprakash is saving more",
//       content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
//     },
//     {
//       driver: {
//         name: "Mr. Sunil Patel",
//         location: "Driver from Mumbai"
//       },
//       heading: "Life as a Partner Driver",
//       content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
//     }
//   ];

//   // Handle next and previous navigation
//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };
  
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Simulate video loading
//   const handleVideoPlay = () => {
//     setIsVideoLoading(true);
//     setIsModalOpen(true);
    
//     // Simulate video loading delay
//     setTimeout(() => {
//       setIsVideoLoading(false);
//     }, 1500);
//   };

//   // Close modal when Escape key is pressed
//   useEffect(() => {
//     const handleEscapeKey = (e) => {
//       if (e.key === "Escape" && isModalOpen) {
//         setIsModalOpen(false);
//       }
//     };

//     document.addEventListener("keydown", handleEscapeKey);
//     return () => document.removeEventListener("keydown", handleEscapeKey);
//   }, [isModalOpen]);

//   // Current testimonial data
//   const currentTestimonial = testimonials[currentIndex];

//   return (
//     <section className="w-full bg-white">
//       <div className="flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto px-6 md:px-4 py-16 md:py-24 md:mt-10 ">
//         {/* Video testimonial card - matching the reference image */}
//         <div className="flex flex-col w-full md:w-[40%] items-start gap-3">
//           <div 
//             className="w-full aspect-video bg-[#717171] flex items-center justify-center cursor-pointer rounded-3xl relative"
//             onClick={handleVideoPlay}
//           >
//             <Button
//               variant="outline"
//               size="icon"
//               className="w-12 h-12 rounded-full bg-transparent border-0"
//             >
//               <Play className="h-8 w-8 text-orange-500" />
//             </Button>
//           </div>

//           <div className="mt-4">
//             <h3 className="font-medium text-black text-base">
//               {currentTestimonial.driver.name}
//             </h3>
//             <p className="font-normal text-gray-500 text-sm">
//               {currentTestimonial.driver.location}
//             </p>
//           </div>
//         </div>

//         {/* Testimonial content - matching the reference image */}
//         <div className="flex flex-col w-full md:w-[55%] mt-8 md:mt-0">
//           <h2 className="font-medium text-black text-3xl md:text-4xl lg:text-5xl mb-6">
//             {currentTestimonial.heading}
//           </h2>

//           <div className="border-l border-gray-800 pl-6 md:mt-3">
//             <p className="text-gray-800 font-normal md:text-lg text-base leading-relaxed mb-6 md:pr-8">
//               {currentTestimonial.content}
//             </p>

//             <div className="flex items-center gap-2">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={handlePrevious}
//                 className="w-10 h-10 rounded-full bg-orange-500 border-0 hover:bg-orange-600"
//                 aria-label="Previous testimonial"
//               >
//                 <ChevronLeft className="h-6 w-6 text-white" />
//               </Button>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={handleNext}
//                 className="w-10 h-10 rounded-full bg-orange-500 border-0 hover:bg-orange-600"
//                 aria-label="Next testimonial"
//               >
//                 <ChevronRight className="h-6 w-6 text-white" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Video Modal */}
//       {isModalOpen && (
//         <div 
//           className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-10"
//           onClick={() => setIsModalOpen(false)}
//         >
//           <div 
//             className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 border-0 hover:bg-black/70"
//               aria-label="Close video"
//             >
//               <X className="h-5 w-5 text-white" />
//             </Button>

//             {isVideoLoading ? (
//               <div className="w-full h-full flex items-center justify-center">
//                 <div className="w-12 h-12 border-4 border-t-orange-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
//               </div>
//             ) : (
//               <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white text-center p-8">
//                 <div className="max-w-2xl">
//                   <h3 className="text-2xl mb-4">Video Testimonial</h3>
//                   <p className="text-lg text-gray-300">
//                     This is where the actual video testimonial from {currentTestimonial.driver.name} would play.
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Mobile indicator dots */}
//       <div className="md:hidden flex justify-center gap-2 pb-8">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-2 h-2 rounded-full transition-all ${
//               index === currentIndex ? "w-4 bg-orange-500" : "bg-gray-300"
//             }`}
//             aria-label={`Go to testimonial ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export default function TestimonialSection() {
  // State for current testimonial index and modal
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);

  // Sample testimonial data array - matching the reference image
  const testimonials = [
    {
      driver: {
        name: "Mr. Narayan",
        location: "Driver from Noida",
        image: "/driver1.png" // Placeholder image
      },
      heading: "Narayan is earning better",
      content: "When banks said no and private lenders asked for too much, Chargeup stepped in and my loan was approved in 48 hours, the EMI fits my income, and today I'm earning more than ever."
    },
    {
      driver: {
        name: "Mr Omprakash",
        location: "Driver from Delhi",
        image: "/driver3.png" // Placeholder image
      },
      heading: "Omprakash is saving more",
      content: "Before Chargeup, battery problems often kept me off the road and losing money. Now, with their quick support, I can run every day and earn more without worry"
    },
    {
      driver: {
        name: "Mrs. Sita",
        location: "Driver from NCR",
        image: "/driver2.png" // Placeholder image
      },
      heading: "Sita is staying safe",
      content: "The other night, as I was finishing work, some people beat me up and stole my rickshaw. I was distraught — without it, I couldn’t work and would spend months chasing insurance. But thanks to Chargeup, I got it back. They remotely immobilised my battery and tracked my rickshaw’s location, helping me recover it quickly."
    }
  ];

  // Handle next and previous navigation
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle image modal open
  const handleImageClick = () => {
    setIsImageLoading(true);
    setIsModalOpen(true);
    
    // Simulate image loading delay
    setTimeout(() => {
      setIsImageLoading(false);
    }, 500);
  };

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isModalOpen]);

  // Current testimonial data
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full ">
      <div className="flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto px-6 md:px-4 py-16 md:py-12 mt-10 ">
        {/* Image testimonial card - replacing the video with an image */}
        <div className="flex flex-col w-full md:w-[40%] items-start gap-3">
          <div 
            className="w-full aspect-video flex items-center justify-center cursor-pointer rounded-3xl relative overflow-hidden"
            onClick={handleImageClick}
          >
            <img 
              src={currentTestimonial.driver.image} 
              alt={`${currentTestimonial.driver.name} testimonial`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-all duration-300"></div>
          </div>

          <div className="mt-4">
            <h3 className="font-medium text-black text-base">
              {currentTestimonial.driver.name}
            </h3>
            <p className="font-normal text-gray-500 text-sm">
              {currentTestimonial.driver.location}
            </p>
          </div>
        </div>

        {/* Testimonial content - matching the reference image */}
        <div className="flex flex-col w-full md:w-[55%] mt-8 md:mt-0">
          <h2 className="font-medium text-black text-3xl md:text-4xl lg:text-5xl mb-6">
            {currentTestimonial.heading}
          </h2>

          <div className="border-l border-gray-800 pl-6 md:mt-3">
            <p className="text-gray-800 font-normal md:text-lg text-base leading-relaxed mb-6 md:pr-8">
              {currentTestimonial.content}
            </p>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full bg-orange-500 border-0 hover:bg-orange-600"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-orange-500 border-0 hover:bg-orange-600"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {/* {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-10"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="w-full max-w-4xl bg-black rounded-lg overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 border-0 hover:bg-black/70"
              aria-label="Close image"
            >
              <X className="h-5 w-5 text-white" />
            </Button>

            {isImageLoading ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-t-orange-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <img 
                src={currentTestimonial.driver.image} 
                alt={`${currentTestimonial.driver.name} testimonial full view`}
                className="w-full h-auto"
              />
            )}
          </div>
        </div>
      )} */}

      {/* Mobile indicator dots */}
      <div className="md:hidden flex justify-center gap-2 pb-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "w-4 bg-orange-500" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}