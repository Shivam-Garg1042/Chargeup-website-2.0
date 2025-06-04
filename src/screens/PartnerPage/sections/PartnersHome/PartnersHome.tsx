
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useState } from "react";
import PartnerModal from "../PartnerContact/PartnerContact";


export default function PartnersHome(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="flex flex-col items-center justify-center pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-8 lg:px-8 relative ">
      <Card className="relative  h-[300px]  md:h-[400px] rounded-2xl bg-[url(/partnerhome.png)] bg-cover bg-left border-none overflow-hidden bg-[#054C4E] px-4 md:px-12 w-full">
        <CardContent className="p-0 h-full relative">
          {/* <div className="absolute top-6 sm:top-8 md:top-10 lg:top-12 left-4 sm:left-6 md:left-8 lg:left-12">
            <Breadcrumb>
            <div className="px-1 md:mt-5 mt-4  flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="font-normal text-white text-sm md:text-base lg:text-lg"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              
                <img
                  className="w-4 h-3 sm:w-5 sm:h-4 lg:w-6 lg:h-4"
                  alt="Breadcrumb separator"
                  src="/vector-6.svg"
                />
             
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/partners"
                  className="font-bold text-[#f48900] text-sm md:text-base lg:text-lg"
                >
                  Partners
                </BreadcrumbLink>
              </BreadcrumbItem>
              </div>
            </Breadcrumb>
          </div> */}
          
          <div className="flex flex-col items-start gap-4 md:gap-4  absolute top-10 sm:top-14 md:top-16 lg:top-16 left-4 sm:left-6 md:left-8 lg:left-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 mt-3">
            <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4 lg:gap-8">
              <h1 className="font-semibold text-white text-3xl sm:text-4xl md:text-5xl  tracking-tight">
                Scaling growth with our partners
              </h1>
              <p className="font-normal text-[#fcfcfc] text-sm sm:text-base md:text-xl  max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
                Our impact goes beyond drivers — enabling growth for NBFCs, OEMs, and dealers who power the ecosystem with us.
              </p>
            </div>
            <div className="mt-2 sm:mt-4 md:mt-6 lg:mt-8">
              <Button onClick={() => setIsModalOpen(true)}
                className="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3 lg:px-5 lg:py-5 bg-[#0A704A] hover:bg-[#023350]/90 rounded-lg font-semibold text-[#ffffff] text-sm sm:text-base md:text-lg ">
              
                Become a Partner
              </Button>
              <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}