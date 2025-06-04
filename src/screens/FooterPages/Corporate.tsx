import { Separator } from "../../components/ui/separator";
import { FileText, Download, Eye } from "lucide-react";

export default function CorporateGovernanceContent() {
  

  // Sample PDF documents structure - replace with actual URLs
  const documents = {
    notices: [
      
      {
        id: 'agm-fy24',
        title: 'AGM Notice FY 24',
        filename: 'AGM_Notice_FY24.pdf',
        url: '/6th-AGM-Notice-30092024.pdf', 
        date: '2024',
        description: 'Annual General Meeting Notice for Financial Year 2024'
      },
      {
        id: 'agm-fy23',
        title: 'AGM Notice FY 23',
        filename: 'AGM_Notice_FY23.pdf',
        url: '/AGM-Notice-FY-23.pdf', 
        date: '2023',
        description: 'Annual General Meeting Notice for Financial Year 2023'
      },
    ],
    mgtReports: [
      {
        id: 'mgt7a-2023-24',
        title: 'MGT-7A (2023-24)',
        filename: 'MGT-7A_2023-24.pdf',
        url: '/MGT_7A_2024-.pdf', 
        date: '2023-24',
        description: 'Annual Return for the year 2023-24'
      },
      {
        id: 'mgt7a-2022-23',
        title: 'MGT-7A (2022-23)',
        filename: 'MGT-7A_2022-23.pdf',
        url: '/MGT_7A_2023.pdf', 
        date: '2022-23',
        description: 'Annual Return for the year 2022-23'
      },
      {
        id: 'mgt7a-2021-22',
        title: 'MGT-7A (2021-22)',
        filename: 'MGT-7A_2021-22.pdf',
        url: '/MGT_7A-2021-22.pdf',
        date: '2021-22',
        description: 'Annual Return for the year 2021-22'
      },
      {
        id: 'mgt7a-2020-21',
        title: 'MGT-7A (2020-21)',
        filename: 'MGT-7A_2020-21.pdf',
        url: '/MGT-7A-2020-21.pdf', 
        date: '2020-21',
        description: 'Annual Return for the year 2020-21'
      },
      {
        id: 'mgt7-2019-20',
        title: 'MGT-7 (2019-20)',
        filename: 'MGT-7_2019-20.pdf',
        url: '/MGT-7-2019-20.pdf', 
        date: '2019-20',
        description: 'Annual Return for the year 2019-20'
      },
      {
        id: 'mgt7-2018-19',
        title: 'MGT-7 (2018-19)',
        filename: 'MGT-7_2018-19.pdf',
        url: '/MGT-7-2018-19.pdf', 
        date: '2018-19',
        description: 'Annual Return for the year 2018-19'
      }
    ]
  };

  const handleViewPdf = (doc) => {
    // Option 1: Open PDF in new tab
    window.open(doc.url, '_blank');
  };

  const handleDownloadPdf = (doc) => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = doc.url;
    link.download = doc.filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

//   const handleEmbedPdf = (document) => {
//     setSelectedPdf(document);
//   };

  const DocumentCard = ({ document: doc, category }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-3">
        <FileText className="w-8 h-8 text-red-500 mt-1 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{doc.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{doc.description}</p>
          <p className="text-xs text-gray-500 mb-3">Year: {doc.date}</p>
          
          <div className="flex space-x-2">
            <button
              onClick={() => handleViewPdf(doc)}
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded hover:bg-blue-100 transition-colors"
            >
              <Eye className="w-3 h-3 mr-1" />
              View
            </button>
            
            <button
              onClick={() => handleDownloadPdf(doc)}
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-green-600 bg-green-50 border border-green-200 rounded hover:bg-green-100 transition-colors"
            >
              <Download className="w-3 h-3 mr-1" />
              Download
            </button>
            
            {/* <button
              onClick={() => handleEmbedPdf(doc)}
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-purple-600 bg-purple-50 border border-purple-200 rounded hover:bg-purple-100 transition-colors"
            >
              <FileText className="w-3 h-3 mr-1" />
              Embed
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-7">Corporate Governance</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side - Document Lists */}
        <div className="lg:col-span-2 space-y-8">
          {/* Notices Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Notices</h2>
            <div className="space-y-4">
              {documents.notices.map((document) => (
                <DocumentCard key={document.id} document={document} category="notices" />
              ))}
            </div>
          </section>

          <Separator className="my-8" />

          {/* MGT Reports Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Annual Returns (MGT Forms)</h2>
            <div className="space-y-4">
              {documents.mgtReports.map((document) => (
                <DocumentCard key={document.id} document={document} category="mgt" />
              ))}
            </div>
          </section>
        </div>

        {/* Right side - PDF Viewer */}
        
      </div>

      
    </div>
  );
}