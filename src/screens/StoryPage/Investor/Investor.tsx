import { Card, CardContent } from "../../../components/ui/card";

export default function Investor() {
  // Investor data
  const investors = [
    { id: 2, logo: "/investor3.jpg", since: "Investor Since 2021" },
    { id: 1, logo: "/investor1.png", since: "Investor Since 2021" },         
    { id: 3, logo: "/investor2.png", since: "Investor Since 2021"},       
  ];
        
  return (
    <section className="flex flex-col w-full items-center justify-center gap-2 bg-gray-50 pb-12 md:pb-20">
      {/* Investors Section */}
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center justify-center gap-3 md:pt-[70px] pb-[30px] md:pb-[50px]">
          <div className="w-full max-w-7xl px-6 md:px-10 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-medium text-x-900 text-center tracking-tight leading-tight md:leading-[80px]">
              Our Valuable Investors
            </h2>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-7 md:gap-[47px] px-4">
          {investors.map((investor) => (
            <Card
              key={investor.id}
              className="w-full max-w-sm md:w-[400px] h-[305px] flex flex-col items-center justify-center gap-px bg-white rounded-[26px] shadow-[0px_1px_12px_10px_#3440541f]"
            >
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 w-full h-full">
                <div className="w-full h-[190px] flex items-center justify-center p-4">
                  <img
                    className="max-w-full max-h-full object-contain"
                    alt="Investor logo"
                    src={investor.logo}
                  />
                </div>
                {/* <p className=" text-[#1b4748] text-[30px] text-center leading-[55px]">
                  {investor.since}
                </p> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
                  
    </section>
  );
};