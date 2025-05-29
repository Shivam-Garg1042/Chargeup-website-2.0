
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import PartnerModal from "../../../PartnerPage/sections/PartnerContact/PartnerContact";
import { useState } from "react";
export const SolutionHome = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="flex flex-col items-start justify-center p-2 lg:px-4 ">
      <Card className="w-full bg-[#041620] rounded-lg md:rounded-xl lg:rounded-2xl border-none">
        <CardContent className="flex flex-col items-start p-10 sm:p-8 md:p-12 lg:py-16 lg:px-24">
          <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
            <div className="flex flex-col items-start gap-1 ">
              <p className="md:w-2/3 text-sm lg:px-[24px] sm:text-base md:text-lg  font-normal text-[#fcfcfc] leading-relaxed font-['Plus_Jakarta_Sans',Helvetica]">
                Enabling easy EV ownership via
              </p>
              <h1 className="md:w-full text-3xl lg:px-[24px] md:text-4xl  xl:text-[44px] font-semibold text-white tracking-tight font-['Plus_Jakarta_Sans',Helvetica] mb-4">
                 Fi  Ne Tech Platform 
              </h1>
              <p className="md:w-2/3 text-sm lg:px-[24px] sm:text-base md:text-lg  font-normal text-[#ffffff] leading-relaxed mt-3 md:mt-6">
               Offering financial services and asset management integrated with NBFCs, OEMs and dealers, to offer a single stop solution.

              </p>
              
            </div>
            <div className="flex items-start pt-2 md:pt-4 lg:px-[24px]">
              <Button onClick={() => setIsModalOpen(true)}
              className="bg-[#0A704A] px-4 py-2  text-[#ffffff] border border-[#0e0e0e] rounded-md md:rounded-lg  text-base md:text-base lg:text-lg font-semibold font-['Plus_Jakarta_Sans',Helvetica] shadow-sm hover:bg-[#033F4F]/90">
                Partner with us
              </Button>
              <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};