import { useState } from "react";

import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

// Define article data structure for reusability
const articlesData = [
  {
    id: 1,
    title: "Chargeup forms new partnerships for EV financing",   
    date: "June 5, 2023",
    imageUrl: "/news5.png",  
    description: "Chargeup, being an asset management and financial services platform, is creating impact by enabling quick financing...",
    link : "https://www.financialexpress.com/auto/commercial-vehicles/chargeup-forms-new-partnerships-for-ev-financing/3860046/"
  },
  
  {
    id: 3,
    title: "Chargeup to onboard 25,000 drivers in 17 cities by 2025",
    date: "June 5, 2023",
    imageUrl: "/news3.jpg",
    description: "Chargeup to onboard 25,000 drivers and expand battery stations across 17 cities...",
    link : "https://energy.economictimes.indiatimes.com/news/power/chargeup-to-onboard-25000-drivers-across-17-indian-cities-by-2025/109556468#:~:text=1%20min%20read-,Chargeup%20to%20onboard%2025%2C000%20drivers%20across%2017%20Indian%20cities%20by,like%20Haryana%20and%20Uttar%20Pradesh."
  },
  {
    id: 6,
    date: "23 Jan, 2025",
    title: "Chargeup teams up with Mega Corp, Shivakari Finance to unlock Rs 50 Cr in EV financing",
    description: "The company aims to disburse the credit line to support the deployment of 4,000 commercial EVs over their next 12 months in the country.",
    imageUrl: "/news6.png",
    link: "https://yourstory.com/2025/05/chargeup-partners-mega-corp-shivakari-finance-50-crore-ev-financing"
  },
  {
    id: 4,
    title: "Chargeup finalist at Aegis Graham Bell Awards",
    date: "June 5, 2023",
    imageUrl: "/news4.jpg",
    description: "Chargeup honored as finalist in 14th Aegis Graham Bell Awards for innovation...",
    link : "https://www.linkedin.com/posts/aegis-graham-bell-award_congratulations-to-chargeup-finalist-under-activity-7298635481326465025-1xTl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA2bHUoBindJf1EnJhHgLL-nZm964iDkCvQ"
  },
  {
    id: 5,
    date: "23 Jan, 2025",
    title: "Chargeup partners with Credit Fair and Ascend Capital for E3W financing",
    description: "The company aims to facilitate Rs 100 crore as quick and secured loans in FY25, the press release noted",
    imageUrl: "/news6.png",
    link: "https://www.autocarpro.in/news/chargeup-partners-with-credit-fair-and-ascend-capital-for-e3w-financing-119277"
  },
  
  {
    id: 7,
    date: "23 Jan, 2025",
    title: "Chargeup Joins Forces with Mega Corporation and Shivakari Finance to Unlock INR 50 Cr in EV Financing",
    description: "The collaboration aims to unlock a credit line of INR 50 crore and deploy 4,000 commercial EVs over the next year, primarily benefitting underserved last-mile drivers.",
    imageUrl: "/news5.png",
    link: "https://www.entrepreneur.com/en-in/news-and-trends/chargeup-joins-forces-with-mega-corporation-and-shivakari/492329"
  },
  
];

// ChevronRight SVG 
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
    <section id="news-room" className="flex flex-col items-center justify-start px-4 md:px-8 lg:px-[134px] pb-16 md:pb-20 w-full bg-[#bec9b8]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-14 w-full mb-12">
        {currentArticles.map((article) => (
          <div key={article.id} className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 lg:gap-8">
            {/* Image Container */}
            <div className="w-full sm:w-[200px] md:w-[220px] lg:w-[300px] flex-shrink-0">
              <Card className="w-full aspect-[4/3] bg-[#333333] rounded-2xl lg:rounded-3xl p-0 overflow-hidden shadow-lg">
                <CardContent className="p-0 w-full h-full">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      e.target.src = "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=300&fit=crop";
                    }}
                  />
                </CardContent>
              </Card>
            </div>
            
            {/* Content Container */}
            <div className="flex flex-col justify-between flex-1 min-h-0">
              <div className="flex flex-col gap-3 mb-4">
                <h2 className="font-medium text-[#333333] text-lg sm:text-xl md:text-2xl leading-tight line-clamp-3">
                  {article.title}
                </h2>
                <p className="font-normal text-[#7f7f7f] text-sm md:text-base leading-relaxed line-clamp-3">
                  {article.description}
                </p>
              </div>
              
              <a 
                href={article.link} 
                className="inline-flex items-center gap-2 md:gap-3 no-underline group transition-colors hover:text-[#033F4F]" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="font-semibold text-[#07584D] text-sm md:text-base lg:text-lg whitespace-nowrap group-hover:text-[#033F4F] transition-colors">
                  Read Now
                </span>
                <span className="text-[#07584D] group-hover:text-[#033F4F] transition-colors group-hover:translate-x-1 transform duration-200">
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
          className="bg-[#0C7D49] hover:bg-[#033F4F] text-white font-medium px-8 py-3 rounded-lg text-base md:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Load More
        </Button>
      )}
    </section>
  );
}