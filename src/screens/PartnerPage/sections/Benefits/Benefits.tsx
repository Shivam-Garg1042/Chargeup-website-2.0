
import { Card, CardContent } from "../../../../components/ui/card";

export const Benefits = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 bg-[#bec9b8] ">
      <img
        className="w-full"
        alt="Decorative wave pattern"
        src="/rectangle-4146.svg"
      />

      <Card className="border-none bg-transparent shadow-none w-full max-w-[1706px] px-10">
        <CardContent className="p-0">
          <div className="flex flex-col items-center justify-center gap-8 max-w-[1142px] mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#010101]  text-[40px] lg:text-[48px] text-center tracking-[-1.16px] leading-[58.6px]">
              Benefits of Partnering with Chargeup
            </h2>

            <p className="max-w-[984px] font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#646464] text-[20px] text-center leading-8 mb-12">
              Elevate your organization with ChargeUp, gaining a dynamic
              partnership that empowers you with cutting-edge solutions and
              limitless opportunities.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
