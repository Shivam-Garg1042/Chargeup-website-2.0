export const CultureAtChargeUp = (): JSX.Element => {
  // Culture section gallery images data with actual image sources
  const galleryImages = [
    { 
      id: 1, 
      className: "w-full h-[450px] object-cover rounded-lg",
      src: "/TeamImage1.jpeg", // Replace with your actual image path
      alt: "Team collaboration"
    },
    { 
      id: 2, 
      className: "w-full h-[200px] object-cover rounded-lg",
      src: "/teamPhoto1.webp",
      alt: "Office environment"
    },
    { 
      id: 3, 
      className: "w-full h-[200px] object-cover rounded-lg",
      src: "/culture1.jpeg",
      alt: "Team meeting"
    },
    { 
      id: 4, 
      className: "w-full h-[200px] object-cover rounded-lg",
      src: "/c3.jpg",
      alt: "Work culture"
    },
    { 
      id: 5, 
      className: "w-full h-[450px] object-cover rounded-lg",
      src: "/c4.jpg",
      alt: "Team building"
    },
    { 
      id: 6, 
      className: "w-full h-[450px] object-cover rounded-lg",
      src: "/c1.jpeg",
      alt: "Company events"
    },
    { 
      id: 7, 
      className: "w-full h-[200px] object-cover rounded-lg",
      src: "/c2.jpeg",
      alt: "Workplace atmosphere"
    },
  ];

  return (
    <div className="flex flex-col w-full relative bg-gray-50">
      {/* Culture at ChargeUp Section */}
      <section className="flex flex-col w-full items-start px-6 lg:px-[120px] py-[40px] lg:py-[100px] relative bg-[#041620]">
        <div className="flex flex-col w-full items-center gap-[40px] md:gap-[80px]">
          <div className="flex flex-col w-full items-center">
            <h2 className="font-['Raleway',Helvetica] font-normal text-white text-[40px] md:text-[60px] text-center tracking-[-1px] leading-[60px] md:leading-[70px] md:mt-10">
              Life @ <span className = "text-[#0D8948] font-bold">Chargeup</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-[20px] w-full">
            {/* First column */}
            <div className="flex flex-col w-full md:w-[40%] items-start gap-[20px]">
              <img 
                src={galleryImages[0].src} 
                alt={galleryImages[0].alt}
                className={galleryImages[0].className}
                loading="lazy"
              />
              <div className="flex flex-row gap-[20px] w-full">
                <div className="w-1/2">
                  <img 
                    src={galleryImages[1].src} 
                    alt={galleryImages[1].alt}
                    className={galleryImages[1].className}
                  />
                </div>
                <div className="w-1/2">
                  <img 
                    src={galleryImages[2].src} 
                    alt={galleryImages[2].alt}
                    className={galleryImages[2].className}
                  />
                </div>
              </div>
            </div>

            {/* Second column */}
            <div className="flex flex-col w-full md:w-[30%] gap-[20px]">
              <img 
                src={galleryImages[3].src} 
                alt={galleryImages[3].alt}
                className={galleryImages[3].className}
              />
              <img 
                src={galleryImages[4].src} 
                alt={galleryImages[4].alt}
                className={galleryImages[4].className}
              />
            </div>

            {/* Third column */}
            <div className="flex flex-col w-full md:w-[30%] gap-[20px]">
              <img 
                src={galleryImages[5].src} 
                alt={galleryImages[5].alt}
                className={galleryImages[5].className}
              />
              <img 
                src={galleryImages[6].src} 
                alt={galleryImages[6].alt}
                className={galleryImages[6].className}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};