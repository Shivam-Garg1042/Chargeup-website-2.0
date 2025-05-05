import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame = (): JSX.Element => {
  // Data for map markers
  const mapMarkers = [
    { top: "419px", left: "515px" },
    { top: "511px", left: "495px" },
    { top: "537px", left: "493px" },
    { top: "552px", left: "479px" },
    { top: "552px", left: "462px" },
    { top: "677px", left: "381px" },
    { top: "668px", left: "523px" },
    { top: "842px", left: "374px" },
    { top: "886px", left: "376px" },
    { top: "845px", left: "469px" },
    { top: "862px", left: "597px" },
    { top: "629px", left: "591px" },
    { top: "601px", left: "625px" },
    { top: "680px", left: "654px" },
    { top: "696px", left: "714px" },
  ];

  // Render a map marker
  const MapMarker = ({ top, left }: { top: string; left: string }) => (
    <div
      className="relative h-[19px] rounded-[9.5px]"
      style={{ position: "absolute", top, left }}
    >
      <div className="absolute w-[11px] h-[11px] top-1 left-1 bg-[#f48900] rounded-[5.32px]" />
      <div className="absolute w-[19px] h-[19px] top-0 left-0 rounded-[9.5px] border-[0.93px] border-solid border-[#f8bb25]" />
    </div>
  );

  return (
    <section className="relative w-full py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Map with markers */}
          <div className="relative w-full md:w-1/2 h-[1096px]">
            <div className="relative w-full h-full bg-[url(/features.png)] bg-cover bg-center">
              {mapMarkers.map((marker, index) => (
                <MapMarker key={index} top={marker.top} left={marker.left} />
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="mb-8">
              <h2 className="font-medium text-text-colors950 text-[58px] tracking-[-1.16px] leading-[80px] font-['Plus_Jakarta_Sans',Helvetica]">
                Our Reach
              </h2>
            </div>

            {/* Stats cards */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Card className="w-full md:w-[341px] shadow-[0px_26.67px_66.67px_#3440541a] rounded-[20px]">
                <CardContent className="flex flex-col items-center gap-2.5 p-[26.67px]">
                  <div className="font-['Plus_Jakarta_Sans',Helvetica] font-medium text-text-colors950 text-[58px] text-center tracking-[-1.16px] leading-[80px]">
                    19+
                  </div>
                  <div className="w-72 font-['Plus_Jakarta_Sans',Helvetica] font-normal text-text-colors500 text-2xl text-center leading-10">
                    Cities
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full md:w-[341px] shadow-[0px_26.67px_66.67px_#3440541a] rounded-[20px]">
                <CardContent className="flex flex-wrap items-start justify-center gap-[10px_0px] p-[26.67px]">
                  <div className="text-[58px] tracking-[-1.16px] w-fit font-['Plus_Jakarta_Sans',Helvetica] font-medium text-text-colors950 text-center leading-[80px]">
                    10
                  </div>
                  <div className="w-fit font-['Plus_Jakarta_Sans',Helvetica] font-medium text-text-colors950 text-[58px] text-center tracking-[-1.16px] leading-[80px]">
                    +
                  </div>
                  <div className="w-[232px] font-['Plus_Jakarta_Sans',Helvetica] font-normal text-text-colors500 text-2xl text-center leading-10">
                    Planned Expansions
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Description text */}
            <div className="mb-8 font-['Plus_Jakarta_Sans',Helvetica] font-normal text-text-colors950 text-[21.3px] leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </div>

            {/* CTA Button */}
            <Button className="w-[182px] h-[58px] bg-[#f8bb25] rounded-lg text-[#041620] hover:bg-[#f8bb25]/90 px-4 py-2.5">
              <span className="font-['Plus_Jakarta_Sans',Helvetica] font-medium text-xl leading-6">
                Get in Touch
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
