

export const CultureAtChargeUp = (): JSX.Element => {
  // Culture section gallery images data with reduced heights
  const galleryImages = [
    { id: 1, className: "w-full h-[450px] bg-[#d9d9d9]" },
    { id: 2, className: "w-full h-[200px] bg-[#d9d9d9]" },
    { id: 3, className: "w-full h-[200px] bg-[#d9d9d9]" },
    { id: 4, className: "w-full h-[200px] bg-[#d9d9d9]" },
    { id: 5, className: "w-full h-[450px] bg-[#d9d9d9]" },
    { id: 6, className: "w-full h-[450px] bg-[#d9d9d9]" },
    { id: 7, className: "w-full h-[200px] bg-[#d9d9d9]" },
  ];

  return (
    <div className="flex flex-col w-full relative bg-gray-50 ">
      {/* Culture at ChargeUp Section */}
      <section className="flex flex-col w-full items-start px-6 lg:px-[120px] py-[40px] lg:py-[10 0px] relative bg-[#041620] ">
        <div className="flex flex-col w-full items-center gap-[40px] md:gap-[80px]">
          <div className="flex flex-col w-full items-center">
            <h2 className="font-['Raleway',Helvetica] font-medium text-white text-[40px] md:text-[49px] text-center tracking-[-1px] leading-[60px] md:leading-[0px] md:mt-10">
              How we roll

            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-[20px] w-full">
            {/* First column */}
            <div className="flex flex-col w-full md:w-[40%] items-start gap-[20px]">
              <div className={galleryImages[0].className} />
              <div className="flex flex-row gap-[20px] w-full">
                <div className="w-1/2">{/* Left square */}
                  <div className={galleryImages[1].className} />
                </div>
                <div className="w-1/2">{/* Right square */}
                  <div className={galleryImages[2].className} />
                </div>
              </div>
            </div>

            {/* Second column */}
            <div className="flex flex-col w-full md:w-[30%] gap-[20px]">
              <div className={galleryImages[3].className} />
              <div className={galleryImages[4].className} />
            </div>

            {/* Third column */}
            <div className="flex flex-col w-full md:w-[30%] gap-[20px]">
              <div className={galleryImages[5].className} />
              <div className={galleryImages[6].className} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};