import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSectionsWrapper = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center gap-[93.33px] py-[266.67px] w-full bg-[#041620]">
        <div className="flex flex-col items-center justify-center gap-[42.67px] px-4 md:px-[170px] w-full">
          <div className="flex flex-col items-center gap-[26.67px] w-full">
            <h1 className="font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-background-colorswhite text-4xl md:text-6xl lg:text-8xl text-center tracking-[-1.92px] leading-[120px] max-w-[1502px]">
              Powering Smarter EV Ecosystems
            </h1>
            <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-text-colors25 text-lg md:text-[21.3px] text-center leading-8 max-w-[792px]">
              From financing to charging enablement, Chargeup helps drivers,
              OEMs, and partners accelerate the shift to electric with scalable,
              tech-driven solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-5 mt-5">
        <Button
          variant="outline"
          className="px-[21.33px] py-[13.33px] rounded-[10px] border-[1.33px] border-solid border-[#f8bb25] shadow-[0px_1.33px_2.67px_#1018280d] font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-[#f8bb25] text-xl leading-8"
        >
          Become a Driver
        </Button>
        <Button className="px-[21.33px] py-[13.33px] rounded-[10px] bg-[#f8bb25] shadow-[0px_1.33px_2.67px_#1018280d] font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-black text-xl leading-8">
          Become a Partner
        </Button>
      </div>
    </section>
  );
};
