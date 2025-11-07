import { useState } from "react";
import { Button } from "../../../../components/ui/button";


export const OurPartners = (): JSX.Element => {
  // Partner category data
  const [activeCategory, setActiveCategory] = useState("NBFCs");
  
  const partnerCategories = [
    {
      id: 1,
      name: "NBFCs",
      description:
        "Enjoys secured financing with Chargeup",
    },
    { id: 2, name: "OEMs", description: "Enjoys uptime assurance with Chargeup" },
    { id: 3, name: "Dealers", description: "Enjoys accelerated growth with Chargeup" },
    
  ];

  // Partner logos data - organized by category
  const logosByCategory = {
    "NBFCs": [
      { id: 1, type: "image", imgUrl: "/nbfc1.png" },
      { id: 2, type: "image",imgUrl: "/nbfc2.png"  },
      
      { id: 4,type: "image", imgUrl: "/nbfc5.png"  },
      { id: 5, type: "image", imgUrl: "/nbfc12.jpg" },
      { id: 6, type: "image", imgUrl: "/nbfc4.png"  },
      { id: 3, type: "image", imgUrl:"/nbfc0.png"  },
    ],
    "OEMs": [
      { id: 1, type: "image", imgUrl: "/oem1.png"  },
      { id: 2, type: "image", imgUrl: "oem2.png" },
      { id: 3, type: "image", imgUrl: "oem3.png" },
      { id: 4, type: "image", imgUrl: "oem4.jpg" },
      { id: 5, type: "image", imgUrl: "oem7.jpg" },
      {id: 6, type: "image", imgUrl: "oem5.jpg" },
    ],
    "Dealers": [
      // { id: 1, type: "image", imgUrl: "/recycler1.png"},
      // { id: 2, type: "image", imgUrl: "/recycler2.png" },
      // { id: 3, type: "image", imgUrl: "/insurer1.png" },
      // { id: 4, type: "image", imgUrl: "/insurer2.png" },
      // { id: 5, type: "image", imgUrl: "/investor1.png" },
      
    ]
  };

  

  // Render brand logo component
  const LogoImage  = ({ imgUrl  }) => {
    // Simple logo renderer based on brand name
    return (
      <div className="w-28 h-24 md:w-[150px] md:h-28 flex items-center justify-center">
        <img 
          src={imgUrl} 
          alt="Partner Logo" 
          className="max-w-full max-h-full object-contain "
        />
      </div>
    );
  };

  // Render dealer stats component
  const DealerStats = () => (
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-[#07584D] to-[#0a6b5c] rounded-2xl p-8 md:p-8 text-white shadow-lg mt-10">
      <div className="text-center space-y-4">
        <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
          Authorized Dealer Presence
        </h3>
        <div className="flex flex-row items-center justify-center gap-8 md:gap-16 mt-6">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              100+
            </div>
            <div className="text-lg md:text-xl text-green-100">
              Dealers
            </div>
          </div>
          
          <div className="hidden md:block w-px h-16 bg-green-200"></div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              180+
            </div>
            <div className="text-lg md:text-xl text-green-100">
              Pincodes served
            </div>
          </div>
        </div>
      </div>
    </div>
  );


  return (
    <section id="ourPartners" className="flex flex-col w-full items-center gap-2 py-4 md:py-8 px-4 md:px-12 lg:px-24 bg-gray-40">
      <div className="flex flex-col w-full max-w-8xl items-center gap-6 md:gap-12">
        {/* Section Header */}
        {/* <div className="w-full text-center">
          <h2 className="font-medium text-4xl  lg:text-5xl text-[#010101] tracking-tight">
            Meet our Partners
          </h2>
        </div> */}

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row w-full gap-6 md:gap-8">
          {/* Left Side - Categories */}
          <div className="flex flex-col md:border-r md:border-gray-300 pr-0 md:pr-8">
            <div className="flex flex-col gap-3 md:gap-4 w-full md:w-48">
              {/* Categories List */}
              {partnerCategories.map((category) => (
                <div key={category.id} className="flex flex-col gap-2 md:gap-3">
                  <Button
                    onClick={() => setActiveCategory(category.name)}
                    className={`h-10 md:h-12 px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-medium ${
                      activeCategory === category.name
                        ? "bg-[#07584D] text-white hover:bg-[#07584D]"
                        : "bg-transparent text-[#010101] border-2 border-[#1b4748] hover:bg-gray-100"
                    }`}
                  >
                    {category.name}
                  </Button>

                  {activeCategory === category.name && category.description && (
                    <p className="text-[#656565] text-sm md:text-base py-1 px-3 md:px-6">
                      {category.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>


          {/* Right Side - Partner Logos Grid */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 lg:gap-8 flex-1">
            {activeCategory === "Dealers" ? (
              <div className="w-full flex flex-col gap-4 md:gap-6">
                <DealerStats />
                <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 lg:gap-8">
                  {logosByCategory[activeCategory].map((logo) => (
                    <div key={logo.id} className="flex items-center justify-center">
                      {logo.type === "inverted" ? (
                        <InvertedLogo />
                      ) : (
                        <LogoImage imgUrl={logo.imgUrl} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              logosByCategory[activeCategory].map((logo) => (
                <div key={logo.id} className="flex items-center justify-center">
                  {logo.type === "inverted" ? (
                    <InvertedLogo />
                  ) : (
                    <LogoImage imgUrl={logo.imgUrl} />
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};