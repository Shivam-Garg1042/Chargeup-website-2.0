import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DivWrapper } from "./sections/DivWrapper/DivWrapper.tsx";
import { Metrics } from "./sections/Metrics/Metrics.tsx";
import { Navbar } from "./sections/Navbar/Navbar.tsx";

import   PartnerEcosystem  from "./sections/Ecosystem/Ecosystem.tsx";
import Map  from "./sections/Map/Map.tsx";
import HeroSections   from "./sections/HeroSections/HeroSections.tsx";
import CorporateGovernanceContent from '../FooterPages/Corporate.tsx';
import { SolutionHome } from '../ChargetechPage/sections/SolutionHome/SolutionHome.tsx';
import { Challenges } from '../ChargetechPage/sections/Challeges/Challenges.tsx';
import { Pillars } from '../ChargetechPage/sections/Pillars/Pillars.tsx';
import FeaturesSection from '../ChargetechPage/sections/KeyFeatures/KeyFeatures.tsx';
import PartnersHome  from '../PartnerPage/sections/PartnersHome/PartnersHome.tsx';
import { OurPartners } from '../PartnerPage/sections/OurPartners/OurPartners.tsx';
import { Benefits } from '../PartnerPage/sections/Benefits/Benefits.tsx';
import Oems from '../PartnerPage/sections/OEMs/OEMs.tsx';
import  PrivacyPolicyContent from '../FooterPages/Privacy.tsx';
import  VisionMission from '../StoryPage/VisionMission/VisionMission.tsx';
import  NewsPage from '../StoryPage/NewsPage/NewsPage.tsx';
import Investor  from '../StoryPage/Investor/Investor.tsx';
import  Wrapper from '../StoryPage/NewsPage/Wrapper.tsx';
import OpenPositions from '../PeoplePage/Career/Career.tsx';
import TermsConditionsContent from '../FooterPages/Terms.tsx';
import {CultureAtChargeUp} from '../PeoplePage/Culture/Culture.tsx';
import Team from '../PeoplePage/Team/Team.tsx';
import ChargeupJourney from '../StoryPage/ChargeupJourney/ChargeupJourney.tsx';
import RefundCancellationContent from '../FooterPages/Refund.tsx';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import VideoCarouselSection from './sections/Video/Video.tsx';
import GalleryWrapper from './sections/testimony/GalleryWrapper.tsx';
import ScrollToTop from './ScrollToTop.tsx';
import PassportPage from '../PassportPage/PassportPage.tsx';
import PageTitle from '../../components/PageTitle.tsx';


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
      <PageTitle 
        title="Chargeup - India's Leading EV Tech Platform"
        description="Transform your EV journey with Chargeup's battery management solutions, and comprehensive ecosystem for electric vehicle owners across India."
      />
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
    <Route path="/privacy-policy" element={
      <>
        <PageTitle 
          title="Privacy Policy - Chargeup Data Protection & User Privacy"
          description="Learn about Chargeup's commitment to protecting your privacy and data security. Read our comprehensive privacy policy for EV platform users."
        />
        <PrivacyPolicyContent />
      </>
    } />
    <Route path="/refund-policy" element={
      <>
        <PageTitle 
          title="Refund & Cancellation Policy - Chargeup Terms & Conditions"
          description="Review Chargeup's refund and cancellation policy for EV charging services, subscriptions, and platform usage terms."
        />
        <RefundCancellationContent />
      </>
    } />
  <Route path="/terms-and-conditions" element={
    <>
      <PageTitle 
        title="Terms & Conditions - Chargeup Service Agreement & User Terms"
        description="Read Chargeup's terms and conditions for using our EV platform, services, and digital solutions. User agreement and service terms."
      />
      <TermsConditionsContent />
    </>
  } />
  <Route path="/corporate-governance" element={
    <>
      <PageTitle 
        title="Corporate Governance - Chargeup Leadership & Business Ethics"
        description="Learn about Chargeup's corporate governance practices, leadership principles, and commitment to ethical business operations in the EV industry."
      />
      <CorporateGovernanceContent />
    </>
  } />
    <Route path = "/solutions" element={
      <>
      <PageTitle 
        title="EV Solutions - Smart Charging & Battery Technology | Chargeup"
        description="Discover Chargeup's innovative EV solutions including infrastructure, battery management systems, and technology platforms for electric mobility."
      />
      <section id="solutions">
      <FeaturesSection/>
      </section>
      <SolutionHome/>
      <Challenges/>
      <Pillars/>
      </>
    }></Route>
    <Route path = "/partners" element={
      <>
      <PageTitle 
        title="Partners & OEMs - Join Chargeup's EV Ecosystem | Strategic Partnerships"
        description="Partner with Chargeup to accelerate EV adoption. Explore benefits for OEMs, charging partners, and stakeholders in India's growing electric vehicle ecosystem."
      />
      
      <section id="partners">
  <PartnersHome />
</section>
      
      <OurPartners/>
      <Benefits/>
      <Oems/>
      {/* <HowToJoin/> */}
      
      </>
    }></Route>
        {/* <Route path="/passport" element={
          <>
            <PageTitle 
              title="Battery Passport - India's First Blockchain-Enabled Platform | Chargeup"
              description="Experience India's first blockchain-enabled battery passport platform. Track, verify, and optimize battery lifecycle with unprecedented transparency and security."
            />
            <section id="passport">
              <PassportPage />
            </section>
          </>
        } /> */}
    <Route path = "/story" element={
      <>
        <PageTitle 
          title="Our Story - Chargeup Journey, Vision & Mission | EV Tech Platform"
          description="Learn about Chargeup's journey in transforming India's EV ecosystem, our vision for sustainable mobility, and mission to empower drivers and partners."
        />
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
        <PageTitle 
          title="People & Careers - Join the Chargeup Team | EV Innovation"
          description="Meet the Chargeup team driving EV innovation in India. Explore career opportunities, company culture, and join us in transforming sustainable mobility."
        />
      
      
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
