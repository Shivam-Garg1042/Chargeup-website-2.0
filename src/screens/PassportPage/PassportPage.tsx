import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Shield, Monitor, Zap, Database } from "lucide-react";

export const PassportPage = (): JSX.Element => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-[#0F9547]" />,
      title: "Blockchain Verified"
     },
    {
      icon: <Monitor className="w-6 h-6 text-[#0C7D49]" />,
      title: "Real-time Monitoring", 
    },
    {
      icon: <Zap className="w-6 h-6 text-[#07584D]" />,
      title: "Performance Analytics",
    },
    {
      icon: <Database className="w-6 h-6 text-[#033F4F]" />,
      title: "Complete Lifecycle",
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100  flex items-center">
     
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center min-h-[80vh]">
          
          {/* Left Side - Enhanced content with professional layout */}
          <div className="space-y-8   max-w-2xl">
            {/* Brand header with improved styling */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2">
                <div className="w-2 h-8 bg-gradient-to-b from-[#0F9547] to-[#033F4F] rounded-full"></div>
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#0F9547] via-[#0C7D49] to-[#033F4F] bg-clip-text text-transparent tracking-wide">
                  Voltchain
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900">
                Battery <span className="bg-gradient-to-r from-[#0F9547] to-[#033F4F] bg-clip-text text-transparent">Aadhaar</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700">Platform</span>
              </h1>
            </div>

            {/* Enhanced description with better typography */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                  Revolutionary blockchain-powered battery lifecycle management for India's EV ecosystem.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Track, verify, and optimize every battery from manufacturing to recycling with unprecedented transparency and security.
                </p>
              </div>
              
              {/* Enhanced CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  className="group bg-gradient-to-r from-[#0F9547] to-[#0C7D49] hover:from-[#0C7D49] hover:to-[#07584D] text-white px-8 py-4 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5 min-w-[200px]"
                >
                  Know more
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 text-lg">→</span>
                </Button>
                <div className="flex items-center space-x-2 text-sm text-gray-500 pt-2 sm:pt-3">
                  <div className="w-2 h-2 bg-[#0F9547] rounded-full animate-pulse"></div>
                  <span>Powered by blockchain technology</span>
                </div>
              </div>
            </div>

            {/* Enhanced features in a single row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="group bg-white/90 backdrop-blur-sm border border-gray-200/60 hover:border-[#0F9547]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#0F9547]/15 hover:-translate-y-1">
                  <CardContent className="p-4 text-center">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="p-3 bg-gradient-to-br from-[#0F9547]/15 to-[#033F4F]/15 rounded-xl group-hover:from-[#0F9547]/25 group-hover:to-[#033F4F]/25 transition-all duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-gray-900 font-semibold text-sm leading-tight">
                        {feature.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Enhanced image presentation */}
          <div className="relative lg:justify-self-end">
            {/* Image container with professional frame */}
            <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-2xl border border-white/40">
              <div className="relative overflow-hidden rounded-xl lg:rounded-2xl bg-gradient-to-br from-gray-50 to-white">
                <img 
                  src="/passport.png" 
                  alt="Battery Aadhaar Platform Dashboard"
                  className="w-full h-auto object-contain max-w-full transform hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/passwort.png';
                  }}
                />
                
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0F9547]/10 via-transparent to-[#033F4F]/10 rounded-xl lg:rounded-2xl"></div>
              </div>
              
              
            </div>

            {/* Enhanced partnership section */}
            <div className="mt-6 lg:mt-8 flex flex-col items-center space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <p className="text-gray-600 text-sm font-medium px-3">In partnership with</p>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md border border-gray-200/60">
                <img 
                  src="/Zenfinity.png" 
                  alt="Zenfinity"
                  className="h-6 md:h-8 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassportPage;