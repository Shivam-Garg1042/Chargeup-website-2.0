
import { Card, CardContent } from "../../../../components/ui/card";

export const Benefits = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 bg-[#bec9b8] mt-10">
      <svg xmlns="http://www.w3.org/2000/svg" width="1725" height="140" viewBox="0 0 1920 157" fill="none">
  <path d="M0 0.333008H1920V10.3604C1920 339.166 849 10.3604 0 10.3604V0.333008Z" fill="white"/>
</svg>

      <Card className="border-none bg-transparent shadow-none w-full max-w-[1706px] px-10">
        <CardContent className="p-0">
          <div className="flex flex-col items-center justify-center gap-8 max-w-[1142px] mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#010101]  text-[40px] lg:text-[48px] text-center tracking-[-1.16px] leading-[58.6px]">
              Why Partner with Chargeup?
            </h2>

            <p className="max-w-[620px] font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#646464] text-[19px] text-center leading-8 mb-12">
              Chargeup is a platform built for scalable, tech-driven growth.<br></br> With deep driver access, we help NBFCs reduce risk, OEMs for fast product adoption, and dealers for higher growth.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
