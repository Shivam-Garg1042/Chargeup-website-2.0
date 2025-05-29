import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import ContactModal from "../ContactModal/Contact.tsx";
import { useState } from "react";
import { MapPin,Phone ,Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const DivWrapper = (): JSX.Element => {
  
  // Navigation links data
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const firstNavLinks = [
    { title: "Our Story", id: "/story#story" },
    { title: "Partners", id: "/partners#partners" },
    { title: "People", id: "/people#people" },
  ];

  const secondNavLinks = [
    { title: "Careers", id: "/people#careers" },
    { title: "News Room", id: "/story#news-room" },
    { title: "Our Solution", id: "/solutions/#solutions" },
  ];

  // Footer links data
  const footerLinks = [
    { title: "Privacy Policy", id: "https://echargeup.com/privacy-policy/" },
    { title: "Refund & Cancellation Policy", id: "https://echargeup.com/refund-and-cancellation-policy/" },
    { title: "Terms & Conditions", id: "https://echargeup.com/terms_and_conditions/" },
    { title : "Corporate Governance", id: "https://echargeup.com/corporate-governance/" },
    
  ];

  // Social media links data
  const socialLinks = [
    { icon: "/facebook.svg", alt: "Facebook", id: "https://www.facebook.com/echargeup" },
    { icon: "/instagram.svg", alt: "Instagram", id: "https://www.instagram.com/e_chargeup/" },
    { icon: "/twitter.svg", alt: "Twitter", id: "https://x.com/echargeup" },
  ];

  return (
    <footer className="flex flex-col items-center w-full  px-4 md:px-6 lg:px-8 bg-gray-100">
      <div className="w-full max-w-7xl">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between py-8 gap-4">
          {/* Logo and description column */}
          <div className="flex flex-col gap-4 max-w-lg">
            <div className="relative h-10 w-40">
              <img
                className="object-contain"
                alt="Chargeup logo"
                src="/chargeup-logo-1-1.png"
              />
            </div>
            <a href = "https://maps.app.goo.gl/3PDKab7FuiXp9roz6" target="_blank" rel="noopener noreferrer" className="text-2xl">
          <p className="text-base flex gap-2">
            <MapPin/>
            <span>300/3, 1st Floor, 
            
            MG Road, Sultanpur,
            
            New Delhi – 110030
            </span>
          </p></a>
          <p className="text-base flex items-center gap-2 ">
            <Phone/> 18001230181
            </p>
            
            <p className="text-base flex items-center gap-2 mt-1 ">
            <Mail/> info@echargeup.com
          </p>
          </div>

          {/* Navigation links - center columns */}
          <div className="flex justify-start gap-12 md:gap-16 lg:gap-24">
            {/* First nav column */}
            <div className="flex flex-col gap-2">
              {firstNavLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  className="text-gray-700 text-base md:text-lg hover:text-gray-900"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            
            {/* Second nav column */}
            <div className="flex flex-col gap-2">
              {secondNavLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  className="text-gray-700 text-base md:text-lg hover:text-gray-900"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact button and social icons */}
          <div className="flex flex-col gap-8 items-start md:items-start ">
            <Button 
              onClick={() => setIsGetStartedOpen(true)}
              className="bg-[#0D8948] text-black hover:bg-[#023350] text-base text-white font-medium rounded-md px-6 py-2 ml-4"
            >
              Contact Us
            </Button>
            <ContactModal 
                        isOpen={isGetStartedOpen} 
                        onClose={() => setIsGetStartedOpen(false)} 
                      />
            
            <div className="flex gap-2 md:gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.id} 
                  href={`${social.id}`}
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 "
                >
                  <img className="w-8 h-8" alt={social.alt} src={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Separator line */}
        <Separator className="bg-gray-200" />

        {/* Footer bottom section */}
        <div className="flex flex-col md:flex-row justify-between py-4 gap-4 text-sm md:text-[18px]">
          <p className="text-gray-800">
            Copyright @ 2025 CHARGEUP, All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.id}
                href={`${link.id}`}
                target="_blank"
                className="text-gray-800 hover:text-gray-900"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};