import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const Pillars = (): JSX.Element => {
  // Data for the feature sections
  const features = [
    {
      id: "01",
      position: "right",
      title: "Platform Objective",
      description:
        "Seamless EV battery leasing, acquisition, financing, and more—powered by an IoT + AI-first platform built for speed and scale.",
      barColor: "#041620",
    },
    {
      id: "02",
      position: "left",
      title: "Mobile-First Design",
      description:
        "Native apps for drivers, dealers, and teams—fully integrated with ERP/CRM systems for smooth operations and control on the go",
      barColor: "#1b4748",
    },
    {
      id: "03",
      position: "right",
      title: "Smart Battery Features",
      description:
        "Real-time location, health, and performance insights—thanks to batteries equipped with Intellicar + MMI-powered IoT.",
      barColor: "#296968",
    },
    {
      id: "04",
      position: "left",
      title: "Robust Data Infrastructure",
      description:
        "GCP-hosted data lake + advanced analytics deliver actionable insights to stakeholders across the EV value chain.",
      barColor: "#218381",
    },
    {
      id: "05",
      position: "right",
      title: "ML-Powered Intelligence",
      description:
        "From predicting battery lifespan to credit risk scoring—we use machine learning to drive smarter decisions.",
      barColor: "#6eaead",
    },
    {
      id: "06",
      position: "left",
      title: "Integrated Ecosystem",
      description:
        "A plug-and-play framework connecting NBFCs, OEMs, and EV drivers for seamless collaboration and growth.",
      barColor: "#bec9b8",
    },
  ];

  return (
    <section className="flex items-center justify-center py-0 pb-[100px] px-4 md:px-8 lg:px-[170px] relative">
      <div className="relative w-full max-w-[1572px]">
        {/* Timeline container */}
        <div className="flex flex-col items-center relative">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="flex w-full relative"
              style={{ minHeight: index === 0 ? "372px" : "250px" }}
            >
              {/* Left side content */}
              {feature.position === "left" && (
                <div className="flex-1 flex justify-end pr-4 md:pr-8">
                  <div className="flex flex-col w-full max-w-[435px] items-end gap-3.5">
                    <h3 className="self-stretch mt-[-1.00px] font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#041620] text-2xl md:text-4xl text-right tracking-[-0.72px] leading-[43.2px]">
                      {feature.title}
                    </h3>
                    <p className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#3b3b3b] text-lg md:text-[21px] text-right tracking-[-0.42px] leading-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Center timeline */}
              <div className="relative flex flex-col items-center z-10 w-[148px] mx-auto">
                {/* Circle background */}
                <div className="relative">
                  <img
                    className="w-[148px] h-[296px]"
                    alt="Ellipse"
                    src={`/ellipse-129-${index === 0 ? "5" : index === 1 ? "4" : index === 2 ? "3" : index === 3 ? "1" : index === 4 ? "" : "2"}.svg`}
                  />

                  <Card className="absolute w-52 h-52 top-11 left-[-41px] bg-white rounded-[104px] shadow-[-24px_0px_66px_#3440541f] border-none">
                    <CardContent className="flex items-center justify-center h-full p-0">
                      <span className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#433c3c] text-[58px] text-center leading-[69.6px]">
                        {feature.id}
                      </span>
                    </CardContent>
                  </Card>

                  {index < features.length - 1 && (
                    <img
                      className="absolute w-7 h-[47px] bottom-0 left-[71px]"
                      alt="Rectangle"
                      src="/rectangle-4232.svg"
                    />
                  )}
                </div>
              </div>

              {/* Right side content */}
              {feature.position === "right" && (
                <div className="flex-1 flex justify-start pl-4 md:pl-8">
                  <div className="flex flex-col w-full max-w-[435px] items-start gap-3.5">
                    <h3 className="self-stretch mt-[-1.00px] font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#041620] text-2xl md:text-4xl tracking-[-0.72px] leading-[43.2px]">
                      {feature.title}
                    </h3>
                    <p className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#3b3b3b] text-lg md:text-[21px] tracking-[-0.42px] leading-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Connecting bar */}
              <div
                className="absolute h-2.5 w-[169px]"
                style={{
                  backgroundColor: feature.barColor,
                  top: "143px",
                  left:
                    feature.position === "right" ? "50%" : "calc(50% - 169px)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
