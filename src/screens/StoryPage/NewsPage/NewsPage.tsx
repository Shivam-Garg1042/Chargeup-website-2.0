import { useState } from "react";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

// Define article data structure for reusability
const articlesData = [
  {
    id: 1,
    title: "Chargeup teams up for E3W financing",   
    date: "June 5, 2023",
    imageUrl: "/news1.jpg",  
    description: "Chargeup partners with Credit Fair and Ascend Capital to provide ₹100 crore in E3W financing for underserved drivers...",
      link : "https: auto.economictimes.indiatimes.com/news/commercial-vehicle/chargeup-collaborates-with-credit-fair-and-ascend-capital-for-e3w-financing-solutions/107880159"
  },
  {
    id: 2,
    title: "Electric vehicles: Only commitment, and no real deal",
    date: "June 5, 2023",
    imageUrl: "/news2.jpg",
    description: "India's budget backs EVs but lacks clear plans or new subsidies...",
    link : "https: www.forbesindia.com/amp/article/news/electric-vehicles-only-commitment-and-no-real-deal/91199/1"
},
{
    id: 3,
    title: "Chargeup to onboard 25,000 drivers in 17 cities by 2025",
    date: "June 5, 2023",
    imageUrl: "/news3.jpg",
    description: "Chargeup to onboard 25,000 drivers and expand battery stations across 17 cities...",
    link : "https: energy.economictimes.indiatimes.com/news/power/chargeup-to-onboard-25000-drivers-across-17-indian-cities-by-2025/109556468"
  },
  {
    id: 4,
    title: "Chargeup finalist at Aegis Graham Bell Awards",
    date: "June 5, 2023",
    imageUrl: "/news4.jpg",
    description: "Chargeup honored as finalist in 14th Aegis Graham Bell Awards for innovation...",
    link : "https: www.linkedin.com/posts/aegis-graham-bell-award_congratulations-to-chargeup-finalist-under-activity-7298635481326465025-1xTl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA2bHUoBindJf1EnJhHgLL-nZm964iDkCvQ"
  },
  {
    id: 5,
    date: "23 Jan, 2025",
    title: "Chargeup teams up for E3W financing",
    description:
      "Chargeup partners with Credit Fair and Ascend Capital to provide ₹100 crore in E3W financing for underserved drivers.",
    imageUrl: "/news4.jpg",
    link: "https://example.com/news/5"
  },
  {
    id: 6,
    date: "23 Jan, 2025",
    title: "Chargeup teams up for E3W financing",
    description:
      "Chargeup partners with Credit Fair and Ascend Capital to provide ₹100 crore in E3W financing for underserved drivers.",
    imageUrl: "/api/placeholder/326/360",
    link: "https://example.com/news/6"
  },
  {
    id: 7,
    date: "23 Jan, 2025",
    title: "Chargeup teams up for E3W financing",
    description:
      "Chargeup partners with Credit Fair and Ascend Capital to provide ₹100 crore in E3W financing for underserved drivers.",
    imageUrl: "/api/placeholder/326/360",
    link: "https://example.com/news/7"
  },
  {
    id: 8,
    date: "23 Jan, 2025",
    title: "Chargeup teams up for E3W financing",
    description:
      "Chargeup partners with Credit Fair and Ascend Capital to provide ₹100 crore in E3W financing for underserved drivers.",
    imageUrl: "/api/placeholder/326/360",
    link: "https://example.com/news/8"
  }
];

// ChevronRight SVG component
const ChevronRightIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="9" 
    height="15" 
    viewBox="0 0 9 15" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M1 1l6 6.5L1 14" />
  </svg>
);

export default function NewsPage() {
  const [visibleArticles, setVisibleArticles] = useState(4);
  
  const handleLoadMore = () => {
    setVisibleArticles(prev => Math.min(prev + 4, articlesData.length));
  };

  const currentArticles = articlesData.slice(0, visibleArticles);

  return (
    <section className="flex flex-col items-center justify-start px-4 md:px-8 lg:px-[134px]  py-12 w-full mb-6 md:mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 w-full mb-12">
        {currentArticles.map((article) => (
          <div key={article.id} className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 lg:gap-10">
            <Card className="w-full md:w-[181px] lg:w-[280px]  h-[200px] md:h-[240px] lg:h-[300px]  bg-[#333333] rounded-3xl  lg:rounded-3xl xl:rounded-[26px] p-4 md:p-5 lg:p-6 xl:p-[26px] flex flex-col justify-end overflow-hidden relative">
              <CardContent className="p-0">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <Badge className="relative z-10 bg-white text-[#1b4748] font-normal rounded-[5px] px-3 py-2">
                  {article.date}
                </Badge>
              </CardContent>
            </Card>
            
            <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-12 self-stretch flex-1">
              <div className="flex flex-col items-start gap-2 md:gap-3 lg:gap-[13px]">
                <h2 className="font-medium text-text-colors950 text-xl md:text-2xl  leading-tight">
                  {article.title}
                </h2>
                <p className="font-normal text-[#7f7f7f] text-sm md:text-lg  leading-relaxed md:leading-7 lg:leading-8">
                  {article.description}
                </p>
              </div>
              
              <a href={article.link} className="flex items-center gap-2 md:gap-4 lg:gap-[21px] no-underline">
                <span className="font-semibold text-[#FABA25] text-base md:text-lg lg:text-xl leading-6 whitespace-nowrap">
                  Read Now
                </span>
                <span className="text-[#f48900]">
                  <ChevronRightIcon />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {visibleArticles < articlesData.length && (
        <Button 
          onClick={handleLoadMore}
          className="bg-[#f48900] hover:bg-[#e07a00] text-white font-medium px-6 py-5 rounded-md text-base md:text-lg mt-6"
        >
          Load More
        </Button>
      )}
    </section>
  );
}