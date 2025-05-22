export const Challenges = (): JSX.Element => {
  const challengesData = [
    {
      title: "EV Downtime & Battery Issues",
      description: "Limit daily earnings and reduce asset productivity."
    },
    {
      title: "Lack of Asset & Driver Control",
      description: "No real-time visibility or digital monitoring."
    },
    {
      title: "Limited Credit History",
      description: "Drivers often lack formal credit scores, making evaluation difficult."
    },
    {
      title: "Risky Asset Underwriting",
      description: "Unestablished resale market making the residual value uncertain."
    }
  ];

  const solutionsData = [
    {
      title: "Chargeup 365 days running assurance",
      description: "Enabling driver to run more earn more"
    },
    {
      title: "Chargeup default management",
      description: "Enabling real time tracking and remote Immobilization."
    },
    {
      title: "Chargeup digital underwriting",
      description: "Enabling access to credit beyond Cibil"
    },
    {
      title: "Chargeup Network",
      description: "One stop solution for repair resale and replacement"
    }
  ];

  return (
    <div className=" mx-auto px-4 py-12 max-w-7xl ">
      <h1 className="text-4xl font-bold text-center mb-12">Our Value <span className="text-yellow-400">Propositions</span></h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Challenges Section */}
        <div className="flex-1 relative">
          <div className="bg-yellow-400 rounded-3xl p-8 h-full">
            <h2 className="text-3xl font-bold mb-8">Industry Challenges</h2>
            <div className="space-y-6">
              {challengesData.map((challenge, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl ${
                    index % 2 === 1 ? 'bg-yellow-300' : ''
                  }`}
                >
                  <h3 className="font-bold text-gray-800 md:text-lg mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-700 md:text-base">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <div className="w-8 h-8 bg-yellow-400 transform rotate-45"></div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="flex-1">
          <div className="bg-teal-700 rounded-3xl p-8 h-full">
            <h2 className="text-3xl font-bold mb-8 text-white">Our Solutions</h2>
            <div className="space-y-6">
              {solutionsData.map((solution, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl ${
                    index % 2 === 1 ? 'bg-teal-600' : ''
                  }`}
                >
                  <h3 className="font-bold text-white md:text-lg mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-200 md:text-base">
                    {solution.description}
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