const AboutChargeup = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-20 h-56 w-56 rounded-full bg-[#0D8948]/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#002751]/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#041620]">About Us</h2>

          <p className="text-base sm:text-lg text-[#041620]/80 leading-relaxed">
            India has over <span className=" text-[#0D8948]">10 million commercial drivers moving 200 million people every day</span> , yet the financial
            system continues to treat them as high-risk borrowers. The real risk is not the driver. It is the
            volatility of the vehicle, energy costs, and daily earnings.
          </p>

          <p className="text-base sm:text-lg text-[#041620]/80 leading-relaxed">
            Chargeup solves this through its <span className="  text-[#0D8948]">driver-first Fi-Ne-Tech platform</span>, designed to control the
            variables that determine repayment:<span className="  text-[#0D8948]"> energy, uptime, and asset performance</span>. Using deep IoT
            integration and real-time data, the platform brings <span className="  text-[#0D8948]">earning security for drivers, loan security
            for lenders, and asset security for OEMs</span>, empowering drivers to run more and earn more for a
            better tomorrow.
          </p>

          <p className="text-base sm:text-lg text-[#041620]/80 leading-relaxed">
            By de-risking EV financing and seamlessly connecting <span className="  text-[#0D8948]">drivers, OEMs, dealers, and lenders</span>,
            Chargeup is building a Fi-Ne-Tech platform powering the EV ecosystem and the driver economy.
          </p>

          <p className="text-base sm:text-lg text-[#041620]/80 leading-relaxed">
            Chargeup’s mission is to <span className=" text-[#0D8948]">enable 1 million driver entrepreneurs with higher earnings by 2030</span> while accelerating the electrification of last-mile mobility in India.
          </p>

          {/* <div className="rounded-xl border border-[#0D8948]/20 bg-[#0D8948]/5 px-5 py-4">
            <p className="text-sm uppercase tracking-[0.25em] text-[#0D8948]">Mission</p>
            <p className="mt-2 text-lg   text-[#041620]">
              Enable 1 million driver entrepreneurs by 2030 while accelerating last-mile electrification.
            </p>
          </div> */}
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute -left-6 top-12 h-24 w-24 rounded-2xl bg-[#0D8948]/15"></div>
            <div className="absolute -right-8 top-2 h-28 w-28 rounded-2xl bg-[#002751]/15"></div>
            <div className="absolute right-4 bottom-6 h-20 w-20 rounded-2xl bg-[#07584D]/20"></div>

            <div className="relative rounded-3xl border border-[#0D8948]/20 bg-white p-10 shadow-[0_24px_60px_rgba(6,40,48,0.15)]">
              <div className="flex flex-col gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[#0D8948]/15"></div>
                <div className="h-6 w-3/4 rounded-full bg-[#0D8948]/15"></div>
                <div className="h-4 w-full rounded-full bg-[#002751]/10"></div>
                <div className="h-4 w-11/12 rounded-full bg-[#002751]/10"></div>
                <div className="h-4 w-4/5 rounded-full bg-[#002751]/10"></div>
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <div className="h-16 rounded-2xl bg-[#0D8948]/12"></div>
                  <div className="h-16 rounded-2xl bg-[#002751]/12"></div>
                  <div className="col-span-2 h-16 rounded-2xl bg-[#07584D]/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutChargeup;
