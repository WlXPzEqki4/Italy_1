
// // HierarchicalAnalysis.jsx
// import React, { useState } from 'react';
// import { ChevronDown, ChevronRight, FileText } from 'lucide-react';

// // Reusable TreeNode component
// const TreeNode = ({ label, children, pages, content, images }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const hasChildren = children && children.length > 0;

//   return (
//     <div className="ml-4">
//       {/* Node Header */}
//       <div
//         className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
//         style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
//         onClick={() => setIsExpanded(!isExpanded)}
//       >
//         {/* Expand/Collapse Icons */}
//         {hasChildren ? (
//           isExpanded ? (
//             <ChevronDown className="w-5 h-5 text-gray-700" />
//           ) : (
//             <ChevronRight className="w-5 h-5 text-gray-700" />
//           )
//         ) : (
//           <FileText className="w-5 h-5 text-gray-700" />
//         )}
//         {/* Section Label (larger, bolder) */}
//         <span className="text-xl font-bold text-gray-900">{label}</span>
//         {/* Page info remains small, slightly offset */}
//         {pages && <span className="text-sm text-gray-500 ml-2">(Pages {pages})</span>}
//       </div>

//       {/* Expanded Content */}
//       {isExpanded && (
//         <div className="ml-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
//           {/* Node Content (medium-large text) */}
//           {content && (
//             <p className="text-lg text-gray-700 mb-3">
//               {content}
//             </p>
//           )}

//           {/* Conditionally render images (side by side if > 1) */}
//           {images?.length > 0 && (
//             <div
//               className={`grid ${
//                 images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
//               } gap-4 mb-4`}
//             >
//               {images.map((imgSrc, idx) => (
//                 <a
//                   key={idx}
//                   href={imgSrc}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block"
//                 >
//                   <img
//                     src={imgSrc}
//                     alt={`Illustration ${idx + 1}`}
//                     className="w-full h-auto object-cover border border-gray-200 rounded shadow hover:opacity-90 transition-opacity"
//                   />
//                 </a>
//               ))}
//             </div>
//           )}

//           {/* Recursively render child nodes */}
//           {children?.map((child, index) => (
//             <TreeNode key={index} {...child} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// function HierarchicalAnalysis() {
//   const sections = [



//     // // 1. Executive Summary
//     // {
//     //   label: "1. Executive Summary",
//     //   children: [
//     //     {
//     //       label: "Key Points",
//     //       content: "Placeholder summary of the most critical aspects of the overall report.",
//     //       children: [
//     //         {
//     //           label: "Sub-Point 1",
//     //           content: "Placeholder content for sub-point 1."
//     //         },
//     //         {
//     //           label: "Sub-Point 2",
//     //           content: "Placeholder content for sub-point 2."
//     //         }
//     //       ]
//     //     },
//     //     {
//     //       label: "Additional Observations",
//     //       content: "Further placeholder commentary and notes for the executive summary.",
//     //       children: [
//     //         {
//     //           label: "Sub-Observation A",
//     //           content: "Placeholder content for sub-observation A."
//     //         },
//     //         {
//     //           label: "Sub-Observation B",
//     //           content: "Placeholder content for sub-observation B."
//     //         }
//     //       ]
//     //     }
//     //   ]
//     // },






//     // 1. Executive Summary

//     {
//       label: "1. Executive Summary",
//       children: [
//         {
//           label: "Summary Overview",
//           content: "Intelligence analysis reveals sophisticated criminal networks exploiting Italian maritime borders through coordinated operations spanning the Mediterranean region. The investigation, drawing from over 500 intelligence reports, documents three interconnected case studies that demonstrate how drug trafficking, human smuggling, and equipment smuggling operations share infrastructure and methods. Device tracking and pattern analysis expose regular maritime transfers occurring 1km offshore, while business records and social media investigation reveal legitimate enterprises serving as criminal fronts. The criminal ecosystem, represented by Syrian, Kurdish, and Tunisian operations, shows evolution beyond traditional ethnic boundaries, with sophisticated price competition and resource sharing. These cases, representing less than 0.4% of total intelligence, suggest a vastly larger criminal infrastructure threatening Italian national security.",
//           children: []
//         },
//         {
//           label: "Key Points",
//           content: "Critical findings from the intelligence analysis.",
//           children: [
//             {
//               label: "Maritime Operations",
//               content: "Device tracking and pattern analysis identify systematic maritime transfers 1km off Italian coasts, revealing coordinated criminal operations using shared routes from Albania, Tunisia, and Turkey."
//             },
//             {
//               label: "Market Competition",
//               content: "Syrian criminal networks are actively undercutting established drug prices in Rome's Arab diaspora communities, demonstrating sophisticated market competition with Turkish, Egyptian, and Italian criminal groups."
//             },
//             {
//               label: "Business Front Operations",
//               content: "Intelligence data shows Kurdish smuggling networks using legitimate transportation businesses as fronts, particularly GOSKA OTOMOTIV VE INSAAT, to facilitate equipment movement for Channel crossing operations."
//             },
//             {
//               label: "Operational Patterns",
//               content: "Pattern-of-life analysis reveals regular 30-day operational cycles in maritime activities, with organized transfers occurring predominantly in early morning hours at small ports along the Italian coast."
//             },
//             {
//               label: "Scale Implications",
//               content: "The three documented case studies represent less than 0.4% of over 500 intelligence reports, indicating a vastly larger criminal ecosystem exploiting Italian maritime borders for multiple illegal enterprises."
//             }
//           ]
//         }
//       ]
//     },

















//     // 2. Original report content
//     {
//       label: "2. Original report content",
//       children: [
//         {
//           label: "Problem Statement",
//           pages: "2",
//           content: "Coordinated criminal exploitation of Italian maritime borders by multiple international networks conducting drug trafficking, human smuggling, and equipment transportation operations.",
//           children: [
//             {
//               label: "Scope",
//               content: "Three case studies from September 2024-January 2025 detailing Syrian, Kurdish, and Tunisian criminal operations utilising maritime routes to access Italian territory through Rome, Genoa, and Palermo respectively."
//             },
//             {
//               label: "Context",
//               content: "Part of a broader intelligence-gathering operation examining over 500 reports of organised criminal activity targeting Italian borders, demonstrating sophisticated cooperation between different ethnic criminal groups using shared maritime infrastructure and routes."
//             }
//           ]
//         },
//         {
//           label: "Case Studies",
//           children: [
//             {
//               label: "Syrian Operation",
//               pages: "3-6",
//               content: "Drug trafficking operation using maritime routes",
//               images: [
//                 "/images/CS1_1.png",
//                 "/images/CS1_2.png",
//                 "/images/CS1_3.png",
//                 "/images/CS1_4.png"
//               ],
//               children: [
//                 {
//                   label: "Network Details",
//                   content: "Operating in Rome, receiving drugs from Albania"
//                 },
//                 {
//                   label: "Methods",
//                   content: "Maritime transfers 1km offshore, diaspora community distribution"
//                 },
//                 {
//                   label: "Evidence",
//                   content: "Device tracking, surveillance, pattern analysis"
//                 }
//               ]
//             },
//             {
//               label: "Kurdish Network",
//               pages: "8-10",
//               content: "Equipment smuggling operation for migration",
//               images: [
//                 "/images/CS2_1.png",
//                 "/images/CS2_2.png"
//               ],
//               children: [
//                 {
//                   label: "Structure",
//                   content: "Legal business front, international shipping"
//                 },
//                 {
//                   label: "Routes",
//                   content: "Izmir to Genoa shipping lanes"
//                 }
//               ]
//             },
//             {
//               label: "Tunisian Operation",
//               pages: "11",
//               content: "Captagon smuggling operation",
//               images: [
//                 "/images/CS3_1.png"
//               ],
//               children: [
//                 {
//                   label: "Network",
//                   content: "Connection to human trafficking groups"
//                 },
//                 {
//                   label: "Routes",
//                   content: "Sfax to Palermo maritime corridor"
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           label: "Findings",
//           pages: "12",
//           content: "Over 500 individual intelligence reports concerning Italian national security have been received and independently verified over 12 months, with these case studies representing less than 0.4% of total intelligence gathered, indicating a vastly larger criminal ecosystem.",
//           children: [
//             {
//               label: "Network Integration",
//               content: "Criminal networks from Syria, Kurdistan, and Tunisia demonstrate sophisticated operational integration, linking suppliers, transporters, and distributors across multiple countries while showing advanced market awareness through price competition and shared infrastructure.",
//               images: [
//                 "/images/network1.png",
//                 "/images/network2.png"
//               ]
//             },
//             {
//               label: "Infrastructure",
//               content: "Maritime routes (particularly 1km offshore patterns), port facilities, front businesses, and distribution networks are systematically shared across different criminal organisations, with regular device-tracked patterns showing coordinated use of these shared resources for both drug trafficking and human smuggling operations.",
//               images: [
//                 "/images/routes.png"
//               ]
//             }
//           ]
//         },
//         {
//           label: "Next Steps",
//           pages: "10",
//           images: [
//             "/images/steps.png"
//           ],
//           children: [
//             {
//               label: "Data Collection",
//               content: "Maritime tracking, business records, vehicle identification"
//             },
//             {
//               label: "Analysis Needs",
//               content: "Network mapping, route analysis, business investigation"
//             }
//           ]
//         }
//       ]
//     },

//     // 3. Thematic Analyses
//     {
//       label: "3. Thematic Analyses",
//       children: [
//         {
//           label: "Intelligence Gaps",
//           children: [
//             {
//               label: "Maritime Data",
//               content: "Incomplete vessel tracking, limited AIS data integration"
//             },
//             {
//               label: "Network Understanding",
//               content: "Partial mapping of criminal networks, missing connections"
//             },
//             {
//               label: "Financial Flows",
//               content: "Limited visibility on money movement and business operations"
//             }
//           ]
//         },
//         {
//           label: "Analytical Limitations",
//           children: [
//             {
//               label: "Temporal Coverage",
//               content: "Limited time windows in tracking data, pattern verification needs"
//             },
//             {
//               label: "Geographic Coverage",
//               content: "Uneven coverage of different areas and routes"
//             },
//             {
//               label: "Methodology",
//               content: "Heavy reliance on device tracking, verification processes unclear"
//             }
//           ]
//         },
//         {
//           label: "Potential Blindspots",
//           children: [
//             {
//               label: "Alternative Routes",
//               content: "Focus on known paths may miss adaptive behaviours"
//             },
//             {
//               label: "Corruption Factors",
//               content: "Limited analysis of official facilitation"
//             },
//             {
//               label: "Market Dynamics",
//               content: "Incomplete understanding of economic drivers"
//             }
//           ]
//         },
//         {
//           label: "Future Research Needs",
//           children: [
//             {
//               label: "Network Resilience",
//               content: "How networks adapt to enforcement pressure"
//             },
//             {
//               label: "Community Impact",
//               content: "Role of diaspora and local communities"
//             },
//             {
//               label: "Systems Analysis",
//               content: "Broader contextual factors and relationships"
//             }
//           ]
//         }
//       ]
//     },

//     // 4. CTD Analyses
//     {
//       label: "4. CTD Analyses",
//       children: [
//         {
//           label: "Placeholder Section",
//           content: "This is placeholder content for the CTD analyses. You can expand here to add deeper investigative or thematic content regarding CTD operations."
//         },
//         {
//           label: "Additional Observations",
//           children: [
//             {
//               label: "Future Directions",
//               content: "Where the CTD analyses might expand, including new data points, collaborations, or analytical techniques."
//             }
//           ]
//         }
//       ]
//     }
//   ];

//   return (
//     <div className="p-4 space-y-8">
//       {/* Updated Header Layout */}
//       <div className="mb-8">
//         {/* 'Spotlight Report' in large text */}
//         <h1 className="text-6xl font-bold text-gray-900">Spotlight Report</h1>

//         {/* Thick black bar: 5 times thicker => h-5 */}
//         <div className="bg-black h-5 w-full my-4"></div>

//         {/* Title: Italian Maritime Border Exploitation */}
//         <h2 className="text-3xl font-bold text-gray-900 mb-2">
//           Italian Maritime Border Exploitation
//         </h2>

//         {/* Subheading */}
//         <p className="text-gray-600 text-xl">
//           Criminal Network Analysis and Infrastructure Assessment
//         </p>
//       </div>

//       {/* Main Content (no fixed height) */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">
//           Report Structure &amp; Findings
//         </h2>

//         {/* Full-width, responsive image */}
//         <div className="mb-8">
//           <img
//             src="/images/Background_Image.png"
//             alt="Background Illustration"
//             className="w-full h-auto rounded-lg shadow mb-4"
//           />

//           {/* Paragraph: now using Helvetica, text-xl */}
//           <div className="mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
//             <p className="text-xl text-gray-700">
//               Intelligence analysis reveals sophisticated criminal networks exploiting Italian
//               maritime borders through coordinated operations spanning the Mediterranean region.
//               The investigation, drawing from over 500 intelligence reports, documents three
//               interconnected case studies that demonstrate how drug trafficking, human smuggling,
//               and equipment smuggling operations share infrastructure and methods. Device tracking
//               and pattern analysis expose regular maritime transfers occurring 1km offshore, while
//               business records and social media investigation reveal legitimate enterprises serving
//               as criminal fronts. The criminal ecosystem, represented by Syrian, Kurdish, and
//               Tunisian operations, shows evolution beyond traditional ethnic boundaries, with
//               sophisticated price competition and resource sharing. These cases, representing
//               less than 0.4% of total intelligence, suggest a vastly larger criminal infrastructure
//               threatening Italian national security.
//             </p>
//           </div>

//           {/* Grey box: "At a glance" with indent, Helvetica, and larger text */}
//           <div
//             className="bg-gray-100 p-6 rounded-lg"
//             style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
//           >
//             {/* Larger, bold heading */}
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//               At a glance:
//             </h3>

//             {/* Larger bullet points, indented */}
//             <ul className="list-disc list-outside pl-6 space-y-3 text-xl text-gray-800">
//               <li>
//                 Device tracking and pattern analysis identify systematic maritime transfers 1km
//                 off Italian coasts, revealing coordinated criminal operations using shared routes
//                 from Albania, Tunisia, and Turkey.
//               </li>
//               <li>
//                 Syrian criminal networks are actively undercutting established drug prices in
//                 Rome’s Arab diaspora communities, demonstrating sophisticated market competition
//                 with Turkish, Egyptian, and Italian criminal groups.
//               </li>
//               <li>
//                 Intelligence data shows Kurdish smuggling networks using legitimate transportation
//                 businesses as fronts, particularly GOSKA OTOMOTIV VE INSAAT, to facilitate
//                 equipment movement for Channel crossing operations.
//               </li>
//               <li>
//                 Pattern-of-life analysis reveals regular 30-day operational cycles in maritime
//                 activities, with organised transfers occurring predominantly in early morning hours
//                 at small ports along the Italian coast.
//               </li>
//               <li>
//                 The three documented case studies represent less than 0.4% of over 500 intelligence
//                 reports, indicating a vastly larger criminal ecosystem exploiting Italian maritime
//                 borders for multiple illegal enterprises.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Hierarchical Tree (4 expandable sections) */}
//         {sections.map((section, index) => (
//           <TreeNode key={index} {...section} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HierarchicalAnalysis;















































































// // HierarchicalAnalysis.jsx
// import React, { useState } from 'react';
// import { ChevronDown, ChevronRight, FileText } from 'lucide-react';

// // Reusable TreeNode component
// const TreeNode = ({ label, children, pages, content, images }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const hasChildren = children && children.length > 0;

//   return (
//     <div className="ml-4">
//       {/* Node Header */}
//       <div
//         className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
//         style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
//         onClick={() => setIsExpanded(!isExpanded)}
//       >
//         {/* Expand/Collapse Icons */}
//         {hasChildren ? (
//           isExpanded ? (
//             <ChevronDown className="w-5 h-5 text-gray-700" />
//           ) : (
//             <ChevronRight className="w-5 h-5 text-gray-700" />
//           )
//         ) : (
//           <FileText className="w-5 h-5 text-gray-700" />
//         )}
//         {/* Section Label (larger, bolder) */}
//         <span className="text-xl font-bold text-gray-900">{label}</span>
//         {/* Page info remains small, slightly offset */}
//         {pages && <span className="text-sm text-gray-500 ml-2">(Pages {pages})</span>}
//       </div>

//       {/* Expanded Content */}
//       {isExpanded && (
//         <div className="ml-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
//           {/* Node Content (medium-large text) */}
//           {content && (
//             <p className="text-lg text-gray-700 mb-3">
//               {content}
//             </p>
//           )}

//           {/* Conditionally render images (side by side if > 1) */}
//           {images?.length > 0 && (
//             <div
//               className={`grid ${
//                 images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
//               } gap-4 mb-4`}
//             >
//               {images.map((imgSrc, idx) => (
//                 <a
//                   key={idx}
//                   href={imgSrc}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block"
//                 >
//                   <img
//                     src={imgSrc}
//                     alt={`Illustration ${idx + 1}`}
//                     className="w-full h-auto object-cover border border-gray-200 rounded shadow hover:opacity-90 transition-opacity"
//                   />
//                 </a>
//               ))}
//             </div>
//           )}

//           {/* Recursively render child nodes */}
//           {children?.map((child, index) => (
//             <TreeNode key={index} {...child} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// function HierarchicalAnalysis() {
//   const sections = [

//     // 1. Executive Summary

//     {
//       label: "1. Executive Summary",
//       children: [
//         {
//           label: "Summary Overview",
//           content: "Intelligence analysis reveals sophisticated criminal networks exploiting Italian maritime borders through coordinated operations spanning the Mediterranean region. The investigation, drawing from over 500 intelligence reports, documents three interconnected case studies that demonstrate how drug trafficking, human smuggling, and equipment smuggling operations share infrastructure and methods. Device tracking and pattern analysis expose regular maritime transfers occurring 1km offshore, while business records and social media investigation reveal legitimate enterprises serving as criminal fronts. The criminal ecosystem, represented by Syrian, Kurdish, and Tunisian operations, shows evolution beyond traditional ethnic boundaries, with sophisticated price competition and resource sharing. These cases, representing less than 0.4% of total intelligence, suggest a vastly larger criminal infrastructure threatening Italian national security.",
//           children: []
//         },
//         {
//           label: "Key Points",
//           content: "Critical findings from the intelligence analysis.",
//           children: [
//             {
//               label: "Maritime Operations",
//               content: "Device tracking and pattern analysis identify systematic maritime transfers 1km off Italian coasts, revealing coordinated criminal operations using shared routes from Albania, Tunisia, and Turkey."
//             },
//             {
//               label: "Market Competition",
//               content: "Syrian criminal networks are actively undercutting established drug prices in Rome's Arab diaspora communities, demonstrating sophisticated market competition with Turkish, Egyptian, and Italian criminal groups."
//             },
//             {
//               label: "Business Front Operations",
//               content: "Intelligence data shows Kurdish smuggling networks using legitimate transportation businesses as fronts, particularly GOSKA OTOMOTIV VE INSAAT, to facilitate equipment movement for Channel crossing operations."
//             },
//             {
//               label: "Operational Patterns",
//               content: "Pattern-of-life analysis reveals regular 30-day operational cycles in maritime activities, with organized transfers occurring predominantly in early morning hours at small ports along the Italian coast."
//             },
//             {
//               label: "Scale Implications",
//               content: "The three documented case studies represent less than 0.4% of over 500 intelligence reports, indicating a vastly larger criminal ecosystem exploiting Italian maritime borders for multiple illegal enterprises."
//             }
//           ]
//         }
//       ]
//     },


//     // 2. Original report content
//     {
//       label: "2. Original Report Content",
//       children: [
//       {
//       label: "Problem Statement",
//       pages: "2",
//       content: "Multiple criminal networks exploiting Italian maritime borders through sophisticated coordination of drug trafficking, human smuggling, and equipment transportation operations.",
//       children: [
//       {
//       label: "Scope",
//       content: "Three detailed case studies from September 2024, examining Syrian, Kurdish, and Tunisian criminal operations using maritime routes into Italy via Rome, Genoa, and Palermo.",
//       children: [
//       {
//       label: "Intelligence Volume",
//       content: "Part of over 500 intelligence reports, with these cases representing <0.4% of total reporting"
//       },
//       {
//       label: "Verification",
//       content: "Source chain independently verified over 12 months, primary source described as highly suitable and motivated"
//       }
//       ]
//       }
//       ]
//       },
//       {
//       label: "Case Studies",
//       children: [
//       {
//       label: "Case Study 1: Syrian Operation",
//       pages: "3-6",
//       content: "Syrian criminal gang operating sophisticated drug trafficking operation through Rome",
//       children: [
//       {
//       label: "Core Operations",
//       content: "Receiving drugs from Albanian sources, targeting distribution in Arab diaspora communities and areas frequented by African immigrants",
//       children: [
//       {
//       label: "Storage Location",
//       content: "Tor Bella Monaca area (41.8685263, 12.6506904)"
//       },
//       {
//       label: "Market Strategy",
//       content: "Undercutting prices of Turkish, Egyptian and Italian criminal groups"
//       }
//       ]
//       },
//       {
//       label: "Maritime Activity",
//       content: "Regular vessel transfers 1km offshore, consistent morning operations",
//       children: [
//       {
//       label: "Pattern Analysis",
//       content: "30-day operational cycles identified through device tracking"
//       },
//       {
//       label: "Port Activity",
//       content: "Multiple small ports utilized, brief offshore meetings observed"
//       }
//       ]
//       },
//       {
//       label: "Distribution Network",
//       content: "Focus on shisha bars, Arabic cafes, areas with high Arab diaspora presence"
//       }
//       ]
//       },
//       {
//       label: "Case Study 2: Kurdish Network",
//       pages: "8-10",
//       content: "Iraqi Kurdish gang led by Nihad Khoshnaw (Sheikh Nihad) operating equipment smuggling operation",
//       children: [
//       {
//       label: "Business Operations",
//       content: "Using GOSKA OTOMOTIV VE INSAAT as legitimate front",
//       children: [
//       {
//       label: "Equipment Types",
//       content: "Rubber boats, engines, life jackets for migrant crossings"
//       },
//       {
//       label: "Shipping Route",
//       content: "Turkish port of Izmir to port of Genoa"
//       }
//       ]
//       },
//       {
//       label: "Network Analysis",
//       content: "Connected to broader Kurdish smuggling networks across EU",
//       children: [
//       {
//       label: "Shipping Partners",
//       content: "MSC, CMA CGM, and Maersk identified as carriers"
//       },
//       {
//       label: "Business Location",
//       content: "Operations centered in Aksaray region"
//       }
//       ]
//       }
//       ]
//       },
//       {
//       label: "Case Study 3: Tunisian Operation",
//       pages: "11",
//       content: "Tunisian criminal group organizing Captagon pill trafficking",
//       children: [
//       {
//       label: "Operation Details",
//       content: "Shipping from Sfax to Italy via Palermo",
//       children: [
//       {
//       label: "Storage Location",
//       content: "Sfax coordinates: 34.7695665, 10.7551894"
//       },
//       {
//       label: "Supply Chain",
//       content: "Sourcing from Algerian suppliers"
//       }
//       ]
//       },
//       {
//       label: "Distribution",
//       content: "Using established human trafficking networks",
//       children: [
//       {
//       label: "Route",
//       content: "Palermo to Rome via Tunisian networks"
//       }
//       ]
//       }
//       ]
//       }
//       ]
//       },
//       {
//       label: "Analysis Methods",
//       pages: "4-6, 12",
//       children: [
//       {
//       label: "Technical Surveillance",
//       content: "Device tracking, pattern of life analysis, maritime movement tracking",
//       children: [
//       {
//       label: "Maritime Analysis",
//       content: "AIS data, port activity monitoring, vessel movement patterns"
//       }
//       ]
//       },
//       {
//       label: "Business Intelligence",
//       content: "Front company investigation, business record analysis, shipping documentation"
//       },
//       {
//       label: "Social Analysis",
//       content: "Community infiltration mapping, social media investigation, network relationship analysis"
//       }
//       ]
//       },
//       {
//       label: "Findings",
//       pages: "12",
//       children: [
//       {
//       label: "Scale",
//       content: "Cases represent <0.4% of over 500 intelligence reports"
//       },
//       {
//       label: "Network Integration",
//       content: "Sophisticated cooperation between ethnic groups, shared infrastructure"
//       },
//       {
//       label: "Maritime Patterns",
//       content: "Regular 30-day cycles, consistent offshore transfer points"
//       },
//       {
//       label: "Distribution Methods",
//       content: "Use of diaspora communities, legitimate businesses as fronts"
//       }
//       ]
//       },
//       {
//       label: "Next Steps",
//       pages: "10",
//       children: [
//       {
//       label: "Maritime Intelligence",
//       children: [
//       {
//       label: "Data Access",
//       content: "Obtain bill of lading data for Izmir-Genoa shipments"
//       },
//       {
//       label: "Analysis",
//       content: "Layer maritime AIS data with geospatial pattern of life data"
//       }
//       ]
//       },
//       {
//       label: "Network Investigation",
//       children: [
//       {
//       label: "Device Tracking",
//       content: "Identify additional smart devices linked to Kurdish OCN"
//       },
//       {
//       label: "Association Analysis",
//       content: "Use co-travelling analysis to identify associates"
//       }
//       ]
//       },
//       {
//       label: "Business Intelligence",
//       children: [
//       {
//       label: "Company Investigation",
//       content: "Investigate other businesses associated with KHOSHNAW"
//       },
//       {
//       label: "Vehicle Tracking",
//       content: "Identify specific vehicles involved in operations"
//       }
//       ]
//       }
//       ]
//       }
//       ]
//       },


//     // 3. Thematic Analyses
//     {
//       label: "3. Thematic Analyses",
//       children: [
//         {
//           label: "Intelligence Gaps",
//           children: [
//             {
//               label: "Maritime Data",
//               content: "Incomplete vessel tracking, limited AIS data integration"
//             },
//             {
//               label: "Network Understanding",
//               content: "Partial mapping of criminal networks, missing connections"
//             },
//             {
//               label: "Financial Flows",
//               content: "Limited visibility on money movement and business operations"
//             }
//           ]
//         },
//         {
//           label: "Analytical Limitations",
//           children: [
//             {
//               label: "Temporal Coverage",
//               content: "Limited time windows in tracking data, pattern verification needs"
//             },
//             {
//               label: "Geographic Coverage",
//               content: "Uneven coverage of different areas and routes"
//             },
//             {
//               label: "Methodology",
//               content: "Heavy reliance on device tracking, verification processes unclear"
//             }
//           ]
//         },
//         {
//           label: "Potential Blindspots",
//           children: [
//             {
//               label: "Alternative Routes",
//               content: "Focus on known paths may miss adaptive behaviours"
//             },
//             {
//               label: "Corruption Factors",
//               content: "Limited analysis of official facilitation"
//             },
//             {
//               label: "Market Dynamics",
//               content: "Incomplete understanding of economic drivers"
//             }
//           ]
//         },
//         {
//           label: "Future Research Needs",
//           children: [
//             {
//               label: "Network Resilience",
//               content: "How networks adapt to enforcement pressure"
//             },
//             {
//               label: "Community Impact",
//               content: "Role of diaspora and local communities"
//             },
//             {
//               label: "Systems Analysis",
//               content: "Broader contextual factors and relationships"
//             }
//           ]
//         }
//       ]
//     },

//     // 4. CTD Analyses
//     {
//       label: "4. CTD Analyses",
//       children: [
//         {
//           label: "Placeholder Section",
//           content: "This is placeholder content for the CTD analyses. You can expand here to add deeper investigative or thematic content regarding CTD operations."
//         },
//         {
//           label: "Additional Observations",
//           children: [
//             {
//               label: "Future Directions",
//               content: "Where the CTD analyses might expand, including new data points, collaborations, or analytical techniques."
//             }
//           ]
//         }
//       ]
//     }
//   ];

//   return (
//     <div className="p-4 space-y-8">
//       {/* Updated Header Layout */}
//       <div className="mb-8">
//         {/* 'Spotlight Report' in large text */}
//         <h1 className="text-6xl font-bold text-gray-900">Spotlight Report</h1>

//         {/* Thick black bar: 5 times thicker => h-5 */}
//         <div className="bg-black h-5 w-full my-4"></div>

//         {/* Title: Italian Maritime Border Exploitation */}
//         <h2 className="text-3xl font-bold text-gray-900 mb-2">
//           Italian Maritime Border Exploitation
//         </h2>

//         {/* Subheading */}
//         <p className="text-gray-600 text-xl">
//           Criminal Network Analysis and Infrastructure Assessment
//         </p>
//       </div>

//       {/* Main Content (no fixed height) */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">
//           Report Structure &amp; Findings
//         </h2>

//         {/* Full-width, responsive image */}
//         <div className="mb-8">
//           <img
//             src="/images/Background_Image.png"
//             alt="Background Illustration"
//             className="w-full h-auto rounded-lg shadow mb-4"
//           />

//           {/* Paragraph: now using Helvetica, text-xl */}
//           <div className="mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
//             <p className="text-xl text-gray-700">
//               Intelligence analysis reveals sophisticated criminal networks exploiting Italian
//               maritime borders through coordinated operations spanning the Mediterranean region.
//               The investigation, drawing from over 500 intelligence reports, documents three
//               interconnected case studies that demonstrate how drug trafficking, human smuggling,
//               and equipment smuggling operations share infrastructure and methods. Device tracking
//               and pattern analysis expose regular maritime transfers occurring 1km offshore, while
//               business records and social media investigation reveal legitimate enterprises serving
//               as criminal fronts. The criminal ecosystem, represented by Syrian, Kurdish, and
//               Tunisian operations, shows evolution beyond traditional ethnic boundaries, with
//               sophisticated price competition and resource sharing. These cases, representing
//               less than 0.4% of total intelligence, suggest a vastly larger criminal infrastructure
//               threatening Italian national security.
//             </p>
//           </div>

//           {/* Grey box: "At a glance" with indent, Helvetica, and larger text */}
//           <div
//             className="bg-gray-100 p-6 rounded-lg"
//             style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
//           >
//             {/* Larger, bold heading */}
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//               At a glance:
//             </h3>

//             {/* Larger bullet points, indented */}
//             <ul className="list-disc list-outside pl-6 space-y-3 text-xl text-gray-800">
//               <li>
//                 Device tracking and pattern analysis identify systematic maritime transfers 1km
//                 off Italian coasts, revealing coordinated criminal operations using shared routes
//                 from Albania, Tunisia, and Turkey.
//               </li>
//               <li>
//                 Syrian criminal networks are actively undercutting established drug prices in
//                 Rome’s Arab diaspora communities, demonstrating sophisticated market competition
//                 with Turkish, Egyptian, and Italian criminal groups.
//               </li>
//               <li>
//                 Intelligence data shows Kurdish smuggling networks using legitimate transportation
//                 businesses as fronts, particularly GOSKA OTOMOTIV VE INSAAT, to facilitate
//                 equipment movement for Channel crossing operations.
//               </li>
//               <li>
//                 Pattern-of-life analysis reveals regular 30-day operational cycles in maritime
//                 activities, with organised transfers occurring predominantly in early morning hours
//                 at small ports along the Italian coast.
//               </li>
//               <li>
//                 The three documented case studies represent less than 0.4% of over 500 intelligence
//                 reports, indicating a vastly larger criminal ecosystem exploiting Italian maritime
//                 borders for multiple illegal enterprises.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Hierarchical Tree (4 expandable sections) */}
//         {sections.map((section, index) => (
//           <TreeNode key={index} {...section} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HierarchicalAnalysis;





















































// // HierarchicalAnalysis.jsx
// import React, { useState } from 'react';
// import { ChevronDown, ChevronRight, FileText } from 'lucide-react';

// // Reusable TreeNode component
// const TreeNode = ({ label, children, pages, content, images }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const hasChildren = children && children.length > 0;

//   return (
//     <div className="ml-4">
//       {/* Node Header */}
//       <div
//         className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
//         style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
//         onClick={() => setIsExpanded(!isExpanded)}
//       >
//         {/* Expand/Collapse Icons */}
//         {hasChildren ? (
//           isExpanded ? (
//             <ChevronDown className="w-5 h-5 text-gray-700" />
//           ) : (
//             <ChevronRight className="w-5 h-5 text-gray-700" />
//           )
//         ) : (
//           <FileText className="w-5 h-5 text-gray-700" />
//         )}

//         {/* Section Label (larger, bolder) */}
//         <span className="text-xl font-bold text-gray-900">{label}</span>

//         {/* Page info remains small, slightly offset */}
//         {pages && <span className="text-sm text-gray-500 ml-2">(Pages {pages})</span>}
//       </div>

//       {/* Expanded Content */}
//       {isExpanded && (
//         <div className="ml-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
//           {/* Node Content (medium-large text) */}
//           {content && (
//             <p className="text-lg text-gray-700 mb-3">
//               {content}
//             </p>
//           )}

//           {/* Conditionally render images (side by side if > 1) */}
//           {images?.length > 0 && (
//             <div
//               className={`grid ${
//                 images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
//               } gap-4 mb-4`}
//             >
//               {images.map((imgSrc, idx) => (
//                 <a
//                   key={idx}
//                   href={imgSrc}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block"
//                 >
//                   <img
//                     src={imgSrc}
//                     alt={`Illustration ${idx + 1}`}
//                     className="w-full h-auto object-cover border border-gray-200 rounded shadow hover:opacity-90 transition-opacity"
//                   />
//                 </a>
//               ))}
//             </div>
//           )}

//           {/* Recursively render child nodes */}
//           {children?.map((child, index) => (
//             <TreeNode key={index} {...child} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// function HierarchicalAnalysis() {
//   const sections = [
//     // 1. Executive Summary
//     {
//       label: "1. Executive Summary",
//       children: [
//         {
//           label: "Summary Overview",
//           content:
//             "Intelligence analysis reveals sophisticated criminal networks exploiting Italian maritime borders through coordinated operations spanning the Mediterranean region. The investigation, drawing from over 500 intelligence reports, documents three interconnected case studies that demonstrate how drug trafficking, human smuggling, and equipment smuggling operations share infrastructure and methods. Device tracking and pattern analysis expose regular maritime transfers occurring 1km offshore, while business records and social media investigation reveal legitimate enterprises serving as criminal fronts. The criminal ecosystem, represented by Syrian, Kurdish, and Tunisian operations, shows evolution beyond traditional ethnic boundaries, with sophisticated price competition and resource sharing. These cases, representing less than 0.4% of total intelligence, suggest a vastly larger criminal infrastructure threatening Italian national security.",
//           children: []
//         },
//         {
//           label: "Key Points",
//           content: "Critical findings from the intelligence analysis.",
//           children: [
//             {
//               label: "Maritime Operations",
//               content:
//                 "Device tracking and pattern analysis identify systematic maritime transfers 1km off Italian coasts, revealing coordinated criminal operations using shared routes from Albania, Tunisia, and Turkey."
//             },
//             {
//               label: "Market Competition",
//               content:
//                 "Syrian criminal networks are actively undercutting established drug prices in Rome's Arab diaspora communities, demonstrating sophisticated market competition with Turkish, Egyptian, and Italian criminal groups."
//             },
//             {
//               label: "Business Front Operations",
//               content:
//                 "Intelligence data shows Kurdish smuggling networks using legitimate transportation businesses as fronts, particularly GOSKA OTOMOTIV VE INSAAT, to facilitate equipment movement for Channel crossing operations."
//             },
//             {
//               label: "Operational Patterns",
//               content:
//                 "Pattern-of-life analysis reveals regular 30-day operational cycles in maritime activities, with organized transfers occurring predominantly in early morning hours at small ports along the Italian coast."
//             },
//             {
//               label: "Scale Implications",
//               content:
//                 "The three documented case studies represent less than 0.4% of over 500 intelligence reports, indicating a vastly larger criminal ecosystem exploiting Italian maritime borders for multiple illegal enterprises."
//             }
//           ]
//         }
//       ]
//     },

//     // 2. Original Report Content
//     {
//       label: "2. Original Report Content",
//       children: [
//         {
//           label: "Problem Statement",
//           pages: "2",
//           content:
//             "Multiple criminal networks exploiting Italian maritime borders through sophisticated coordination of drug trafficking, human smuggling, and equipment transportation operations.",
//           children: [
//             {
//               label: "Scope",
//               content:
//                 "Three detailed case studies from September 2024, examining Syrian, Kurdish, and Tunisian criminal operations using maritime routes into Italy via Rome, Genoa, and Palermo.",
//               children: [
//                 {
//                   label: "Intelligence Volume",
//                   content:
//                     "Part of over 500 intelligence reports, with these cases representing <0.4% of total reporting"
//                 },
//                 {
//                   label: "Verification",
//                   content:
//                     "Source chain independently verified over 12 months, primary source described as highly suitable and motivated"
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           label: "Case Studies",
//           children: [
//             {
//               label: "Case Study 1: Syrian Operation",
//               pages: "3-6",
//               content:
//                 "Syrian criminal gang operating sophisticated drug trafficking operation through Rome",
//               children: [
//                 {
//                   label: "Core Operations",
//                   content:
//                     "Receiving drugs from Albanian sources, targeting distribution in Arab diaspora communities and areas frequented by African immigrants",
//                   children: [
//                     {
//                       label: "Storage Location",
//                       content: "Tor Bella Monaca area (41.8685263, 12.6506904)"
//                     },
//                     {
//                       label: "Market Strategy",
//                       content:
//                         "Undercutting prices of Turkish, Egyptian and Italian criminal groups"
//                     }
//                   ]
//                 },
//                 {
//                   label: "Maritime Activity",
//                   content:
//                     "Regular vessel transfers 1km offshore, consistent morning operations",
//                   children: [
//                     {
//                       label: "Pattern Analysis",
//                       content:
//                         "30-day operational cycles identified through device tracking"
//                     },
//                     {
//                       label: "Port Activity",
//                       content: "Multiple small ports utilized, brief offshore meetings observed"
//                     }
//                   ]
//                 },
//                 {
//                   label: "Distribution Network",
//                   content:
//                     "Focus on shisha bars, Arabic cafes, areas with high Arab diaspora presence"
//                 }
//               ]
//             },
//             {
//               label: "Case Study 2: Kurdish Network",
//               pages: "8-10",
//               content:
//                 "Iraqi Kurdish gang led by Nihad Khoshnaw (Sheikh Nihad) operating equipment smuggling operation",
//               children: [
//                 {
//                   label: "Business Operations",
//                   content: "Using GOSKA OTOMOTIV VE INSAAT as legitimate front",
//                   children: [
//                     {
//                       label: "Equipment Types",
//                       content: "Rubber boats, engines, life jackets for migrant crossings"
//                     },
//                     {
//                       label: "Shipping Route",
//                       content: "Turkish port of Izmir to port of Genoa"
//                     }
//                   ]
//                 },
//                 {
//                   label: "Network Analysis",
//                   content:
//                     "Connected to broader Kurdish smuggling networks across EU",
//                   children: [
//                     {
//                       label: "Shipping Partners",
//                       content: "MSC, CMA CGM, and Maersk identified as carriers"
//                     },
//                     {
//                       label: "Business Location",
//                       content: "Operations centered in Aksaray region"
//                     }
//                   ]
//                 }
//               ]
//             },
//             {
//               label: "Case Study 3: Tunisian Operation",
//               pages: "11",
//               content:
//                 "Tunisian criminal group organizing Captagon pill trafficking",
//               children: [
//                 {
//                   label: "Operation Details",
//                   content: "Shipping from Sfax to Italy via Palermo",
//                   children: [
//                     {
//                       label: "Storage Location",
//                       content: "Sfax coordinates: 34.7695665, 10.7551894"
//                     },
//                     {
//                       label: "Supply Chain",
//                       content: "Sourcing from Algerian suppliers"
//                     }
//                   ]
//                 },
//                 {
//                   label: "Distribution",
//                   content: "Using established human trafficking networks",
//                   children: [
//                     {
//                       label: "Route",
//                       content: "Palermo to Rome via Tunisian networks"
//                     }
//                   ]
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           label: "Analysis Methods",
//           pages: "4-6, 12",
//           children: [
//             {
//               label: "Technical Surveillance",
//               content:
//                 "Device tracking, pattern of life analysis, maritime movement tracking",
//               children: [
//                 {
//                   label: "Maritime Analysis",
//                   content:
//                     "AIS data, port activity monitoring, vessel movement patterns"
//                 }
//               ]
//             },
//             {
//               label: "Business Intelligence",
//               content:
//                 "Front company investigation, business record analysis, shipping documentation"
//             },
//             {
//               label: "Social Analysis",
//               content:
//                 "Community infiltration mapping, social media investigation, network relationship analysis"
//             }
//           ]
//         },
//         {
//           label: "Findings",
//           pages: "12",
//           children: [
//             {
//               label: "Scale",
//               content: "Cases represent <0.4% of over 500 intelligence reports"
//             },
//             {
//               label: "Network Integration",
//               content:
//                 "Sophisticated cooperation between ethnic groups, shared infrastructure"
//             },
//             {
//               label: "Maritime Patterns",
//               content:
//                 "Regular 30-day cycles, consistent offshore transfer points"
//             },
//             {
//               label: "Distribution Methods",
//               content:
//                 "Use of diaspora communities, legitimate businesses as fronts"
//             }
//           ]
//         },
//         {
//           label: "Next Steps",
//           pages: "10",
//           children: [
//             {
//               label: "Maritime Intelligence",
//               children: [
//                 {
//                   label: "Data Access",
//                   content:
//                     "Obtain bill of lading data for Izmir-Genoa shipments"
//                 },
//                 {
//                   label: "Analysis",
//                   content:
//                     "Layer maritime AIS data with geospatial pattern of life data"
//                 }
//               ]
//             },
//             {
//               label: "Network Investigation",
//               children: [
//                 {
//                   label: "Device Tracking",
//                   content:
//                     "Identify additional smart devices linked to Kurdish OCN"
//                 },
//                 {
//                   label: "Association Analysis",
//                   content:
//                     "Use co-travelling analysis to identify associates"
//                 }
//               ]
//             },
//             {
//               label: "Business Intelligence",
//               children: [
//                 {
//                   label: "Company Investigation",
//                   content:
//                     "Investigate other businesses associated with KHOSHNAW"
//                 },
//                 {
//                   label: "Vehicle Tracking",
//                   content:
//                     "Identify specific vehicles involved in operations"
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     },



//     // 3. Thematic Analyses

//     {
//       label: "3. Thematic Analyses",
//       children: [
//       {
//       label: "Key Issues",
//       children: [
//       {
//       label: "Maritime Border Exploitation",
//       content: "Systematic exploitation of Italian coastline through small ports, regular offshore transfers at 1km, and sophisticated use of multiple entry points. Evidence shows coordinated use of maritime corridors with regular operational cycles."
//       },
//       {
//       label: "Criminal Evolution",
//       content: "Networks breaking traditional ethnic/national boundaries, demonstrated through Syrian/Kurdish/Tunisian cooperation and sophisticated business front operations. Price competition and operational adaptation show market sophistication."
//       },
//       {
//       label: "Scale Analysis",
//       content: "Cases represent <0.4% of over 500 intelligence reports, indicating vastly larger criminal ecosystem operating across multiple geographic areas with sophisticated coordination."
//       }
//       ]
//       },
//       {
//       label: "Operational Patterns",
//       children: [
//       {
//       label: "Infrastructure Dependencies",
//       content: "Networks share small ports, offshore transfer points, and urban storage locations. Business fronts and community centers serve as operational hubs, particularly evident in diaspora community exploitation."
//       },
//       {
//       label: "Resource Sharing",
//       content: "Criminal groups share vessels, storage facilities, and transport networks. Knowledge resources including route information and community contacts are exchanged across operations."
//       },
//       {
//       label: "Geographic Patterns",
//       content: "Clear patterns in maritime route utilization and urban center exploitation, with systematic use of storage locations and distribution networks tied to community hubs."
//       }
//       ]
//       },
//       {
//       label: "Intelligence Gaps",
//       children: [
//       {
//       label: "Maritime Data",
//       content: "Need for comprehensive bill of lading data and AIS tracking integration, particularly for Izmir-Genoa shipments and coastal transfer activities."
//       },
//       {
//       label: "Network Understanding",
//       content: "Incomplete mapping of criminal networks, particularly in terms of co-traveling analysis and vehicle identification."
//       },
//       {
//       label: "Financial Flows",
//       content: "Limited visibility on money movement, business operations, and financial relationships between networks."
//       }
//       ]
//       },
//       {
//       label: "Analytical Limitations",
//       children: [
//       {
//       label: "Temporal Coverage",
//       content: "Device tracking shows clear patterns but within limited time windows, particularly around August 2024 activities in Durres."
//       },
//       {
//       label: "Geographic Coverage",
//       content: "Uneven coverage across different ports and routes, with some areas like Rome well-mapped while others show information gaps."
//       },
//       {
//       label: "Network Analysis",
//       content: "Relationships between different criminal groups suggested but not fully evidenced, with business front operations' extent unknown."
//       }
//       ]
//       },
//       {
//       label: "Potential Blindspots",
//       children: [
//       {
//       label: "Alternative Routes",
//       content: "Focus on known maritime paths may miss displacement effects and alternative transport methods."
//       },
//       {
//       label: "Corruption/Facilitation",
//       content: "Limited analysis of potential official involvement and port/customs facilitation networks."
//       },
//       {
//       label: "Community Impact",
//       content: "Incomplete understanding of diaspora community roles and local economic effects of criminal operations."
//       }
//       ]
//       },
//       {
//       label: "Future Research Needs",
//       children: [
//       {
//       label: "Network Resilience",
//       content: "Need to understand how networks adapt to enforcement, develop alternative routes, and replace compromised infrastructure."
//       },
//       {
//       label: "Market Dynamics",
//       content: "Further analysis needed of price competition, supply chain vulnerabilities, and market adaptation to enforcement."
//       },
//       {
//       label: "Systems Analysis",
//       content: "Deeper investigation required of legitimate business impacts, community effects, and local economic implications."
//       }
//       ]
//       }
//       ]
//       },

//     // 4. CTD Analyses
//     {
//       label: "4. CTD Analyses",
//       children: [
//         {
//           label: "Placeholder Section",
//           content:
//             "This is placeholder content for the CTD analyses. You can expand here to add deeper investigative or thematic content regarding CTD operations."
//         },
//         {
//           label: "Additional Observations",
//           children: [
//             {
//               label: "Future Directions",
//               content:
//                 "Where the CTD analyses might expand, including new data points, collaborations, or analytical techniques."
//             }
//           ]
//         }
//       ]
//     }
//   ];

//   return (
//     <div className="p-4 space-y-8">
//       {/* Updated Header Layout */}
//       <div className="mb-8">
//         {/* 'Spotlight Report' in large text */}
//         <h1 className="text-6xl font-bold text-gray-900">Spotlight Report</h1>

//         {/* Thick black bar: 5 times thicker => h-5 */}
//         <div className="bg-black h-5 w-full my-4"></div>

//         {/* Title: Italian Maritime Border Exploitation */}
//         <h2 className="text-3xl font-bold text-gray-900 mb-2">
//           Italian Maritime Border Exploitation
//         </h2>

//         {/* Subheading */}
//         <p className="text-gray-600 text-xl">
//           Criminal Network Analysis and Infrastructure Assessment
//         </p>
//       </div>

//       {/* Main Content (no fixed height) */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">
//           Report Structure &amp; Findings
//         </h2>

//         {/* Full-width, responsive image */}
//         <div className="mb-8">
//           <img
//             src="/images/Background_Image.png"
//             alt="Background Illustration"
//             className="w-full h-auto rounded-lg shadow mb-4"
//           />

//           {/* Paragraph: now using Helvetica, text-xl */}
//           <div className="mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
//             <p className="text-xl text-gray-700">
//               Intelligence analysis reveals sophisticated criminal networks exploiting Italian
//               maritime borders through coordinated operations spanning the Mediterranean region.
//               The investigation, drawing from over 500 intelligence reports, documents three
//               interconnected case studies that demonstrate how drug trafficking, human smuggling,
//               and equipment smuggling operations share infrastructure and methods. Device tracking
//               and pattern analysis expose regular maritime transfers occurring 1km offshore, while
//               business records and social media investigation reveal legitimate enterprises serving
//               as criminal fronts. The criminal ecosystem, represented by Syrian, Kurdish, and
//               Tunisian operations, shows evolution beyond traditional ethnic boundaries, with
//               sophisticated price competition and resource sharing. These cases, representing
//               less than 0.4% of total intelligence, suggest a vastly larger criminal infrastructure
//               threatening Italian national security.
//             </p>
//           </div>

//           {/* Grey box: "At a glance" with indent, Helvetica, and larger text */}
//           <div
//             className="bg-gray-100 p-6 rounded-lg"
//             style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
//           >
//             {/* Larger, bold heading */}
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//               At a glance:
//             </h3>

//             {/* Larger bullet points, indented */}
//             <ul className="list-disc list-outside pl-6 space-y-3 text-xl text-gray-800">
//               <li>
//                 Device tracking and pattern analysis identify systematic maritime transfers 1km
//                 off Italian coasts, revealing coordinated criminal operations using shared routes
//                 from Albania, Tunisia, and Turkey.
//               </li>
//               <li>
//                 Syrian criminal networks are actively undercutting established drug prices in
//                 Rome’s Arab diaspora communities, demonstrating sophisticated market competition
//                 with Turkish, Egyptian, and Italian criminal groups.
//               </li>
//               <li>
//                 Intelligence data shows Kurdish smuggling networks using legitimate transportation
//                 businesses as fronts, particularly GOSKA OTOMOTIV VE INSAAT, to facilitate
//                 equipment movement for Channel crossing operations.
//               </li>
//               <li>
//                 Pattern-of-life analysis reveals regular 30-day operational cycles in maritime
//                 activities, with organised transfers occurring predominantly in early morning hours
//                 at small ports along the Italian coast.
//               </li>
//               <li>
//                 The three documented case studies represent less than 0.4% of over 500 intelligence
//                 reports, indicating a vastly larger criminal ecosystem exploiting Italian maritime
//                 borders for multiple illegal enterprises.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Hierarchical Tree (4 expandable sections) */}
//         {sections.map((section, index) => (
//           <TreeNode key={index} {...section} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HierarchicalAnalysis;





























// // HierarchicalAnalysis.jsx
// import React, { useState } from 'react';
// import { ChevronDown, ChevronRight, FileText } from 'lucide-react';

// const TreeNode = ({ label, children, pages, content, images }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const hasChildren = children && children.length > 0;

//   return (
//     <div className="ml-4">
//       {/* Node Header */}
//       <div
//         className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
//         style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
//         onClick={() => setIsExpanded(!isExpanded)}
//       >
//         {hasChildren ? (
//           isExpanded ? (
//             <ChevronDown className="w-5 h-5 text-gray-700" />
//           ) : (
//             <ChevronRight className="w-5 h-5 text-gray-700" />
//           )
//         ) : (
//           <FileText className="w-5 h-5 text-gray-700" />
//         )}
//         <span className="text-xl font-bold text-gray-900">{label}</span>
//         {pages && <span className="text-sm text-gray-500 ml-2">(Pages {pages})</span>}
//       </div>

//       {isExpanded && (
//         <div className="ml-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
//           {content && (
//             <p className="text-lg text-gray-700 mb-3 white-space-pre-line">
//               {content}
//             </p>
//           )}

//           {images?.length > 0 && (
//             <div
//               className={`grid ${
//                 images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
//               } gap-4 mb-4`}
//             >
//               {images.map((imgSrc, idx) => (
//                 <a
//                   key={idx}
//                   href={imgSrc}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block"
//                 >
//                   <img
//                     src={imgSrc}
//                     alt={`Illustration ${idx + 1}`}
//                     className="w-full h-auto object-cover border border-gray-200 rounded shadow hover:opacity-90 transition-opacity"
//                   />
//                 </a>
//               ))}
//             </div>
//           )}

//           {children?.map((child, index) => (
//             <TreeNode key={index} {...child} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// function HierarchicalAnalysis() {
//   // Reduced-depth data structure:
//   const sections = [
//     {
//       label: "1. Executive Summary",
//       children: [
//         {
//           label: "Summary Overview",
//           // Combined the original “Summary Overview” text
//           content: `Intelligence analysis reveals sophisticated criminal networks exploiting Italian maritime borders through coordinated operations spanning the Mediterranean region. The investigation, drawing from over 500 intelligence reports, documents three interconnected case studies that demonstrate how drug trafficking, human smuggling, and equipment smuggling operations share infrastructure and methods. Device tracking and pattern analysis expose regular maritime transfers occurring 1km offshore, while business records and social media investigation reveal legitimate enterprises serving as criminal fronts. The criminal ecosystem, represented by Syrian, Kurdish, and Tunisian operations, shows evolution beyond traditional ethnic boundaries, with sophisticated price competition and resource sharing. These cases, representing less than 0.4% of total intelligence, suggest a vastly larger criminal infrastructure threatening Italian national security.`
//         },
//         {
//           label: "Key Points",
//           // Flatten the five sub‐points as bullet points in content
//           content: `Critical findings from the intelligence analysis:\n\n• Maritime Operations: Device tracking and pattern analysis identify systematic maritime transfers 1km off Italian coasts, revealing coordinated criminal operations using shared routes from Albania, Tunisia, and Turkey.\n\n• Market Competition: Syrian criminal networks are actively undercutting established drug prices in Rome’s Arab diaspora communities, demonstrating sophisticated market competition with Turkish, Egyptian, and Italian criminal groups.\n\n• Business Front Operations: Intelligence data shows Kurdish smuggling networks using legitimate transportation businesses (particularly GOSKA OTOMOTIV VE INSAAT) to facilitate equipment movement for Channel crossing operations.\n\n• Operational Patterns: Pattern-of-life analysis reveals regular 30-day operational cycles in maritime activities, with organised transfers occurring predominantly in early morning hours at small ports along the Italian coast.\n\n• Scale Implications: The three documented case studies represent less than 0.4% of over 500 intelligence reports, indicating a vastly larger criminal ecosystem exploiting Italian maritime borders for multiple illegal enterprises.`
//         }
//       ]
//     },
//     {
//       label: "2. Original Report Content",
//       children: [
//         {
//           label: "Problem Statement",
//           pages: "2",
//           // Flatten “Scope”, “Intelligence Volume”, and “Verification”
//           content: `Multiple criminal networks exploiting Italian maritime borders through sophisticated coordination of drug trafficking, human smuggling, and equipment transportation operations.\n\nScope:\nThree detailed case studies from September 2024, examining Syrian, Kurdish, and Tunisian criminal operations using maritime routes into Italy via Rome, Genoa, and Palermo.\n\n• Intelligence Volume: Part of over 500 intelligence reports, with these cases representing <0.4% of total reporting.\n• Verification: Source chain independently verified over 12 months; primary source described as highly suitable and motivated.`
//         },
//         {
//           label: "Case Studies",
//           pages: "3-11",
//           // Flatten all three case studies into one block of text
//           content: `Below are three case studies illustrating different operations:\n
// • Case Study 1: Syrian Operation (Pages 3-6)
//   - Syrian criminal gang operating a sophisticated drug trafficking operation through Rome.
//   - Core Operations: Receiving drugs from Albanian sources; distribution targets include Arab diaspora communities and areas frequented by African immigrants.
//     • Storage Location: Tor Bella Monaca area (41.8685263, 12.6506904).
//     • Market Strategy: Undercutting prices of Turkish, Egyptian, and Italian criminal groups.
//   - Maritime Activity: Regular vessel transfers 1km offshore in the early morning; pattern analysis shows 30-day operational cycles.
//     • Port Activity: Multiple small ports utilised; brief offshore meetings observed.
//   - Distribution Network: Focus on shisha bars, Arabic cafés, and areas with high Arab diaspora presence.\n
// • Case Study 2: Kurdish Network (Pages 8-10)
//   - Iraqi Kurdish gang led by Nihad Khoshnaw (Sheikh Nihad), operating equipment smuggling (rubber boats, engines, life jackets).
//   - Business Operations: Using GOSKA OTOMOTIV VE INSAAT as a legitimate front.
//     • Shipping Route: Turkish port of Izmir to port of Genoa.
//   - Network Analysis: Connected to broader Kurdish smuggling networks across the EU, using carriers like MSC, CMA CGM, and Maersk.
//     • Business Location: Operations centred in Aksaray region.\n
// • Case Study 3: Tunisian Operation (Page 11)
//   - Tunisian criminal group organising Captagon pill trafficking from Sfax to Italy via Palermo.
//   - Operation Details: Shipping from Sfax (34.7695665, 10.7551894), sourcing from Algerian suppliers.
//   - Distribution: Using established human trafficking networks; route from Palermo to Rome via Tunisian networks.`
//         },
//         {
//           label: "Analysis Methods",
//           pages: "4-6, 12",
//           // Flatten “Technical Surveillance”, “Business Intelligence”, “Social Analysis”
//           content: `The investigation drew on multiple analytical methods:\n\n• Technical Surveillance: Device tracking, pattern-of-life analysis, maritime movement tracking (including AIS data, port activity monitoring, and vessel movement patterns).\n\n• Business Intelligence: Front company investigation, business record analysis, and shipping documentation research.\n\n• Social Analysis: Community infiltration mapping, social media investigation, and network relationship analysis.`
//         },
//         {
//           label: "Findings",
//           pages: "12",
//           // Flatten “Scale”, “Network Integration”, “Maritime Patterns”, “Distribution Methods”
//           content: `Key Findings:\n\n• Scale: The three documented case studies represent <0.4% of over 500 intelligence reports.\n• Network Integration: Sophisticated cooperation between ethnic groups, sharing infrastructure and methods.\n• Maritime Patterns: Regular 30-day cycles, consistent offshore transfer points.\n• Distribution Methods: Use of diaspora communities and legitimate businesses as fronts.`
//         },
//         {
//           label: "Next Steps",
//           pages: "10",
//           // Flatten the sub‐items for Maritime Intelligence, Network Investigation, Business Intelligence
//           content: `Recommended Next Steps:\n\n• Maritime Intelligence:\n  - Data Access: Obtain bill of lading data for Izmir-Genoa shipments.\n  - Analysis: Layer maritime AIS data with geospatial pattern-of-life data.\n\n• Network Investigation:\n  - Device Tracking: Identify additional smart devices linked to Kurdish OCN.\n  - Association Analysis: Use co-travelling analysis to identify associates.\n\n• Business Intelligence:\n  - Company Investigation: Investigate other businesses associated with KHOSHNAW.\n  - Vehicle Tracking: Identify specific vehicles involved in operations.`
//         }
//       ]
//     },
//     {
//       label: "3. Thematic Analyses",
//       children: [
//         {
//           label: "Key Issues",
//           // Flatten maritime border exploitation, criminal evolution, scale analysis
//           content: `• Maritime Border Exploitation: Systematic exploitation of Italy’s coastline through small ports, offshore transfers at ~1km, and multiple entry points.\n\n• Criminal Evolution: Networks breaking traditional ethnic/national boundaries (Syrian/Kurdish/Tunisian), showing price competition, resource sharing, and sophisticated adaptation.\n\n• Scale Analysis: <0.4% of 500+ intelligence reports covered, indicating a much larger criminal ecosystem.`
//         },
//         {
//           label: "Operational Patterns",
//           // Flatten infrastructure dependencies, resource sharing, geographic patterns
//           content: `• Infrastructure Dependencies: Shared small ports, offshore transfer points, and urban storage. Legitimate business fronts and community centres used as operational hubs.\n\n• Resource Sharing: Groups share vessels, storage, transport networks, plus route knowledge and community contacts.\n\n• Geographic Patterns: Consistent maritime route use and urban centre exploitation, with systematic use of storage locations and diaspora networks.`
//         },
//         {
//           label: "Intelligence Gaps",
//           // Flatten maritime data, network understanding, financial flows
//           content: `• Maritime Data: Need for comprehensive bill of lading data and AIS tracking integration, especially for Izmir-Genoa and coastal transfers.\n\n• Network Understanding: Gaps in mapping co-travelling associates and specific vehicles.\n\n• Financial Flows: Limited visibility on money movement, legitimate business arrangements, and inter-network financing.`
//         },
//         {
//           label: "Analytical Limitations",
//           // Flatten temporal coverage, geographic coverage, network analysis
//           content: `• Temporal Coverage: Device tracking reveals patterns but in limited time windows (e.g. August 2024 activities in Durres).\n\n• Geographic Coverage: Uneven intelligence across different ports/routes; some well-documented (Rome) while others are lacking.\n\n• Network Analysis: Inter-group relationships and the full extent of front companies remain partially unclear.`
//         },
//         {
//           label: "Potential Blindspots",
//           // Flatten alternative routes, corruption/facilitation, community impact
//           content: `• Alternative Routes: Focus on known maritime paths may overlook displacement to other methods.\n\n• Corruption/Facilitation: Little detail on possible official involvement (e.g. port/customs collusion).\n\n• Community Impact: Incomplete understanding of how diaspora communities are affected or leveraged.`
//         },
//         {
//           label: "Future Research Needs",
//           // Flatten network resilience, market dynamics, systems analysis
//           content: `• Network Resilience: Understand how groups adapt to enforcement, develop backup routes, and replace compromised infrastructure.\n\n• Market Dynamics: Further scrutiny of price competition, supply chain vulnerabilities, and shifts in demand under enforcement pressure.\n\n• Systems Analysis: Deeper investigation into legitimate business ties, community effects, and local economic repercussions.`
//         }
//       ]
//     },
//     {
//       label: "4. CTD Analyses",
//       children: [
//         {
//           label: "Placeholder Section",
//           content: `This is placeholder content for the CTD analyses. You can expand here to add deeper investigative or thematic content regarding CTD operations.`
//         },
//         {
//           label: "Additional Observations",
//           // Flatten “Future Directions”
//           content: `Future Directions: Potential areas where CTD analyses might expand, including new data points, inter-agency collaborations, and advanced analytical techniques.`
//         }
//       ]
//     }
//   ];

//   return (
//     <div className="p-4 space-y-8">
//       <div className="mb-8">
//         <h1 className="text-6xl font-bold text-gray-900">Spotlight Report</h1>
//         <div className="bg-black h-5 w-full my-4"></div>
//         <h2 className="text-3xl font-bold text-gray-900 mb-2">
//           Italian Maritime Border Exploitation
//         </h2>
//         <p className="text-gray-600 text-xl">
//           Criminal Network Analysis and Infrastructure Assessment
//         </p>
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">
//           Report Structure &amp; Findings
//         </h2>
//         <div className="mb-8">
//           <img
//             src="/images/Background_Image.png"
//             alt="Background Illustration"
//             className="w-full h-auto rounded-lg shadow mb-4"
//           />
//           <div className="mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
//             <p className="text-xl text-gray-700">
//               Intelligence analysis reveals sophisticated criminal networks exploiting Italian
//               maritime borders through coordinated operations spanning the Mediterranean region...
//               (Introductory paragraph).
//             </p>
//           </div>

//           <div
//             className="bg-gray-100 p-6 rounded-lg"
//             style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
//           >
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//               At a glance:
//             </h3>
//             <ul className="list-disc list-outside pl-6 space-y-3 text-xl text-gray-800">
//               <li>Systematic maritime transfers 1km off Italian coasts...</li>
//               <li>Syrian networks undercutting established drug prices...</li>
//               <li>Kurdish smuggling networks using legitimate businesses...</li>
//               <li>Regular 30-day operational cycles, early morning hours...</li>
//               <li>Three case studies (less than 0.4% of total) suggest a much larger ecosystem...</li>
//             </ul>
//           </div>
//         </div>

//         {sections.map((section, index) => (
//           <TreeNode key={index} {...section} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HierarchicalAnalysis;


































// // HierarchicalAnalysis.jsx
// import React, { useState } from 'react';
// import { ChevronDown, ChevronRight, FileText } from 'lucide-react';

// // Reusable TreeNode component
// const TreeNode = ({ label, children, pages, content, images }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const hasChildren = children && children.length > 0;

//   return (
//     <div className="ml-4">
//       {/* Node Header */}
//       <div
//         className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
//         style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
//         onClick={() => setIsExpanded(!isExpanded)}
//       >
//         {/* Expand/Collapse Icons */}
//         {hasChildren ? (
//           isExpanded ? (
//             <ChevronDown className="w-5 h-5 text-gray-700" />
//           ) : (
//             <ChevronRight className="w-5 h-5 text-gray-700" />
//           )
//         ) : (
//           <FileText className="w-5 h-5 text-gray-700" />
//         )}

//         {/* Section Label */}
//         <span className="text-xl font-bold text-gray-900">{label}</span>

//         {/* Page info remains small, slightly offset */}
//         {pages && <span className="text-sm text-gray-500 ml-2">(Pages {pages})</span>}
//       </div>

//       {/* Expanded Content */}
//       {isExpanded && (
//         <div className="ml-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
//           {/* Node Content */}
//           {content && (
//             <p className="text-lg text-gray-700 mb-3">
//               {content}
//             </p>
//           )}

//           {/* Conditionally render images side by side if >1 */}
//           {images?.length > 0 && (
//             <div
//               className={`grid ${
//                 images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
//               } gap-4 mb-4`}
//             >
//               {images.map((imgSrc, idx) => (
//                 <a
//                   key={idx}
//                   href={imgSrc}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block"
//                 >
//                   <img
//                     src={imgSrc}
//                     alt={`Illustration ${idx + 1}`}
//                     className="w-full h-auto object-cover border border-gray-200 rounded shadow hover:opacity-90 transition-opacity"
//                   />
//                 </a>
//               ))}
//             </div>
//           )}

//           {/* Recursively render child nodes */}
//           {children?.map((child, index) => (
//             <TreeNode key={index} {...child} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// function HierarchicalAnalysis() {
//   // Updated data with a maximum nesting depth of four levels
//   const sections = [
//     {
//       label: "1. Executive Summary",
//       children: [
//         {
//           label: "Summary Overview",
//           content:
//             "Intelligence analysis reveals sophisticated criminal networks exploiting Italian maritime borders through coordinated operations spanning the Mediterranean region. The investigation, drawing from over 500 intelligence reports, documents three interconnected case studies that demonstrate how drug trafficking, human smuggling, and equipment smuggling operations share infrastructure and methods. Device tracking and pattern analysis expose regular maritime transfers occurring 1km offshore, while business records and social media investigation reveal legitimate enterprises serving as criminal fronts. The criminal ecosystem, represented by Syrian, Kurdish, and Tunisian operations, shows evolution beyond traditional ethnic boundaries, with sophisticated price competition and resource sharing. These cases, representing less than 0.4% of total intelligence, suggest a vastly larger criminal infrastructure threatening Italian national security."
//         },
//         {
//           label: "Key Points",
//           children: [
//             {
//               label: "Maritime Operations",
//               content:
//                 "Device tracking and pattern analysis identify systematic maritime transfers 1km off Italian coasts, revealing coordinated criminal operations using shared routes from Albania, Tunisia, and Turkey."
//             },
//             {
//               label: "Market Competition",
//               content:
//                 "Syrian criminal networks are actively undercutting established drug prices in Rome’s Arab diaspora communities, demonstrating sophisticated market competition with Turkish, Egyptian, and Italian criminal groups."
//             },
//             {
//               label: "Business Front Operations",
//               content:
//                 "Intelligence data shows Kurdish smuggling networks using legitimate transportation businesses as fronts, particularly GOSKA OTOMOTIV VE INSAAT, to facilitate equipment movement for Channel crossing operations."
//             },
//             {
//               label: "Operational Patterns",
//               content:
//                 "Pattern-of-life analysis reveals regular 30-day operational cycles in maritime activities, with organised transfers occurring predominantly in early morning hours at small ports along the Italian coast."
//             },
//             {
//               label: "Scale Implications",
//               content:
//                 "The three documented case studies represent less than 0.4% of over 500 intelligence reports, indicating a vastly larger criminal ecosystem exploiting Italian maritime borders for multiple illegal enterprises."
//             }
//           ]
//         }
//       ]
//     },
//     {
//       label: "2. Original Report Content",
//       children: [
//         {
//           label: "Problem Statement",
//           pages: "2",
//           children: [
//             {
//               label: "Scope",
//               content:
//                 "Three detailed case studies from September 2024, examining Syrian, Kurdish, and Tunisian criminal operations using maritime routes into Italy via Rome, Genoa, and Palermo.",
//               children: [
//                 {
//                   label: "Intelligence Volume",
//                   content:
//                     "Part of over 500 intelligence reports, with these cases representing <0.4% of total reporting"
//                 },
//                 {
//                   label: "Verification",
//                   content:
//                     "Source chain independently verified over 12 months, primary source described as highly suitable and motivated"
//                 }
//               ]
//             }
//           ],
//           content:
//             "Multiple criminal networks exploiting Italian maritime borders through sophisticated coordination of drug trafficking, human smuggling, and equipment transportation operations."
//         },
//         {
//           label: "Case Studies",
//           children: [
//             {
//               label: "Case Study 1: Syrian Operation",
//               pages: "3-6",
//               content:
//                 "Syrian criminal gang operating sophisticated drug trafficking operation through Rome",
//               children: [
//                 {
//                   label: "Core Operations",
//                   // Combined “Storage Location” & “Market Strategy” as bullet points
//                   content:
//                     "Receiving drugs from Albanian sources, targeting distribution in Arab diaspora communities and areas frequented by African immigrants.\n\n• Storage Location: Tor Bella Monaca area (41.8685263, 12.6506904)\n• Market Strategy: Undercutting prices of Turkish, Egyptian and Italian criminal groups"
//                 },
//                 {
//                   label: "Maritime Activity",
//                   // Combined “Pattern Analysis” & “Port Activity” as bullet points
//                   content:
//                     "Regular vessel transfers 1km offshore, consistent morning operations\n\n• Pattern Analysis: 30-day operational cycles identified through device tracking\n• Port Activity: Multiple small ports utilised, brief offshore meetings observed"
//                 },
//                 {
//                   label: "Distribution Network",
//                   content:
//                     "Focus on shisha bars, Arabic cafes, and areas with high Arab diaspora presence"
//                 }
//               ]
//             },
//             {
//               label: "Case Study 2: Kurdish Network",
//               pages: "8-10",
//               content:
//                 "Iraqi Kurdish gang led by Nihad Khoshnaw (Sheikh Nihad) operating equipment smuggling operation",
//               children: [
//                 {
//                   label: "Business Operations",
//                   // Combined “Equipment Types” & “Shipping Route”
//                   content:
//                     "Using GOSKA OTOMOTIV VE INSAAT as a legitimate front\n\n• Equipment Types: Rubber boats, engines, life jackets for migrant crossings\n• Shipping Route: Turkish port of Izmir to port of Genoa"
//                 },
//                 {
//                   label: "Network Analysis",
//                   // Combined “Shipping Partners” & “Business Location”
//                   content:
//                     "Connected to broader Kurdish smuggling networks across EU\n\n• Shipping Partners: MSC, CMA CGM, and Maersk identified as carriers\n• Business Location: Operations centered in Aksaray region"
//                 }
//               ]
//             },
//             {
//               label: "Case Study 3: Tunisian Operation",
//               pages: "11",
//               content:
//                 "Tunisian criminal group organizing Captagon pill trafficking",
//               children: [
//                 {
//                   label: "Operation Details",
//                   // Combined “Storage Location” & “Supply Chain”
//                   content:
//                     "Shipping from Sfax to Italy via Palermo\n\n• Storage Location: Sfax coordinates: 34.7695665, 10.7551894\n• Supply Chain: Sourcing from Algerian suppliers"
//                 },
//                 {
//                   label: "Distribution",
//                   // Single bullet for “Route”
//                   content:
//                     "Using established human trafficking networks\n\n• Route: Palermo to Rome via Tunisian networks"
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           label: "Analysis Methods",
//           pages: "4-6, 12",
//           children: [
//             {
//               label: "Technical Surveillance",
//               content:
//                 "Device tracking, pattern of life analysis, maritime movement tracking",
//               children: [
//                 {
//                   label: "Maritime Analysis",
//                   content:
//                     "AIS data, port activity monitoring, vessel movement patterns"
//                 }
//               ]
//             },
//             {
//               label: "Business Intelligence",
//               content:
//                 "Front company investigation, business record analysis, shipping documentation"
//             },
//             {
//               label: "Social Analysis",
//               content:
//                 "Community infiltration mapping, social media investigation, network relationship analysis"
//             }
//           ]
//         },
//         {
//           label: "Findings",
//           pages: "12",
//           children: [
//             {
//               label: "Scale",
//               content: "Cases represent <0.4% of over 500 intelligence reports"
//             },
//             {
//               label: "Network Integration",
//               content:
//                 "Sophisticated cooperation between ethnic groups, shared infrastructure"
//             },
//             {
//               label: "Maritime Patterns",
//               content:
//                 "Regular 30-day cycles, consistent offshore transfer points"
//             },
//             {
//               label: "Distribution Methods",
//               content:
//                 "Use of diaspora communities, legitimate businesses as fronts"
//             }
//           ]
//         },
//         {
//           label: "Next Steps",
//           pages: "10",
//           children: [
//             {
//               label: "Maritime Intelligence",
//               children: [
//                 {
//                   label: "Data Access",
//                   content:
//                     "Obtain bill of lading data for Izmir-Genoa shipments"
//                 },
//                 {
//                   label: "Analysis",
//                   content:
//                     "Layer maritime AIS data with geospatial pattern of life data"
//                 }
//               ]
//             },
//             {
//               label: "Network Investigation",
//               children: [
//                 {
//                   label: "Device Tracking",
//                   content:
//                     "Identify additional smart devices linked to Kurdish OCN"
//                 },
//                 {
//                   label: "Association Analysis",
//                   content:
//                     "Use co-travelling analysis to identify associates"
//                 }
//               ]
//             },
//             {
//               label: "Business Intelligence",
//               children: [
//                 {
//                   label: "Company Investigation",
//                   content:
//                     "Investigate other businesses associated with KHOSHNAW"
//                 },
//                 {
//                   label: "Vehicle Tracking",
//                   content:
//                     "Identify specific vehicles involved in operations"
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       label: "3. Thematic Analyses",
//       children: [
//         {
//           label: "Key Issues",
//           children: [
//             {
//               label: "Maritime Border Exploitation",
//               content:
//                 "Systematic exploitation of Italian coastline through small ports, regular offshore transfers at 1km, and sophisticated use of multiple entry points. Evidence shows coordinated use of maritime corridors with regular operational cycles."
//             },
//             {
//               label: "Criminal Evolution",
//               content:
//                 "Networks breaking traditional ethnic/national boundaries, demonstrated through Syrian/Kurdish/Tunisian cooperation and sophisticated business front operations. Price competition and operational adaptation show market sophistication."
//             },
//             {
//               label: "Scale Analysis",
//               content:
//                 "Cases represent <0.4% of over 500 intelligence reports, indicating vastly larger criminal ecosystem operating across multiple geographic areas with sophisticated coordination."
//             }
//           ]
//         },
//         {
//           label: "Operational Patterns",
//           children: [
//             {
//               label: "Infrastructure Dependencies",
//               content:
//                 "Networks share small ports, offshore transfer points, and urban storage locations. Business fronts and community centers serve as operational hubs, particularly evident in diaspora community exploitation."
//             },
//             {
//               label: "Resource Sharing",
//               content:
//                 "Criminal groups share vessels, storage facilities, and transport networks. Knowledge resources, including route information and community contacts, are exchanged across operations."
//             },
//             {
//               label: "Geographic Patterns",
//               content:
//                 "Clear patterns in maritime route utilization and urban center exploitation, with systematic use of storage locations and distribution networks tied to community hubs."
//             }
//           ]
//         },
//         {
//           label: "Intelligence Gaps",
//           children: [
//             {
//               label: "Maritime Data",
//               content:
//                 "Need for comprehensive bill of lading data and AIS tracking integration, particularly for Izmir-Genoa shipments and coastal transfer activities."
//             },
//             {
//               label: "Network Understanding",
//               content:
//                 "Incomplete mapping of criminal networks, particularly in terms of co-travelling analysis and vehicle identification."
//             },
//             {
//               label: "Financial Flows",
//               content:
//                 "Limited visibility on money movement, business operations, and financial relationships between networks."
//             }
//           ]
//         },
//         {
//           label: "Analytical Limitations",
//           children: [
//             {
//               label: "Temporal Coverage",
//               content:
//                 "Device tracking shows clear patterns but within limited time windows, particularly around August 2024 activities in Durres."
//             },
//             {
//               label: "Geographic Coverage",
//               content:
//                 "Uneven coverage across different ports and routes, with some areas like Rome well-mapped while others show information gaps."
//             },
//             {
//               label: "Network Analysis",
//               content:
//                 "Relationships between different criminal groups suggested but not fully evidenced, with business front operations’ extent unknown."
//             }
//           ]
//         },
//         {
//           label: "Potential Blindspots",
//           children: [
//             {
//               label: "Alternative Routes",
//               content:
//                 "Focus on known maritime paths may miss displacement effects and alternative transport methods."
//             },
//             {
//               label: "Corruption/Facilitation",
//               content:
//                 "Limited analysis of potential official involvement and port/customs facilitation networks."
//             },
//             {
//               label: "Community Impact",
//               content:
//                 "Incomplete understanding of diaspora community roles and local economic effects of criminal operations."
//             }
//           ]
//         },
//         {
//           label: "Future Research Needs",
//           children: [
//             {
//               label: "Network Resilience",
//               content:
//                 "Need to understand how networks adapt to enforcement, develop alternative routes, and replace compromised infrastructure."
//             },
//             {
//               label: "Market Dynamics",
//               content:
//                 "Further analysis needed of price competition, supply chain vulnerabilities, and market adaptation to enforcement."
//             },
//             {
//               label: "Systems Analysis",
//               content:
//                 "Deeper investigation required of legitimate business impacts, community effects, and local economic implications."
//             }
//           ]
//         }
//       ]
//     },
//     {
//       label: "4. CTD Analyses",
//       children: [
//         {
//           label: "Placeholder Section",
//           content:
//             "This is placeholder content for the CTD analyses. You can expand here to add deeper investigative or thematic content regarding CTD operations."
//         },
//         {
//           label: "Additional Observations",
//           children: [
//             {
//               label: "Future Directions",
//               content:
//                 "Where the CTD analyses might expand, including new data points, collaborations, or analytical techniques."
//             }
//           ]
//         }
//       ]
//     }
//   ];

//   return (
//     <div className="p-4 space-y-8">
//       {/* Updated Header Layout */}
//       <div className="mb-8">
//         {/* 'Spotlight Report' in large text */}
//         <h1 className="text-6xl font-bold text-gray-900">Spotlight Report</h1>

//         {/* Thick black bar: 5 times thicker => h-5 */}
//         <div className="bg-black h-5 w-full my-4"></div>

//         {/* Title: Italian Maritime Border Exploitation */}
//         <h2 className="text-3xl font-bold text-gray-900 mb-2">
//           Italian Maritime Border Exploitation
//         </h2>

//         {/* Subheading */}
//         <p className="text-gray-600 text-xl">
//           Criminal Network Analysis and Infrastructure Assessment
//         </p>
//       </div>

//       {/* Main Content (no fixed height) */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">
//           Report Structure &amp; Findings
//         </h2>

//         {/* Full-width, responsive image */}
//         <div className="mb-8">
//           <img
//             src="/images/Background_Image.png"
//             alt="Background Illustration"
//             className="w-full h-auto rounded-lg shadow mb-4"
//           />

//           {/* Paragraph with full original text */}
//           <div className="mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
//             <p className="text-xl text-gray-700">
//               Intelligence analysis reveals sophisticated criminal networks exploiting Italian
//               maritime borders through coordinated operations spanning the Mediterranean
//               region. The investigation, drawing from over 500 intelligence reports,
//               documents three interconnected case studies that demonstrate how drug
//               trafficking, human smuggling, and equipment smuggling operations share
//               infrastructure and methods. Device tracking and pattern analysis expose
//               regular maritime transfers occurring 1km offshore, while business records
//               and social media investigation reveal legitimate enterprises serving as
//               criminal fronts. The criminal ecosystem, represented by Syrian, Kurdish,
//               and Tunisian operations, shows evolution beyond traditional ethnic
//               boundaries, with sophisticated price competition and resource sharing.
//               These cases, representing less than 0.4% of total intelligence, suggest
//               a vastly larger criminal infrastructure threatening Italian national security.
//             </p>
//           </div>

//           {/* Grey box: "At a glance" with full bullet points */}
//           <div
//             className="bg-gray-100 p-6 rounded-lg"
//             style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
//           >
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//               At a glance:
//             </h3>
//             <ul className="list-disc list-outside pl-6 space-y-3 text-xl text-gray-800">
//               <li>
//                 Device tracking and pattern analysis identify systematic maritime transfers
//                 1km off Italian coasts, revealing coordinated criminal operations using
//                 shared routes from Albania, Tunisia, and Turkey.
//               </li>
//               <li>
//                 Syrian criminal networks are actively undercutting established drug
//                 prices in Rome’s Arab diaspora communities, demonstrating sophisticated
//                 market competition with Turkish, Egyptian, and Italian criminal groups.
//               </li>
//               <li>
//                 Intelligence data shows Kurdish smuggling networks using legitimate
//                 transportation businesses as fronts, particularly GOSKA OTOMOTIV VE INSAAT,
//                 to facilitate equipment movement for Channel crossing operations.
//               </li>
//               <li>
//                 Pattern-of-life analysis reveals regular 30-day operational cycles in
//                 maritime activities, with organised transfers occurring predominantly
//                 in early morning hours at small ports along the Italian coast.
//               </li>
//               <li>
//                 The three documented case studies represent less than 0.4% of over 500
//                 intelligence reports, indicating a vastly larger criminal ecosystem
//                 exploiting Italian maritime borders for multiple illegal enterprises.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Hierarchical Tree (with reorganised nesting) */}
//         {sections.map((section, index) => (
//           <TreeNode key={index} {...section} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HierarchicalAnalysis;







































// HierarchicalAnalysis.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FileText } from 'lucide-react';
import FooterBox from './FooterBox'; // Assuming both files are in the same folder

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
            "Intelligence analysis reveals sophisticated criminal networks exploiting Italian maritime borders through coordinated operations spanning the Mediterranean region. The investigation, drawing from over 500 intelligence reports, documents three interconnected case studies that demonstrate how drug trafficking, human smuggling, and equipment smuggling operations share infrastructure and methods. Device tracking and pattern analysis expose regular maritime transfers occurring 1km offshore, while business records and social media investigation reveal legitimate enterprises serving as criminal fronts. The criminal ecosystem, represented by Syrian, Kurdish, and Tunisian operations, shows evolution beyond traditional ethnic boundaries, with sophisticated price competition and resource sharing. These cases, representing less than 0.4% of total intelligence, suggest a vastly larger criminal infrastructure threatening Italian national security."
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
            },
            {
              label: "Scale Implications",
              content:
                "The three documented case studies represent less than 0.4% of over 500 intelligence reports, indicating a vastly larger criminal ecosystem exploiting Italian maritime borders for multiple illegal enterprises."
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
                  label: "Intelligence Volume",
                  content:
                    "Part of over 500 intelligence reports, with these cases representing <0.4% of total reporting"
                },
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
              label: "Scale",
              content: "Cases represent <0.4% of over 500 intelligence reports"
            },
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
            },
            {
              label: "Scale Analysis",
              content:
                "Cases represent <0.4% of over 500 intelligence reports, indicating vastly larger criminal ecosystem operating across multiple geographic areas with sophisticated coordination."
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
    {
      label: "4. CTD Analyses",
      defaultOpen: true,
      children: [
        {
          label: "Placeholder Section",
          content:
            "This is placeholder content for the CTD analyses. You can expand here to add deeper investigative or thematic content regarding CTD operations."
        },
        {
          label: "Additional Observations",
          children: [
            {
              label: "Future Directions",
              content:
                "Where the CTD analyses might expand, including new data points, collaborations, or analytical techniques."
            }
          ]
        }
      ]
    }
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
              Mediterranean region. The investigation, drawing from over 500 intelligence
              reports, documents three interconnected case studies that demonstrate how
              drug trafficking, human smuggling, and equipment smuggling operations share
              infrastructure and methods. Device tracking and pattern analysis expose
              regular maritime transfers occurring 1km offshore, while business records
              and social media investigation reveal legitimate enterprises serving as
              criminal fronts. The criminal ecosystem, represented by Syrian, Kurdish,
              and Tunisian operations, shows evolution beyond traditional ethnic
              boundaries, with sophisticated price competition and resource sharing.
              These cases, representing less than 0.4% of total intelligence, suggest
              a vastly larger criminal infrastructure threatening Italian national security.
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
              <li>
                The three documented case studies represent less than 0.4% of over
                500 intelligence reports, indicating a vastly larger criminal ecosystem
                exploiting Italian maritime borders for multiple illegal enterprises.
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


        <FooterBox />
        




      </div>
    </div>
  );
}

export default HierarchicalAnalysis;
