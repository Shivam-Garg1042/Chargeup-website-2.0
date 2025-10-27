import React, { useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";

export default function Team() {
  // Team members data with actual logo URLs
  const teamMembers = [
    { 
      name: "Varun Goenka", 
      position: "Chief Executive Officer", 
      image: "/5.5.png",
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
      image: "/1.1.png",
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
      position: "Chief of Staff & Growth Head", 
      image: "/3.3.png",
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
    { 
      name: "Chetan Guglani", 
      position: "Haed of Product, Partnerships & Central Operations", 
      image: "/4.png",
      bio: "Core expertise in Technology Architecture, Innovation & Product Development.",
      linkedin: "https://linkedin.com/in/username6",
      logos: [
        { 
          name: "Google", 
          url: "https://logo.clearbit.com/google.com",
          fallback: "G"
        },
        { 
          name: "Microsoft", 
          url: "https://logo.clearbit.com/microsoft.com",
          fallback: "MS"
        }
      ]
    },
  ];

  // Component for logo with fallback
  const LogoImage = ({ logo }: { logo: any }) => {
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
  const TeamMemberCard = ({ member, index }: { member: any; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div
        key={index}
        className="flex flex-col bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 h-80 relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(!isHovered)} // Toggle for touch devices
      >
        <div className="flex items-center justify-center w-full h-full relative overflow-hidden">
          <img
            className="object-cover h-full w-full rounded-xl transition-transform duration-300 group-hover:scale-105"
            alt={`${member.name} photo`}
            src={member.image}
            loading="lazy"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Bio overlay that appears on hover */}
        <div 
          className={`absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="text-white flex flex-col items-center">
            <h3 className="font-medium text-lg mb-2 text-center">{member.name}</h3>
            <p className="text-sm text-gray-300 text-center mb-3">{member.position}</p>
            <p className="text-base text-center mb-3">{member.bio}</p>
            
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

        <div className="flex flex-col gap-12 w-full">
          {/* First row - 3 members with zig-zag effect */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {/* Member 1 - Slightly elevated */}
              <div className="transform lg:-translate-y-4">
                <TeamMemberCard member={teamMembers[0]} index={0} />
              </div>
              
              {/* Member 2 - Normal position */}
              <div className="transform lg:translate-y-0">
                <TeamMemberCard member={teamMembers[1]} index={1} />
              </div>
              
              {/* Member 3 - Slightly lowered */}
              <div className="transform lg:translate-y-4 sm:col-span-2 lg:col-span-1 sm:justify-self-center">
                <TeamMemberCard member={teamMembers[2]} index={2} />
              </div>
            </div>
          </div>

          {/* Second row - 2 members centered with wider spacing */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 w-full max-w-2xl">
              {/* Member 4 - Elevated for zig-zag */}
              <div className="transform lg:-translate-y-6">
                <TeamMemberCard member={teamMembers[3]} index={3} />
              </div>
              
              {/* Member 5 - Lowered for zig-zag */}
              <div className="transform lg:translate-y-6">
                <TeamMemberCard member={teamMembers[4]} index={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};