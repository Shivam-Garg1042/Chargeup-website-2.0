import React from "react";
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
            <motion.h1 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-6xl lg:text-7xl font-semibold text-background-colorswhite text-center tracking-[-1.92px] leading-[1.2] max-w-[1502px] font-['Plus_Jakarta_Sans',Helvetica]"
            >
              Driver 1st Fi-Ne-Tech Platform
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-[21.3px] font-normal text-text-colors25 text-center leading-8 max-w-[792px] font-['Plus_Jakarta_Sans',Helvetica]"
            >
              Powering Last Mile Drivers with Higher Earnings
            </motion.p>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            <Button
              variant="outline"
              className="font-semibold text-base md:text-xl text-[#f8bb25] border-[1.33px] border-[#f8bb25] rounded-[10px] px-4 md:px-[21.33px] py-[13.33px] h-auto shadow-[0px_1.33px_2.67px_#1018280d] font-['Plus_Jakarta_Sans',Helvetica] hover:scale-105 transition-transform"
            >
              Become a Driver
            </Button>

            <Button className="font-semibold text-base md:text-xl text-black bg-[#f8bb25] hover:bg-[#f8bb25]/90 rounded-[10px] px-4 md:px-[21.33px] py-[13.33px] h-auto shadow-[0px_1.33px_2.67px_#1018280d] font-['Plus_Jakarta_Sans',Helvetica] hover:scale-105 transition-transform">
              Become a Partner
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};