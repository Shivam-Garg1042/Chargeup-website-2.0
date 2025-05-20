
import { ChevronRightIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

export const Oems = (): JSX.Element => {
  // Data for partner cards
  const partnerCards = [
    {
      id: 1,
      title: "OEMs",
      subtitle: "Battery & Vehicle",
      iconSrc: "/group-76.png",
      description:
        "Power the EV future. Boost performance, speed up deployment, and unlock new revenue with Chargeup’s data-driven EV solutions.",
    },
    {
      id: 2,
      title: "NBFCs",
      subtitle: "Battery & Vehicle",
      iconSrc: "/group-76-1.png",
      description:
        "Smarter EV financing. Gain insights into usage, repayments, and risk for better lending and asset control.",
    },
    {
      id: 3,
      title: "Others",
      subtitle: "Battery & Vehicle",
      iconSrc: "/group-76-2.png",
      description:
        "Accelerate EV growth. Leverage Chargeup's platform for visibility, smarter lending, and stronger control.",
    },
  ];

  return (
    <section className="w-full bg-white py-8 px-4  md:px-8 lg:py-12 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-14">
          {partnerCards.map((card) => (
            <Card
              key={card.id}
              className="flex flex-col h-full rounded-3xl shadow-lg shadow-[1px_24px_66px_#3440541f] bg-white overflow-hidden"
            >
              <CardContent className="flex flex-col h-full p-6 md:p-7">
                {/* Card Header with Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 bg-gray-50 p-3 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#E8F3F3"/>
                      <path d="M12 6L18 12L12 18L6 12L12 6Z" fill="#1B4748"/>
                    </svg>
                  </div>
                  
                  <div className="flex flex-col">
                    <h3 className="font-['Plus_Jakarta_Sans',Helvetica] text-xl md:text-2xl font-medium text-gray-900">
                      {card.title}
                    </h3>
                    {card.subtitle && (
                      <span className="text-sm md:text-base text-gray-500">
                        {card.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Description */}
                <div className="text-sm md:text-base text-gray-600 mb-6 flex-grow px-3">
                  {card.description}
                </div>

                {/* Card Footer with Call to Action */}
                {/* <div className="flex items-center text-[#f48900] mt-auto">
                  <a href ="" className="font-medium text-sm md:text-base px-3">View Benefits</a>
                  <ChevronRightIcon className="w-4 h-4 ml-2" />
                </div> */}
              </CardContent>
            </Card>
            
          ))}
        </div>
        <div className=" justify-center  items-center mb-10 md:mb-16 relative w-full">
          <div className="w-full sm:w-auto"></div> {/* Spacer for centering */}
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium sm:ml-auto sm:mx-2">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};