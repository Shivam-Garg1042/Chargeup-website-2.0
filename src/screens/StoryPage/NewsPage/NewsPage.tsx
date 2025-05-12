import { useState } from "react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";

export const NewsPage = (): JSX.Element => {
  // News data
  const allNewsItems = [
    {
      id: 1,
      date: "June 5, 2023",
      title: "Chargeup teams up for E3W financing",
      description: "Chargeup partners with Credit Fair and Ascend Capital to provide ₹100 crore in E3W financing for underserved drivers...",
      image: "/investor1.png", // Placeholder image
      link : "https: auto.economictimes.indiatimes.com/news/commercial-vehicle/chargeup-collaborates-with-credit-fair-and-ascend-capital-for-e3w-financing-solutions/107880159"

    },
     {
      id: 2,
      date: "June 5, 2023",
      title: "Electric vehicles: Only commitment, and no real deal",
      description: "India's budget backs EVs but lacks clear plans or new subsidies...India's budget backs EVs but lacks clear plans or new subsidies...",
      image: "/investor1.png", // Placeholder image
      link : "https: auto.economictimes.indiatimes.com/news/commercial-vehicle/chargeup-collaborates-with-credit-fair-and-ascend-capital-for-e3w-financing-solutions/107880159"

    },
   {
      id: 3,
      title: "Chargeup to onboard 25,000 drivers in 17 cities by 2025",
      date: "June 5, 2023",
      image: "/investor1.png", // Placeholder image
      description: "Chargeup to onboard 25,000 drivers and expand battery stations across 17 cities...",
      link : "https: energy.economictimes.indiatimes.com/news/power/chargeup-to-onboard-25000-drivers-across-17-indian-cities-by-2025/109556468"
    },
    {
      id: 4,
      title: "Chargeup finalist at Aegis Graham Bell Awards",
      date: "June 5, 2023",
      image: "/investor2.png", // Placeholder image
      description: "Chargeup honored as finalist in 14th Aegis Graham Bell Awards for innovation...",
      link : "https: www.linkedin.com/posts/aegis-graham-bell-award_congratulations-to-chargeup-finalist-under-activity-7298635481326465025-1xTl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA2bHUoBindJf1EnJhHgLL-nZm964iDkCvQ"
    },
    {
      id: 5,
      title: "Chargeup finalist at Aegis Graham Bell Awards",
      date: "June 5, 2023",
      image: "/investor2.png", // Placeholder image
      description: "Chargeup honored as finalist in 14th Aegis Graham Bell Awards for innovation...",
      link : "https: www.linkedin.com/posts/aegis-graham-bell-award_congratulations-to-chargeup-finalist-under-activity-7298635481326465025-1xTl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA2bHUoBindJf1EnJhHgLL-nZm964iDkCvQ"
    },
   {
      id: 6,
      title: "Chargeup finalist at Aegis Graham Bell Awards",
      date: "June 5, 2023",
      image: "/investor1.png", // Placeholder image
      description: "Chargeup honored as finalist in 14th Aegis Graham Bell Awards for innovation...",
      link : "https: www.linkedin.com/posts/aegis-graham-bell-award_congratulations-to-chargeup-finalist-under-activity-7298635481326465025-1xTl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA2bHUoBindJf1EnJhHgLL-nZm964iDkCvQ"
    }
  ];

  const [visibleItems, setVisibleItems] = useState(4);

  const handleLoadMore = () => {
    setVisibleItems(prevVisible => 
      Math.min(prevVisible + 2, allNewsItems.length)
    );
  };

  return (
    <section className="w-full bg-white py-8 md:py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {allNewsItems.slice(0, visibleItems).map((item) => (
            <div 
              key={item.id} 
              className="bg-[#343434] text-white rounded-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <div className="w-full md:w-full h-[250px] md:h-[300px] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-fit object-center transition-transform duration-300 transform hover:scale-105 grayscale"
                  
                />
              </div>
              
              <div className="relative p-4 md:p-4 flex-grow flex flex-col justify-center ">
                <Badge className="absolute top-4 left-4 bg-white rounded-md px-2 py-1 ">
                  <span className="font-normal text-black text-sm md:text-base">
                    {item.date}
                  </span>
                </Badge>
                
                <div className="mt-8 md:mt-8 ">
                  <h3 className="text-2xl md:text-2xl font-medium leading-tight mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center text-[#faba25]">
                    <a className="font-semibold text-base md:text-xl mr-2"
                      href="#"
                    >Read Now</a>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleItems < allNewsItems.length && (
          <div className="flex justify-center mt-6 md:mt-16 md:mb-8">
            <Button 
              onClick={handleLoadMore}
              className="bg-[#faba25] text-black hover:bg-[#faba25]/90 font-semibold text-base md:text-lg h-12 md:h-[54px] px-4 md:px-6 rounded-lg shadow-sm"
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsPage;