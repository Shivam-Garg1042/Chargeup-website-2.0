import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DivWrapper } from "./sections/DivWrapper/DivWrapper.tsx";
import { Metrics } from "./sections/Metrics/Metrics.tsx";
import { Navbar } from "./sections/Navbar/Navbar.tsx";
import TestimonialSections from "./sections/TestimonialSections/TestimonialSections.tsx";
import { WhyChooseUs } from "./sections/WhyChooseUs/WhyChooseUs.tsx";
import   PartnerEcosystem  from "./sections/Ecosystem/Ecosystem.tsx";
import Map  from "./sections/Map/Map.tsx";
import { HeroSections } from "./sections/HeroSections/HeroSections.tsx";
import  KeyFeatures  from '../ChargetechPage/sections/KeyFeatures/KeyFeatures.tsx';
import { SolutionHome } from '../ChargetechPage/sections/SolutionHome/SolutionHome.tsx';
import { Challenges } from '../ChargetechPage/sections/Challeges/Challenges.tsx';
import { Pillars } from '../ChargetechPage/sections/Pillars/Pillars.tsx';
import FeaturesSection from '../ChargetechPage/sections/KeyFeatures/KeyFeatures.tsx';

export const Homepage = (): JSX.Element => {
  return (
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={
      <>
      <HeroSections/>
      <PartnerEcosystem/>
      {/* <WhyChooseUs/> */}
      <Map/>
      <Metrics/>
      <TestimonialSections/>
      </>
    }>
    </Route>

    <Route path = "/solutions" element={
      <>
      <SolutionHome/>
      <FeaturesSection/>
      {/* <Challenges/>
      <Pillars/> */}
      
      </>
    }></Route>
    </Routes>
      
    <DivWrapper/>
    
    </Router> 
    
  );
};
