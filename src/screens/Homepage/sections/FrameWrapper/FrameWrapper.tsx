import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameWrapper = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center">
      <Card className="w-full bg-[#041620] border-none rounded-none">
        <CardContent className="flex flex-col items-center justify-center py-[266.67px] px-0">
          <div className="flex flex-col items-center justify-center gap-[42.67px] w-full max-w-[1580px] px-4 md:px-8 lg:px-[170px]">
            <div className="flex flex-col items-center gap-[26.67px] w-full">
              <h1 className="font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-background-colorswhite text-4xl md:text-6xl lg:text-8xl text-center tracking-[-1.92px] leading-[1.2] max-w-[1502px]">
                Powering Smarter EV Ecosystems
              </h1>
              <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-text-colors25 text-base md:text-lg lg:text-[21.3px] text-center leading-8 max-w-[792px]">
                From financing to charging enablement, Chargeup helps drivers,
                OEMs, and partners accelerate the shift to electric with
                scalable, tech-driven solutions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
