import React from "react";

export default function HowToJoin() {
  const steps = [
    {
      number: "1",
      title: "Apply to us",
      description: "Fill in a super short form we would love to hear about your company"
    },
    {
      number: "2",
      title: "Review & Agreement",
      description: "We will review and get back to you ASAP with solid documentation"
    },
    {
      number: "3",
      title: "Enjoy Benefits",
      description: "With everything sorted, we go live with our partnership"
    }
  ];

  return (
    <section className="w-full px-4 py-6 md:py-14">
      <div className="max-w-7xl mx-auto">
        {/* Header with title and button */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-10 md:mb-16 relative w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Plus_Jakarta_Sans',Helvetica] font-medium text-gray-900 mb-4 sm:mb-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">How to join</h2>
          <div className="w-full sm:w-auto"></div> {/* Spacer for centering */}
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium sm:ml-auto sm:mx-2">
            Apply Now
          </button>
        </div>

        {/* Steps with arrows */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between relative">
          

          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col md:flex-row items-center mb-8 md:mb-0">
              {/* Step content */}
              <div className="flex flex-col items-center text-center z-10 w-full md:w-auto md:max-w-xs">
                <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center mb-4 bg-white relative">
                  <span className="text-xl font-medium">{step.number}</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-gray-600 max-w-xs px-4">{step.description}</p>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}