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


