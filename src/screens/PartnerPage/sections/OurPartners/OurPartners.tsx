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
    // { id: 4, name: "Insurers", description: "Enjoys accelerated growth with Chargeup" },
    // { id: 5, name: "Recyclers", description: "Enjoys accelerated growth with Chargeup" },
  ];

  // Partner logos data - organized by category
  const logosByCategory = {
    "NBFCs": [
      { id: 1, type: "image", imgUrl: "/nbfc1.png" },
      { id: 2, type: "image",imgUrl: "/nbfc2.png"  },
      // { id: 3, type: "image", imgUrl:"/nbfc3.png"  },
      { id: 4,type: "image", imgUrl: "/nbfc5.png"  },
      { id: 5, type: "image", imgUrl: "/nbfc4.png" },
    ],
    "OEMs": [
      { id: 1, type: "image", imgUrl: "/oem1.png"  },
      { id: 2, type: "image", imgUrl: "oem2.png" },
      { id: 3, type: "image", imgUrl: "oem3.png" },
      { id: 4, type: "image", imgUrl: "oem4.jpg" },
    ],
    "Dealers": [
      { id: 1, type: "image", imgUrl: "/recycler1.png"},
      { id: 2, type: "image", imgUrl: "/recycler2.png" },
      { id: 3, type: "image", imgUrl: "/insurer1.png" },
      { id: 4, type: "image", imgUrl: "/insurer2.png" },
      // { id: 5, type: "image", imgUrl: "/investor1.png" },
      
    ]
  };

  // Render inverted logo component
  const InvertedLogo = () => (
    <div className="flex flex-col items-center justify-center w-36 h-20">
      <div className="flex items-center justify-center">
        <div className="mr-2">
          <svg width="25" height="50" viewBox="0 0 25 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 0L25 25H0L12.5 0Z" fill="#656565" />
            <path d="M12.5 50L0 25H25L12.5 50Z" fill="#656565" />
          </svg>
        </div>
        <div className="font-semibold text-gray-500 tracking-widest">INVERTED</div>
      </div>
    </div>
  );

  // Render brand logo component
  const LogoImage  = ({ imgUrl  }) => {
    // Simple logo renderer based on brand name
    return (
      <div className="w-40 h-36 md:w-44 md:h-40 flex items-center justify-center">
        <img 
          src={imgUrl} 
          alt="Partner Logo" 
          className="max-w-full max-h-full object-contain h-full w-full"
        />
      </div>
    );
  };


  return (
    <section id="ourPartners" className="flex flex-col w-full items-center gap-2 py-8 px-4 md:px-12 lg:px-24 bg-gray-40">
      <div className="flex flex-col w-full max-w-7xl items-center gap-16">
        {/* Section Header */}
        {/* <div className="w-full text-center">
          <h2 className="font-medium text-4xl  lg:text-5xl text-[#010101] tracking-tight">
            Meet our Partners
          </h2>
        </div> */}

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row w-full gap-8 md:gap-12">
          {/* Left Side - Categories */}
          <div className="flex flex-col md:border-r md:border-gray-300 pr-0 md:pr-12">
            <div className="flex flex-col gap-6 w-full md:w-48">
              {/* Categories List */}
              {partnerCategories.map((category) => (
                <div key={category.id} className="flex flex-col gap-4">
                  <Button
                    onClick={() => setActiveCategory(category.name)}
                    className={`h-14 px-8 py-3 rounded-full text-lg font-medium ${
                      activeCategory === category.name
                        ? "bg-[#07584D] text-white hover:bg-[#07584D]"
                        : "bg-transparent text-[#010101] border-2 border-[#1b4748] hover:bg-gray-100"
                    }`}
                  >
                    {category.name}
                  </Button>

                  {activeCategory === category.name && category.description && (
                    <p className="text-[#656565] text-base px-6">
                      {category.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>


          {/* Right Side - Partner Logos Grid */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-20 flex-1">
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
      </div>
    </section>
  );
};