import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SolutionHome = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start justify-center p-[50px]">
      <Card className="w-full bg-[#041620] rounded-[20px] border-none">
        <CardContent className="flex items-center gap-[156px] py-[100px] px-[170px]">
          <div className="flex flex-col items-start gap-[42.67px]">
            <div className="flex flex-col items-start gap-8">
              <h1 className="text-[64px] font-semibold text-white tracking-[-1.28px] font-['Plus_Jakarta_Sans',Helvetica] max-w-[1062px]">
                Intelligent Battery Management for a Sustainable Future
              </h1>
              <p className="text-[22px] font-normal text-[#fcfcfc] leading-8 font-['Plus_Jakarta_Sans',Helvetica] max-w-[839px]">
                An IoT and AI-first platform enabling efficient battery leasing,
                swapping, predictive maintenance, and enhanced collaboration
                across the EV ecosystem.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Button className="bg-[#f8bb25] text-[#0e0e0e] border-[1.33px] border-solid border-[#0e0e0e] rounded-[10px] px-[21.33px] py-[13.33px] text-xl font-semibold font-['Plus_Jakarta_Sans',Helvetica] shadow-[0px_1.33px_2.67px_#1018280d] hover:bg-[#f8bb25]/90">
                Partner with Us
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
