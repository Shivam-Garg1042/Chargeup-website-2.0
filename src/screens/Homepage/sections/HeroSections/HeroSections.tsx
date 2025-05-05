import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSections = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-[93.33px] py-[266.67px] w-full bg-[#041620]">
        <div className="flex flex-col items-center justify-center gap-[42.67px] px-4 md:px-[170px] w-full">
          <div className="flex flex-col items-center gap-[26.67px] w-full">
            <h1 className="text-4xl md:text-8xl font-semibold text-background-colorswhite text-center tracking-[-1.92px] leading-[120px] max-w-[1502px] font-['Plus_Jakarta_Sans',Helvetica]">
              Powering Smarter EV Ecosystems
            </h1>

            <p className="text-base md:text-[21.3px] font-normal text-text-colors25 text-center leading-8 max-w-[792px] font-['Plus_Jakarta_Sans',Helvetica]">
              From financing to charging enablement, Chargeup helps drivers,
              OEMs, and partners accelerate the shift to electric with scalable,
              tech-driven solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Button
              variant="outline"
              className="font-semibold text-xl text-[#f8bb25] border-[1.33px] border-[#f8bb25] rounded-[10px] px-[21.33px] py-[13.33px] h-auto shadow-[0px_1.33px_2.67px_#1018280d] font-['Plus_Jakarta_Sans',Helvetica]"
            >
              Become a Driver
            </Button>

            <Button className="font-semibold text-xl text-black bg-[#f8bb25] hover:bg-[#f8bb25]/90 rounded-[10px] px-[21.33px] py-[13.33px] h-auto shadow-[0px_1.33px_2.67px_#1018280d] font-['Plus_Jakarta_Sans',Helvetica]">
              Become a Partner
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
