import { Card, CardContent } from "../../../../components/ui/card";

export default function KeyFeatures() {
  // Define the benefit cards data for easy mapping
  const benefitCards = [
    {
      id: 1,
      title: "Finance",
      description:
        "Enabling paperless EV loans to last mile drivers with no or low credit score.",
      iconSrc: "/financel.png",
      banner: "Lower interest w/ longer tenure ~24% / 24 months"
    },
    {
      id: 2,
      title: "Tech",
      description:
        "Predictive tech offering real-time asset management enabling EV uptime and increasing asset life.",
      iconSrc: "/techl.png",
      banner: "365 Days running assurance "
    },
    {
      id: 3,
      title: "Network",
      description:
         "Our trusted extensive network of dealer, partners enabling instact access to repair, resale, and replacement.",
      iconSrc: "/networkl.png",
      banner: "Single point bundle solution"
    },
    
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center py-8 px-4 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-medium text-center mb-16">
        Chargeup <span className="text-[#0A704A]">Platform</span>
      </h2>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-16 md:gap-20 w-full max-w-7xl">
        {benefitCards.map((card) => (
          <div
            key={card.id}
            className="w-full sm:w-[370px] flex flex-col relative"
          >
            {/* Main Card */}
            <div className="w-full sm:h-[270px] relative bg-white rounded-lg shadow-md">
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
              <Card className="border-none pt-10 pb-6 h-full shadow-[1px_24px_66px_#3440541f] w-full rounded-lg md:rounded-2xl">
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
            
            {/* Banner box below the card */}
            <div className="w-full bg-[#0a7f68] h-[100px] text-white text-lg text-center py-6 px-2 font-medium italic rounded-b-lg mt-[-10px] justify-center items-center flex">
              {card.banner}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}