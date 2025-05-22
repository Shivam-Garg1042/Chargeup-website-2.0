import React from "react";

export const Pillars = (): JSX.Element => {
  // Data for the feature sections
  const pillars = [
    {
      id: "01",
      title: "Platform Objective",
      description: "Seamless EV battery leasing, acquisition, financing, and more—powered by an IoT + AI-first platform built for speed and scale.",
      position: "right",
      color: "#041620"
    },
    {
      id: "02",
      title: "Mobile-First Design",
      description: "Native apps for drivers, dealers, and teams—fully integrated with ERP/CRM systems for smooth operations and control on the go.",
      position: "left",
      color: "#1b4748"
    },
    {
      id: "03",
      title: "Smart Battery Features",
      description: "Real-time location, health, and performance insights—thanks to batteries equipped with Intellicar + MMI-powered IoT.",
      position: "right",
      color: "#296968"
    },
    {
      id: "04",
      title: "Robust Data Infrastructure",
      description: "GCP-hosted data lake + advanced analytics deliver actionable insights to stakeholders across the EV value chain.",
      position: "left",
      color: "#218381"
    },
    {
      id: "05",
      title: "ML-Powered Intelligence",
      description: "From predicting battery lifespan to credit risk scoring—we use machine learning to drive smarter decisions.",
      position: "right",
      color: "#6eaead"
    },
    {
      id: "06",
      title: "Integrated Ecosystem",
      description: "A plug-and-play framework connecting NBFCs, OEMs, and EV drivers for seamless collaboration and growth.",
      position: "left",
      color: "#bec9b8"
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-3">Our Technology Pillars</h2>
          <p className="text-gray-600 text-xl">A peek into the core engine driving Chargeup's scalable EV ecosystem</p>
        </div>

        {/* Pillars Timeline */}
        <div className="relative">
          {/* Center vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 w-1 bg-gradient-to-b from-[#041620] via-[#218381] to-[#bec9b8] h-full transform -translate-x-1/2"></div>

          {/* Pillar items */}
          <div className="space-y-6 md:space-y-0 relative">
            {pillars.map((pillar, index) => (
              <div key={pillar.id} className="md:flex md:items-center md:justify-center md:h-32 relative">
                {/* Mobile version (stacked) */}
                <div className="md:hidden flex items-start space-x-4 mb-8">
                  <div className="flex-none">
                    <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-xl font-bold" style={{ border: `2px solid ${pillar.color}` }}>
                      {pillar.id}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1">{pillar.title}</h3>
                    <p className="text-sm text-gray-700">{pillar.description}</p>
                  </div>
                </div>

                {/* Desktop version (timeline) */}
                <div className={`hidden md:flex md:items-center md:w-full ${
                  pillar.position === "left" ? "flex-row" : "flex-row-reverse"
                }`}>
                  {/* Content */}
                  <div className={`w-5/12 ${
                    pillar.position === "left" ? "text-right pr-8" : "text-left pl-8"
                  }`}>
                    <h3 className="text-xl font-medium mb-2">{pillar.title}</h3>
                    <p className="text-base text-gray-700">{pillar.description}</p>
                  </div>

                  {/* Circle with number */}
                  <div className="w-10/12 flex justify-center relative">
                    {/* Half-circle background */}
                    <div 
                      className={`absolute w-44 h-32 rounded-full ${
                        pillar.position === "left" 
                          ? "right-1/2 transform translate-x-1/2" 
                          : "left-1/2 transform -translate-x-1/2"
                      }`}
                      style={{
                        background: `linear-gradient(${pillar.position === "left" ? "90deg" : "270deg"}, ${pillar.color} 50%, transparent 50%)`,
                        zIndex: "0"
                      }}
                    ></div>
                    
                    {/* White circle with number */}
                    <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl font-bold z-10 relative">
                      {pillar.id}
                    </div>
                    
                    {/* Horizontal line */}
                    <div 
                      className={`absolute top-1/2 h-1 w-1/2 transform -translate-y-1/2 ${
                        pillar.position === "left" 
                          ? "right-[calc(50%-32px)] mr-2" 
                          : "left-[calc(50%-32px)] ml-2"
                      }`} 
                      style={{ backgroundColor: pillar.color }}
                    ></div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};