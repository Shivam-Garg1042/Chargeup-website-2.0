import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";

export const HeroSections = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-[93.33px] py-20 md:py-[266.67px] w-full bg-[#041620]">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-[42.67px] px-4 md:px-[170px] w-full"
        >
          <div className="flex flex-col items-center gap-[26.67px] w-full">
            {/* Main Heading */}
            <motion.h1 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-6xl lg:text-7xl font-semibold text-background-colorswhite text-center tracking-[-1.92px] leading-[1.2] max-w-[1502px] font-['Plus_Jakarta_Sans',Helvetica]"
            >
              Driver First Fi-Ne-Tech Platform
            </motion.h1>

            {/* Secondary Heading */}
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-3xl lg:text-4xl font-semibold text-[#f8bb25] text-center leading-[1.3] max-w-[900px] font-['Plus_Jakarta_Sans',Helvetica]"
            >
              Powering Last Mile Drivers with Higher Earnings
            </motion.h2>

            {/* Bio/Subtext */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-[21.3px] font-normal text-text-colors25 text-center leading-8 max-w-[792px] font-['Plus_Jakarta_Sans',Helvetica]"
            >
              Offering Financial services and Asset management integrated with NBFCs, OEMs and dealers, to offer a single stop solution.
            </motion.p>
          </div>

          {/* What, Why, How ChargeUp Section */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1200px] mt-8"
          > */}
            {/* What is ChargeUp */}
            {/* <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
            >
              <div className="w-16 h-16 bg-[#f8bb25] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-black">?</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 font-['Plus_Jakarta_Sans',Helvetica]">
                What is ChargeUp
              </h3>
              <p className="text-sm md:text-base text-text-colors25 leading-6 font-['Plus_Jakarta_Sans',Helvetica]">
                A comprehensive fintech platform designed specifically for last-mile delivery drivers, integrating financial services with asset management.
              </p>
            </motion.div> */}

            {/* Why ChargeUp */}
            {/* <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
            >
              <div className="w-16 h-16 bg-[#f8bb25] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-black">★</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 font-['Plus_Jakarta_Sans',Helvetica]">
                Why ChargeUp
              </h3>
              <p className="text-sm md:text-base text-text-colors25 leading-6 font-['Plus_Jakarta_Sans',Helvetica]">
                Empowering drivers with higher earnings through seamless integration of NBFCs, OEMs, and dealers in one unified platform.
              </p>
            </motion.div> */}

            {/* How ChargeUp is Doing */}
            {/* <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
            >
              <div className="w-16 h-16 bg-[#f8bb25] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-black">📈</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 font-['Plus_Jakarta_Sans',Helvetica]">
                How ChargeUp is Doing
              </h3>
              <p className="text-sm md:text-base text-text-colors25 leading-6 font-['Plus_Jakarta_Sans',Helvetica]">
                Successfully bridging the gap between drivers and financial opportunities, creating a thriving ecosystem for sustainable growth.
              </p>
            </motion.div> */}
          {/* </motion.div> */}

          {/* Buttons Section */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex flex-wrap items-center justify-center gap-5 mt-8"
          >
            <Button className="font-semibold text-base md:text-xl text-black bg-[#f8bb25] hover:bg-[#f8bb25]/90 rounded-[10px] px-4 md:px-[21.33px] py-[13.33px] h-auto shadow-[0px_1.33px_2.67px_#1018280d] font-['Plus_Jakarta_Sans',Helvetica] hover:scale-105 transition-transform">
              Know More
            </Button>

           
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};