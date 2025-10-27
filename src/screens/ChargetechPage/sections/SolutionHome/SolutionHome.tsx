import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import PartnerModal from "../../../PartnerPage/sections/PartnerContact/PartnerContact";
import { useState } from "react";

export const SolutionHome = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F9547]/5 via-white to-[#ffffff]/5 py-10 md:py-16">
      

      <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Enhanced Professional Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0F9547]/10 to-[#0C7D49]/10 rounded-full border border-[#0F9547]/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-[#0F9547] rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-bold text-[#0F9547] tracking-wide uppercase letter-spacing-wide">
                Full Stack AI/ML Platform
              </span>
            </div>
            
            {/* Main Heading with enhanced typography */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="block text-gray-900">Full Stack </span>
                <span className="block bg-gradient-to-r from-[#0F9547] via-[#0C7D49] to-[#0A704A] bg-clip-text text-transparent">
                  AI/ML Platform
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 leading-relaxed">
                For EV Finance & Asset Management
              </h2>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                This platform offers a seamless blend of financial services, asset management, and 
                cutting-edge technology.
              </p>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                Integrated with NBFCs, OEMs, and dealers to simplify complex operations into one unified, 
                intelligent solution.
              </p>
            </div>

            

            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="group bg-gradient-to-r from-[#0F9547] to-[#0C7D49] hover:from-[#0C7D49] hover:to-[#0A704A] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                Partner with us
                <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300 text-xl">→</span>
              </Button>
              
            
            </div>
          </div>

          {/* Right Side - Image Placeholder */}
          <div className="relative">
            {/* Main image container */}
            <div className="relative  ">
              {/* Placeholder for your image */}
              <div className=" w-full  flex items-center justify-center">
                <img 
                  src="/heroImage.png" 
                  alt="AI/ML Platform Dashboard"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback placeholder if image doesn't exist
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = `
                      <div class="w-full h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                        <div class="text-6xl md:text-8xl">🖼️</div>
                        <div class="text-center">
                          <p class="text-lg font-semibold text-gray-700">Platform Dashboard Image</p>
                          <p class="text-sm text-gray-500">Replace with /solution-platform-image.png</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
              
              
              
              
            </div>

           
          </div>
        </div>
      </div>

      <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};