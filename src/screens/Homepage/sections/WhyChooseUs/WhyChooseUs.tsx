import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhyChooseUs = (): JSX.Element => {
  // Data for the process steps
  const processSteps = [
    {
      id: "step-1",
      title: "Get in Touch",
      description:
        "Reach out to explore partnerships, ask questions and start your EV journey with Chargeup.",
      iconSrc: "/elements.png",
      defaultOpen: true,
      progress: "291px", // Progress for the first step (shown as filled)
    },
    {
      id: "step-2",
      title: "Easy Loan",
      description: "",
      iconSrc: "/elements-1.png",
      defaultOpen: false,
      progress: "0px",
    },
    {
      id: "step-3",
      title: "Handover",
      description: "",
      iconSrc: "/elements-2.png",
      defaultOpen: false,
      progress: "0px",
    },
    {
      id: "step-4",
      title: "Charge & Ride safe",
      description: "",
      iconSrc: "/elements-3.png",
      defaultOpen: false,
      progress: "0px",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-wrap items-center justify-between px-8 py-20 w-full gap-8 lg:px-[140px] lg:py-[110px]">
        {/* Phone mockups section */}
        <div className="flex items-center justify-center lg:w-auto">
          <div className="relative">
            {/* First phone mockup */}
            <div className="relative w-[387px] h-[858px] bg-[url(/s20.png)] bg-[100%_100%]">
              <div className="relative w-[370px] h-[822px] top-[15px] left-[9px] bg-[url(/screen.png)] bg-[100%_100%]">
                <img
                  className="absolute w-5 h-5 top-1.5 left-[173px]"
                  alt="Camera"
                  src="/camera.svg"
                />
                <div className="absolute top-[413px] left-[71px] font-['Plus_Jakarta_Sans',Helvetica] font-extrabold italic text-[#f8bb25] text-[30.2px] leading-[37.8px] whitespace-nowrap">
                  Partner
                </div>
              </div>
            </div>

            {/* Second phone mockup */}
            <div className="relative w-[345px] h-[700px] ml-[-60px]">
              <img
                className="absolute w-[345px] h-[168px] top-[111px] left-0"
                alt="Buttons"
                src="/buttons.png"
              />
              <img
                className="absolute w-[340px] h-[700px] top-0 left-0.5"
                alt="Device surround"
                src="/background.svg"
              />
              <img
                className="absolute w-[338px] h-[698px] top-px left-[3px]"
                alt="Highlight band"
                src="/highlight-band--stroke-.svg"
              />
              <img
                className="absolute w-[332px] h-[692px] top-1 left-[7px]"
                alt="Background"
                src="/background.svg"
              />

              <div className="absolute w-[340px] h-[700px] top-0 left-0.5">
                <div className="w-[5px] h-1 top-0 left-[268px] absolute bg-[#36454c]" />
                <div className="w-1 h-[5px] top-[70px] left-[336px] absolute bg-[#36454c]" />
                <div className="w-1 h-[5px] top-[70px] left-0 absolute bg-[#36454c]" />
                <div className="w-1 h-[5px] top-[625px] left-0 absolute bg-[#36454c]" />
                <div className="w-1 h-[5px] top-[625px] left-[336px] absolute bg-[#36454c]" />
                <div className="w-[5px] h-1 top-[696px] left-[68px] absolute bg-[#36454c]" />
              </div>

              <img
                className="absolute w-[309px] h-[669px] top-[15px] left-[18px]"
                alt="Screen"
                src="/screen-1.png"
              />
              <img
                className="absolute w-[13px] h-[13px] top-5 left-[201px]"
                alt="Camera"
                src="/camera.svg"
              />
              <img
                className="absolute w-10 h-[5px] top-6 left-[153px]"
                alt="Speaker"
                src="/speaker.svg"
              />
              <div className="absolute top-[353px] left-[85px] font-['Plus_Jakarta_Sans',Helvetica] font-extrabold italic text-[#296968] text-[22px] leading-[27.5px] whitespace-nowrap">
                Driver
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="flex flex-col items-start justify-center gap-11 max-w-[600px]">
          {/* Heading section */}
          <div className="flex flex-col w-full items-start justify-center gap-1">
            <div className="font-['Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#f48900] text-xl leading-[22.1px]">
              How we Enable Drivers
            </div>
            <h2 className="text-[58px] tracking-[-1.16px] leading-[87.6px] font-['Plus_Jakarta_Sans',Helvetica] font-medium text-text-colors950">
              4 Step process to Succeed in EV
            </h2>
          </div>

          {/* Process steps accordion */}
          <div className="flex flex-col w-full gap-6">
            {processSteps.map((step, index) => (
              <Card
                key={step.id}
                className="w-full rounded-[12px] overflow-hidden"
              >
                <CardContent className="p-0">
                  <Accordion
                    type="single"
                    defaultValue={step.defaultOpen ? step.id : undefined}
                    collapsible
                  >
                    <AccordionItem value={step.id} className="border-0">
                      <AccordionTrigger className="px-3 py-4 hover:no-underline">
                        <div className="flex items-center gap-[18px]">
                          <div className="relative w-[61px] h-[61px]">
                            <img
                              className="absolute w-[34px] h-[45px] top-[5px] left-[11px]"
                              alt={`Step ${index + 1} icon`}
                              src={step.iconSrc}
                            />
                          </div>
                          <div className="font-['Plus_Jakarta_Sans',Helvetica] font-medium text-text-colors950 text-[26px] leading-[35.3px]">
                            {step.title}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-3 pb-4 pt-0 ml-[79px]">
                        <div className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#535353] text-lg leading-[26.5px]">
                          {step.description}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Progress bar */}
                  <div className="relative h-[18px] bg-[#d9d9d9]">
                    <div
                      className="h-[18px] bg-[#1b4748] rounded-[0px_0px_0px_12.43px]"
                      style={{ width: step.progress }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
