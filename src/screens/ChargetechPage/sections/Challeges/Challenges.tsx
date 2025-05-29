import React, { useState } from 'react';
import { ArrowRight, Zap, AlertTriangle } from 'lucide-react';

export const Challenges = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const challengesData = [
    {
      title: "EV Downtime",
      subtitle: "Limit daily earnings and reduce asset productivity.",
      impact: "40% Loss",
      visual: (
        <div className="relative w-16 h-16 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center">
          <div className="relative">
            {/* Dead Battery Icon */}
            <div className="w-8 h-5 bg-red-400 rounded-md flex items-center justify-center relative">
              <div className="w-1 h-3 bg-red-600 rounded-r-sm absolute -right-0.5"></div>
              <div className="text-white text-xs font-bold">X</div>
            </div>
            {/* Warning indicators */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      )
    },
    {
      title: "No Control",
      subtitle: "No real-time visibility or digital monitoring.",
      impact: "Blind Spots",
      visual: (
        <div className="relative w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center">
          <div className="relative">
            {/* Blind eye */}
            <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center relative">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full relative">
                  <div className="absolute inset-0 bg-orange-800 rounded-full animate-ping opacity-30"></div>
                </div>
              </div>
              {/* Slash through eye */}
              <div className="absolute inset-0 w-full h-0.5 bg-red-500 rotate-45 rounded-full"></div>
            </div>
            {/* Question marks */}
            <div className="absolute -top-1.5 -right-1.5 text-orange-600 text-sm font-bold animate-bounce">?</div>
            <div className="absolute -bottom-1.5 -left-1.5 text-orange-500 text-xs font-bold animate-bounce">?</div>
          </div>
        </div>
      )
    },
    {
      title: "Credit Gap",
      subtitle: "Drivers often lack formal credit scores, making evaluation difficult.",
      impact: "70% Rejected",
      visual: (
        <div className="relative w-16 h-16 bg-gradient-to-br from-red-100 to-pink-50 rounded-xl flex items-center justify-center">
          <div className="relative">
            {/* Broken credit card */}
            <div className="w-8 h-5 bg-red-400 rounded-lg relative overflow-hidden">
              <div className="w-full h-1 bg-red-600 mt-1"></div>
              <div className="w-4 h-0.5 bg-red-600 mt-0.5 ml-0.5"></div>
              {/* Crack */}
              <div className="absolute inset-0 border border-red-600 border-dashed rounded-lg"></div>
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-red-600 transform rotate-12"></div>
            </div>
            {/* Rejection X */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">✕</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "High Risk",
      subtitle: "Unestablished resale market making the residual value uncertain.",
      impact: "Unknown ROI",
      visual: (
        <div className="relative w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-50 rounded-xl flex items-center justify-center">
          <div className="relative">
            {/* Declining graph */}
            <div className="w-8 h-6 relative">
              <svg className="w-full h-full" viewBox="0 0 30 20">
                <polyline
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="1.5"
                  points="2,18 8,12 12,15 18,8 22,12 28,18"
                  className="animate-pulse"
                />
                <circle cx="8" cy="12" r="1" fill="#F97316" />
                <circle cx="12" cy="15" r="1" fill="#F97316" />
                <circle cx="18" cy="8" r="1" fill="#F97316" />
                <circle cx="22" cy="12" r="1" fill="#F97316" />
              </svg>
            </div>
            {/* Warning triangle */}
            <div className="absolute -top-1 -right-1">
              <AlertTriangle className="w-2.5 h-2.5 text-orange-500 animate-pulse" />
            </div>
          </div>
        </div>
      )
    }
  ];

  const solutionsData = [
    {
      title: "365 Days",
      subtitle: "Enabling driver to run more earn more.",
      benefit: "99.9% Uptime",
      visual: (
        <div className="relative w-16 h-16 bg-gradient-to-br from-[#0F9547]/20 to-[#0D8948]/10 rounded-xl flex items-center justify-center">
          <div className="relative">
            {/* Healthy battery with charging */}
            <div className="w-8 h-5 bg-[#0F9547] rounded-md flex items-center justify-center relative">
              <div className="w-1 h-3 bg-[#0D8948] rounded-r-sm absolute -right-0.5"></div>
              <div className="text-white text-xs font-bold">⚡</div>
              {/* Charging animation */}
              <div className="absolute inset-0 bg-[#0C7D49] rounded-md animate-pulse opacity-30"></div>
            </div>
            {/* Success indicators */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#0F9547] rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#0D8948] rounded-full animate-pulse"></div>
          </div>
        </div>
      )
    },
    {
      title: "Real-time",
      subtitle: "Enabling real time tracking and remote Immobilization.",
      benefit: "Full Visibility",
      visual: (
        <div className="relative w-16 h-16 bg-gradient-to-br from-[#0D8948]/20 to-[#0C7D49]/10 rounded-xl flex items-center justify-center">
          <div className="relative">
            {/* All-seeing eye with radar */}
            <div className="w-6 h-6 bg-[#0D8948] rounded-full flex items-center justify-center relative">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#0C7D49] rounded-full"></div>
              </div>
              {/* Radar circles */}
              <div className="absolute inset-0 border border-[#0D8948] rounded-full animate-ping opacity-30"></div>
              <div className="absolute inset-0 border border-[#0C7D49] rounded-full animate-ping opacity-20" style={{animationDelay: '0.5s'}}></div>
            </div>
            {/* Signal indicators */}
            <div className="absolute -top-1.5 -right-1.5 flex space-x-0.5">
              <div className="w-0.5 h-1.5 bg-[#0F9547] rounded-full animate-pulse"></div>
              <div className="w-0.5 h-2 bg-[#0D8948] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-0.5 h-2.5 bg-[#0C7D49] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "AI Credit",
      subtitle: "Enabling access to credit beyond Cibi.",
      benefit: "Smart Scoring",
      visual: (
        <div className="relative w-16 h-16 bg-gradient-to-br from-[#0C7D49]/20 to-[#0A704A]/10 rounded-xl flex items-center justify-center">
          <div className="relative">
            {/* Smart credit card with AI brain */}
            <div className="w-8 h-5 bg-[#0C7D49] rounded-lg relative overflow-hidden">
              <div className="w-full h-1 bg-[#0A704A] mt-1"></div>
              <div className="w-4 h-0.5 bg-[#0A704A] mt-0.5 ml-0.5"></div>
              {/* AI chip */}
              <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-[#0F9547] rounded-sm flex items-center justify-center">
                <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
              </div>
            </div>
            {/* Brain neurons */}
            <div className="absolute -top-1 -right-1 w-3 h-3">
              <svg viewBox="0 0 24 24" className="w-full h-full text-[#0F9547]">
                <circle cx="6" cy="6" r="0.5" fill="currentColor" className="animate-pulse" />
                <circle cx="18" cy="6" r="0.5" fill="currentColor" className="animate-pulse" style={{animationDelay: '0.2s'}} />
                <circle cx="6" cy="18" r="0.5" fill="currentColor" className="animate-pulse" style={{animationDelay: '0.4s'}} />
                <circle cx="18" cy="18" r="0.5" fill="currentColor" className="animate-pulse" style={{animationDelay: '0.6s'}} />
                <path d="M6 6L18 6M6 6L6 18M18 6L18 18M6 18L18 18" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Complete",
      subtitle: "One stop solution for repair resale and replacement.",
      benefit: "One-Stop Shop",
      visual: (
        <div className="relative w-16 h-16 bg-gradient-to-br from-[#0A704A]/20 to-[#08644B]/10 rounded-xl flex items-center justify-center">
          <div className="relative">
            {/* Network hub */}
            <div className="w-5 h-5 bg-[#0A704A] rounded-full flex items-center justify-center relative">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              {/* Connected nodes */}
              <div className="absolute -top-2 -left-2 w-1.5 h-1.5 bg-[#0F9547] rounded-full"></div>
              <div className="absolute -top-2 -right-2 w-1.5 h-1.5 bg-[#0D8948] rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-[#0C7D49] rounded-full"></div>
              <div className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-[#08644B] rounded-full"></div>
              {/* Connecting lines */}
              <div className="absolute inset-0">
                <svg className="w-10 h-10 -translate-x-2.5 -translate-y-2.5" viewBox="0 0 40 40">
                  <line x1="20" y1="20" x2="10" y2="10" stroke="#0A704A" strokeWidth="0.5" opacity="0.5" className="animate-pulse" />
                  <line x1="20" y1="20" x2="30" y2="10" stroke="#0A704A" strokeWidth="0.5" opacity="0.5" className="animate-pulse" style={{animationDelay: '0.2s'}} />
                  <line x1="20" y1="20" x2="10" y2="30" stroke="#0A704A" strokeWidth="0.5" opacity="0.5" className="animate-pulse" style={{animationDelay: '0.4s'}} />
                  <line x1="20" y1="20" x2="30" y2="30" stroke="#0A704A" strokeWidth="0.5" opacity="0.5" className="animate-pulse" style={{animationDelay: '0.6s'}} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="mx-auto px-4 py-12 max-w-7xl">
      {/* Header with visual elements */}
      <div className="text-center mb-4 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-32 h-32 bg-gradient-to-br from-[#0F9547]/10 to-[#0A704A]/5 rounded-full blur-3xl"></div>
        <h1 className="text-5xl font-bold mb-4 relative z-10">
          From <span className="text-red-500">Problems</span> to <span className="text-[#0F9547]">Solutions</span>
        </h1>
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="w-16 h-1 bg-red-400 rounded-full"></div>
          <ArrowRight className="w-8 h-8 text-gray-400" />
          <div className="w-16 h-1 bg-[#0F9547] rounded-full"></div>
        </div>
      </div>

      {/* Visual comparison */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Problems Side */}
        <div className="space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-2 p-4 bg-red-50 rounded-2xl">
              <Zap className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-bold text-gray-800">Industry Problems</h2>
            </div>
          </div>

          <div className="grid gap-3">
            {challengesData.map((challenge, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-xl cursor-pointer overflow-visible h-[120px]"
                onMouseEnter={() => setHoveredIndex(`challenge-${index}`)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Visual Section - Positioned at top-left, overlapping border */}
                <div className="absolute -top-4 -left-4 z-10">
                  {challenge.visual}
                </div>
                
                {/* Text Section - Aligned consistently */}
                <div className="pl-16 pr-4 pt-4 pb-4 h-full flex flex-col justify-center">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">{challenge.title}</h3>
                  <p className="text-gray-600 font-medium">{challenge.subtitle}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Side */}
        <div className="space-y-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6 p-4 bg-[#0F9547]/10 rounded-2xl">
              <div className="w-8 h-8 bg-[#0F9547] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Our Solutions</h2>
            </div>
          </div>

          <div className="grid gap-3">
            {solutionsData.map((solution, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border-2 border-[#0F9547]/20 hover:border-[#0F9547] transition-all duration-300 hover:shadow-xl cursor-pointer overflow-visible h-[120px]"
                onMouseEnter={() => setHoveredIndex(`solution-${index}`)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Visual Section - Positioned at top-left, overlapping border */}
                <div className="absolute -top-4 -left-4 z-10">
                  {solution.visual}
                </div>
                
                {/* Text Section - Aligned consistently */}
                <div className="pl-16 pr-4 pt-4 pb-4 h-full flex flex-col justify-center">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 font-medium">{solution.subtitle}</p>
                </div>

                {/* Success indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 bg-[#0F9547] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0F9547]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;