
// HierarchicalAnalysis.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FileText } from 'lucide-react';
// import FooterBox from './FooterBox'; 
import FooterBox_2 from './FooterBox_2'; 
import NetworkGraph from './NetworkGraph'; 
import PersonsOfInterestTable from './PersonsOfInterestTable'; 



// Reusable TreeNode component
const TreeNode = ({ label, children, pages, content, images, defaultOpen }) => {
  // Use defaultOpen if provided, otherwise false
  const [isExpanded, setIsExpanded] = useState(defaultOpen || false);
  const hasChildren = children && children.length > 0;

  return (
    <div className="ml-4">
      {/* Node Header */}
      <div
        className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
        style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Expand/Collapse Icons */}
        {hasChildren ? (
          isExpanded ? (
            <ChevronDown className="w-5 h-5 text-gray-700" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-700" />
          )
        ) : (
          <FileText className="w-5 h-5 text-gray-700" />
        )}

        {/* Section Label */}
        <span className="text-xl font-bold text-gray-900">{label}</span>

        {/* Page info remains small, slightly offset */}
        {pages && <span className="text-sm text-gray-500 ml-2">(Pages {pages})</span>}
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="ml-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          {/* Node Content */}
          {content && (
            <p className="text-lg text-gray-700 mb-3">
              {content}
            </p>
          )}

          {/* Conditionally render images side by side if >1 */}
          {images?.length > 0 && (
            <div
              className={`grid ${
                images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
              } gap-4 mb-4`}
            >
              {images.map((imgSrc, idx) => (
                <a
                  key={idx}
                  href={imgSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={imgSrc}
                    alt={`Illustration ${idx + 1}`}
                    className="w-full h-auto object-cover border border-gray-200 rounded shadow hover:opacity-90 transition-opacity"
                  />
                </a>
              ))}
            </div>
          )}

          {/* Recursively render child nodes */}
          {children?.map((child, index) => (
            <TreeNode key={index} {...child} />
          ))}
        </div>
      )}
    </div>
  );
};

function HierarchicalAnalysis() {
  // Updated data; each top-level section has defaultOpen: true
  const sections = [
    {
      label: "1. Executive Summary",
      defaultOpen: true,
      children: [
        {
          label: "Summary Overview",
          content:
            "Intelligence analysis reveals sophisticated criminal networks exploiting Italian maritime borders through coordinated operations spanning the Mediterranean region. The investigation documents three interconnected case studies that demonstrate how drug trafficking, human smuggling, and equipment smuggling operations share infrastructure and methods. Device tracking and pattern analysis expose regular maritime transfers occurring 1km offshore, while business records and social media investigation reveal legitimate enterprises serving as criminal fronts. The criminal ecosystem, represented by Syrian, Kurdish, and Tunisian operations, shows evolution beyond traditional ethnic boundaries, with sophisticated price competition and resource sharing."
        },
        {
          label: "Key Points",
          children: [
            {
              label: "Maritime Operations",
              content:
                "Device tracking and pattern analysis identify systematic maritime transfers 1km off Italian coasts, revealing coordinated criminal operations using shared routes from Albania, Tunisia, and Turkey."
            },
            {
              label: "Market Competition",
              content:
                "Syrian criminal networks are actively undercutting established drug prices in Rome’s Arab diaspora communities, demonstrating sophisticated market competition with Turkish, Egyptian, and Italian criminal groups."
            },
            {
              label: "Business Front Operations",
              content:
                "Intelligence data shows Kurdish smuggling networks using legitimate transportation businesses as fronts, particularly GOSKA OTOMOTIV VE INSAAT, to facilitate equipment movement for Channel crossing operations."
            },
            {
              label: "Operational Patterns",
              content:
                "Pattern-of-life analysis reveals regular 30-day operational cycles in maritime activities, with organised transfers occurring predominantly in early morning hours at small ports along the Italian coast."
            }
          ]
        }
      ]
    },
    {
      label: "2. Original Report Content",
      defaultOpen: true,
      children: [
        {
          label: "Problem Statement",
          pages: "2",
          children: [
            {
              label: "Scope",
              content:
                "Three detailed case studies from September 2024, examining Syrian, Kurdish, and Tunisian criminal operations using maritime routes into Italy via Rome, Genoa, and Palermo.",
              children: [
                {
                  label: "Verification",
                  content:
                    "Source chain independently verified over 12 months, primary source described as highly suitable and motivated"
                }
              ]
            }
          ],
          content:
            "Multiple criminal networks exploiting Italian maritime borders through sophisticated coordination of drug trafficking, human smuggling, and equipment transportation operations."
        },
        {
          label: "Case Studies",
          children: [
            {
              label: "Case Study 1: Syrian Operation",
              pages: "3-6",
              content:
                "Syrian criminal gang operating sophisticated drug trafficking operation through Rome",
              children: [
                {
                  label: "Core Operations",
                  content:
                    "Receiving drugs from Albanian sources, targeting distribution in Arab diaspora communities and areas frequented by African immigrants.\n\n• Storage Location: Tor Bella Monaca area (41.8685263, 12.6506904)\n• Market Strategy: Undercutting prices of Turkish, Egyptian and Italian criminal groups"
                },
                {
                  label: "Maritime Activity",
                  content:
                    "Regular vessel transfers 1km offshore, consistent morning operations\n\n• Pattern Analysis: 30-day operational cycles identified through device tracking\n• Port Activity: Multiple small ports utilised, brief offshore meetings observed"
                },
                {
                  label: "Distribution Network",
                  content:
                    "Focus on shisha bars, Arabic cafes, and areas with high Arab diaspora presence"
                }
              ]
            },
            {
              label: "Case Study 2: Kurdish Network",
              pages: "8-10",
              content:
                "Iraqi Kurdish gang led by Nihad Khoshnaw (Sheikh Nihad) operating equipment smuggling operation",
              children: [
                {
                  label: "Business Operations",
                  content:
                    "Using GOSKA OTOMOTIV VE INSAAT as a legitimate front\n\n• Equipment Types: Rubber boats, engines, life jackets for migrant crossings\n• Shipping Route: Turkish port of Izmir to port of Genoa"
                },
                {
                  label: "Network Analysis",
                  content:
                    "Connected to broader Kurdish smuggling networks across EU\n\n• Shipping Partners: MSC, CMA CGM, and Maersk identified as carriers\n• Business Location: Operations centered in Aksaray region"
                }
              ]
            },
            {
              label: "Case Study 3: Tunisian Operation",
              pages: "11",
              content:
                "Tunisian criminal group organizing Captagon pill trafficking",
              children: [
                {
                  label: "Operation Details",
                  content:
                    "Shipping from Sfax to Italy via Palermo\n\n• Storage Location: Sfax coordinates: 34.7695665, 10.7551894\n• Supply Chain: Sourcing from Algerian suppliers"
                },
                {
                  label: "Distribution",
                  content:
                    "Using established human trafficking networks\n\n• Route: Palermo to Rome via Tunisian networks"
                }
              ]
            }
          ]
        },
        {
          label: "Analysis Methods",
          pages: "4-6, 12",
          children: [
            {
              label: "Technical Surveillance",
              content:
                "Device tracking, pattern of life analysis, maritime movement tracking",
              children: [
                {
                  label: "Maritime Analysis",
                  content:
                    "AIS data, port activity monitoring, vessel movement patterns"
                }
              ]
            },
            {
              label: "Business Intelligence",
              content:
                "Front company investigation, business record analysis, shipping documentation"
            },
            {
              label: "Social Analysis",
              content:
                "Community infiltration mapping, social media investigation, network relationship analysis"
            }
          ]
        },
        {
          label: "Findings",
          pages: "12",
          children: [
            {
              label: "Network Integration",
              content:
                "Sophisticated cooperation between ethnic groups, shared infrastructure"
            },
            {
              label: "Maritime Patterns",
              content:
                "Regular 30-day cycles, consistent offshore transfer points"
            },
            {
              label: "Distribution Methods",
              content:
                "Use of diaspora communities, legitimate businesses as fronts"
            }
          ]
        },
        {
          label: "Next Steps",
          pages: "10",
          children: [
            {
              label: "Maritime Intelligence",
              children: [
                {
                  label: "Data Access",
                  content:
                    "Obtain bill of lading data for Izmir-Genoa shipments"
                },
                {
                  label: "Analysis",
                  content:
                    "Layer maritime AIS data with geospatial pattern of life data"
                }
              ]
            },
            {
              label: "Network Investigation",
              children: [
                {
                  label: "Device Tracking",
                  content:
                    "Identify additional smart devices linked to Kurdish OCN"
                },
                {
                  label: "Association Analysis",
                  content:
                    "Use co-travelling analysis to identify associates"
                }
              ]
            },
            {
              label: "Business Intelligence",
              children: [
                {
                  label: "Company Investigation",
                  content:
                    "Investigate other businesses associated with KHOSHNAW"
                },
                {
                  label: "Vehicle Tracking",
                  content:
                    "Identify specific vehicles involved in operations"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: "3. Thematic Analyses",
      defaultOpen: true,
      children: [
        {
          label: "Key Issues",
          children: [
            {
              label: "Maritime Border Exploitation",
              content:
                "Systematic exploitation of Italian coastline through small ports, regular offshore transfers at 1km, and sophisticated use of multiple entry points. Evidence shows coordinated use of maritime corridors with regular operational cycles."
            },
            {
              label: "Criminal Evolution",
              content:
                "Networks breaking traditional ethnic/national boundaries, demonstrated through Syrian/Kurdish/Tunisian cooperation and sophisticated business front operations. Price competition and operational adaptation show market sophistication."
            }
          ]
        },
        {
          label: "Operational Patterns",
          children: [
            {
              label: "Infrastructure Dependencies",
              content:
                "Networks share small ports, offshore transfer points, and urban storage locations. Business fronts and community centers serve as operational hubs, particularly evident in diaspora community exploitation."
            },
            {
              label: "Resource Sharing",
              content:
                "Criminal groups share vessels, storage facilities, and transport networks. Knowledge resources, including route information and community contacts, are exchanged across operations."
            },
            {
              label: "Geographic Patterns",
              content:
                "Clear patterns in maritime route utilization and urban center exploitation, with systematic use of storage locations and distribution networks tied to community hubs."
            }
          ]
        },
        {
          label: "Intelligence Gaps",
          children: [
            {
              label: "Maritime Data",
              content:
                "Need for comprehensive bill of lading data and AIS tracking integration, particularly for Izmir-Genoa shipments and coastal transfer activities."
            },
            {
              label: "Network Understanding",
              content:
                "Incomplete mapping of criminal networks, particularly in terms of co-travelling analysis and vehicle identification."
            },
            {
              label: "Financial Flows",
              content:
                "Limited visibility on money movement, business operations, and financial relationships between networks."
            }
          ]
        },
        {
          label: "Analytical Limitations",
          children: [
            {
              label: "Temporal Coverage",
              content:
                "Device tracking shows clear patterns but within limited time windows, particularly around August 2024 activities in Durres."
            },
            {
              label: "Geographic Coverage",
              content:
                "Uneven coverage across different ports and routes, with some areas like Rome well-mapped while others show information gaps."
            },
            {
              label: "Network Analysis",
              content:
                "Relationships between different criminal groups suggested but not fully evidenced, with business front operations’ extent unknown."
            }
          ]
        },
        {
          label: "Potential Blindspots",
          children: [
            {
              label: "Alternative Routes",
              content:
                "Focus on known maritime paths may miss displacement effects and alternative transport methods."
            },
            {
              label: "Corruption/Facilitation",
              content:
                "Limited analysis of potential official involvement and port/customs facilitation networks."
            },
            {
              label: "Community Impact",
              content:
                "Incomplete understanding of diaspora community roles and local economic effects of criminal operations."
            }
          ]
        },
        {
          label: "Future Research Needs",
          children: [
            {
              label: "Network Resilience",
              content:
                "Need to understand how networks adapt to enforcement, develop alternative routes, and replace compromised infrastructure."
            },
            {
              label: "Market Dynamics",
              content:
                "Further analysis needed of price competition, supply chain vulnerabilities, and market adaptation to enforcement."
            },
            {
              label: "Systems Analysis",
              content:
                "Deeper investigation required of legitimate business impacts, community effects, and local economic implications."
            }
          ]
        }
      ]
    },
  ];

  return (
    <div className="p-4 space-y-8">
      {/* -- Header Layout -- */}
      <div className="mb-8">
        <h1 className="text-6xl font-bold text-gray-900">Spotlight Report</h1>
        <div className="bg-black h-5 w-full my-4"></div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Italian Maritime Border Exploitation
        </h2>
        <p className="text-gray-600 text-xl">
          Criminal Network Analysis and Infrastructure Assessment
        </p>
      </div>

      {/* -- Main Content (no fixed height) -- */}
      <div className="bg-white p-6 rounded-lg shadow">
        {/* Removed the old "Report Structure & Findings" title here */}

        <div className="mb-8">
          <img
            src="/images/Background_Image.png"
            alt="Background Illustration"
            className="w-full h-auto rounded-lg shadow mb-4"
          />
          <div className="mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            <p className="text-xl text-gray-700">
              Intelligence analysis reveals sophisticated criminal networks exploiting
              Italian maritime borders through coordinated operations spanning the
              Mediterranean region. The investigation documents three interconnected case studies that demonstrate how
              drug trafficking, human smuggling, and equipment smuggling operations share
              infrastructure and methods. Device tracking and pattern analysis expose
              regular maritime transfers occurring 1km offshore, while business records
              and social media investigation reveal legitimate enterprises serving as
              criminal fronts. The criminal ecosystem, represented by Syrian, Kurdish,
              and Tunisian operations, shows evolution beyond traditional ethnic
              boundaries, with sophisticated price competition and resource sharing.
              
            </p>
          </div>

          <div
            className="bg-gray-100 p-6 rounded-lg"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              At a glance:
            </h3>
            <ul className="list-disc list-outside pl-6 space-y-3 text-xl text-gray-800">
              <li>
                Device tracking and pattern analysis identify systematic maritime
                transfers 1km off Italian coasts, revealing coordinated criminal
                operations using shared routes from Albania, Tunisia, and Turkey.
              </li>
              <li>
                Syrian criminal networks are actively undercutting established
                drug prices in Rome’s Arab diaspora communities, demonstrating
                sophisticated market competition with Turkish, Egyptian, and Italian
                criminal groups.
              </li>
              <li>
                Intelligence data shows Kurdish smuggling networks using legitimate
                transportation businesses as fronts, particularly GOSKA OTOMOTIV VE
                INSAAT, to facilitate equipment movement for Channel crossing
                operations.
              </li>
              <li>
                Pattern-of-life analysis reveals regular 30-day operational cycles
                in maritime activities, with organised transfers occurring predominantly
                in early morning hours at small ports along the Italian coast.
              </li>

            </ul>
          </div>
        </div>

        {/* NEW: Place the heading here, above the sections */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Report Structure &amp; Findings
        </h2>

        {/* The four main sections, each defaulting to expanded */}
        {sections.map((section, index) => (
          <TreeNode key={index} {...section} />
        ))}

        
        <FooterBox_2 />


        <NetworkGraph />


        <PersonsOfInterestTable />

      


      </div>
    </div>
  );
}

export default HierarchicalAnalysis;
