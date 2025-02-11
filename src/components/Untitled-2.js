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
//           label: "Key Points",
//           content: "Placeholder summary of the most critical aspects of the overall report.",
//           children: [
//             {
//               label: "Sub-Point 1",
//               content: "Placeholder content for sub-point 1."
//             },
//             {
//               label: "Sub-Point 2",
//               content: "Placeholder content for sub-point 2."
//             }
//           ]
//         },
//         {
//           label: "Additional Observations",
//           content: "Further placeholder commentary and notes for the executive summary.",
//           children: [
//             {
//               label: "Sub-Observation A",
//               content: "Placeholder content for sub-observation A."
//             },
//             {
//               label: "Sub-Observation B",
//               content: "Placeholder content for sub-observation B."
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
