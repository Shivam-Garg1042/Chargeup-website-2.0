import React, { useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";

export default function Team() {
  // Team members data with added bio information and LinkedIn
  const teamMembers = [
    { 
      name: "Varun Goenka", 
      position: "Chief Executive Officer", 
      image: "/employee1.webp",
      bio: "Oversees the business strategy, execution and vision for the organization",
      linkedin: "https://linkedin.com/in/username1"
    },
    { 
      name: "First Last Name", 
      position: "Position", 
      image: "/image-30-7.png",
      bio: "Passionate professional with over 10 years of experience in the industry.",
      linkedin: "https://linkedin.com/in/username2"
    },
    { 
      name: "First Last Name", 
      position: "Position", 
      image: "/image-30-7.png",
      bio: "Award-winning expert recognized for innovative approaches and creative solutions.",
      linkedin: "https://linkedin.com/in/username3"
    },
    { 
      name: "First Last Name", 
      position: "Position", 
      image: "/image-30-7.png",
      bio: "Results-driven professional with a background in both technical and managerial roles.",
      linkedin: "https://linkedin.com/in/username4"
    },
    { 
      name: "First Last Name", 
      position: "Position", 
      image: "/image-30-7.png",
      bio: "Former industry leader with expertise in digital transformation.",
      linkedin: "https://linkedin.com/in/username5"
    },
    { 
      name: "First Last Name", 
      position: "Position", 
      image: "/image-30-7.png",
      bio: "Brings a unique perspective with international experience across three continents.",
      linkedin: "https://linkedin.com/in/username6"
    },
    { 
      name: "First Last Name", 
      position: "Position", 
      image: "/image-30-7.png",
      bio: "Pioneer in sustainable practices with a commitment to environmental responsibility.",
      linkedin: "https://linkedin.com/in/username7"
    },
    { 
      name: "First Last Name", 
      position: "Position", 
      image: "/image-30-7.png",
      bio: "Technology enthusiast with deep knowledge of emerging trends.",
      linkedin: "https://linkedin.com/in/username8"
    },
  ];

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
            className=" object-fit h-36 md:h-40 lg:h-64  rounded-t-lg w-36 md:w-60 lg:w-60 "
            alt={`${member.name} photo`}
            src={member.image}
          />
        </div>
        <div className="flex flex-col items-center py-3 px-2 ">
          <h3 className="font-medium text-base text-center w-full">
            {member.name}
          </h3>
          <p className="text-sm text-gray-500 text-center ">
            {member.position}
          </p>
        </div>
        
        {/* Bio overlay that appears on hover */}
        <div 
          className={`absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="text-white flex flex-col items-center">
            <h3 className="font-medium text-sm mb-2 text-center">{member.name}</h3>
            <p className="text-xs text-center mb-3">{member.bio}</p>
            <a 
              href={member.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-xs flex items-center"
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
          <h2 className="font-medium text-gray-900 text-2xl md:text-3xl text-center leading-tight max-w-[400px] md:mb-4">
            The Charge(d)up team
          </h2>
          <h4 className="font-medium text-gray-600 text:lg md:text-xl  text-center leading-tight max-w-[400px] md:mb-4">
            The spirit that drives us forward
          </h4>
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