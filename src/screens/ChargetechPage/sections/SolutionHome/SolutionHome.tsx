import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SolutionHome = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start justify-center p-2 lg:px-4 ">
      <Card className="w-full bg-[#041620] rounded-lg md:rounded-xl lg:rounded-2xl border-none">
        <CardContent className="flex flex-col items-start p-10 sm:p-8 md:p-12 lg:py-16 lg:px-24">
          <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
            <div className="flex flex-col items-start gap-4 md:gap-6">
              <h1 className="md:w-2/3 text-3xl lg:px-[24px] md:text-4xl  xl:text-5xl font-semibold text-white tracking-tight font-['Plus_Jakarta_Sans',Helvetica] mb-4">
                Intelligent Battery Management for a Sustainable Future
              </h1>
              <p className="md:w-2/3 text-sm lg:px-[20px] sm:text-base md:text-lg  font-normal text-[#fcfcfc] leading-relaxed font-['Plus_Jakarta_Sans',Helvetica]">
                An IoT and AI-first platform enabling efficient battery leasing,
                swapping, predictive maintenance, and enhanced collaboration
                across the EV ecosystem.
              </p>
            </div>
            <div className="flex items-start pt-2 md:pt-4 lg:px-[24px]">
              <Button className="bg-[#f8bb25] px-4 py-2  text-[#0e0e0e] border border-[#0e0e0e] rounded-md md:rounded-lg  text-base md:text-base lg:text-lg font-semibold font-['Plus_Jakarta_Sans',Helvetica] shadow-sm hover:bg-[#f8bb25]/90">
                Partner with Us
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};