import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SolutionHome = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start justify-center p-2 sm:p-6  lg:p-1">
      <Card className="w-full bg-[#041620] rounded-lg md:rounded-xl lg:rounded-2xl border-none">
        <CardContent className="flex flex-col items-start p-10 sm:p-8 md:p-12 lg:py-16 lg:px-20">
          <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
            <div className="flex flex-col items-start gap-4 md:gap-6">
              <h1 className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight font-['Plus_Jakarta_Sans',Helvetica]">
                Intelligent Battery Management for a Sustainable Future
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#fcfcfc] leading-relaxed font-['Plus_Jakarta_Sans',Helvetica]">
                An IoT and AI-first platform enabling efficient battery leasing,
                swapping, predictive maintenance, and enhanced collaboration
                across the EV ecosystem.
              </p>
            </div>
            <div className="flex items-start pt-2 md:pt-4">
              <Button className="bg-[#f8bb25] text-[#0e0e0e] border border-[#0e0e0e] rounded-md md:rounded-lg px-4 py-2 text-base md:text-base lg:text-lg font-semibold font-['Plus_Jakarta_Sans',Helvetica] shadow-sm hover:bg-[#f8bb25]/90">
                Partner with Us
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};