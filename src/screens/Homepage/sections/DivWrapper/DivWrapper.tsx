import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import ContactModal from "../ContactModal/Contact.tsx";
import { useState } from "react";

export const DivWrapper = (): JSX.Element => {
  // Navigation links data
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const firstNavLinks = [
    { title: "Our Story", id: "our-story" },
    { title: "Partners", id: "partners" },
    { title: "Drivers", id: "drivers" },
  ];

  const secondNavLinks = [
    { title: "Careers", id: "careers" },
    { title: "News Room", id: "news-room" },
    { title: "ChargeTech", id: "chargetech" },
  ];

  // Footer links data
  const footerLinks = [
    { title: "Privacy Policy", id: "https://echargeup.com/privacy-policy/" },
    { title: "Refund & Cancellation Policy", id: "https://echargeup.com/refund-and-cancellation-policy/" },
    // { title: "Terms & Conditions", id: "https://echargeup.com/refund-and-cancellation-policy/" },
    { title : "Corporate Governance", id: "https://echargeup.com/corporate-governance/" },
    
  ];

  // Social media links data
  const socialLinks = [
    { icon: "/facebook.svg", alt: "Facebook", id: "https://www.facebook.com/echargeup" },
    { icon: "/instagram.svg", alt: "Instagram", id: "https://www.instagram.com/e_chargeup/" },
    { icon: "/twitter.svg", alt: "Twitter", id: "https://x.com/echargeup" },
  ];

  return (
    <footer className="flex flex-col items-center w-full  px-4 md:px-6 lg:px-8 bg-[#F9F9FB]">
      <div className="w-full max-w-7xl">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between py-8 gap-8">
          {/* Logo and description column */}
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="relative h-10 w-40">
              <img
                className="object-contain"
                alt="Chargeup logo"
                src="/chargeup-logo-1-1.png"
              />
            </div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Experience seamless, efficient, and hassle-free EV support designed to keep you moving without interruptions.
            </p>
          </div>

          {/* Navigation links - center columns */}
          <div className="flex justify-start gap-12 md:gap-16 lg:gap-24">
            {/* First nav column */}
            <div className="flex flex-col gap-2">
              {firstNavLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-gray-700 text-base md:text-lg hover:text-gray-900"
                >
                  {link.title}
                </a>
              ))}
            </div>
            
            {/* Second nav column */}
            <div className="flex flex-col gap-2">
              {secondNavLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-gray-700 text-base md:text-lg hover:text-gray-900"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Contact button and social icons */}
          <div className="flex flex-col gap-8 items-start md:items-start">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 text-base font-medium rounded-md px-6 py-2">
              {/* onClick={() => setIsGetStartedOpen(true)} */}
              Contact Us
            </Button>
            
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

          <div className="flex flex-wrap gap-4 md:gap-16">
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