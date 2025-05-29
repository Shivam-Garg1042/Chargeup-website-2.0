import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DivWrapper } from "./sections/DivWrapper/DivWrapper.tsx";
import { Metrics } from "./sections/Metrics/Metrics.tsx";
import { Navbar } from "./sections/Navbar/Navbar.tsx";
import TestimonialSections from "./sections/TestimonialSections/TestimonialSections.tsx";
import { WhyChooseUs } from "./sections/WhyChooseUs/WhyChooseUs.tsx";
import   PartnerEcosystem  from "./sections/Ecosystem/Ecosystem.tsx";
import Map  from "./sections/Map/Map.tsx";
import HeroSections   from "./sections/HeroSections/HeroSections.tsx";
import  KeyFeatures  from '../ChargetechPage/sections/KeyFeatures/KeyFeatures.tsx';
import { SolutionHome } from '../ChargetechPage/sections/SolutionHome/SolutionHome.tsx';
import { Challenges } from '../ChargetechPage/sections/Challeges/Challenges.tsx';
import { Pillars } from '../ChargetechPage/sections/Pillars/Pillars.tsx';
import FeaturesSection from '../ChargetechPage/sections/KeyFeatures/KeyFeatures.tsx';
import PartnersHome  from '../PartnerPage/sections/PartnersHome/PartnersHome.tsx';
import { OurPartners } from '../PartnerPage/sections/OurPartners/OurPartners.tsx';
import { Benefits } from '../PartnerPage/sections/Benefits/Benefits.tsx';
import Oems from '../PartnerPage/sections/OEMs/OEMs.tsx';
import HowToJoin  from '../PartnerPage/sections/HowToJoin/HowToJoin.tsx';
import  VisionMission from '../StoryPage/VisionMission/VisionMission.tsx';
import  NewsPage from '../StoryPage/NewsPage/NewsPage.tsx';
import Investor  from '../StoryPage/Investor/Investor.tsx';
import  Wrapper from '../StoryPage/NewsPage/Wrapper.tsx';
import OpenPositions from '../PeoplePage/Career/Career.tsx';
import Career from '../PeoplePage/Career/Career.tsx';
import {CultureAtChargeUp} from '../PeoplePage/Culture/Culture.tsx';
import Team from '../PeoplePage/Team/Team.tsx';
import ChargeupJourney from '../StoryPage/ChargeupJourney/ChargeupJourney.tsx';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import VideoCarouselSection from './sections/Video/Video.tsx';
import GalleryWrapper from './sections/testimony/GalleryWrapper.tsx';
import ScrollToTop from './ScrollToTop.tsx';
import { Section } from 'lucide-react';


const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

export const Homepage = (): JSX.Element => {
  return (
    <Router>
      <ScrollToTop/>
      <ScrollToHash />
    <Navbar/>
    <Routes>
    <Route path="/" element={
      <>
      <HeroSections/>
      
      {/* <WhyChooseUs/> */}
      <Map/>
      
      <Metrics/>
      <GalleryWrapper/>
    
      
      
      {/* <TestimonialSections/> */}
      <PartnerEcosystem/> 
      <VideoCarouselSection/>
      </>
    }>
    </Route>

    <Route path = "/solutions" element={
      <>
      <section id="solutions">
      <SolutionHome/>
      </section>

      <FeaturesSection/>
      <Challenges/>
      <Pillars/>
      
      </>
    }></Route>
    <Route path = "/partners" element={
      <>
      
      <section id="partners">
  <PartnersHome />
</section>
      
      <OurPartners/>
      <Benefits/>
      <Oems/>
      {/* <HowToJoin/> */}
      
      </>
    }></Route>
    <Route path = "/story" element={
      <>
      <section id="story">
      <ChargeupJourney />
    </section>
      <VisionMission/>
      <Investor/>
      <Wrapper/>
      <NewsPage/>
      
      </>
    }></Route>
    <Route path = "/people" element={
      <>
      
      
      <section id="people">
  <Team />
</section> 
      <CultureAtChargeUp/>
      <OpenPositions/>
      
      </>
    }></Route>
    </Routes>
      
    <DivWrapper/>
    
    </Router> 
    
  );
};
