import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import PartnerModal from "../../../PartnerPage/sections/PartnerContact/PartnerContact";
import { useState } from "react";

export const SolutionHome = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <section className="flex flex-col items-start justify-center p-2 md:p-8 lg:px-8 ">
      <Card className="w-full rounded-lg md:rounded-xl lg:rounded-2xl border-none overflow-hidden relative bg-cover bg-left bg-no-repeat  md:h-[370px]"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0.1, 0, 1, 0.2)), url('/solution.png')`
            }}>
        
        <CardContent className="flex flex-col items-start p-10 sm:p-8 md:p-12 lg:py-24 lg:px-24">
          <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
            <div className="flex flex-col items-start gap-1">
              <p className="md:w-2/3 text-base lg:px-[24px] font-semibold sm:text-base md:text-5xl  text-[#fcfcfc] leading-relaxed font-['Plus_Jakarta_Sans',Helvetica]">
                A one stop solution

              </p>
              {/* <h1 className="md:w-full text-3xl lg:px-[24px] md:text-4xl xl:text-[44px] font-semibold text-white tracking-tight font-['Plus_Jakarta_Sans',Helvetica] mb-4">
                Fi Ne Tech Platform 
              </h1> */}
              <p className="w-full md:w-2/3 text-lg lg:px-[24px] sm:text-base md:text-xl font-normal text-[#ffffff] leading-relaxed mt-6 md:mt-6">
                Offering Financial services and Asset management integrated with NBFCs, OEMs & dealers.
              </p>
            </div>
            <div className="flex items-start pt-4 md:pt-6 lg:px-[24px]">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#ffffff] px-4 py-2 text-grey-100  rounded-md md:rounded-lg text-base md:text-base lg:text-lg font-semibold font-['Plus_Jakarta_Sans',Helvetica] shadow-sm hover:text-white hover:bg-[#033F4F]/90"
              >
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