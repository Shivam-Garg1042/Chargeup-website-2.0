import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const OurPartners = (): JSX.Element => {
  // Partner category data
  const [activeCategory, setActiveCategory] = useState("NBFCs");
  
  const partnerCategories = [
    {
      id: 1,
      name: "NBFCs",
      description:
        "Original equipment manufacturer helps the company with high yield products",
    },
    { id: 2, name: "OEM", description: "Original equipment manufacturer helps the company with high yield products" },
    { id: 3, name: "Dealers", description: "Original equipment manufacturer helps the company with high yield products" },
  ];

  // Partner logos data - organized by category
  const logosByCategory = {
    "NBFCs": [
      { id: 1, type: "inverted", name: "INVERTED" },
      { id: 2, type: "inverted", name: "INVERTED"  },
      { id: 3, type: "inverted", name: "INVERTED"  },
      { id: 4,type: "inverted", name: "INVERTED"  },
      // { id: 5, type: "inverted", name: "INVERTED" },
      // { id: 6, type: "brand", name: "mahindra" },
      // { id: 7, type: "brand", name: "samsung" },
      // { id: 8, type: "brand", name: "oppo" },
    ],
    "OEM": [
      { id: 1, type: "inverted", name: "INVERTED"  },
      // { id: 2, type: "brand", name: "oppo" },
      // { id: 3, type: "inverted", name: "INVERTED" },
      // { id: 4, type: "brand", name: "mahindra" },
    ],
    "Dealers": [
      // { id: 1, type: "brand", name: "oppo" },
      { id: 2, type: "inverted", name: "INVERTED" },
      // { id: 3, type: "brand", name: "samsung" },
      // { id: 4, type: "brand", name: "mahindra" },
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
  const BrandLogo = ({ name }) => {
    // Simple logo renderer based on brand name
    switch (name.toLowerCase()) {
      case 'mahindra':
        return (
          <div className="w-36 h-16 flex items-center justify-center">
            <div className="text-xl font-semibold text-gray-700">mahindra</div>
          </div>
        );
      case 'samsung':
        return (
          <div className="w-36 h-16 flex items-center justify-center">
            <div className="text-xl font-bold tracking-wide text-gray-800">SAMSUNG</div>
          </div>
        );
      case 'oppo':
        return (
          <div className="w-36 h-16 flex items-center justify-center">
            <div className="text-xl font-semibold tracking-wider text-gray-700">OPPO</div>
          </div>
        );
      default:
        return (
          <div className="w-36 h-16 flex items-center justify-center">
            <div className="text-xl font-semibold text-gray-700">{name}</div>
          </div>
        );
    }
  };

  return (
    <section className="flex flex-col w-full items-center gap-2 py-8 px-4 md:px-12 lg:px-24 bg-gray-50">
      <div className="flex flex-col w-full max-w-7xl items-center gap-16">
        {/* Section Header */}
        <div className="w-full text-center">
          <h2 className="font-medium text-4xl  lg:text-5xl text-[#010101] tracking-tight">
            Meet our Partners
          </h2>
        </div>

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
                        ? "bg-[#f48900] text-white hover:bg-[#e07d00]"
                        : "bg-transparent text-[#010101] border-2 border-[#1b4748] hover:bg-gray-100"
                    }`}
                  >
                    {category.name}
                  </Button>

                  {activeCategory === category.name && category.description && (
                    <p className="text-[#656565] text-base px-3">
                      {category.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>


          {/* Right Side - Partner Logos Grid */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 flex-1">
            {logosByCategory[activeCategory].map((logo) => (
              <div key={logo.id} className="flex items-center justify-center">
                {logo.type === "inverted" ? (
                  <InvertedLogo />
                ) : (
                  <BrandLogo name={logo.name} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};