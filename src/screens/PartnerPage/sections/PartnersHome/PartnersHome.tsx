import { ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb.tsx"
import { Button } from "../../../../components/ui/button.tsx";

export const PartnersHome = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-[13.33px] py-12 px-8 md:pt-[50px] md:pb-32 md:px-32 w-full">
      <div className="relative w-full rounded-[20px] bg-[url(/mask-group.png)] bg-cover bg-center min-h-[599px]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Breadcrumb className="pt-[98px] pl-[100px]">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="font-normal text-white text-lg leading-[26.7px]"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRightIcon className="h-4 w-[35px] text-white" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#"
                  className="font-bold text-[#f48900] text-lg leading-[26.7px]"
                >
                  Patners
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col w-full md:w-[860px] items-start gap-[42.67px] pt-[77px] pl-[100px]">
            <div className="flex flex-col w-full md:w-[849px] items-start gap-8">
              <h1 className="font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-4xl md:text-[64px] tracking-[-1.28px] leading-tight">
                Chargeup Partners
              </h1>

              <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#fcfcfc] text-lg md:text-[22px] leading-8 max-w-[734.67px]">
                Unlock growth together by joining forces with Chargeup, where
                innovation meets collaboration for unparalleled success.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Button className="bg-[#f8bb25] text-[#0e0e0e] hover:bg-[#f8bb25]/90 rounded-[10px] px-[21.33px] py-[13.33px] font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-xl shadow-[0px_1.33px_2.67px_#1018280d]">
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
