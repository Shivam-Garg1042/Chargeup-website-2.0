import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactModal from "../ContactModal/Contact.tsx";

export const Navbar = (): JSX.Element => {
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for navbar scroll effect
  const [scrolled, setScrolled] = useState(false);
  // State for GetStarted modal
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  // State for active link
  const [activeLink, setActiveLink] = useState('');

  // Navigation menu items from smaller component
  const navItems = [
    { name: "Our Solutions", href: "/solutions" },
    { name: "Partners", href: "/partners" },
    { name: "News Room", href: "/news" },
    { name: "Our Story", href: "/story" },
    { name: "People", href: "/people" },
    { name: "Careers", href: "/careers" },
  ];
  const handlePlayStoreClick = () => {
        
    window.open('https://play.google.com/store/apps/details?id=com.chargeup.isourse', '_blank');
};
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-btn')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Toggle mobile menu and prevent scrolling when open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <nav className="container flex items-center justify-between py-4  px-3 md:py-4   md:px-12  max-w-full">
        {/* Logo with animation */}
        <div className="relative h-[40px] transition-transform duration-300 hover:scale-105">
          <Link to="/">
            <img
              className="h-[38px] object-cover"
              alt="Chargeup logo"
              src="/chargeup-logo-1-1.png"
            />
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex space-x-1">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link 
                  to={item.href}
                  className={`group inline-flex h-12 items-center justify-center px-2 py-0 font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-base xl:text-lg text-text-colors600 leading-[26.7px] relative hover:text-emerald-600 transition-colors duration-300 ${
                    activeLink === item.href ? 'text-emerald-600' : ''
                  }`}
                  onClick={() => setActiveLink(item.href)}
                >
                  {item.name}
                  <span className={`absolute bottom-1 left-0 h-0.5 bg-emerald-600 transition-all duration-300 ${
                    activeLink === item.href ? 'w-full' : 'w-0 group-hover:w-1/2 group-hover:translate-x-1/2'
                  }`}></span>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Language selector - hidden on mobile */}
          <a 
            href="#language" 
            className="hidden md:block w-8 md:h-8 lg:w-[48px] lg:h-[58px] transition-transform duration-300 hover:rotate-12"
          >
            <img
              className="w-full h-full"
              alt="Language circle"
              src="/language-circle.svg"
            />
          </a>

          
          
          
          {/* Contact Modal */}
          <ContactModal 
            isOpen={isGetStartedOpen} 
            onClose={() => setIsGetStartedOpen(false)} 
          />
          
          {/* Download App button - hidden on mobile */}
          <Button
            onClick={handlePlayStoreClick}
            variant="outline"
            className="hidden md:flex gap-2 px-3 md:py-2 lg:px-[16px] lg:py-[19px] rounded-md lg:rounded-[10.67px] border border-solid border-[#0e0e0e] lg:border-2 shadow-[0px_1.33px_2.67px_#1018280d] font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-base lg:text-[20px] text-[#0e0e0e] leading-normal lg:leading-8 hover:bg-gray-100 transition-all duration-300"
          >
            Download App
            <img className="w-4 h-4 lg:w-6 lg:h-6" alt="Play store" src="/play-store.svg" />
          </Button>
            {/* Get Started button */}
          <button 
            className="hidden md:block bg-[#f8bb25] text-black rounded-md md:rounded-lg px-4 py-2 lg:px-[20px] font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-center lg:text-base shadow-[0px_1.33px_2.67px_#1018280d] hover:bg-[#f9c240] transition-all duration-300 hover:shadow-lg"
            onClick={() => setIsGetStartedOpen(true)}
          >
            Get Started
          </button>

          {/* Hamburger menu for mobile */}
          <button 
            className="hamburger-btn lg:hidden flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'transform rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ease-in-out mt-1 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out mt-1 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-1' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`bg-white w-4/5 max-w-sm h-screen overflow-y-auto transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <img
                className="h-[32px] object-cover"
                alt="Chargeup logo"
                src="/chargeup-logo-1-1.png"
              />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li 
                  key={index}
                  className="border-b border-gray-200 pb-2"
                  style={{ 
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transition: `transform 0.3s ease-in-out ${index * 0.05}s, opacity 0.3s ease-in-out ${index * 0.05}s` 
                  }}
                >
                  <Link 
                    to={item.href} 
                    className="block font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-lg text-gray-800 hover:text-emerald-600 transition-colors duration-200"
                    onClick={() => {
                      setActiveLink(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 space-y-4">
              <Button 
                className="w-full bg-[#f8bb25] text-black rounded-md px-4 py-3 font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-base shadow-sm hover:bg-[#f9c240] transition-all duration-300"
                onClick={() => {
                  setIsGetStartedOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Get Started
              </Button>
              
              <Button
                variant="outline"
                className="w-full flex justify-center gap-2 px-4 py-3 rounded-md border border-solid border-[#0e0e0e] shadow-sm font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-base text-[#0e0e0e] hover:bg-gray-100 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download App
                <img className="w-5 h-5" alt="Play store" src="/play-store.svg" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};