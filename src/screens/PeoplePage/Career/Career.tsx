import { useState } from 'react';


const DepartmentItem = ({ title, isActive, onClick, jobRoles, selectedRole }) => (
  <div className="mb-5">
    <div 
      onClick={onClick}
      className={`
        w-full p-3 rounded-full cursor-pointer transition-all duration-300 
        ${isActive 
          ? 'bg-orange-500 text-white' 
          : 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-100'
        }
      `}
    >
      <span className="text-sm md:text-base font-medium">{title}</span>
    </div>
    
    <div className={`
      overflow-hidden transition-all duration-300 pl-4
      ${isActive ? 'max-h-96 mt-3' : 'max-h-0'}
    `}>
      {jobRoles.map((role, index) => (
        <div
          key={index}
          className={`
            p-3 ml-2 border-l-2 cursor-pointer rounded-r-lg mb-3 
            transition-all duration-200
            ${selectedRole === role.id 
              ? 'border-orange-500 bg-orange-50 text-gray-800' 
              : 'border-gray-200 hover:bg-gray-50'}
          `}
          onClick={() => role.onClick(role.id)}
        >
          <span className="text-sm font-medium">{role.title}</span>
        </div>
      ))}
    </div>
  </div>
);

const JobDetails = ({ title, location, requirements, responsibilities, skills, goodToHave }) => (
  <div className="bg-white rounded-lg border-l-4 border-teal-600 p-8 shadow-sm">
    <div className="flex flex-col md:flex-row justify-between items-start mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <div className="text-gray-600">{location}</div>
      </div>
      <button className="mt-4 md:mt-0 bg-[#0A704A] hover:bg-yellow-500 text-white font-medium py-2 px-6 rounded text-[18px]">
        Apply
      </button>
    </div>
    
    <div className="mb-6">
      <h3 className="font-semibold text-gray-700 mb-2 text-[18px]">Requirements</h3>
      <ul className="list-disc pl-5 space-y-1 text-gray-600">
        {requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </div>
    
    <div className="mb-6">
      <h3 className="font-semibold text-gray-700 mb-2 text-[18px]">Responsibilities</h3>
      <ul className="list-disc pl-5 space-y-1 text-gray-600">
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
    
    <div className="mb-6">
      <h3 className="font-semibold text-gray-700 text-[18px] mb-2">Skills we Value</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-teal-700 text-white px-4 py-2 rounded text-sm">{skill}</span>
        ))}
      </div>
    </div>
    
    <div>
      <h3 className="font-semibold text-gray-700 text-[18px] mb-2">Good to Have</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {goodToHave.map((skill, index) => (
          <span key={index} className="bg-teal-700 text-white px-4 py-2 rounded text-sm">{skill}</span>
        ))}
      </div>
    </div>
  </div>
);

export default function OpenPositions(){
  const [activeDepartment, setActiveDepartment] = useState(null);
  const [selectedRole, setSelectedRole] = useState('field-exec-sales');

  const departments = {
    sales: {
      title: "Operations - Sales",
      roles: [
        {
          id: 'field-exec-sales',
          title: "Field Executive - Sales",
          location: "DELHI NCR | Hybrid",
          requirements: [
            "5 to 7 years of strong network expansion/dealer management experience from EV, Mobility",
            "Proven dealer management experience."
          ],
          responsibilities: [
            "Identifying the potential B2B partners for collaboration",
            "Develop compelling partnership proposals and negotiate agreements",
            "Thoroughly understand the revenue sharing model, success metrics",
            "Develop & monitor Key Performance Indicators (KPIs) to track the success of the partnerships & identify areas of improvement"
          ],
          skills: [
            "Techno Commercial Skill",
            "Relationship Management",
            "Finance Background"
          ],
          goodToHave: [
            "Experience in EV segment",
            "Experience in Battery Tech"
          ]
        },
        {
          id: 'sales-intern',
          title: "Sales Intern",
          location: "Mumbai | Full-time",
          requirements: [
            "Freshers, 0-1 year of exp",
            "Interpersonal skills",
            "Target-oriented approach"
          ],
          responsibilities: [
            "Identifying new drivers and onboard them",
            "Market mapping and conducting offline market survey",
            "Developing & maintaining healthy relationships with drivers"
          ],
          skills: [
            "Communication",
            "Relationship Building"
          ],
          goodToHave: [
            "Experience in field sales",
            "Knowledge of local market"
          ]
        }
      ]
    },
    finance: {
      title: "Finance",
      roles: [
        {
          id: 'nbfc-fe',
          title: "NBFC - Financial Executive",
          location: "Bangalore | Hybrid",
          requirements: [
            "3+ years experience in financial sector",
            "Experience with loan processing"
          ],
          responsibilities: [
            "Process loan applications",
            "Conduct financial assessments",
            "Coordinate with partners for documentation"
          ],
          skills: [
            "Financial Analysis",
            "Documentation"
          ],
          goodToHave: [
            "Experience in EV financing",
            "Understanding of mobility sector"
          ]
        }
      ]
    },
    marketing: {
      title: "Marketing",
      roles: [
        {
          id: 'b2b-lead',
          title: "B2B Partnership Lead",
          location: "Delhi NCR | Remote",
          requirements: [
            "5+ years experience in business development",
            "Strong network in mobility sector"
          ],
          responsibilities: [
            "Identify and pursue strategic partnerships",
            "Negotiate partnership terms",
            "Manage partner relationships",
            "Track partnership KPIs"
          ],
          skills: [
            "Negotiation",
            "Strategic Planning",
            "Business Development"
          ],
          goodToHave: [
            "Experience in EV industry",
            "Knowledge of B2B partnership models"
          ]
        }
      ]
    },
    tech: {
      title: "Tech",
      roles: [
        {
          id: 'b2b-lead',
          title: "B2B Partnership Lead",
          location: "Delhi NCR | Remote",
          requirements: [
            "5+ years experience in business development",
            "Strong network in mobility sector"
          ],
          responsibilities: [
            "Identify and pursue strategic partnerships",
            "Negotiate partnership terms",
            "Manage partner relationships",
            "Track partnership KPIs"
          ],
          skills: [
            "Negotiation",
            "Strategic Planning",
            "Business Development"
          ],
          goodToHave: [
            "Experience in EV industry",
            "Knowledge of B2B partnership models"
          ]
        }
      ]
    }
  };

  // Set initial department if needed
  if (activeDepartment === null && selectedRole === 'field-exec-sales') {
    setActiveDepartment('sales');
  }

  // Find the current job details based on selectedRole
  const currentJob = Object.values(departments)
    .flatMap(dept => dept.roles)
    .find(role => role.id === selectedRole);

  return (
    <section id="careers" className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl  text-center mb-16">Open Positions</h1>
        
        <div className="flex flex-col md:flex-row gap-8 ">
          {/* Left sidebar with departments and roles */}
          <div className="md:w-64 text-[18px]">
            {Object.entries(departments).map(([key, dept]) => (
              <DepartmentItem 
                key={key}
                title={dept.title}
                isActive={activeDepartment === key}
                onClick={() => {
                  setActiveDepartment(activeDepartment === key ? null : key);
                  // Select first role when opening a department
                  if (activeDepartment !== key && dept.roles.length > 0) {
                    setSelectedRole(dept.roles[0].id);
                  }
                }}
                jobRoles={dept.roles.map(role => ({
                  ...role,
                  onClick: (roleId) => setSelectedRole(roleId)
                }))}
                selectedRole={selectedRole}
              />
            ))}
          </div>
          
          {/* Right side position details */}
          <div className="flex-1">
            {currentJob && (
              <JobDetails 
                title={currentJob.title}
                location={currentJob.location}
                requirements={currentJob.requirements}
                responsibilities={currentJob.responsibilities}
                skills={currentJob.skills}
                goodToHave={currentJob.goodToHave}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

