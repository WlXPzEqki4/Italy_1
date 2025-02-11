// import React, { useState } from 'react';
// import {
//   Plus,
//   Minus,
//   Anchor,
//   Users,
//   Briefcase,
//   Route,
//   Calendar,
//   Target
// } from 'lucide-react';

// function FooterBox_2() {
//   const [expandedBoxes, setExpandedBoxes] = useState(new Set());

//   const toggleBox = (id) => {
//     setExpandedBoxes((prev) => {
//       const newSet = new Set(prev);
//       if (newSet.has(id)) {
//         newSet.delete(id);
//       } else {
//         newSet.add(id);
//       }
//       return newSet;
//     });
//   };

//   // ------------------------------------------------
//   // DATA CONTENT
//   // ------------------------------------------------

//   const caseStudies = [
//     // ----------------
//     // BLUF: Concluding Remarks (Top)
//     // ----------------
//     {
//       id: "bluf",
//       title: "BLUF: Concluding Remarks",
//       byline: "Bottom line up front",
//       icon: <Target className="h-6 w-6" />,
//       summary: "Key findings from the three case studies.",
//       details: {
//         keyFindings: {
//           icon: <Users className="h-5 w-5" />,
//           title: "Key Insights",
//           points: [
//             "These three case studies highlight the scale and methods of transnational organised crime across Europe and North Africa.",
//             "Activities range from narcotics trafficking to migrant-smuggling facilitation, frequently relying on maritime routes.",
//             "Integrated intelligence—combining geospatial, social media, and device tracking—proves invaluable for disruption."
//           ]
//         }
//       }
//     },
//     // ----------------
//     // CASE STUDY 1
//     // ----------------
//     {
//       id: 1,
//       title: "Syrian Operation",
//       byline: "Drug trafficking via maritime routes",
//       icon: <Anchor className="h-6 w-6" />,
//       summary: "Rome-based operation utilising Albanian supply routes",
//       details: {
//         network: {
//           icon: <Users className="h-5 w-5" />,
//           title: "Network",
//           points: [
//             "Syrian gang operating in Rome",
//             "Targeting Arab diaspora communities",
//             "Competition with Turkish/Egyptian groups"
//           ]
//         },
//         operations: {
//           icon: <Route className="h-5 w-5" />,
//           title: "Operations",
//           points: [
//             "Maritime transfers 1km offshore",
//             "Storage in Tor Bella Monaca",
//             "Regular 30-day operational cycles"
//           ]
//         },
//         methods: {
//           icon: <Target className="h-5 w-5" />,
//           title: "Methods",
//           points: [
//             "Price undercutting strategy",
//             "Diaspora community distribution",
//             "Early morning maritime transfers"
//           ]
//         }
//       }
//     },
//     // ----------------
//     // CASE STUDY 2
//     // ----------------
//     {
//       id: 2,
//       title: "Kurdish Network",
//       byline: "Equipment smuggling operation",
//       icon: <Briefcase className="h-6 w-6" />,
//       summary: "Izmir–Genoa shipping route using business front",
//       details: {
//         network: {
//           icon: <Users className="h-5 w-5" />,
//           title: "Network",
//           points: [
//             "Led by Nihad Khoshnaw (Sheikh Nihad)",
//             "GOSKA OTOMOTIV VE INSAAT front",
//             "EU-wide Kurdish smuggling connections"
//           ]
//         },
//         operations: {
//           icon: <Route className="h-5 w-5" />,
//           title: "Operations",
//           points: [
//             "Shipping migration equipment",
//             "Rubber boats, engines, life jackets",
//             "Using legitimate cargo services"
//           ]
//         },
//         methods: {
//           icon: <Target className="h-5 w-5" />,
//           title: "Methods",
//           points: [
//             "Business front operations",
//             "International shipping routes",
//             "Equipment for Channel crossings"
//           ]
//         }
//       }
//     },
//     // ----------------
//     // CASE STUDY 3
//     // ----------------
//     {
//       id: 3,
//       title: "Tunisian Operation",
//       byline: "Captagon trafficking network",
//       icon: <Calendar className="h-6 w-6" />,
//       summary: "Sfax–Palermo drug-smuggling route",
//       details: {
//         network: {
//           icon: <Users className="h-5 w-5" />,
//           title: "Network",
//           points: [
//             "Tunisian criminal group",
//             "Algerian supplier connections",
//             "Links to human trafficking"
//           ]
//         },
//         operations: {
//           icon: <Route className="h-5 w-5" />,
//           title: "Operations",
//           points: [
//             "Sfax to Palermo maritime route",
//             "Coordinated storage locations",
//             "Distribution through Rome"
//           ]
//         },
//         methods: {
//           icon: <Target className="h-5 w-5" />,
//           title: "Methods",
//           points: [
//             "Using human trafficking networks",
//             "Maritime smuggling routes",
//             "Local Tunisian distribution"
//           ]
//         }
//       }
//     },
//     // ----------------
//     // Overall Observations (Bottom)
//     // ----------------
//     {
//       id: "observations",
//       title: "Overall Observations",
//       byline: "Key cross-case insights",
//       icon: <Anchor className="h-6 w-6" />,
//       summary: "Common threads and notable points emerging across all cases",
//       details: {
//         analysis: {
//           icon: <Target className="h-5 w-5" />,
//           title: "Recurring Patterns",
//           points: [
//             "Maritime smuggling routes are central in each case (Durres, Izmir, Sfax).",
//             "Geospatial and device analysis plays a crucial role in identifying key suspects.",
//             "Drug smuggling overlaps with people-smuggling, indicating multi-layered networks.",
//             "Cross-border collaboration is strong—operations span Europe, North Africa, and beyond.",
//             "Combining OSINT, AdTech, and maritime AIS data creates effective avenues for disruption."
//           ]
//         }
//       }
//     }
//   ];

//   // ------------------------------------------------
//   // RENDER
//   // ------------------------------------------------

//   return (
//     <div className="bg-gray-100 p-6 rounded-lg mt-8">
//       <h2 className="text-2xl font-bold text-gray-900 mb-4">
//         Criminal Network Analysis
//       </h2>

//       <div className="grid grid-cols-1 gap-4">
//         {caseStudies.map((study) => (
//           <div
//             key={study.id}
//             className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
//           >
//             <div
//               className="p-6 cursor-pointer"
//               onClick={() => toggleBox(study.id)}
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-3">
//                   {study.icon}
//                   <h3 className="text-xl font-bold text-gray-800">
//                     {study.title}
//                   </h3>
//                 </div>
//                 {expandedBoxes.has(study.id) ? (
//                   <Minus className="h-5 w-5 text-gray-500" />
//                 ) : (
//                   <Plus className="h-5 w-5 text-gray-500" />
//                 )}
//               </div>
//               <p className="text-gray-600 mt-2">{study.byline}</p>
//               <p className="text-sm text-gray-500 mt-1">{study.summary}</p>

//               {/* Expanded Content */}
//               {expandedBoxes.has(study.id) && (
//                 <div className="mt-6 grid grid-cols-1 gap-6">
//                   {Object.entries(study.details).map(([sectionKey, section]) => (
//                     <div key={sectionKey} className="space-y-3">
//                       <div className="flex items-center space-x-2">
//                         {section.icon}
//                         <h4 className="font-semibold text-gray-700">
//                           {section.title}
//                         </h4>
//                       </div>
//                       <ul className="list-disc list-inside space-y-2 pl-6">
//                         {section.points.map((point, idx) => (
//                           <li key={idx} className="text-gray-600">
//                             {point}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               )}
//               {/* End of Expanded Content */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FooterBox_2;



























import React, { useState } from 'react';
import {
  Plus,
  Minus,
  Anchor,
  Users,
  Briefcase,
  Route,
  Calendar,
  Target
} from 'lucide-react';


function FooterBox_2() {
//   const [expandedBoxes, setExpandedBoxes] = useState(new Set());

  const [expandedBoxes, setExpandedBoxes] = useState(
    new Set(["keyInsights", 1, 2, 3, "observations"])
  );
  

  const toggleBox = (id) => {
    setExpandedBoxes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Helper function to render a single card
  const renderCard = (item) => {
    return (
      <div
        key={item.id}
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div
          className="p-6 cursor-pointer"
          onClick={() => toggleBox(item.id)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {item.icon}
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
            </div>
            {expandedBoxes.has(item.id) ? (
              <Minus className="h-5 w-5 text-gray-500" />
            ) : (
              <Plus className="h-5 w-5 text-gray-500" />
            )}
          </div>
          <p className="text-gray-600 mt-2">{item.byline}</p>
          <p className="text-sm text-gray-500 mt-1">{item.summary}</p>

          {/* Expanded Details */}
          {expandedBoxes.has(item.id) && (
            <div className="mt-6 grid grid-cols-1 gap-6">
              {Object.entries(item.details).map(([sectionKey, section]) => (
                <div key={sectionKey} className="space-y-3">
                  <div className="flex items-center space-x-2">
                    {section.icon}
                    <h4 className="font-semibold text-gray-700">
                      {section.title}
                    </h4>
                  </div>
                  <ul className="list-disc list-inside space-y-2 pl-6">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="text-gray-600">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {/* End Expanded Details */}
        </div>
      </div>
    );
  };

  // -------------------------
  // DATA: Key Insights (Top)
  // -------------------------
  const keyInsights = {
    id: "keyInsights",
    title: "Key Insights",
    byline: "Summary of critical points",
    icon: <Target className="h-6 w-6" />,
    summary: "High-level overview from the three case studies",
    details: {
      keyFindings: {
        icon: <Users className="h-5 w-5" />,
        title: "Key Findings",
        points: [
          "These three case studies highlight the scale and methods of transnational organised crime across Europe and North Africa.",
          "Activities range from narcotics trafficking to migrant-smuggling facilitation, frequently relying on maritime routes.",
          "Integrated intelligence—combining geospatial, social media, and device tracking—proves invaluable for disruption."
        ]
      }
    }
  };

  // -------------------------
  // DATA: Three Networks (Middle, side by side)
  // -------------------------
  const networkItems = [
    {
      id: 1,
      title: "Syrian Operation",
      byline: "Drug trafficking via maritime routes",
      icon: <Anchor className="h-6 w-6" />,
      summary: "Rome-based operation utilising Albanian supply routes",
      details: {
        network: {
          icon: <Users className="h-5 w-5" />,
          title: "Network",
          points: [
            "Syrian gang operating in Rome",
            "Targeting Arab diaspora communities",
            "Competition with Turkish/Egyptian groups"
          ]
        },
        operations: {
          icon: <Route className="h-5 w-5" />,
          title: "Operations",
          points: [
            "Maritime transfers 1km offshore",
            "Storage in Tor Bella Monaca",
            "Regular 30-day operational cycles"
          ]
        },
        methods: {
          icon: <Target className="h-5 w-5" />,
          title: "Methods",
          points: [
            "Price undercutting strategy",
            "Diaspora community distribution",
            "Early morning maritime transfers"
          ]
        }
      }
    },
    {
      id: 2,
      title: "Kurdish Network",
      byline: "Equipment smuggling operation",
      icon: <Briefcase className="h-6 w-6" />,
      summary: "Izmir–Genoa shipping route using business front",
      details: {
        network: {
          icon: <Users className="h-5 w-5" />,
          title: "Network",
          points: [
            "Led by Nihad Khoshnaw (Sheikh Nihad)",
            "GOSKA OTOMOTIV VE INSAAT front",
            "EU-wide Kurdish smuggling connections"
          ]
        },
        operations: {
          icon: <Route className="h-5 w-5" />,
          title: "Operations",
          points: [
            "Shipping migration equipment",
            "Rubber boats, engines, life jackets",
            "Using legitimate cargo services"
          ]
        },
        methods: {
          icon: <Target className="h-5 w-5" />,
          title: "Methods",
          points: [
            "Business front operations",
            "International shipping routes",
            "Equipment for Channel crossings"
          ]
        }
      }
    },
    {
      id: 3,
      title: "Tunisian Operation",
      byline: "Captagon trafficking network",
      icon: <Calendar className="h-6 w-6" />,
      summary: "Sfax–Palermo drug-smuggling route",
      details: {
        network: {
          icon: <Users className="h-5 w-5" />,
          title: "Network",
          points: [
            "Tunisian criminal group",
            "Algerian supplier connections",
            "Links to human trafficking"
          ]
        },
        operations: {
          icon: <Route className="h-5 w-5" />,
          title: "Operations",
          points: [
            "Sfax to Palermo maritime route",
            "Coordinated storage locations",
            "Distribution through Rome"
          ]
        },
        methods: {
          icon: <Target className="h-5 w-5" />,
          title: "Methods",
          points: [
            "Using human trafficking networks",
            "Maritime smuggling routes",
            "Local Tunisian distribution"
          ]
        }
      }
    }
  ];

  // -------------------------
  // DATA: Overall Observations (Bottom)
  // -------------------------
  const overallObservations = {
    id: "observations",
    title: "Overall Observations",
    byline: "Key cross-case insights",
    icon: <Anchor className="h-6 w-6" />,
    summary: "Common threads and notable points emerging across all cases",
    details: {
      analysis: {
        icon: <Target className="h-5 w-5" />,
        title: "Recurring Patterns",
        points: [
          "Maritime smuggling routes are central in each case (Durres, Izmir, Sfax).",
          "Geospatial and device analysis plays a crucial role in identifying key suspects.",
          "Drug smuggling overlaps with people-smuggling, indicating multi-layered networks.",
          "Cross-border collaboration is strong—operations span Europe, North Africa, and beyond.",
          "Combining OSINT, AdTech, and maritime AIS data creates effective avenues for disruption."
        ]
      }
    }
  };

  // -------------------------
  // RENDER
  // -------------------------
  return (
    <div className="bg-gray-100 p-6 rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Criminal Network Analysis
      </h2>

      {/* Key Insights (full width) */}
      <div className="grid grid-cols-1 gap-4 mb-4">
        {renderCard(keyInsights)}
      </div>

      {/* Three Networks side by side */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {networkItems.map((item) => renderCard(item))}
      </div>

      {/* Overall Observations (full width) */}
      <div className="grid grid-cols-1 gap-4">
        {renderCard(overallObservations)}
      </div>
    </div>
  );
}

export default FooterBox_2;





