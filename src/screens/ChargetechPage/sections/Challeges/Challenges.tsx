
export const Challenges = (): JSX.Element => {
  const challengesData = [
    "EV Downtime & Battery Issues ~ Limit daily earnings and reduce asset productivity.",
    "Lack of Asset & Driver Control ~ No real-time visibility or digital monitoring.",
    "Limited Credit History ~ Drivers often lack formal credit scores, making evaluation difficult.",
    "Risky Asset Underwriting ~ Unestablished resale market making the residual value uncertain."
  ];

  const solutionsData = [
    "365 days running assurance assisted by Chargeup Tech.",
    "Remote Tracking and Immobilization.",
    "Tech enabled risk score to measure Intent.",
    "Lower interest w/ longer tenure - 24% / 24 months.",
    "No waiting for repair or replacement with a trusted dealer network."
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h1 className="text-4xl font-bold text-center mb-12">How we Solve for it?</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Challenges Section */}
        <div className="flex-1 relative">
          <div className="bg-[#f8bb25] rounded-3xl p-8 h-full">
            <h2 className="text-3xl font-bold mb-8">Industry Challenges</h2>
            <div className="space-y-6">
              {challengesData.map((challenge, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl ${
                    index % 2 === 1 ? 'bg-[#fbe18f]' : ''
                  }`}
                >
                  <p className="text-gray-800 md:text-lg">
                     {challenge}
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
                  <p className="text-white md:text-lg">
                    {solution}
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