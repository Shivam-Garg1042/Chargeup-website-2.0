
import { Card, CardContent } from "../../../../components/ui/card";

export const Challenges = (): JSX.Element => {
  // Data for challenges section
  const challengesData = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ];

  // Data for solutions section
  const solutionsData = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Challenges Column */}
          <div className="flex-1 relative">
            <Card className="relative h-full rounded-[20px] overflow-hidden border-none">
              <CardContent className="p-0">
                <div className="relative h-full">
                  <div className="bg-[#f8bb25] rounded-[20px] p-16 pb-0 h-full relative">
                    {/* Decorative elements */}
                    <div className="absolute right-0 top-0">
                      <img
                        className="w-[126px] h-[110px] absolute -top-1 -right-[125px]"
                        alt="Vector"
                        src="/vector-9.svg"
                      />
                      <img
                        className="w-[151px] h-[140px] absolute -top-[58px] -right-[37px]"
                        alt="Vector"
                        src="/vector-10.svg"
                      />
                      <img
                        className="w-3 h-[9px] absolute top-[40px] right-[116px]"
                        alt="Polygon"
                        src="/polygon-4.svg"
                      />
                      <div className="absolute w-[15px] h-1 top-[27px] right-[152px] bg-[#f8bb25] rotate-[-26.74deg]" />
                      <div className="absolute w-[9px] h-1 top-[60px] right-[133px] bg-[#f8bb25] rotate-[11.89deg]" />
                      <div className="absolute w-[19px] h-[9px] top-[78px] right-[115px] bg-[#f8bb25] rotate-[27.48deg]" />
                      <img
                        className="absolute w-3.5 h-[18px] top-[2.5px] right-[184px]"
                        alt="Polygon"
                        src="/polygon-3.svg"
                      />
                    </div>

                    <h2 className="font-medium text-black text-[58px] tracking-[-1.16px] leading-[69.6px] font-['Plus_Jakarta_Sans',Helvetica] mb-16">
                      Challenges
                    </h2>

                    <div className="space-y-8">
                      {challengesData.map((text, index) => (
                        <div
                          key={`challenge-${index}`}
                          className={`py-8 ${index === 1 ? "bg-[#fbe18f]" : ""}`}
                        >
                          <p className="font-medium text-[#3b3b3b] text-2xl tracking-[-0.48px] leading-9 font-['Plus_Jakarta_Sans',Helvetica] max-w-[569px]">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Solutions Column */}
          <div className="flex-1 relative">
            <Card className="relative h-full rounded-[20px] overflow-hidden border-none">
              <CardContent className="p-0">
                <div className="relative h-full">
                  <div className="relative h-full">
                    <img
                      className="absolute w-full h-full object-cover"
                      alt="Rectangle"
                      src="/rectangle-4228.svg"
                    />
                    <img
                      className="absolute w-[95%] h-full right-0 object-cover"
                      alt="Rectangle"
                      src="/rectangle-4232-1.svg"
                    />

                    <div className="relative p-16 pb-0 h-full z-10">
                      <h2 className="font-medium text-white text-[58px] tracking-[-1.16px] leading-[69.6px] font-['Plus_Jakarta_Sans',Helvetica] mb-16">
                        Our Solution
                      </h2>

                      <div className="space-y-8">
                        {solutionsData.map((text, index) => (
                          <div
                            key={`solution-${index}`}
                            className={`py-8 ${index === 1 ? "relative" : ""}`}
                          >
                            {index === 1 && (
                              <img
                                className="absolute left-0 w-full h-[226px]"
                                alt="Rectangle"
                                src="/rectangle-4231.svg"
                              />
                            )}
                            <p
                              className={`font-medium text-2xl tracking-[-0.48px] leading-9 font-['Plus_Jakarta_Sans',Helvetica] max-w-[612px] relative z-10 ${index === 1 ? "text-[#3b3b3b]" : "text-[#e6e6e6]"}`}
                            >
                              {text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
