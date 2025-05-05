
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const DivWrapper = (): JSX.Element => {
  // Navigation links data
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
    { title: "Customer Service", id: "customer-service" },
    { title: "Terms & Conditions", id: "terms" },
    { title: "Privacy Policy", id: "privacy" },
  ];

  // Social media links data
  const socialLinks = [
    { icon: "/facebook.svg", alt: "Facebook", id: "facebook" },
    { icon: "/instagram.svg", alt: "Instagram", id: "instagram" },
    { icon: "/twitter.svg", alt: "Twitter", id: "twitter" },
  ];

  return (
    <footer className="flex flex-col items-center justify-center gap-[54px] pt-[93.33px] pb-0 px-5 bg-background-colorsgray-white-bg w-full">
      <div className="flex items-center justify-between w-full max-w-[1580px]">
        <div className="flex items-center gap-[217.33px] flex-1">
          {/* Logo and description */}
          <div className="flex flex-col items-start gap-10">
            <div className="relative w-[250px] h-[43px]">
              <img
                className="absolute w-[333px] h-14 top-[3px] left-0 object-cover"
                alt="Chargeup logo"
                src="/chargeup-logo-1-1.png"
              />
            </div>

            <p className="w-[356px] font-normal text-[#656565] text-xl leading-8 font-['Plus_Jakarta_Sans',Helvetica]">
              Experience seamless, efficient, and hassle-free EV support
              designed to keep you moving without interruptions.
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex items-start gap-[133.33px] h-[212px]">
            {/* First column of links */}
            <nav className="flex flex-col items-start justify-center gap-[21.33px]">
              {firstNavLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="font-normal text-[#454545] text-[21.3px] leading-8 font-['Plus_Jakarta_Sans',Helvetica]"
                >
                  {link.title}
                </a>
              ))}
            </nav>

            {/* Second column of links */}
            <nav className="flex flex-col items-start justify-center gap-[21.33px]">
              {secondNavLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="font-normal text-[#454545] text-[21.3px] leading-8 font-['Plus_Jakarta_Sans',Helvetica]"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Contact and social media section */}
        <div className="flex flex-col w-[278px] h-[246px] items-center justify-between">
          <div className="flex flex-col items-start gap-4">
            <Button className="w-[216px] h-[58px] bg-[#f8bb25] rounded-[10px] text-[#0c0c0c] text-xl font-semibold shadow-[0px_1.33px_2.67px_#1018280d] font-['Plus_Jakarta_Sans',Helvetica]">
              Contact Us
            </Button>
          </div>

          <div className="flex items-center justify-center gap-[18.67px] w-full">
            {socialLinks.map((social) => (
              <a key={social.id} href={`#${social.id}`}>
                <img className="w-20 h-20" alt={social.alt} src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="w-full max-w-[1580px]">
        <Separator className="border-t-[1.33px] border-[#d6d6d6]" />

        <div className="flex items-start justify-between py-8">
          <p className="font-normal text-text-colors950 text-2xl leading-[37.3px] font-['Plus_Jakarta_Sans',Helvetica]">
            Copyright @ 2025 CHARGEUP , All rights reserved.
          </p>

          <div className="flex items-start gap-[66.67px]">
            {footerLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="font-normal text-text-colors950 text-2xl leading-[37.3px] font-['Plus_Jakarta_Sans',Helvetica]"
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
