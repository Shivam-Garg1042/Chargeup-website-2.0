import React, { useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";

export default function Team() {
  // Team members data with actual logo URLs
  const teamMembers = [
    { 
      name: "Varun Goenka", 
      position: "Chief Executive Officer", 
      image: "/5.png",
      bio: "Core expertise in Product, Strategy, Growth & Partnerships",
      linkedin: "https://linkedin.com/in/username1",
      logos: [
        { 
          name: "Atlanta Energy", 
          url: "/logoTT.png",
          fallback: "AE"
        }
      ]
    },
    { 
      name: "Satish Mittal", 
      position: "Chief Digital Officer", 
      image: "/1.png",
      bio: "Core expertise in Data, Tech platform & Customer experience.",
      linkedin: "https://linkedin.com/in/username2",
      logos: [
        { 
          name: "Meta", 
          url: "https://logo.clearbit.com/meta.com",
          fallback: "M"
        },
        { 
          name: "Vodafone", 
          url: "https://logo.clearbit.com/vodafone.com",
          fallback: "V"
        }
      ]
    },
    { 
      name: "Swati Mudgal", 
      position: "Chief Human Resource Officer", 
      image: "/2.png",
      bio: "Core expertise in People Management, Leadership Empowerment & employee engagement.",
      linkedin: "https://linkedin.com/in/username4",
      logos: [
        { 
          name: "Wipro", 
          url: "https://logo.clearbit.com/wipro.com",
          fallback: "W"
        },
        { 
          name: "Tata", 
          url: "https://logo.clearbit.com/tata.com",
          fallback: "T"
        }
      ]
    },
    { 
      name: "Anmol Chouksey", 
      position: "Chief of Staff", 
      image: "/3.png",
      bio: "Core expertise in Digital Business Transformation, Strategy & Marketing.",
      linkedin: "https://linkedin.com/in/username5",
      logos: [
        { 
          name: "Apple", 
          url: "https://logo.clearbit.com/tracxn.com",
          fallback: "A"
        },
        { 
          name: "Apple", 
          url: "https://logo.clearbit.com/aliaxis.com",
          fallback: "A"
        }
      ]
    },
  ];

  // Component for logo with fallback
  const LogoImage = ({ logo }) => {
    const [imageError, setImageError] = useState(false);
    
    if (imageError) {
      return (
        <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold text-gray-600">
          {logo.fallback}
        </div>
      );
    }
    
    return (
      <img
        src={logo.url}
        alt={`${logo.name} logo`}
        className="w-24 h-10 object-contain rounded"
        onError={() => setImageError(true)}
        loading="lazy"
      />
    );
  };

  // Component for individual team member card with hover effect
  const TeamMemberCard = ({ member, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div
        key={index}
        className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 h-full relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(!isHovered)} // Toggle for touch devices
      >
        <div className="flex items-center justify-center w-full">
          <img
            className="object-contain h-36 md:h-40 lg:h-60 rounded-t-lg w-36 md:w-60 lg:w-60"
            alt={`${member.name} photo`}
            src={member.image}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-center py-3 px-2">
          {/* <h3 className="font-medium text-base text-center w-full">
            {member.name}
          </h3>
          <p className="text-sm text-gray-500 text-center mb-2">
            {member.position}
          </p> */}
          
          {/* Company logos section */}
          <div className="flex items-center justify-center gap-3 mt-3">
            {member.logos && member.logos.map((logo, logoIndex) => (
              <div
                key={logoIndex}
                className="flex items-center justify-center p-1  rounded-md hover:bg-gray-100 transition-colors"
                title={logo.name}
              >
                <LogoImage logo={logo} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Bio overlay that appears on hover */}
        <div 
          className={`absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="text-white flex flex-col items-center">
            <h3 className="font-medium text-lg mb-2 text-center">{member.name}</h3>
            <p className="text-base text-center mb-3">{member.bio}</p>
            
            {/* Company logos in overlay */}
            {/* <div className="flex items-center justify-center gap-3 mb-3">
              {member.logos && member.logos.map((logo, logoIndex) => (
                <div
                  key={logoIndex}
                  className="flex items-center justify-center p-2 bg-white bg-opacity-20 rounded-md backdrop-blur-sm"
                  title={logo.name}
                >
                  <LogoImage logo={logo} />
                </div>
              ))}
            </div> */}
            
            <a 
              href={member.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-base flex items-center"
            >
              LinkedIn
              <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="flex flex-col items-center justify-center py-12 w-full bg-gray-50">
      <div className="flex flex-col items-center w-full max-w-7xl px-2 md:px-1 md:mb-7">
        <header className="mb-10">
          <h2 className="font-medium text-gray-900 text-2xl md:text-5xl text-center leading-tight max-w-[600px] md:mb-4">
            The <span className="text-[#0D8948] font-bold">Charge(d)up</span> Team
          </h2>
        </header>

        <div className="flex flex-col gap-6 w-full">
          {/* First row of team members */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full md:h-[320px]">
            {teamMembers.slice(0, 4).map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>

          {/* Second row of team members */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full md:h-[320px]">
            {teamMembers.slice(4, 8).map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};