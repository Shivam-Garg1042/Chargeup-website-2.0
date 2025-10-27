
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";

import { Link } from "react-router-dom";
export default function PartnerEcosystem() {
  // Partner logos data for mapping
  const partnerLogos = [
      { src: "/oem3.png", alt: "Greenfuel", width: 180 ,heigth : 150},
      { src: "/techpartner1.png", alt: "Oppo Logo", width: 150 ,heigth : 100},
    { src: "/nbfc1.png", alt: "Ascend", width: 150 ,heigth : 200},
   
    
    { src: "/oem2.png", alt: "Eastman", width: 160,heigth : 100 },
     
    { src: "/oem5.jpg", alt: "zenfinity", width: 160,heigth : 130 },
    { src: "/nbfc12.jpg", alt: "SVCL", width: 120,heigth : 100 },
  ];

  return (
    <section className="w-full bg-white overflow-hidden -mb-20">
      <div className="max-w-[1920px]  px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-6 sm:py-20 ">
          {/* Title with dots */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4"
          >
            <div className="flex gap-2">
              <div className="w-2 h-2 mt-1 rounded-full bg-[#0D8948]"></div>
              <div className="w-3 h-3 mt-0.5 rounded-full bg-[#07584D]"></div>
              <div className="w-4 h-4 rounded-full bg-[#002751]"></div>
            </div>
            
            <h2 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-[#0D8948] to-[#002751] bg-clip-text text-transparent">
              OUR PARTNERS
            </h2>
            
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-[#002751]"></div>
              <div className="w-3 h-3 mt-0.5 rounded-full bg-[#07584D]"></div>
              <div className="w-2 h-2 mt-1 rounded-full bg-[#0D8948]"></div>
            </div>
          </motion.div>

          {/* Logos container */}
          <div className="w-full">
            <Card className="border-none shadow-none">
              <CardContent className="flex flex-wrap justify-center lg:justify-between items-center gap-4 sm:gap-8 sm:gap-12 p-3 sm:p-6 sm:p-8">
                {partnerLogos.map((logo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      style={{ 
                        width: logo.width? `${logo.width}px`: 'auto',
                        height: logo.heigth ? `${logo.heigth}px` : 'auto'
                      }}
                      loading="lazy"  
                      className="h-auto max-w-full object-contain"
                    />
                  </motion.div>
                ))}

                {/* View All Button */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <Link to="/partners#ourPartners">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0D8948] rounded-full flex items-center justify-center ">
                    
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="mt-3 text-sm sm:text-base font-medium">View All</span></Link>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};