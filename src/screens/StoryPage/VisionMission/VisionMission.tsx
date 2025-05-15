import { useState } from "react";

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState("vision");

  // Data for the tabs
  const tabOptions = [
    {
      id: "vision",
      label: "Our Vision",
      content: {
        title: "Chargeup Vision for the Future",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
      },
    },
    {
      id: "mission",
      label: "Our Mission",
      content: {
        title: "ChargeUp Mission for the Future",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
      },
    },
  ];

  const activeContent = tabOptions.find((tab) => tab.id === activeTab)?.content;

  return (
    <section className="flex flex-col w-full py-12 px-4 md:px-8 lg:px-16 xl:px-24 bg-gray-50">
      <div className="flex flex-col w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10 w-full">
          {/* Tab buttons column */}
          <div className="flex md:flex-col gap-4 z-10">
            {tabOptions.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-lg md:text-xl font-medium transition-colors duration-200 whitespace-nowrap
                  ${
                    activeTab === tab.id
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "border-2 border-teal-800 text-gray-900 hover:bg-gray-100"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Divider - only visible on larger screens */}
          <div className="hidden lg:block w-2 self-stretch bg-teal-700 mx-4" />

          {/* Content section */}
          <div className="flex flex-col md:flex-row gap-6 flex-1">
            <div className="flex flex-col gap-4 md:gap-6 flex-1">
              <h2 className="font-medium text-gray-900 text-2xl md:text-3xl lg:text-4xl">
                {activeContent?.title}
              </h2>
              <p className="font-normal text-gray-800 text-base md:text-lg lg:text-xl">
                {activeContent?.description}
              </p>
            </div>
            
            {/* Image placeholder - moves below text on mobile */}
            <div className="w-full md:max-w-xs lg:max-w-sm h-64 bg-gray-800 rounded-lg mt-4 md:mt-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}