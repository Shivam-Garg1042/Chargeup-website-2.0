import React from "react";

export const Challenges = (): JSX.Element => {
  const challengesData = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ];

  const solutionsData = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h1 className="text-4xl font-bold text-center mb-12">How we Solve for it?</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Challenges Section */}
        <div className="flex-1 relative">
          <div className="bg-[#f8bb25] rounded-3xl p-8 h-full">
            <h2 className="text-3xl font-bold mb-8">Challenges</h2>
            <div className="space-y-6">
              {challengesData.map((challenge, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl ${
                    index % 2 === 1 ? 'bg-[#fbe18f]' : ''
                  }`}
                >
                  <p className="text-gray-800">
                    {index + 1}. {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <div className="w-8 h-8 bg-[#f8bb25] transform rotate-45"></div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="flex-1">
          <div className="bg-[#2F6B69] rounded-3xl p-8 h-full">
            <h2 className="text-3xl font-bold mb-8 text-white">Our Solution</h2>
            <div className="space-y-6">
              {solutionsData.map((solution, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl ${
                    index % 2 === 1 ? 'bg-[#3D8785]' : ''
                  }`}
                >
                  <p className="text-white">
                    {index + 1}. {solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};