
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import insurer1 from "/insurer1.png";
import insurer2 from "/insurer2.png";
import investor3 from "/investor3.jpg";
import recycler1 from "/recycler1.png";
import recycler2 from "/recycler2.png";
import techpartner1 from "/techpartner1.png";
import { Link } from "react-router-dom";
export default function PartnerEcosystem() {
  // Partner logos data for mapping
  const partnerLogos = [
      { src: insurer1, alt: "Prudent", width: 200 },
    { src: insurer2, alt: "March", width: 150 },
    { src: investor3, alt: "Mahindra Logo", width: 160 },
    { src: recycler1, alt: "Oppo Logo", width: 150 },
    { src: recycler2, alt: "Location Logo", width: 150 },
    { src: techpartner1, alt: "Samsung Logo", width: 150 }
  ];

  return (
    <section className="w-full bg-white overflow-hidden -mb-20">
      <div className="max-w-[1920px]  px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-12 sm:py-20 ">
          {/* Title with dots */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="flex gap-2">
              <div className="w-2 h-2 mt-1 rounded-full bg-[#F8BB25]"></div>
              <div className="w-3 h-3 mt-0.5 rounded-full bg-[#F48900]"></div>
              <div className="w-4 h-4 rounded-full bg-black"></div>
            </div>
            
            <h2 className="text-xl sm:text-3xl font-bold text-[#F48900]">
              OUR PARTNERS
            </h2>
            
            <div className="flex gap-2">
              <div className="w-4 h-4  rounded-full bg-black"></div>
              <div className="w-3 h-3 mt-0.5  rounded-full bg-[#F48900]"></div>
              <div className="w-2 h-2 mt-1 rounded-full bg-[#F8BB25]"></div>
            </div>
          </motion.div>

          {/* Logos container */}
          <div className="w-full">
            <Card className="border-none shadow-none">
              <CardContent className="flex flex-wrap justify-center lg:justify-between items-center gap-8 sm:gap-12 p-6 sm:p-8">
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
                      style={{ width: `${logo.width}px` }}
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
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#F8BB25] rounded-full flex items-center justify-center ">
                    
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