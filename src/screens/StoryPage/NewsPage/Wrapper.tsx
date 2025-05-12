
export default function Wrapper() {
  return (
          
    <>
      {/* Latest News Banner */}
      <div className="w-full flex flex-col items-center gap-8 md:gap-1 bg-[#bec9b8]">
        <img
          className="w-full h-auto"
          alt="Decorative banner"
          src="/rectangle-4146.svg"
        />

        <div className="w-full px-6 md:px-[150px] flex flex-col justify-center pb-12">
          <div className="max-w-4xl flex flex-col gap-5">
            <h2 className="font-bold text-4xl md:text-[50px] text-x-900 tracking-tight leading-tight md:leading-[80px]">
              Latest News on Chargeup
            </h2>
            <p className="text-lg md:text-[20px] text-[#686868] leading-8 max-w-[734px]">
              Find all the important media &amp; news announcements by ChargeUp
              here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      
    </>
  );
};
