import React, { useState, useEffect } from 'react';
import { Battery, Users, DollarSign, Building, TrendingUp, Play, Pause, Zap ,Handshake} from 'lucide-react';

export default function ChargeUpTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const milestones = [
    {
      year: "2019",
      title: "Founded in 2019",
      description: "Laid the foundation to transform EV mobility and driver livelihoods",
      highlight: "2019",
      icon: Building,
      value: "01",
      color: "#0F9547",
      gradient: "from-green-400 to-green-600"
    },
    {
      year: "2021", 
      title: "1,000 active drivers ",
      description: "Early traction proved strong product-market fit",
      highlight: "1,000",
      icon: Users,
      value: "02",
      color: "#0C7D49",
      gradient: "from-green-500 to-green-700"
    },
    {
      year: "2022",
      title: "$2.5M funding raised",
      description: "Continued backing underscored investor confidence",
      highlight: "$2.5M",
      icon: DollarSign,
      value: "03",
      color: "#08644B",
      gradient: "from-green-600 to-emerald-800"
    },
    {
      year: "2024",
      title: "First NBFC Partnership  ",
      description: "Unlocking financing access for thousands of drivers",
      highlight: "1st",
      icon: Handshake,
      value: "04",
      color: "#0d9488",
      gradient: "from-teal-600 to-teal-800"
    },
    {
      year: "2024",
      title: "EBITDA Profitable ",
      description: "Scaled sustainably while deepening market presence",
      highlight: "7,000",
      icon: TrendingUp,
      value: "05",
      color: "#1e40af",
      gradient: "from-blue-700 to-blue-900"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % milestones.length);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isAutoPlay, milestones.length]);

  const handleMilestoneClick = (index) => {
    setIsAutoPlay(false);
    setActiveIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  // Generate exponential curve points
  const generateExponentialPath = () => {
    const points = [];
    const width = 990;
    const height = 600;
    const startX = 50;
    const endX = width - 120;
    const startY = height - 110;
    const endY = 100;
    
    for (let i = 0; i <= 100; i++) {
      const t = i / 100;
      const x = startX + (endX - startX) * t;
      const exponentialValue = Math.pow(t, 2.8);
      const y = startY - (startY - endY) * exponentialValue;
      points.push(`${x},${y}`);
    }
    
    return `M ${points.join(' L ')}`;
  };

  // Calculate positions for milestones along the exponential curve
  const getMilestonePositions = () => {
    const width = 900;
    const height = 370;
    const startX = 100;
    const endX = width - 120;
    const startY = height - 100;
    const endY = 100;
    
    return milestones.map((_, index) => {
      const t = index / (milestones.length - 1);
      const x = startX + (endX - startX) * t;
      const exponentialValue = Math.pow(t, 3.2);
      const y = startY - (startY - endY) * exponentialValue;
      
      const textPos = y > height * 0.1 ? 'top' : 'bottom';
      
      return {
        x: `${(x / width) * 91}%`,
        y: `${(y / height) * 107}%`,
        textPos
      };
    });
  };

  const exponentialPath = generateExponentialPath();
  const positions = getMilestonePositions();

  return (
    <div className=" md:h-[750px] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-8 px-4 md:py-12 md:px-6 relative overflow-hidden ">
      
    

      <div className="max-w-7xl mx-auto relative z-10 ">
        {/* Enhanced Header */}
        <div className="text-center mb-4 md:mb-0">
          {/* Auto-play controls */}
          {/* <button
            onClick={toggleAutoPlay}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            {isAutoPlay ? 'Pause Timeline' : 'Play Timeline'}
          </button> */}
        </div>

        {/* Main Timeline Container */}
        <div className="relative">
          {/* Desktop Exponential Timeline */}
          <div className="hidden lg:block">
            <div className="relative min-h-[700px] max-w-7xl mx-auto px-8">
              {/* Enhanced SVG Exponential Path */}
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 900 580" 
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:'#10b981', stopOpacity:1}} />
                    <stop offset="25%" style={{stopColor:'#059669', stopOpacity:0.9}} />
                    <stop offset="50%" style={{stopColor:'#0d9488', stopOpacity:0.9}} />
                    <stop offset="75%" style={{stopColor:'#3b82f6', stopOpacity:0.9}} />
                    <stop offset="100%" style={{stopColor:'#1e40af', stopOpacity:1}} />
                  </linearGradient>
                  
                  <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:'#10b981', stopOpacity:0.6}} />
                    <stop offset="50%" style={{stopColor:'#0d9488', stopOpacity:0.8}} />
                    <stop offset="100%" style={{stopColor:'#1e40af', stopOpacity:0.6}} />
                  </linearGradient>

                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                    <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>

                  <marker 
                    id="arrowhead" 
                    markerWidth="20" 
                    markerHeight="20" 
                    refX="4" 
                    refY="10" 
                    orient="auto"
                    markerUnits="strokeWidth"
                  >
                    <polygon 
                      points="0 3, 18 10, 0 17" 
                      fill="#1e40af"
                      className="drop-shadow-lg"
                    />
                  </marker>
                </defs>
                
                {/* Glow base path */}
                <path
                  d={exponentialPath}
                  stroke="url(#glowGradient)"
                  strokeWidth="20"
                  fill="none"
                  className="opacity-30"
                  strokeLinecap="round"
                  filter="url(#glow)"
                />
                
                {/* Base exponential path */}
                <path
                  d={exponentialPath}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                />
                
                {/* Animated progress path */}
                <path
                  d={exponentialPath}
                  stroke="url(#pathGradient)"
                  strokeWidth="8"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  strokeDasharray="2000"
                  strokeDashoffset={2000 - ((activeIndex + 1) / milestones.length) * 950}
                  className="transition-all duration-2000 ease-out"
                  strokeLinecap="round"
                />

                {/* Growth visualization area */}
                <defs>
                  <linearGradient id="areaGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" style={{stopColor:'#10b981', stopOpacity:0.1}} />
                    <stop offset="50%" style={{stopColor:'#0d9488', stopOpacity:0.05}} />
                    <stop offset="100%" style={{stopColor:'#1e40af', stopOpacity:0.02}} />
                  </linearGradient>
                </defs>
                <path
                  d={`${exponentialPath} L 880,500 L 120,500 Z`}
                  fill="url(#areaGradient)"
                />
              </svg>

              {/* Enhanced Timeline Points */}
              <div className="absolute inset-0">
                {milestones.map((milestone, index) => {
                  const IconComponent = milestone.icon;
                  const isActive = index === activeIndex;
                  const isPassed = index <= activeIndex;
                  const position = positions[index];
                  const isTextAbove = position.textPos === 'top';
                  
                  return (
                    <div
                      key={index}
                      className="absolute cursor-pointer group"
                      style={{ 
                        left: position.x, 
                        top: position.y,
                        transform: 'translate(-50%, -50%)'
                      }}
                      onClick={() => handleMilestoneClick(index)}
                    >
                      <div className="relative flex flex-col items-center">
                        <div className={`relative transition-all duration-700 ${isActive ? 'scale-110' : 'hover:scale-105'}`}>
                          {/* Multiple glow layers for active state */}
                          {isActive && (
                            <>
                              <div 
                                className="absolute inset-0 w-32 h-32 rounded-full animate-ping opacity-20"
                                style={{ 
                                  background: `radial-gradient(circle, ${milestone.color} 0%, transparent 70%)`,
                                  transform: 'scale(1.2)'
                                }}
                              />
                              <div 
                                className="absolute inset-0 w-24 h-24 rounded-full animate-pulse opacity-40"
                                style={{ 
                                  background: `radial-gradient(circle, ${milestone.color} 0%, transparent 70%)`,
                                  transform: 'scale(1.5)'
                                }}
                              />
                            </>
                          )}
                          
                          <div 
                            className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-700 shadow-2xl border-4 ${
                              isActive ? 'border-white ring-4 ring-opacity-50 shadow-3xl' : 'border-white/60'
                            } ${isPassed ? '' : 'grayscale opacity-40'} backdrop-blur-sm`}
                            style={{ 
                              background: isPassed 
                                ? `linear-gradient(135deg, ${milestone.color}, ${milestone.color}cc)` 
                                : 'linear-gradient(135deg, #6b7280, #4b5563)',
                              ringColor: isActive ? milestone.color : 'transparent',
                              boxShadow: isActive ? `0 0 40px ${milestone.color}60, 0 20px 40px rgba(0,0,0,0.3)` : '0 10px 30px rgba(0,0,0,0.2)'
                            }}
                          >
                            <IconComponent className="w-8 h-8 drop-shadow-lg" />
                          </div>
                          
                          {/* Enhanced number badge */}
                          <div 
                            className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg border-2 border-white"
                            style={{ 
                              background: `linear-gradient(135deg, ${milestone.color}, ${milestone.color}dd)`
                            }}
                          >
                            {milestone.value}
                          </div>
                        </div>
                        
                        {/* Enhanced Year Display */}
                        <div 
                          className={`absolute ${isTextAbove ? 'bottom-32' : 'top-32'} text-2xl md:text-xl font-bold whitespace-nowrap transition-all duration-500 drop-shadow-lg ${
                            isActive ? 'scale-110' : ''
                          }`}
                          style={{ 
                            color: isPassed ? milestone.color : '#9ca3af',
                            textShadow: isActive ? `0 0 20px ${milestone.color}60` : 'none'
                          }}
                        >
                          {milestone.year}
                        </div>
                        
                        {/* Enhanced Caption Card - Now Always Visible */}
                        <div 
                          className={`absolute ${isTextAbove ? 'bottom-44' : 'top-44'} w-[200px] md:w-[200px] transition-all duration-700 ${
                            isActive ? 'scale-105 opacity-100 z-20' : 'opacity-85 z-10 hover:opacity-100'
                          }`}
                        >
                          <div className={`bg-white/90 backdrop-blur-xl rounded-2xl p-3 shadow-xl border border-white/20 transition-all duration-500 ${
                            isActive ? 'shadow-2xl border-opacity-40' : 'shadow-lg'
                          }`}
                          style={{ 
                            boxShadow: isActive 
                              ? `0 20px 40px -12px ${milestone.color}30, 0 0 0 1px ${milestone.color}20` 
                              : '0 15px 30px -12px rgba(0,0,0,0.25)'
                          }}>
                            <div className="text-center">
                              <div className="text-sm md:text-base font-bold text-gray-800 mb-2 leading-tight">
                                {milestone.title}
                              </div>
                              {/* <div className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                {milestone.description}
                              </div> */}
                            </div>
                          </div>
                        </div>
                        
                        {/* Enhanced connecting line */}
                        <div 
                          className={`absolute w-1 ${
                            isTextAbove ? 'bottom-16 h-16' : 'top-16 h-16'
                          } transition-all duration-500 rounded-full`}
                          style={{ 
                            background: isPassed 
                              ? `linear-gradient(${isTextAbove ? '180deg' : '0deg'}, ${milestone.color}, transparent)`
                              : 'linear-gradient(180deg, rgba(156, 163, 175, 0.5), transparent)'
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Enhanced Mobile Timeline */}
          <div className="lg:hidden">
            <div className="relative max-w-2xl mx-auto">
              {/* Vertical progress line */}
              <div className="absolute left-8 top-0 bottom-0 flex justify-center">
                <div className="w-1 bg-white/20 rounded-full shadow-inner relative overflow-hidden">
                  <div 
                    className="w-full rounded-full transition-all duration-2000 ease-out relative"
                    style={{ 
                      height: `${((activeIndex + 1) / milestones.length) * 100}%`,
                      background: 'linear-gradient(to bottom, #10b981, #059669, #0d9488, #3b82f6, #1e40af)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent opacity-50 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Timeline Items */}
              <div className="pl-20 space-y-8">
                {milestones.map((milestone, index) => {
                  const IconComponent = milestone.icon;
                  const isActive = index === activeIndex;
                  const isPassed = index <= activeIndex;
                  
                  return (
                    <div
                      key={index}
                      className={`relative cursor-pointer transition-all duration-700 ${
                        isActive ? 'transform scale-105' : 'hover:scale-102'
                      }`}
                      onClick={() => handleMilestoneClick(index)}
                    >
                      {/* Timeline Point */}
                      <div className="absolute -left-24 top-6 transform -translate-y-1/2">
                        <div className="relative flex items-center justify-center">
                          {/* Glow effects */}
                          {isActive && (
                            <>
                              <div 
                                className="absolute inset-0 w-20 h-20 rounded-full animate-ping opacity-20"
                                style={{ 
                                  background: `radial-gradient(circle, ${milestone.color} 0%, transparent 70%)`
                                }}
                              />
                              <div 
                                className="absolute inset-0 w-16 h-16 rounded-full animate-pulse opacity-40"
                                style={{ 
                                  background: `radial-gradient(circle, ${milestone.color} 0%, transparent 70%)`
                                }}
                              />
                            </>
                          )}
                          
                          <div 
                            className={`w-16 h-16 rounded-full flex items-center justify-center text-white transition-all duration-700 shadow-2xl border-4 border-white relative z-10 ${
                              isActive ? 'scale-110 shadow-3xl' : ''
                            } ${isPassed ? '' : 'grayscale opacity-40'} backdrop-blur-sm`}
                            style={{ 
                              background: isPassed 
                                ? `linear-gradient(135deg, ${milestone.color}, ${milestone.color}cc)` 
                                : 'linear-gradient(135deg, #6b7280, #4b5563)',
                              boxShadow: isActive 
                                ? `0 0 30px ${milestone.color}60, 0 15px 30px rgba(0,0,0,0.3)` 
                                : '0 8px 25px rgba(0,0,0,0.2)'
                            }}
                          >
                            <IconComponent className="w-7 h-7 drop-shadow-lg" />
                          </div>
                          
                          {/* Number badge */}
                          <div 
                            className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg z-20 border-2 border-white"
                            style={{ 
                              background: `linear-gradient(135deg, ${milestone.color}, ${milestone.color}dd)`
                            }}
                          >
                            {milestone.value}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Card - Reduced size */}
                      <div className={`bg-white/95 backdrop-blur-xl rounded-2xl p-3 md:p-1 shadow-xl border border-white/20 transition-all duration-500  ${
                        isActive ? 'shadow-2xl transform scale-105 ' : ''
                      }`}
                      style={{ 
                        boxShadow: isActive 
                          ? `0 20px 40px -12px ${milestone.color}30, 0 0 0 1px ${milestone.color}20` 
                          : '0 15px 30px -12px rgba(0,0,0,0.25)'
                      }}>
                        <div className="flex items-start gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <div 
                                className="text-sm font-bold px-3 py-1 rounded-xl text-white shadow-lg"
                                style={{ 
                                  background: `linear-gradient(135deg, ${milestone.color}, ${milestone.color}dd)`
                                }}
                              >
                                {milestone.year}
                              </div>
                            </div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                              {milestone.title}
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        {/* <div className="flex justify-center mt-16 md:-mt-8 space-x-3">
          {milestones.map((milestone, index) => (
            <button
              key={index}
              onClick={() => handleMilestoneClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= activeIndex 
                  ? 'shadow-lg transform scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              style={{
                backgroundColor: index <= activeIndex ? milestone.color : undefined,
                boxShadow: index === activeIndex ? `0 0 15px ${milestone.color}80` : undefined
              }}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}