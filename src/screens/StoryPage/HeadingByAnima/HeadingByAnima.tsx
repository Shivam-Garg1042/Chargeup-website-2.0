import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeadingByAnima = (): JSX.Element => {
  return (
    <section className="flex items-center justify-between px-6 pt-32 pb-[87px] bg-gray-50">
      <div className="flex flex-col items-center gap-[13px]">
        <img
          className="w-[84px] h-[42.44px]"
          alt="Rectangle"
          src="/rectangle-4196.svg"
        />

        <div className="flex flex-col items-start gap-3">
          <div className="w-[152px] h-[49px] bg-[#f1f1f1] rounded-[7px_7px_0px_0px]" />
          <div className="w-[152px] h-[49px] bg-[#f1f1f1]" />
          <div className="flex flex-col items-start">
            <div className="w-[152px] h-[49px] bg-[#f1f1f1]" />
            <img
              className="w-[152px] h-[55.43px] mt-[-3px]"
              alt="Rectangle"
              src="/rectangle-4195.svg"
            />
          </div>
        </div>
      </div>

      <Card className="border-none shadow-none">
        <CardContent className="flex flex-col items-center justify-center py-0 px-[42.67px] max-w-[1066.67px]">
          <div className="flex flex-col items-start gap-8 w-full">
            <h2 className="w-full mt-[-1.33px] font-['Plus_Jakarta_Sans',Helvetica] text-[58px] text-center leading-[69.6px] text-x-900">
              <span className="font-medium">Founded in </span>
              <span className="font-bold">2019 </span>
            </h2>

            <p className="w-full font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[22px] text-center leading-[30.8px] text-x-500">
              Collaborate with Chargeup to power the future of electric
              mobility. From charging infrastructure integration to fleet
              enablement and data intelligence, we help OEMs enhance
              performance, accelerate deployment, and unlock new revenue
              streams.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
