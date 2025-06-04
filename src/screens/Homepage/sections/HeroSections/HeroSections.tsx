import  { useState, useEffect } from 'react';
import { Button } from '../../../../components/ui/button';
import { Link } from 'react-router-dom';

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
    <section className="h-[750px] relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-left bg-no-repeat object-fill w-[100%] h-[100%] z-0"
        style={{
          backgroundImage: `url('/hero.png')`,
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 " />

      <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[75vh]">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              {/* <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#0F9547]/20 to-[#3B82F6]/20 border border-[#0F9547]/30 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-[#fff] rounded-full animate-pulse mr-3"></div>
                <span className="text-sm md:text-base font-medium text-[#fff]">A single stop solution</span>
              </div> */}
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  India's first EV Driver Platform  
                </span>
                {/* <br />
                <span className="bg-gradient-to-r from-[#0C7D49] via-[#07584D] to-[#033F4F] bg-clip-text text-transparent">
                  Fi Ne Tech
                </span>
                <br />
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Platform
                </span> */}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-50 leading-relaxed max-w-xl">
                Offering        
                <span className="text-[#f1ee8e] font-semibold"> Financial services and Asset management </span>, 
                integrated with NBFCs, OEMs and dealers, to offer a single stop solution.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Link to="/solutions#solutions">
                <Button className="group bg-gradient-to-r from-[#0F9547] to-[#0D8948] hover:from-[#0D8948] hover:to-[#0A704A] text-white px-6 md:px-8 py-6 md:py-8 rounded-xl font-semibold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg relative overflow-hidden">
                  Know More
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </Link>
            </div>
          </div>

          
        </div>
      </div>

      {/* Bottom Wave - Made more subtle */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-current text-white/10">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21 0 0 1 0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
}