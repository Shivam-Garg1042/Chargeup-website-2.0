import { Card, CardContent } from "../../../../components/ui/card";

export default function CoreBenefitPlan() {
  // Define the benefit cards data for easy mapping
  const benefitCards = [
    {
      id: 1,
      title: "Finance",
      description:
        "Chargeup Finance offers paperless EV & battery loans approved in 4 hours—pay-as-you-earn financing",
      iconSrc: "/group-76.png",
    },
    {
      id: 3,
      title: "Network",
      description:
         "A trusted network of local dealer partners powers our asset-light distribution, offering easy EV ownership along with repair, resale, and replacement",
      iconSrc: "/group-76-2.png",
    },
    {
      id: 2,
      title: "Tech",
      description:
        "Chargeup Asset management offers 365 days EV uptime through our predictive tech that monitors real time behaviour of battery and driver, preventing breakdowns, and payment defaults.",
      iconSrc: "/group-76-1.png",
    },
    
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center py-8 px-4 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-medium text-center mb-16">
       Enabling <span className="text-[#f8bb25]">EV ownerships with higher earnings</span>
      </h2>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-16 md:gap-20 w-full max-w-7xl ">
        {benefitCards.map((card) => (
          <div
            key={card.id}
            className="w-full sm:w-[370px] sm:h-[270px] relative bg-white rounded-lg shadow-md"
          >
            {/* Icon Box */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 flex items-center justify-center bg-white border-2 border-solid border-[#6eaead] rounded-lg">
                <img
                  className="w-10 h-10"
                  alt={`${card.title} icon`}
                  src={card.iconSrc}
                />
              </div>
            </div>

            {/* Card Content */}
            <Card className="border-none pt-10 pb-6 h-full shadow-[1px_24px_66px_#3440541f] w-full md:w-[370px] md:rounded-2xl">
              <CardContent className="flex flex-col items-center p-5">
                <h3 className="text-3xl font-medium text-center mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-base text-center">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}