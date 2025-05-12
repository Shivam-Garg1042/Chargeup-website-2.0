


// Team member data
const teamData = [
  {
    name: "Varun Goenka",
    role: "CEO",
    image: "/investor1.png",
  },
  {
    name: "Satish Mittal",
    role: "CDO",
image: "/investor1.png",  },
  {
    name: "Arun Madan",
    role: "CFO",
image: "/investor1.png",  },
  {
    name: "Swati",
    role: "CHRO",
image: "/investor1.png",  },
  {
    name: "Anmol Chouksey",
    role: "Chief of Staff",
image: "/investor1.png",  },
  {
    name: "Chetan Guglani",
    role: "Lead Product",
image: "/investor1.png",  },
  {
    name: "Sunil Singh",
    role: "Growth Head",
image: "/investor1.png",  }
];

// Team Card Component
const TeamCard = ({ name, role, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-auto grayscale"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
  );
};

// Team Grid Component
export default function TeamGrid(){
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">The steadfast strength and unity of our team.</h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {teamData.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

