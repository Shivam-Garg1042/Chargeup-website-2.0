
import { Card, CardContent } from "../../../../components/ui/card";

export default function KeyFeatures(){
  // Define the feature cards data for easy mapping
  const featureCards = [
    {
      id: 1,
      title: "IoT-Enabled Batteries",
      description:
        "Track real-time location, performance, and health of every battery with Intellicar & MMI integration.",
      iconSrc: "/group-76.png",
      iconPosition: "left-[179px]",
    },
    {
      id: 2,
      title: "Predictive Intelligence",
      description:
        "Forecast battery lifespan, assess credit risk, and predict payment behavior using ML models.",
      iconSrc: "/group-76-1.png",
      iconPosition: "left-[178px]",
    },
    {
      id: 3,
      title: "Data-Driven Insights",
      description:
        "Tap into a GCP-hosted data lake with advanced analytics to guide decisions across the EV ecosystem.",
      iconSrc: "/group-76-2.png",
      iconPosition: "left-[166px]",
      cardHeight: "h-[363px]",
      cardTop: "top-[69px]",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center relative">
      <div className="flex flex-col items-center justify-center gap-[66.67px] pt-[70px] pb-[133.33px] px-6 md:px-[200px] relative w-full">
        <div className="flex flex-wrap justify-center md:justify-between gap-[84px] relative w-full max-w-[1610px]">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className="relative w-full md:w-[469px] h-[432px]"
            >
              <div className="relative h-[432px]">
                <Card
                  className={`flex flex-col w-full md:w-[469px] ${card.cardHeight || "h-[300px]"} items-center gap-[53.33px] pt-[93px] pb-8 px-8 absolute ${card.cardTop || "top-14"} left-0 bg-white rounded-[20px] shadow-[0px_24px_66px_#3440541f] border-none`}
                >
                  <CardContent className="flex flex-col items-center gap-[54px] p-0 w-full">
                    <div className="flex flex-col items-start gap-[21.33px] w-full">
                      <div className="inline-flex items-end w-full justify-center">
                        <h3 className="w-full md:w-[405px] mt-[-1.33px] font-['Raleway',Helvetica] font-medium text-text-colors950 text-[32px] text-center tracking-[-0.64px] leading-normal">
                          {card.title}
                        </h3>
                      </div>
                      <p className="w-full font-['Raleway',Helvetica] font-normal text-[#656565] text-[21.3px] text-center tracking-[0] leading-8">
                        {card.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div
                  className={`absolute w-28 h-28 top-0 ${card.iconPosition} bg-white rounded-[11.4px] border-2 border-solid border-[#6eaead]`}
                >
                  <div className="relative w-[66px] h-[63px] top-[23px] left-[21px]">
                    <div className="relative h-[63px] bg-[url(/vector.svg)] bg-[100%_100%]">
                      <img
                        className="absolute w-7 h-7 top-[18px] left-[19px]"
                        alt="Feature icon"
                        src={card.iconSrc}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
