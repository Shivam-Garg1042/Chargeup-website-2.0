import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    { icon: "💰", text: "Higher Earnings", color: "from-yellow-400 to-orange-500" },
    { icon: "🚛", text: "Last Mile Delivery", color: "from-blue-400 to-cyan-500" },
    { icon: "📱", text: "Digital Platform", color: "from-purple-400 to-pink-500" },
    { icon: "🏦", text: "Financial Services", color: "from-green-400 to-emerald-500" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#1a1f2e] to-[#0f172a] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full blur-xl opacity-20 animate-pulse ${
              i % 2 === 0 ? 'bg-[#0F9547]' : 'bg-[#3B82F6]'
            }`}
            style={{
              width: `${60 + Math.random() * 120}px`,
              height: `${60 + Math.random() * 120}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F9547" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          <path 
            d="M0,500 Q250,300 500,500 T1000,500" 
            stroke="url(#lineGrad1)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
          />
          <path 
            d="M0,300 Q500,100 1000,300" 
            stroke="url(#lineGrad1)" 
            strokeWidth="1" 
            fill="none" 
            opacity="0.5"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#0F9547]/20 to-[#3B82F6]/20 border border-[#0F9547]/30 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-[#0F9547] rounded-full animate-pulse mr-3"></div>
              <span className="text-sm font-medium text-[#0F9547]">Driver-First Platform</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Empower Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#0F9547] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent relative">
                  Fi Ne Tech
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#0F9547] via-[#3B82F6] to-[#8B5CF6] rounded-full animate-pulse"></div>
                </span>
                <br />
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Journey
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl">
                Revolutionizing last-mile delivery with 
                <span className="text-[#0F9547] font-semibold"> integrated financial services</span>, 
                connecting drivers with NBFCs, OEMs, and dealers for maximum earnings potential.
              </p>
            </div>

            {/* Feature Cards */}
            {/* <div className="grid grid-cols-2 gap-4 my-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
                    currentSlide === index 
                      ? 'bg-gradient-to-r from-[#0F9547]/20 to-[#3B82F6]/20 border-[#0F9547]/50 shadow-lg shadow-[#0F9547]/20' 
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`text-2xl p-2 rounded-lg bg-gradient-to-r ${feature.color}`}>
                      {feature.icon}
                    </div>
                    <span className="text-white font-medium">{feature.text}</span>
                  </div>
                </div>
              ))}
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button className="group bg-gradient-to-r from-[#0F9547] to-[#0D8948] hover:from-[#0D8948] hover:to-[#0A704A] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg relative overflow-hidden">
                <span className="relative z-10">Know More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              {/* <button className="bg-transparent border-2 border-[#0F9547] text-[#0F9547] hover:bg-[#0F9547] hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                Watch Demo
              </button> */}
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0F9547] mb-2">50K+</div>
                <div className="text-sm text-gray-400">Active Drivers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3B82F6] mb-2">₹2Cr+</div>
                <div className="text-sm text-gray-400">Earnings Facilitated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8B5CF6] mb-2">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </div> */}
          </div>

          {/* Right Interactive Visualization */}
          <div className={`relative lg:pl-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Central Hub */}
              <div className="relative z-20 mx-auto w-fit">
                <div className="relative">
                  {/* Main Platform */}
                  <div className="w-32 h-32 bg-gradient-to-br from-[#0F9547] via-[#0D8948] to-[#0A704A] rounded-3xl shadow-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    <div className="absolute inset-4 bg-gradient-to-br from-[#0D8948] to-[#08644B] rounded-2xl flex flex-col justify-center items-center">
                      <div className="text-white text-2xl mb-2">🚀</div>
                      <div className="text-xs text-white/80 font-medium">CORE</div>
                    </div>
                    
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-[#0F9547] animate-ping opacity-20"></div>
                  </div>

                  {/* Orbital Elements */}
                  {[
                    { icon: "💳", label: "Finance", angle: 0, color: "from-yellow-400 to-orange-500" },
                    { icon: "🚛", label: "Network", angle: 90, color: "from-blue-400 to-cyan-500" },
                    { icon: "📊", label: "Tech", angle: 180, color: "from-purple-400 to-pink-500" },
                    // { icon: "🤝", label: "Partners", angle: 270, color: "from-green-400 to-emerald-500" }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="absolute w-20 h-20 transition-all duration-500 hover:scale-110"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${item.angle + (currentSlide * 90)}deg) translateY(-80px) rotate(-${item.angle + (currentSlide * 90)}deg)`
                      }}
                    >
                      <div className={`w-full h-full bg-gradient-to-br ${item.color} rounded-2xl shadow-xl flex flex-col items-center justify-center text-white backdrop-blur-sm border border-white/20`}>
                        <div className="text-2xl mb-1">{item.icon}</div>
                        <div className="text-xs font-medium">{item.label}</div>
                      </div>
                    </div>
                  ))}

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
                    <defs>
                      <radialGradient id="connectionGrad">
                        <stop offset="0%" stopColor="#0F9547" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#0F9547" stopOpacity="0.1"/>
                      </radialGradient>
                    </defs>
                    {[0, 90, 180, 270].map((angle, index) => (
                      <line
                        key={index}
                        x1="100"
                        y1="100"
                        x2={100 + 60 * Math.cos((angle + currentSlide * 90) * Math.PI / 180)}
                        y2={100 + 60 * Math.sin((angle + currentSlide * 90) * Math.PI / 180)}
                        stroke="url(#connectionGrad)"
                        strokeWidth="2"
                        className="animate-pulse"
                      />
                    ))}
                  </svg>
                </div>

                {/* Floating Data Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-[#0F9547] to-[#3B82F6] rounded-full animate-bounce opacity-60"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>

                {/* Holographic Effect */}
                <div className="absolute -inset-10 bg-gradient-to-r from-[#0F9547]/10 via-transparent to-[#3B82F6]/10 rounded-full blur-3xl animate-pulse"></div>
              </div>

              {/* Side Cards */}
              <div className="absolute -left-8 top-8 w-24 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700 overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="h-full p-3 flex flex-col justify-between">
                  <div className="text-2xl">📱</div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Driver App</div>
                    <div className="w-full h-1 bg-gray-700 rounded">
                      <div className="w-3/4 h-full bg-[#0F9547] rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-8 w-24 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700 overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="h-full p-3 flex flex-col justify-between">
                  <div className="text-2xl">💰</div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Earnings</div>
                    <div className="text-sm text-[#0F9547] font-bold">↗ +24%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-current text-white/5">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21 0 0 1 0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
}