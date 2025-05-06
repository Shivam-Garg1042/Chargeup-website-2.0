import { Frame } from "lucide-react";
import { DivWrapper } from "./sections/DivWrapper/DivWrapper.tsx";
import { Metrics } from "./sections/Metrics/Metrics.tsx";
import { Navbar } from "./sections/Navbar/Navbar.tsx";
import TestimonialSections from "./sections/TestimonialSections/TestimonialSections.tsx";
import { WhyChooseUs } from "./sections/WhyChooseUs/WhyChooseUs.tsx";
import { FrameWrapper } from "./sections/FrameWrapper/FrameWrapper.tsx";
import   PartnerEcosystem  from "./sections/Ecosystem/Ecosystem.tsx";
import Map  from "./sections/Map/Map.tsx";

export const Homepage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full min-h-screen bg-gray-50">
      <Navbar/>
      
     {/* <Frame/>
     <FrameWrapper/> */}
     
      <Metrics/>
      <PartnerEcosystem/>
      <Map/>
      {/* <WhyChooseUs/> */}

      <TestimonialSections/>
      <DivWrapper/>
    </main>
  );
};
