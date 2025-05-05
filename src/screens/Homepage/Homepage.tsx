import { DivWrapper } from "./sections/DivWrapper/DivWrapper.tsx";
import { Metrics } from "./sections/Metrics/Metrics.tsx";
import { Navbar } from "./sections/Navbar/Navbar.tsx";
import TestimonialSections from "./sections/TestimonialSections/TestimonialSections.tsx";


export const Homepage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full min-h-screen bg-gray-50">
      <Navbar/>
      
     
      <Metrics/>
      <TestimonialSections/>
      <DivWrapper/>
    </main>
  );
};
