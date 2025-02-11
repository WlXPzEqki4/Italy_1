// import React, { useState } from 'react';
// import { Plus, Minus, Anchor, Users, Briefcase, Route, Calendar, Target } from 'lucide-react';

// function FooterBox() {
//   const [expandedBox, setExpandedBox] = useState(null);

//   const caseStudies = [
//     {
//       id: 1,
//       title: "Syrian Operation",
//       byline: "Drug trafficking via maritime routes",
//       icon: <Anchor className="h-6 w-6" />,
//       summary: "Rome-based operation utilizing Albanian supply routes",
//       details: {
//         network: {
//           icon: <Users />,
//           title: "Network",
//           points: [
//             "Syrian gang operating in Rome",
//             "Targeting Arab diaspora communities",
//             "Competition with Turkish/Egyptian groups"
//           ]
//         },
//         operations: {
//           icon: <Route />,
//           title: "Operations",
//           points: [
//             "Maritime transfers 1km offshore",
//             "Storage in Tor Bella Monaca (41.8685263, 12.6506904)",
//             "Regular 30-day operational cycles"
//           ]
//         },
//         methods: {
//           icon: <Target />,
//           title: "Methods",
//           points: [
//             "Price undercutting strategy",
//             "Diaspora community distribution",
//             "Early morning maritime transfers"
//           ]
//         }
//       }
//     },
//     {
//       id: 2,
//       title: "Kurdish Network",
//       byline: "Equipment smuggling operation",
//       icon: <Briefcase className="h-6 w-6" />,
//       summary: "Izmir-Genoa shipping route using business front",
//       details: {
//         network: {
//           icon: <Users />,
//           title: "Network",
//           points: [
//             "Led by Nihad Khoshnaw (Sheikh Nihad)",
//             "GOSKA OTOMOTIV VE INSAAT front",
//             "EU-wide Kurdish smuggling connections"
//           ]
//         },
//         operations: {
//           icon: <Route />,
//           title: "Operations",
//           points: [
//             "Shipping migration equipment",
//             "Rubber boats, engines, life jackets",
//             "Using legitimate cargo services"
//           ]
//         },
//         methods: {
//           icon: <Target />,
//           title: "Methods",
//           points: [
//             "Business front operations",
//             "International shipping routes",
//             "Equipment for Channel crossings"
//           ]
//         }
//       }
//     },
//     {
//       id: 3,
//       title: "Tunisian Operation",
//       byline: "Captagon trafficking network",
//       icon: <Calendar className="h-6 w-6" />,
//       summary: "Sfax-Palermo drug smuggling route",
//       details: {
//         network: {
//           icon: <Users />,
//           title: "Network",
//           points: [
//             "Tunisian criminal group",
//             "Algerian supplier connections",
//             "Links to human trafficking"
//           ]
//         },
//         operations: {
//           icon: <Route />,
//           title: "Operations",
//           points: [
//             "Sfax to Palermo maritime route",
//             "Storage location: 34.7695665, 10.7551894",
//             "Distribution through Rome"
//           ]
//         },
//         methods: {
//           icon: <Target />,
//           title: "Methods",
//           points: [
//             "Using human trafficking networks",
//             "Maritime smuggling routes",
//             "Local Tunisian distribution"
//           ]
//         }
//       }
//     }
//   ];

//   return (
//     <div className="bg-gray-100 p-6 rounded-lg mt-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {caseStudies.map((study) => (
//           <div
//             key={study.id}
//             className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
//               expandedBox === study.id ? 'col-span-full row-span-2' : ''
//             }`}
//             onClick={() => setExpandedBox(expandedBox === study.id ? null : study.id)}
//           >
//             <div className="p-6">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-3">
//                   {study.icon}
//                   <h3 className="text-xl font-bold text-gray-800">{study.title}</h3>
//                 </div>
//                 {expandedBox === study.id ? (
//                   <Minus className="h-5 w-5 text-gray-500" />
//                 ) : (
//                   <Plus className="h-5 w-5 text-gray-500" />
//                 )}
//               </div>
//               <p className="text-gray-600 mt-2">{study.byline}</p>
//               <p className="text-sm text-gray-500 mt-1">{study.summary}</p>

//               {expandedBox === study.id && (
//                 <div className="mt-6 space-y-6 transition-all duration-500 ease-in-out">
//                   {Object.entries(study.details).map(([key, section]) => (
//                     <div key={key} className="space-y-3">
//                       <div className="flex items-center space-x-2">
//                         {section.icon}
//                         <h4 className="font-semibold text-gray-700">{section.title}</h4>
//                       </div>
//                       <ul className="list-disc list-inside space-y-2 pl-6">
//                         {section.points.map((point, idx) => (
//                           <li key={idx} className="text-gray-600">{point}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FooterBox;










// import React, { useState } from 'react';
// import { Plus, Minus, Anchor, Users, Briefcase, Route, Calendar, Target } from 'lucide-react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// function FooterBox() {
//   const [expandedBoxes, setExpandedBoxes] = useState(new Set());

//   const toggleBox = (id) => {
//     setExpandedBoxes(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(id)) {
//         newSet.delete(id);
//       } else {
//         newSet.add(id);
//       }
//       return newSet;
//     });
//   };

//   const MapComponent = ({ center, zoom = 13 }) => (
//     <div className="h-64 w-full rounded-lg overflow-hidden">
//       <GoogleMap
//         mapContainerClassName="w-full h-full"
//         center={center}
//         zoom={zoom}
//       >
//         <Marker position={center} />
//       </GoogleMap>
//     </div>
//   );

//   const caseStudies = [
//     {
//       id: 1,
//       title: "Syrian Operation",
//       byline: "Drug trafficking via maritime routes",
//       icon: <Anchor className="h-6 w-6" />,
//       summary: "Rome-based operation utilizing Albanian supply routes",
//       location: {
//         lat: 41.8685263,
//         lng: 12.6506904,
//         description: "Tor Bella Monaca storage location"
//       },
//       details: {
//         network: {
//           icon: <Users />,
//           title: "Network",
//           points: [
//             "Syrian gang operating in Rome",
//             "Targeting Arab diaspora communities",
//             "Competition with Turkish/Egyptian groups"
//           ]
//         },
//         operations: {
//           icon: <Route />,
//           title: "Operations",
//           points: [
//             "Maritime transfers 1km offshore",
//             "Storage in Tor Bella Monaca",
//             "Regular 30-day operational cycles"
//           ]
//         },
//         methods: {
//           icon: <Target />,
//           title: "Methods",
//           points: [
//             "Price undercutting strategy",
//             "Diaspora community distribution",
//             "Early morning maritime transfers"
//           ]
//         }
//       }
//     },
//     // ... [Previous case studies 2 and 3 with added location data] ...
//   ];

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyBykJlJd7hv5wat2BWEZS4v5EWLP_74pSw">
//       <div className="bg-gray-100 p-6 rounded-lg mt-8">
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">
//           Criminal Network Case Studies
//         </h2>
//         <div className="grid grid-cols-1 gap-4">
//           {caseStudies.map((study) => (
//             <div
//               key={study.id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
//             >
//               <div 
//                 className="p-6 cursor-pointer"
//                 onClick={() => toggleBox(study.id)}
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-3">
//                     {study.icon}
//                     <h3 className="text-xl font-bold text-gray-800">{study.title}</h3>
//                   </div>
//                   {expandedBoxes.has(study.id) ? (
//                     <Minus className="h-5 w-5 text-gray-500" />
//                   ) : (
//                     <Plus className="h-5 w-5 text-gray-500" />
//                   )}
//                 </div>
//                 <p className="text-gray-600 mt-2">{study.byline}</p>
//                 <p className="text-sm text-gray-500 mt-1">{study.summary}</p>

//                 {expandedBoxes.has(study.id) && (
//                   <div className="mt-6 grid grid-cols-2 gap-6">
//                     <div className="space-y-6">
//                       {Object.entries(study.details).map(([key, section]) => (
//                         <div key={key} className="space-y-3">
//                           <div className="flex items-center space-x-2">
//                             {section.icon}
//                             <h4 className="font-semibold text-gray-700">{section.title}</h4>
//                           </div>
//                           <ul className="list-disc list-inside space-y-2 pl-6">
//                             {section.points.map((point, idx) => (
//                               <li key={idx} className="text-gray-600">{point}</li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                     <div className="space-y-4">
//                       <h4 className="font-semibold text-gray-700">Location Details</h4>
//                       <MapComponent 
//                         center={{ lat: study.location.lat, lng: study.location.lng }}
//                       />
//                       <p className="text-sm text-gray-500">{study.location.description}</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </LoadScript>
//   );
// }

// export default FooterBox;
















// import React, { useState } from 'react';
// import { Plus, Minus, Anchor, Users, Briefcase, Route, Calendar, Target, MapPin } from 'lucide-react';



// function LocationMap({ lat, lng, label }) {
//     return (
//       <div className="relative h-64 w-full rounded-lg overflow-hidden border border-gray-200">
//         <div className="absolute inset-0 bg-blue-50">
//           {/* Map background pattern */}
//           <div className="absolute inset-0" 
//                style={{
//                  backgroundImage: `
//                    linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
//                    linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
//                  `,
//                  backgroundSize: '20px 20px'
//                }}
//           />
          
//           {/* Location marker */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             <div className="relative">
//               {/* Pulse effect */}
//               <div className="absolute -inset-4 bg-red-500 rounded-full opacity-10 animate-pulse"></div>
//               <div className="absolute -inset-2 bg-red-500 rounded-full opacity-20"></div>
//               <div className="w-4 h-4 bg-red-500 rounded-full"></div>
//             </div>
//           </div>
  
//           {/* Label at top */}
//           <div className="absolute top-4 left-0 right-0 text-center">
//             <p className="text-sm font-semibold text-gray-800 bg-white/80 mx-auto px-2 py-1 rounded w-fit">
//               {label}
//             </p>
//           </div>
  
//           {/* Coordinates at bottom */}
//           <div className="absolute bottom-4 left-0 right-0 text-center">
//             <p className="text-sm text-gray-600 bg-white/80 mx-auto px-2 py-1 rounded w-fit">
//               {lat.toFixed(4)}, {lng.toFixed(4)}
//             </p>
//           </div>
  
//           {/* Compass rose */}
//           <div className="absolute top-4 right-4 w-8 h-8 border-2 border-gray-400 rounded-full">
//             <div className="absolute inset-0 flex items-center justify-center">
//               <span className="text-xs font-bold text-gray-600">N</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

// function FooterBox() {
//   const [expandedBoxes, setExpandedBoxes] = useState(new Set());

//   const toggleBox = (id) => {
//     setExpandedBoxes(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(id)) {
//         newSet.delete(id);
//       } else {
//         newSet.add(id);
//       }
//       return newSet;
//     });
//   };

//   const caseStudies = [
//     {
//       id: 1,
//       title: "Syrian Operation",
//       byline: "Drug trafficking via maritime routes",
//       icon: <Anchor className="h-6 w-6" />,
//       summary: "Rome-based operation utilizing Albanian supply routes",
//       location: {
//         lat: 41.8685263,
//         lng: 12.6506904,
//         label: "Tor Bella Monaca storage location"
//       },
//       details: {
//         network: {
//           icon: <Users />,
//           title: "Network",
//           points: [
//             "Syrian gang operating in Rome",
//             "Targeting Arab diaspora communities",
//             "Competition with Turkish/Egyptian groups"
//           ]
//         },
//         operations: {
//           icon: <Route />,
//           title: "Operations",
//           points: [
//             "Maritime transfers 1km offshore",
//             "Storage in Tor Bella Monaca",
//             "Regular 30-day operational cycles"
//           ]
//         },
//         methods: {
//           icon: <Target />,
//           title: "Methods",
//           points: [
//             "Price undercutting strategy",
//             "Diaspora community distribution",
//             "Early morning maritime transfers"
//           ]
//         }
//       }
//     },
//     {
//       id: 2,
//       title: "Kurdish Network",
//       byline: "Equipment smuggling operation",
//       icon: <Briefcase className="h-6 w-6" />,
//       summary: "Izmir-Genoa shipping route using business front",
//       location: {
//         lat: 38.4192,
//         lng: 27.1287,
//         label: "Izmir shipping operations base"
//       },
//       details: {
//         network: {
//           icon: <Users />,
//           title: "Network",
//           points: [
//             "Led by Nihad Khoshnaw (Sheikh Nihad)",
//             "GOSKA OTOMOTIV VE INSAAT front",
//             "EU-wide Kurdish smuggling connections"
//           ]
//         },
//         operations: {
//           icon: <Route />,
//           title: "Operations",
//           points: [
//             "Shipping migration equipment",
//             "Rubber boats, engines, life jackets",
//             "Using legitimate cargo services"
//           ]
//         },
//         methods: {
//           icon: <Target />,
//           title: "Methods",
//           points: [
//             "Business front operations",
//             "International shipping routes",
//             "Equipment for Channel crossings"
//           ]
//         }
//       }
//     },
//     {
//       id: 3,
//       title: "Tunisian Operation",
//       byline: "Captagon trafficking network",
//       icon: <Calendar className="h-6 w-6" />,
//       summary: "Sfax-Palermo drug smuggling route",
//       location: {
//         lat: 34.7695665,
//         lng: 10.7551894,
//         label: "Sfax storage facility"
//       },
//       details: {
//         network: {
//           icon: <Users />,
//           title: "Network",
//           points: [
//             "Tunisian criminal group",
//             "Algerian supplier connections",
//             "Links to human trafficking"
//           ]
//         },
//         operations: {
//           icon: <Route />,
//           title: "Operations",
//           points: [
//             "Sfax to Palermo maritime route",
//             "Coordinated storage locations",
//             "Distribution through Rome"
//           ]
//         },
//         methods: {
//           icon: <Target />,
//           title: "Methods",
//           points: [
//             "Using human trafficking networks",
//             "Maritime smuggling routes",
//             "Local Tunisian distribution"
//           ]
//         }
//       }
//     }
//   ];

//   return (
//     <div className="bg-gray-100 p-6 rounded-lg mt-8">
//       <h2 className="text-2xl font-bold text-gray-900 mb-4">
//         Criminal Network Case Studies
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
//                   <h3 className="text-xl font-bold text-gray-800">{study.title}</h3>
//                 </div>
//                 {expandedBoxes.has(study.id) ? (
//                   <Minus className="h-5 w-5 text-gray-500" />
//                 ) : (
//                   <Plus className="h-5 w-5 text-gray-500" />
//                 )}
//               </div>
//               <p className="text-gray-600 mt-2">{study.byline}</p>
//               <p className="text-sm text-gray-500 mt-1">{study.summary}</p>

//               {expandedBoxes.has(study.id) && (
//                 <div className="mt-6 grid grid-cols-2 gap-6">
//                   <div className="space-y-6">
//                     {Object.entries(study.details).map(([key, section]) => (
//                       <div key={key} className="space-y-3">
//                         <div className="flex items-center space-x-2">
//                           {section.icon}
//                           <h4 className="font-semibold text-gray-700">{section.title}</h4>
//                         </div>
//                         <ul className="list-disc list-inside space-y-2 pl-6">
//                           {section.points.map((point, idx) => (
//                             <li key={idx} className="text-gray-600">{point}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="space-y-4">
//                     <h4 className="font-semibold text-gray-700">Location Details</h4>
//                     <LocationMap 
//                       lat={study.location.lat}
//                       lng={study.location.lng}
//                       label={study.location.label}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FooterBox;





import React, { useState } from 'react';
import { Plus, Minus, Anchor, Users, Briefcase, Route, Calendar, Target } from 'lucide-react';

function FooterBox() {
  const [expandedBoxes, setExpandedBoxes] = useState(new Set());

  const toggleBox = (id) => {
    setExpandedBoxes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const caseStudies = [
    {
      id: 1,
      title: "Syrian Operation",
      byline: "Drug trafficking via maritime routes",
      icon: <Anchor className="h-6 w-6" />,
      summary: "Rome-based operation utilizing Albanian supply routes",
      details: {
        network: {
          icon: <Users />,
          title: "Network",
          points: [
            "Syrian gang operating in Rome",
            "Targeting Arab diaspora communities",
            "Competition with Turkish/Egyptian groups"
          ]
        },
        operations: {
          icon: <Route />,
          title: "Operations",
          points: [
            "Maritime transfers 1km offshore",
            "Storage in Tor Bella Monaca",
            "Regular 30-day operational cycles"
          ]
        },
        methods: {
          icon: <Target />,
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
      summary: "Izmir-Genoa shipping route using business front",
      details: {
        network: {
          icon: <Users />,
          title: "Network",
          points: [
            "Led by Nihad Khoshnaw (Sheikh Nihad)",
            "GOSKA OTOMOTIV VE INSAAT front",
            "EU-wide Kurdish smuggling connections"
          ]
        },
        operations: {
          icon: <Route />,
          title: "Operations",
          points: [
            "Shipping migration equipment",
            "Rubber boats, engines, life jackets",
            "Using legitimate cargo services"
          ]
        },
        methods: {
          icon: <Target />,
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
      summary: "Sfax-Palermo drug smuggling route",
      details: {
        network: {
          icon: <Users />,
          title: "Network",
          points: [
            "Tunisian criminal group",
            "Algerian supplier connections",
            "Links to human trafficking"
          ]
        },
        operations: {
          icon: <Route />,
          title: "Operations",
          points: [
            "Sfax to Palermo maritime route",
            "Coordinated storage locations",
            "Distribution through Rome"
          ]
        },
        methods: {
          icon: <Target />,
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

  return (
    <div className="bg-gray-100 p-6 rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Criminal Network Case Studies
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div 
              className="p-6 cursor-pointer"
              onClick={() => toggleBox(study.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {study.icon}
                  <h3 className="text-xl font-bold text-gray-800">{study.title}</h3>
                </div>
                {expandedBoxes.has(study.id) ? (
                  <Minus className="h-5 w-5 text-gray-500" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-500" />
                )}
              </div>
              <p className="text-gray-600 mt-2">{study.byline}</p>
              <p className="text-sm text-gray-500 mt-1">{study.summary}</p>

              {expandedBoxes.has(study.id) && (
                <div className="mt-6 grid grid-cols-1 gap-6">
                  {Object.entries(study.details).map(([key, section]) => (
                    <div key={key} className="space-y-3">
                      <div className="flex items-center space-x-2">
                        {section.icon}
                        <h4 className="font-semibold text-gray-700">{section.title}</h4>
                      </div>
                      <ul className="list-disc list-inside space-y-2 pl-6">
                        {section.points.map((point, idx) => (
                          <li key={idx} className="text-gray-600">{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterBox;


