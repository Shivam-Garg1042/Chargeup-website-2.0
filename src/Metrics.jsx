// import React from "react";

// const Vector4 = () => (
//   <svg width="114" height="87" viewBox="0 0 114 87" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M113.5 0.5C113.5 47.9132 74.9132 86.5 27.5 86.5C18.3875 86.5 9.59918 85.2211 1.29749 82.8317C0.897065 82.7179 0.5 83.0218 0.5 83.4393V86.5H113.5V0.5Z" fill="black"/>
//   </svg>
// );

// const Vector5 = () => (
//   <svg width="421" height="278" viewBox="0 0 421 278" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M420.5 0.5V277.5H0.5V274.561C0.5 274.143 0.897065 273.839 1.29749 273.953C9.59918 276.342 18.3875 277.621 27.5 277.621C74.9132 277.621 113.5 239.034 113.5 191.621C113.5 144.208 152.087 105.621 199.5 105.621C246.913 105.621 285.5 67.0342 285.5 19.621C285.5 12.8349 286.471 6.27411 288.297 0.0383455C288.389 -0.220161 288.697 -0.178546 288.724 0.0966501L290.37 19.621C290.37 67.0342 328.957 105.621 376.37 105.621C391.255 105.621 405.337 101.055 417.365 92.9711C417.699 92.7431 418.13 92.9853 418.13 93.3913V94.621C418.13 142.034 379.543 180.621 332.13 180.621C284.717 180.621 246.13 219.208 246.13 266.621C246.13 270.401 246.13 274.124 246.13 277.787C246.13 278.204 246.527 278.508 246.927 278.394C255.226 276.005 263.37 277.621 272.482 277.621C319.896 277.621 420.5 239.034 420.5 191.621V0.5Z" fill="black"/>
//   </svg>
// );

// const Card = ({ children, className }) => (
//   <div className={`bg-white rounded-[20px] shadow-[0px_26.67px_66.67px_#3440541a] ${className}`}>
//     {children}
//   </div>
// );

// const CardContent = ({ children, className }) => (
//   <div className={`p-[26.67px] ${className}`}>
//     {children}
//   </div>
// );

// export const Metrics = () => {
//   const metricCards = [
//     {
//       number: "1 Lakh",
//       plus: "+",
//       description: "CO2 Emission Saved",
//     },
//     {
//       number: "8k",
//       plus: "+",
//       description: "KMs run",
//     },
//     {
//       number: "7.8",
//       plus: "K+",
//       description: "Driver Income Generated",
//     },
//     {
//       number: "5000",
//       plus: "+",
//       description: "Drivers",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center relative bg-white">
//       <div className="w-full items-start gap-[13.33px] pt-0 pb-[133.33px] px-4 md:px-6 lg:px-0 relative flex flex-col">
//         <div className="items-center relative self-stretch w-full flex-[0_0_auto] flex flex-col">
//           <div className="relative w-full h-[503px] md:h-[450px] sm:h-[400px]">
//             <div className="w-full h-full">
//               <div className="relative w-full h-full">
//                 <div className="absolute w-full h-full top-0 left-0">
//                   <div className="relative h-full">
//                     <div className="h-[149px] top-[354px] md:top-[301px] sm:top-[251px] [background:radial-gradient(50%_50%_at_51%_0%,rgba(6,91,66,1)_0%,rgba(2,4,3,1)_100%)] absolute w-full left-0" />
//                     <div className="h-[354px] md:h-[301px] sm:h-[251px] top-0 [background:radial-gradient(50%_50%_at_50%_100%,rgba(0,33,24,1)_0%,rgba(0,40,29,1)_53%,rgba(2,2,2,1)_100%)] absolute w-full left-0" />
//                     <div className="h-[149px] top-[354px] md:top-[301px] sm:top-[251px] bg-[#00000066] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] absolute w-full left-0" />

//                     <div className="w-[403px] items-start gap-px absolute top-[93px] right-0 overflow-hidden opacity-[0.87] flex flex-col md:hidden">
//                       <div className="relative w-[458px] h-[323.74px] mr-[-55.00px]">
//                         <div className="relative h-[324px]">
//                           <div className="absolute w-[421px] h-[278px] top-0 left-[37px]">
//                             <Vector5 />
//                           </div>
//                           <div className="absolute w-[98px] h-[98px] top-[225px] left-0 rounded-[49.13px] border-[16.38px] border-solid border-black" />
//                           <div className="absolute w-[98px] h-[98px] top-[225px] left-[335px] rounded-[49.13px] border-[16.38px] border-solid border-black" />
//                           <div className="absolute w-5 h-5 top-[266px] left-[39px] bg-[#043a2a] rounded-[10.08px]" />
//                           <div className="absolute w-5 h-5 top-[266px] left-[374px] bg-[#043a2a] rounded-[10.08px]" />
//                           <div className="absolute w-[114px] h-[87px] top-[190px] left-0">
//                             <Vector4 />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-full items-center justify-center gap-[5.33px] absolute top-[120px] md:top-[80px] sm:top-[60px] left-0 flex flex-col px-4 md:px-6">
//                   <div className="relative self-stretch mt-[-1.33px] font-medium text-white text-[64px] md:text-[48px] sm:text-[36px] text-center tracking-[-1.28px] leading-[1.25] font-['Plus_Jakarta_Sans',Helvetica]">
//                     Our Impact for a Better Tomorrow
//                   </div>
//                 </div>

//                 <div className="absolute w-full px-4 md:px-6 h-auto top-[227px] md:top-[180px] sm:top-[140px] left-1/2 -translate-x-1/2 font-normal text-[#fcfcfc] text-[21.3px] md:text-[18px] sm:text-[16px] text-center tracking-[0] leading-8 md:leading-7 sm:leading-6 font-['Plus_Jakarta_Sans',Helvetica] max-w-[989px]">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Ut enim ad minim veniam, quis nostrud exercitation
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex w-full max-w-[1493.33px] items-center justify-center flex-wrap gap-6 relative flex-[0_0_auto] mt-[-106.67px] px-4 md:px-6">
//             {metricCards.map((card, index) => (
//               <Card
//                 key={index}
//                 className="w-full sm:w-[calc(50%-12px)] lg:w-[341.33px]"
//               >
//                 <CardContent className="flex flex-wrap items-start justify-center gap-[10px_0px]">
//                   <div className="relative w-fit mt-[-1.33px] font-medium text-[#0d0d0d] text-[48px] md:text-[40px] sm:text-[36px] text-center tracking-[-1.28px] leading-[1.25] whitespace-nowrap font-['Plus_Jakarta_Sans',Helvetica]">
//                     {card.number}
//                   </div>
//                   <div className="relative w-fit mt-[-1.33px] font-medium text-[#0d0d0d] text-[48px] md:text-[40px] sm:text-[36px] text-center tracking-[-1.28px] leading-[1.25] whitespace-nowrap font-['Plus_Jakarta_Sans',Helvetica]">
//                     {card.plus}
//                   </div>
//                   <div className="relative w-full font-normal text-[#808080] text-xl md:text-lg sm:text-base text-center tracking-[0] leading-8 font-['Plus_Jakarta_Sans',Helvetica]">
//                     {card.description}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };