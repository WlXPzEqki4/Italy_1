// import React from 'react';
// import { ForceGraph2D } from 'react-force-graph';

// function NetworkGraph() {
//   const data = {
//     nodes: [
//       // People
//       { id: 'person_nihadKhoshnaw_01', label: 'Nihad Khoshnaw', group: 'Person' },
//       { id: 'person_syrianGang_01', label: 'Syrian Gang Member(s)', group: 'Person' },
//       { id: 'person_albanianSupplier_01', label: 'Albanian Supplier', group: 'Person' },
//       // Organisations
//       { id: 'org_kurdishOCN_001', label: 'Kurdish OCN', group: 'Organisation' },
//       { id: 'org_syrianGang_rome_001', label: 'Syrian Gang (Rome)', group: 'Organisation' },
//       { id: 'org_goska_001', label: 'GOSKA OTOMOTIV VE INSAAT', group: 'Organisation' },
//       { id: 'org_tunisianGroup_001', label: 'Tunisian Group (Sfax)', group: 'Organisation' },
//       // Places
//       { id: 'place_torBella_rome_001', label: 'Tor Bella Monaca, Rome', group: 'Place' },
//       { id: 'place_durresPort_albania_001', label: 'Durres Port (Albania)', group: 'Place' },
//       { id: 'place_izmirPort_turkey_001', label: 'Izmir Port (Turkey)', group: 'Place' },
//       { id: 'place_genoaPort_italy_001', label: 'Genoa Port (Italy)', group: 'Place' },
//       { id: 'place_sfax_tunisia_001', label: 'Sfax (Tunisia)', group: 'Place' },
//       { id: 'place_palermo_italy_001', label: 'Palermo (Italy)', group: 'Place' },
//       // Objects
//       { id: 'obj_cannabis_01', label: 'Cannabis', group: 'Object' },
//       { id: 'obj_captagon_01', label: 'Captagon Pills', group: 'Object' },
//       { id: 'obj_rubberBoats_01', label: 'Rubber Boats', group: 'Object' },
//       // Events
//       { id: 'event_durresToRomeShipment_01', label: 'Shipment Durres — Rome', group: 'Event' }
//     ],
//     links: [
//       // Sample edges
//       { source: 'person_nihadKhoshnaw_01', target: 'org_kurdishOCN_001', label: 'leads' },
//       { source: 'person_syrianGang_01', target: 'org_syrianGang_rome_001', label: 'member_of' },
//       { source: 'person_albanianSupplier_01', target: 'obj_cannabis_01', label: 'supplies' },
//       { source: 'org_syrianGang_rome_001', target: 'place_torBella_rome_001', label: 'stores_drugs' },
//       { source: 'event_durresToRomeShipment_01', target: 'place_durresPort_albania_001', label: 'occurs_at' },
//       { source: 'event_durresToRomeShipment_01', target: 'obj_cannabis_01', label: 'involves' }
//       // Add additional links/relationships as needed
//     ]
//   };

//   const getNodeColor = (node) => {
//     switch (node.group) {
//       case 'Person':
//         return '#FF6B6B'; // Red
//       case 'Organisation':
//         return '#1E90FF'; // Blue
//       case 'Place':
//         return '#FFD700'; // Gold
//       case 'Object':
//         return '#32CD32'; // LimeGreen
//       case 'Event':
//         return '#BA55D3'; // Purple
//       default:
//         return '#AAAAAA';
//     }
//   };

//   return (
//     <div style={{ margin: '0 auto', maxWidth: '1000px' }}>
//       {/* Heading for the Network Graph */}
//       <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
//         Network Graph Visualisation
//       </h3>

//       {/* Container for the graph, with fixed dimensions */}
//       <div
//         style={{
//           width: '1200px',
//           height: '1200px',
//           border: '2px solid #ccc',
//           borderRadius: '8px',
//           backgroundColor: '#fff',
//           overflow: 'hidden',
//           position: 'relative'
//         }}
//       >
//         <ForceGraph2D
//           graphData={data}
//           width={900}
//           height={900}
//           linkLabel={(link) => link.label}
//           linkColor={() => '#999'}
//           linkDirectionalArrowLength={4}
//           linkDirectionalArrowRelPos={1}
//           nodeCanvasObject={(node, ctx, globalScale) => {
//             const label = node.label;
//             const fontSize = 12 / globalScale;
//             // Draw circle
//             ctx.beginPath();
//             ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI, false);
//             ctx.fillStyle = getNodeColor(node);
//             ctx.fill();
//             // Label text
//             ctx.font = `${fontSize}px Sans-Serif`;
//             ctx.fillStyle = '#000';
//             ctx.fillText(label, node.x + 12, node.y + 4);
//           }}
//           nodeLabel={(node) => `${node.label} [${node.group}]`}
//           zoomToFit={true}
//         />
//       </div>
//     </div>
//   );
// }

// export default NetworkGraph;















// import React, { useRef, useState, useEffect } from 'react';
// import { ForceGraph2D } from 'react-force-graph';

// function NetworkGraph() {
//   // Reference to the container <div>
//   const containerRef = useRef(null);

//   // State to store the dynamically measured width/height
//   const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

//   // On mount and whenever the window resizes, recalculate container size
//   useEffect(() => {
//     function handleResize() {
//       if (containerRef.current) {
//         setDimensions({
//           width: containerRef.current.clientWidth,
//           height: containerRef.current.clientHeight,
//         });
//       }
//     }
//     // Initial measurement
//     handleResize();

//     // Listen for window resizes
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Example data
//   const data = {
//     nodes: [
//       // People
//       { id: 'person_nihadKhoshnaw_01', label: 'Nihad Khoshnaw', group: 'Person' },
//       { id: 'person_syrianGang_01', label: 'Syrian Gang Member(s)', group: 'Person' },
//       { id: 'person_albanianSupplier_01', label: 'Albanian Supplier', group: 'Person' },
//       // Organisations
//       { id: 'org_kurdishOCN_001', label: 'Kurdish OCN', group: 'Organisation' },
//       { id: 'org_syrianGang_rome_001', label: 'Syrian Gang (Rome)', group: 'Organisation' },
//       { id: 'org_goska_001', label: 'GOSKA OTOMOTIV VE INSAAT', group: 'Organisation' },
//       { id: 'org_tunisianGroup_001', label: 'Tunisian Group (Sfax)', group: 'Organisation' },
//       // Places
//       { id: 'place_torBella_rome_001', label: 'Tor Bella Monaca, Rome', group: 'Place' },
//       { id: 'place_durresPort_albania_001', label: 'Durres Port (Albania)', group: 'Place' },
//       { id: 'place_izmirPort_turkey_001', label: 'Izmir Port (Turkey)', group: 'Place' },
//       { id: 'place_genoaPort_italy_001', label: 'Genoa Port (Italy)', group: 'Place' },
//       { id: 'place_sfax_tunisia_001', label: 'Sfax (Tunisia)', group: 'Place' },
//       { id: 'place_palermo_italy_001', label: 'Palermo (Italy)', group: 'Place' },
//       // Objects
//       { id: 'obj_cannabis_01', label: 'Cannabis', group: 'Object' },
//       { id: 'obj_captagon_01', label: 'Captagon Pills', group: 'Object' },
//       { id: 'obj_rubberBoats_01', label: 'Rubber Boats', group: 'Object' },
//       // Events
//       { id: 'event_durresToRomeShipment_01', label: 'Shipment Durres — Rome', group: 'Event' }
//     ],
//     links: [
//       // Sample edges
//       { source: 'person_nihadKhoshnaw_01', target: 'org_kurdishOCN_001', label: 'leads' },
//       { source: 'person_syrianGang_01', target: 'org_syrianGang_rome_001', label: 'member_of' },
//       { source: 'person_albanianSupplier_01', target: 'obj_cannabis_01', label: 'supplies' },
//       { source: 'org_syrianGang_rome_001', target: 'place_torBella_rome_001', label: 'stores_drugs' },
//       { source: 'event_durresToRomeShipment_01', target: 'place_durresPort_albania_001', label: 'occurs_at' },
//       { source: 'event_durresToRomeShipment_01', target: 'obj_cannabis_01', label: 'involves' }
//     ]
//   };

//   // Simple helper to colour nodes by group
//   const getNodeColor = (node) => {
//     switch (node.group) {
//       case 'Person':
//         return '#FF6B6B'; // Red
//       case 'Organisation':
//         return '#1E90FF'; // Blue
//       case 'Place':
//         return '#FFD700'; // Gold
//       case 'Object':
//         return '#32CD32'; // LimeGreen
//       case 'Event':
//         return '#BA55D3'; // Purple
//       default:
//         return '#AAAAAA';
//     }
//   };

//   return (
//     <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
//       {/* Section heading */}
//       <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
//         Network Graph Visualisation
//       </h3>

//       {/* 
//         Responsive container:
//         - width: 100% for flexible width
//         - height: e.g. 70vh so it scales with viewport height
//         - a visible border, background, and rounded corners
//       */}
//       <div
//         ref={containerRef}
//         style={{
//           width: '100%',
//           height: '70vh',
//           border: '2px solid #ccc',
//           borderRadius: '8px',
//           backgroundColor: '#fff',
//           position: 'relative',
//           overflow: 'hidden'
//         }}
//       >
//         <ForceGraph2D
//           graphData={data}
//           width={dimensions.width}
//           height={dimensions.height}
//           linkLabel={(link) => link.label}
//           linkColor={() => '#999'}
//           linkDirectionalArrowLength={4}
//           linkDirectionalArrowRelPos={1}
//           nodeCanvasObject={(node, ctx, globalScale) => {
//             // Node shape
//             ctx.beginPath();
//             ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI, false);
//             ctx.fillStyle = getNodeColor(node);
//             ctx.fill();

//             // Node label
//             const label = node.label;
//             const fontSize = 12 / globalScale;
//             ctx.font = `${fontSize}px Sans-Serif`;
//             ctx.fillStyle = '#000';
//             ctx.fillText(label, node.x + 12, node.y + 4);
//           }}
//           nodeLabel={(node) => `${node.label} [${node.group}]`}
//           zoomToFit={true}
//         />
//       </div>
//     </div>
//   );
// }

// export default NetworkGraph;
















// import React, { useRef, useState, useEffect } from 'react';
// import { ForceGraph2D } from 'react-force-graph';

// function NetworkGraph() {
//   // Reference to the container div for responsive sizing
//   const containerRef = useRef(null);
//   const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

//   useEffect(() => {
//     // Dynamically measure container size on mount + whenever window resizes
//     function handleResize() {
//       if (containerRef.current) {
//         setDimensions({
//           width: containerRef.current.clientWidth,
//           height: containerRef.current.clientHeight
//         });
//       }
//     }
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // ------------------------------------------------------------------
//   // FULL DATASET: All Nodes (People, Organisations, Places, Events, Objects)
//   // from Case Studies 1, 2, and 3, plus the relationships fully labelled.
//   // ------------------------------------------------------------------

//   const data = {
//     nodes: [
//       // ----------------------------------------------------------------
//       // PEOPLE
//       // ----------------------------------------------------------------
//       { id: 'person_syrianGang_01', label: 'Syrian Gang Member(s)', group: 'Person' },
//       { id: 'person_albanianSupplier_01', label: 'Albanian Supplier', group: 'Person' },
//       { id: 'person_nigerianYouth_01', label: 'Nigerian Youth(s)', group: 'Person' },

//       { id: 'person_nihadKhoshnaw_01', label: 'Nihad Khoshnaw (Sheikh Nihad)', group: 'Person' },
//       { id: 'person_kurdishAssociates_01', label: 'Iraqi Kurdish Associates', group: 'Person' },

//       { id: 'person_tunisianGroup_01', label: 'Tunisian Group Member(s)', group: 'Person' },
//       { id: 'person_algerianGang_01', label: 'Algerian Gang(s)', group: 'Person' },

//       // ----------------------------------------------------------------
//       // ORGANISATIONS
//       // ----------------------------------------------------------------
//       { id: 'org_syrianGang_rome_001', label: 'Syrian Gang (Rome)', group: 'Organisation' },
//       { id: 'org_kurdishOCN_001', label: 'Iraqi Kurdish OCN', group: 'Organisation' },
//       { id: 'org_goska_001', label: 'GOSKA OTOMOTIV VE INSAAT', group: 'Organisation' },
//       { id: 'org_tunisianGroup_001', label: 'Tunisian Criminal Group', group: 'Organisation' },

//       // ----------------------------------------------------------------
//       // PLACES
//       // ----------------------------------------------------------------
//       { id: 'place_torBella_rome_001', label: 'Tor Bella Monaca (Rome)', group: 'Place' },
//       { id: 'place_durresPort_albania_001', label: 'Durres Port (Albania)', group: 'Place' },
//       { id: 'place_rome_ports_001', label: 'Small Ports near Rome', group: 'Place' },
//       { id: 'place_istanbul_turkey_001', label: 'Istanbul / Aksaray (Turkey)', group: 'Place' },
//       { id: 'place_izmirPort_turkey_001', label: 'Izmir Port (Turkey)', group: 'Place' },
//       { id: 'place_genoaPort_italy_001', label: 'Genoa Port (Italy)', group: 'Place' },
//       { id: 'place_france_001', label: 'France', group: 'Place' },
//       { id: 'place_belgium_001', label: 'Belgium', group: 'Place' },
//       { id: 'place_sfax_tunisia_001', label: 'Sfax (Tunisia)', group: 'Place' },
//       { id: 'place_palermo_italy_001', label: 'Palermo (Italy)', group: 'Place' },
//       { id: 'place_rome_italy_001', label: 'Rome (Italy)', group: 'Place' },
//       { id: 'place_algeria_001', label: 'Algeria', group: 'Place' },

//       // ----------------------------------------------------------------
//       // EVENTS
//       // ----------------------------------------------------------------
//       {
//         id: 'event_syrianDurresShipment_01',
//         label: 'Cannabis Shipment: Durres → Rome',
//         group: 'Event'
//       },
//       {
//         id: 'event_syrianStorageTorBella_01',
//         label: 'Cannabis Storage at Tor Bella Monaca',
//         group: 'Event'
//       },
//       {
//         id: 'event_kurdishEquipShipment_01',
//         label: 'Equipment Shipment: Izmir → Genoa',
//         group: 'Event'
//       },
//       {
//         id: 'event_tunisianCaptagonShipment_01',
//         label: 'Captagon Shipment: Sfax → Palermo → Rome',
//         group: 'Event'
//       },

//       // ----------------------------------------------------------------
//       // OBJECTS
//       // ----------------------------------------------------------------
//       { id: 'obj_cannabis_01', label: 'Cannabis', group: 'Object' },
//       { id: 'obj_rubberBoats_01', label: 'Rubber Boats', group: 'Object' },
//       { id: 'obj_engines_01', label: 'Various Engines', group: 'Object' },
//       { id: 'obj_lifeJackets_01', label: 'Life Jackets', group: 'Object' },
//       { id: 'obj_captagon_01', label: 'Captagon Pills', group: 'Object' },
//       { id: 'obj_variousDrugs_01', label: 'Other Various Drugs', group: 'Object' }
//     ],

//     links: [
//       // ----------------------------------------------------------------
//       // CASE STUDY 1: Syrian Operation in Rome
//       // ----------------------------------------------------------------
//       {
//         source: 'person_syrianGang_01',
//         target: 'org_syrianGang_rome_001',
//         label: 'member_of'
//       },
//       {
//         source: 'person_albanianSupplier_01',
//         target: 'obj_cannabis_01',
//         label: 'supplies'
//       },
//       {
//         source: 'person_nigerianYouth_01',
//         target: 'org_syrianGang_rome_001',
//         label: 'assists_distribution'
//       },
//       {
//         source: 'org_syrianGang_rome_001',
//         target: 'obj_cannabis_01',
//         label: 'stores'
//       },
//       {
//         source: 'obj_cannabis_01',
//         target: 'place_torBella_rome_001',
//         label: 'stored_at'
//       },
//       {
//         source: 'event_syrianDurresShipment_01',
//         target: 'obj_cannabis_01',
//         label: 'involves'
//       },
//       {
//         source: 'event_syrianDurresShipment_01',
//         target: 'org_syrianGang_rome_001',
//         label: 'participants'
//       },
//       {
//         source: 'event_syrianDurresShipment_01',
//         target: 'person_albanianSupplier_01',
//         label: 'participants'
//       },
//       {
//         source: 'event_syrianDurresShipment_01',
//         target: 'place_durresPort_albania_001',
//         label: 'location'
//       },
//       {
//         source: 'event_syrianDurresShipment_01',
//         target: 'place_rome_ports_001',
//         label: 'location'
//       },
//       // "Storage event" at Tor Bella Monaca
//       {
//         source: 'event_syrianStorageTorBella_01',
//         target: 'org_syrianGang_rome_001',
//         label: 'participants'
//       },
//       {
//         source: 'event_syrianStorageTorBella_01',
//         target: 'obj_cannabis_01',
//         label: 'involves'
//       },
//       {
//         source: 'event_syrianStorageTorBella_01',
//         target: 'place_torBella_rome_001',
//         label: 'location'
//       },
//       // Linking gang base to main city
//       {
//         source: 'org_syrianGang_rome_001',
//         target: 'place_rome_italy_001',
//         label: 'based_in'
//       },

//       // ----------------------------------------------------------------
//       // CASE STUDY 2: Iraqi Kurdish Network (Nihad Khoshnaw)
//       // ----------------------------------------------------------------
//       {
//         source: 'person_nihadKhoshnaw_01',
//         target: 'org_kurdishOCN_001',
//         label: 'leads'
//       },
//       {
//         source: 'person_nihadKhoshnaw_01',
//         target: 'org_goska_001',
//         label: 'owns'
//       },
//       {
//         source: 'person_kurdishAssociates_01',
//         target: 'org_kurdishOCN_001',
//         label: 'member_of'
//       },
//       {
//         source: 'org_kurdishOCN_001',
//         target: 'event_kurdishEquipShipment_01',
//         label: 'orchestrates'
//       },
//       {
//         source: 'event_kurdishEquipShipment_01',
//         target: 'place_izmirPort_turkey_001',
//         label: 'location'
//       },
//       {
//         source: 'event_kurdishEquipShipment_01',
//         target: 'place_genoaPort_italy_001',
//         label: 'location'
//       },
//       {
//         source: 'event_kurdishEquipShipment_01',
//         target: 'obj_rubberBoats_01',
//         label: 'involves'
//       },
//       {
//         source: 'event_kurdishEquipShipment_01',
//         target: 'obj_engines_01',
//         label: 'involves'
//       },
//       {
//         source: 'event_kurdishEquipShipment_01',
//         target: 'obj_lifeJackets_01',
//         label: 'involves'
//       },
//       {
//         source: 'org_kurdishOCN_001',
//         target: 'org_goska_001',
//         label: 'uses'
//       },
//       {
//         source: 'org_kurdishOCN_001',
//         target: 'place_france_001',
//         label: 'distributes_equipment'
//       },
//       {
//         source: 'org_kurdishOCN_001',
//         target: 'place_belgium_001',
//         label: 'distributes_equipment'
//       },
//       // Link GOSKA to Istanbul / Aksaray
//       {
//         source: 'org_goska_001',
//         target: 'place_istanbul_turkey_001',
//         label: 'located_in'
//       },

//       // ----------------------------------------------------------------
//       // CASE STUDY 3: Tunisian Operation (Captagon)
//       // ----------------------------------------------------------------
//       {
//         source: 'org_tunisianGroup_001',
//         target: 'person_tunisianGroup_01',
//         label: 'has_members'
//       },
//       {
//         source: 'person_algerianGang_01',
//         target: 'obj_variousDrugs_01',
//         label: 'supplies'
//       },
//       {
//         source: 'obj_variousDrugs_01',
//         target: 'org_tunisianGroup_001',
//         label: 'owned_by'
//       },
//       {
//         source: 'org_tunisianGroup_001',
//         target: 'event_tunisianCaptagonShipment_01',
//         label: 'participants'
//       },
//       {
//         source: 'event_tunisianCaptagonShipment_01',
//         target: 'place_sfax_tunisia_001',
//         label: 'location'
//       },
//       {
//         source: 'event_tunisianCaptagonShipment_01',
//         target: 'place_palermo_italy_001',
//         label: 'location'
//       },
//       {
//         source: 'event_tunisianCaptagonShipment_01',
//         target: 'place_rome_italy_001',
//         label: 'location'
//       },
//       {
//         source: 'event_tunisianCaptagonShipment_01',
//         target: 'obj_captagon_01',
//         label: 'involves'
//       },
//       {
//         source: 'obj_captagon_01',
//         target: 'place_sfax_tunisia_001',
//         label: 'stored_at'
//       },
//       {
//         source: 'org_tunisianGroup_001',
//         target: 'obj_variousDrugs_01',
//         label: 'obtains'
//       },
//       {
//         source: 'person_algerianGang_01',
//         target: 'place_algeria_001',
//         label: 'based_in'
//       },
//       {
//         source: 'org_tunisianGroup_001',
//         target: 'place_sfax_tunisia_001',
//         label: 'based_in'
//       }
//     ]
//   };

//   // Simple colour scheme by group
//   const getNodeColor = (node) => {
//     switch (node.group) {
//       case 'Person':
//         return '#FF6B6B'; // Red
//       case 'Organisation':
//         return '#1E90FF'; // Blue
//       case 'Place':
//         return '#FFD700'; // Gold
//       case 'Event':
//         return '#BA55D3'; // Purple
//       case 'Object':
//         return '#32CD32'; // LimeGreen
//       default:
//         return '#AAAAAA';
//     }
//   };

//   return (
//     <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
//       {/* Heading */}
//       <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
//         Network Graph Visualisation
//       </h3>

//       {/* Responsive container with border */}
//       <div
//         ref={containerRef}
//         style={{
//           width: '100%',
//           height: '70vh',
//           border: '2px solid #ccc',
//           borderRadius: '8px',
//           backgroundColor: '#fff',
//           position: 'relative',
//           overflow: 'hidden'
//         }}
//       >
//         <ForceGraph2D
//           graphData={data}
//           width={dimensions.width}
//           height={dimensions.height}
//           linkLabel={(link) => link.label}
//           linkColor={() => '#999'}
//           linkDirectionalArrowLength={4}
//           linkDirectionalArrowRelPos={1}
//           nodeCanvasObject={(node, ctx, globalScale) => {
//             // Node circle
//             ctx.beginPath();
//             ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI, false);
//             ctx.fillStyle = getNodeColor(node);
//             ctx.fill();

//             // Node label
//             const label = node.label;
//             const fontSize = 12 / globalScale;
//             ctx.font = `${fontSize}px Sans-Serif`;
//             ctx.fillStyle = '#000';
//             ctx.fillText(label, node.x + 12, node.y + 4);
//           }}
//           nodeLabel={(node) => `${node.label} [${node.group}]`}
//           zoomToFit={true}
//         />
//       </div>
//     </div>
//   );
// }

// export default NetworkGraph;














// import React, { useRef, useState, useEffect } from 'react';
// import { ForceGraph2D } from 'react-force-graph';

// function NetworkGraph() {
//   // ------------------------------------------------------
//   // 1. Responsive container logic
//   // ------------------------------------------------------
//   const containerRef = useRef(null);
//   const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

//   useEffect(() => {
//     function handleResize() {
//       if (containerRef.current) {
//         setDimensions({
//           width: containerRef.current.clientWidth,
//           height: containerRef.current.clientHeight
//         });
//       }
//     }
//     handleResize(); // initial
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // ------------------------------------------------------
//   // 2. Full Data: Nodes + Links from All Case Studies
//   //    Includes separate nodes for "Case Study 1/2/3"
//   //    plus fully-labelled edges
//   // ------------------------------------------------------

//   const data = {
//     nodes: [
//       // CASE STUDY NODES (to group events & references)
//       { id: 'case_study_1', label: 'Case Study 1: Syrian Operation', group: 'CaseStudy' },
//       { id: 'case_study_2', label: 'Case Study 2: Iraqi Kurdish Network', group: 'CaseStudy' },
//       { id: 'case_study_3', label: 'Case Study 3: Tunisian Operation', group: 'CaseStudy' },

//       // PEOPLE
//       { id: 'person_syrianGang_01', label: 'Syrian Gang Member(s)', group: 'Person' },
//       { id: 'person_albanianSupplier_01', label: 'Albanian Supplier', group: 'Person' },
//       { id: 'person_nigerianYouth_01', label: 'Nigerian Youth(s)', group: 'Person' },

//       { id: 'person_nihadKhoshnaw_01', label: 'Nihad Khoshnaw (Sheikh Nihad)', group: 'Person' },
//       { id: 'person_kurdishAssociates_01', label: 'Iraqi Kurdish Associates', group: 'Person' },

//       { id: 'person_tunisianGroup_01', label: 'Tunisian Group Member(s)', group: 'Person' },
//       { id: 'person_algerianGang_01', label: 'Algerian Gang(s)', group: 'Person' },

//       // ORGANISATIONS
//       { id: 'org_syrianGang_rome_001', label: 'Syrian Gang (Rome)', group: 'Organisation' },
//       { id: 'org_kurdishOCN_001', label: 'Iraqi Kurdish OCN', group: 'Organisation' },
//       { id: 'org_goska_001', label: 'GOSKA OTOMOTIV VE INSAAT', group: 'Organisation' },
//       { id: 'org_tunisianGroup_001', label: 'Tunisian Criminal Group', group: 'Organisation' },

//       // PLACES
//       { id: 'place_torBella_rome_001', label: 'Tor Bella Monaca (Rome)', group: 'Place' },
//       { id: 'place_durresPort_albania_001', label: 'Durres Port (Albania)', group: 'Place' },
//       { id: 'place_rome_ports_001', label: 'Small Ports near Rome', group: 'Place' },
//       { id: 'place_istanbul_turkey_001', label: 'Istanbul / Aksaray (Turkey)', group: 'Place' },
//       { id: 'place_izmirPort_turkey_001', label: 'Izmir Port (Turkey)', group: 'Place' },
//       { id: 'place_genoaPort_italy_001', label: 'Genoa Port (Italy)', group: 'Place' },
//       { id: 'place_france_001', label: 'France', group: 'Place' },
//       { id: 'place_belgium_001', label: 'Belgium', group: 'Place' },
//       { id: 'place_sfax_tunisia_001', label: 'Sfax (Tunisia)', group: 'Place' },
//       { id: 'place_palermo_italy_001', label: 'Palermo (Italy)', group: 'Place' },
//       { id: 'place_rome_italy_001', label: 'Rome (Italy)', group: 'Place' },
//       { id: 'place_algeria_001', label: 'Algeria', group: 'Place' },

//       // EVENTS
//       { id: 'event_syrianDurresShipment_01', label: 'Durres → Rome Cannabis Shipment', group: 'Event' },
//       { id: 'event_syrianStorageTorBella_01', label: 'Storage at Tor Bella Monaca', group: 'Event' },
//       { id: 'event_kurdishEquipShipment_01', label: 'Izmir → Genoa Equipment Shipment', group: 'Event' },
//       { id: 'event_tunisianCaptagonShipment_01', label: 'Sfax → Palermo → Rome Captagon Shipment', group: 'Event' },

//       // OBJECTS
//       { id: 'obj_cannabis_01', label: 'Cannabis', group: 'Object' },
//       { id: 'obj_rubberBoats_01', label: 'Rubber Boats', group: 'Object' },
//       { id: 'obj_engines_01', label: 'Various Engines', group: 'Object' },
//       { id: 'obj_lifeJackets_01', label: 'Life Jackets', group: 'Object' },
//       { id: 'obj_captagon_01', label: 'Captagon Pills', group: 'Object' },
//       { id: 'obj_variousDrugs_01', label: 'Other Various Drugs', group: 'Object' }
//     ],

//     links: [
//       // -- LINKING CASE STUDIES TO THEIR EVENTS --
//       { source: 'case_study_1', target: 'event_syrianDurresShipment_01', label: 'includes_event' },
//       { source: 'case_study_1', target: 'event_syrianStorageTorBella_01', label: 'includes_event' },
//       { source: 'case_study_2', target: 'event_kurdishEquipShipment_01', label: 'includes_event' },
//       { source: 'case_study_3', target: 'event_tunisianCaptagonShipment_01', label: 'includes_event' },

//       // ----------------------------------------------------------------
//       // CASE STUDY 1: Syrian Operation in Rome
//       // ----------------------------------------------------------------
//       { source: 'person_syrianGang_01', target: 'org_syrianGang_rome_001', label: 'member_of' },
//       { source: 'person_albanianSupplier_01', target: 'obj_cannabis_01', label: 'supplies' },
//       { source: 'person_nigerianYouth_01', target: 'org_syrianGang_rome_001', label: 'assists_distribution' },

//       { source: 'org_syrianGang_rome_001', target: 'obj_cannabis_01', label: 'stores' },
//       { source: 'obj_cannabis_01', target: 'place_torBella_rome_001', label: 'stored_at' },

//       // Event: Durres → Rome cannabis shipment
//       { source: 'event_syrianDurresShipment_01', target: 'obj_cannabis_01', label: 'involves' },
//       { source: 'event_syrianDurresShipment_01', target: 'org_syrianGang_rome_001', label: 'participants' },
//       { source: 'event_syrianDurresShipment_01', target: 'person_albanianSupplier_01', label: 'participants' },
//       { source: 'event_syrianDurresShipment_01', target: 'place_durresPort_albania_001', label: 'location' },
//       { source: 'event_syrianDurresShipment_01', target: 'place_rome_ports_001', label: 'location' },

//       // Event: Storage at Tor Bella Monaca
//       { source: 'event_syrianStorageTorBella_01', target: 'org_syrianGang_rome_001', label: 'participants' },
//       { source: 'event_syrianStorageTorBella_01', target: 'obj_cannabis_01', label: 'involves' },
//       { source: 'event_syrianStorageTorBella_01', target: 'place_torBella_rome_001', label: 'location' },

//       // Linking gang base to city
//       { source: 'org_syrianGang_rome_001', target: 'place_rome_italy_001', label: 'based_in' },

//       // ----------------------------------------------------------------
//       // CASE STUDY 2: Iraqi Kurdish Network (Nihad Khoshnaw)
//       // ----------------------------------------------------------------
//       { source: 'person_nihadKhoshnaw_01', target: 'org_kurdishOCN_001', label: 'leads' },
//       { source: 'person_nihadKhoshnaw_01', target: 'org_goska_001', label: 'owns' },
//       { source: 'person_kurdishAssociates_01', target: 'org_kurdishOCN_001', label: 'member_of' },

//       { source: 'org_kurdishOCN_001', target: 'event_kurdishEquipShipment_01', label: 'orchestrates' },
//       { source: 'event_kurdishEquipShipment_01', target: 'place_izmirPort_turkey_001', label: 'location' },
//       { source: 'event_kurdishEquipShipment_01', target: 'place_genoaPort_italy_001', label: 'location' },
//       { source: 'event_kurdishEquipShipment_01', target: 'obj_rubberBoats_01', label: 'involves' },
//       { source: 'event_kurdishEquipShipment_01', target: 'obj_engines_01', label: 'involves' },
//       { source: 'event_kurdishEquipShipment_01', target: 'obj_lifeJackets_01', label: 'involves' },

//       { source: 'org_kurdishOCN_001', target: 'org_goska_001', label: 'uses_for_shipping' },
//       { source: 'org_kurdishOCN_001', target: 'place_france_001', label: 'distributes_equipment' },
//       { source: 'org_kurdishOCN_001', target: 'place_belgium_001', label: 'distributes_equipment' },
//       { source: 'org_goska_001', target: 'place_istanbul_turkey_001', label: 'located_in' },

//       // ----------------------------------------------------------------
//       // CASE STUDY 3: Tunisian Operation (Captagon)
//       // ----------------------------------------------------------------
//       { source: 'org_tunisianGroup_001', target: 'person_tunisianGroup_01', label: 'has_members' },
//       { source: 'person_algerianGang_01', target: 'obj_variousDrugs_01', label: 'supplies' },
//       { source: 'obj_variousDrugs_01', target: 'org_tunisianGroup_001', label: 'owned_by' },

//       { source: 'org_tunisianGroup_001', target: 'event_tunisianCaptagonShipment_01', label: 'participants' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'place_sfax_tunisia_001', label: 'location' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'place_palermo_italy_001', label: 'location' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'place_rome_italy_001', label: 'location' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'obj_captagon_01', label: 'involves' },

//       { source: 'obj_captagon_01', target: 'place_sfax_tunisia_001', label: 'stored_at' },
//       { source: 'org_tunisianGroup_001', target: 'obj_variousDrugs_01', label: 'obtains' },
//       { source: 'person_algerianGang_01', target: 'place_algeria_001', label: 'based_in' },
//       { source: 'org_tunisianGroup_001', target: 'place_sfax_tunisia_001', label: 'based_in' }
//     ]
//   };

//   // ------------------------------------------------------
//   // 3. Colouring logic: Node by group, link label always
//   // ------------------------------------------------------
//   const getNodeColor = (node) => {
//     switch (node.group) {
//       case 'CaseStudy':
//         return '#A9A9A9'; // Dark Gray for case studies
//       case 'Person':
//         return '#FF6B6B'; // Red
//       case 'Organisation':
//         return '#1E90FF'; // Blue
//       case 'Place':
//         return '#FFD700'; // Gold
//       case 'Event':
//         return '#BA55D3'; // Purple
//       case 'Object':
//         return '#32CD32'; // Lime Green
//       default:
//         return '#AAAAAA';
//     }
//   };

//   // ------------------------------------------------------
//   // 4. Legend: Display node colour references + labels
//   //    We'll position this to the right of the graph
//   // ------------------------------------------------------
//   const legend = (
//     <div
//       style={{
//         marginLeft: '1rem',
//         width: '220px',
//         fontSize: '0.875rem',
//         lineHeight: '1.5'
//       }}
//     >
//       <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Legend</h4>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span
//           style={{
//             display: 'inline-block',
//             width: '14px',
//             height: '14px',
//             backgroundColor: '#A9A9A9',
//             marginRight: '0.5rem'
//           }}
//         />
//         Case Study Node
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span
//           style={{
//             display: 'inline-block',
//             width: '14px',
//             height: '14px',
//             backgroundColor: '#FF6B6B',
//             marginRight: '0.5rem'
//           }}
//         />
//         Person
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span
//           style={{
//             display: 'inline-block',
//             width: '14px',
//             height: '14px',
//             backgroundColor: '#1E90FF',
//             marginRight: '0.5rem'
//           }}
//         />
//         Organisation
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span
//           style={{
//             display: 'inline-block',
//             width: '14px',
//             height: '14px',
//             backgroundColor: '#FFD700',
//             marginRight: '0.5rem'
//           }}
//         />
//         Place
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span
//           style={{
//             display: 'inline-block',
//             width: '14px',
//             height: '14px',
//             backgroundColor: '#BA55D3',
//             marginRight: '0.5rem'
//           }}
//         />
//         Event
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
//         <span
//           style={{
//             display: 'inline-block',
//             width: '14px',
//             height: '14px',
//             backgroundColor: '#32CD32',
//             marginRight: '0.5rem'
//           }}
//         />
//         Object
//       </div>
//       <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.8rem' }}>
//         Edge labels show relationships between nodes.
//       </p>
//     </div>
//   );

//   // ------------------------------------------------------
//   // 5. linkCanvasObject: Renders link labels on the canvas
//   //    so they're always visible (not just on hover)
//   // ------------------------------------------------------
//   const drawLinkLabel = (link, ctx, globalScale) => {
//     if (!link.label) return;
//     // Identify the start & end positions
//     const start = link.source;
//     const end = link.target;
//     if (!start || !end) return;

//     // Midpoint between the two nodes
//     const midX = (start.x + end.x) / 2;
//     const midY = (start.y + end.y) / 2;

//     // Draw the text label
//     const fontSize = 10 / globalScale;
//     ctx.font = `${fontSize}px Sans-Serif`;
//     ctx.fillStyle = '#555'; // Dark grey for link text
//     ctx.fillText(link.label, midX, midY);
//   };

//   return (
//     <div style={{ display: 'flex', margin: '0 auto', maxWidth: '1200px' }}>
//       {/* LEFT SIDE: Graph Container + Heading */}
//       <div style={{ flex: '1' }}>
//         {/* Heading */}
//         <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
//           Network Graph Visualisation
//         </h3>
//         {/* Graph Container */}
//         <div
//           ref={containerRef}
//           style={{
//             width: '100%',
//             height: '70vh',
//             border: '2px solid #ccc',
//             borderRadius: '8px',
//             backgroundColor: '#fff',
//             position: 'relative',
//             overflow: 'hidden'
//           }}
//         >
//           <ForceGraph2D
//             graphData={data}
//             width={dimensions.width}
//             height={dimensions.height}
//             // Draw link labels permanently on the canvas
//             linkCanvasObjectMode={() => 'after'}
//             linkCanvasObject={(link, ctx, globalScale) => drawLinkLabel(link, ctx, globalScale)}
//             // Also show them on hover as a tooltip if desired
//             linkLabel={(link) => link.label}
//             linkColor={() => '#999'}
//             linkDirectionalArrowLength={4}
//             linkDirectionalArrowRelPos={1}
//             nodeCanvasObject={(node, ctx, globalScale) => {
//               // Node circle
//               ctx.beginPath();
//               ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI, false);
//               ctx.fillStyle = getNodeColor(node);
//               ctx.fill();

//               // Node label
//               const label = node.label;
//               const fontSize = 12 / globalScale;
//               ctx.font = `${fontSize}px Sans-Serif`;
//               ctx.fillStyle = '#000';
//               ctx.fillText(label, node.x + 12, node.y + 4);
//             }}
//             nodeLabel={(node) => `${node.label} [${node.group}]`}
//             zoomToFit={true}
//           />
//         </div>
//       </div>

//       {/* RIGHT SIDE: Legend */}
//       {legend}
//     </div>
//   );
// }

// export default NetworkGraph;













// import React, { useRef, useState, useEffect } from 'react';
// import { ForceGraph2D } from 'react-force-graph';

// function NetworkGraph() {
//   // --------------------------------------------------------------------------------
//   // 1. Responsive container logic
//   // --------------------------------------------------------------------------------
//   const containerRef = useRef(null);
//   const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

//   useEffect(() => {
//     function handleResize() {
//       if (containerRef.current) {
//         setDimensions({
//           width: containerRef.current.clientWidth,
//           height: containerRef.current.clientHeight
//         });
//       }
//     }
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // --------------------------------------------------------------------------------
//   // 2. Full Data: Nodes + Links from All Case Studies
//   //    Includes separate nodes for "Case Study 1/2/3"
//   //    plus fully-labelled edges (relationships).
//   // --------------------------------------------------------------------------------
//   const data = {
//     nodes: [
//       // CASE STUDY NODES (Group: 'CaseStudy')
//       { id: 'case_study_1', label: 'Case Study 1: Syrian Operation', group: 'CaseStudy' },
//       { id: 'case_study_2', label: 'Case Study 2: Iraqi Kurdish Network', group: 'CaseStudy' },
//       { id: 'case_study_3', label: 'Case Study 3: Tunisian Operation', group: 'CaseStudy' },

//       // PEOPLE (Group: 'Person')
//       { id: 'person_syrianGang_01', label: 'Syrian Gang Member(s)', group: 'Person' },
//       { id: 'person_albanianSupplier_01', label: 'Albanian Supplier', group: 'Person' },
//       { id: 'person_nigerianYouth_01', label: 'Nigerian Youth(s)', group: 'Person' },

//       { id: 'person_nihadKhoshnaw_01', label: 'Nihad Khoshnaw (Sheikh Nihad)', group: 'Person' },
//       { id: 'person_kurdishAssociates_01', label: 'Iraqi Kurdish Associates', group: 'Person' },

//       { id: 'person_tunisianGroup_01', label: 'Tunisian Group Member(s)', group: 'Person' },
//       { id: 'person_algerianGang_01', label: 'Algerian Gang(s)', group: 'Person' },

//       // ORGANISATIONS (Group: 'Organisation')
//       { id: 'org_syrianGang_rome_001', label: 'Syrian Gang (Rome)', group: 'Organisation' },
//       { id: 'org_kurdishOCN_001', label: 'Iraqi Kurdish OCN', group: 'Organisation' },
//       { id: 'org_goska_001', label: 'GOSKA OTOMOTIV VE INSAAT', group: 'Organisation' },
//       { id: 'org_tunisianGroup_001', label: 'Tunisian Criminal Group', group: 'Organisation' },

//       // PLACES (Group: 'Place')
//       { id: 'place_torBella_rome_001', label: 'Tor Bella Monaca (Rome)', group: 'Place' },
//       { id: 'place_durresPort_albania_001', label: 'Durres Port (Albania)', group: 'Place' },
//       { id: 'place_rome_ports_001', label: 'Small Ports near Rome', group: 'Place' },
//       { id: 'place_istanbul_turkey_001', label: 'Istanbul / Aksaray (Turkey)', group: 'Place' },
//       { id: 'place_izmirPort_turkey_001', label: 'Izmir Port (Turkey)', group: 'Place' },
//       { id: 'place_genoaPort_italy_001', label: 'Genoa Port (Italy)', group: 'Place' },
//       { id: 'place_france_001', label: 'France', group: 'Place' },
//       { id: 'place_belgium_001', label: 'Belgium', group: 'Place' },
//       { id: 'place_sfax_tunisia_001', label: 'Sfax (Tunisia)', group: 'Place' },
//       { id: 'place_palermo_italy_001', label: 'Palermo (Italy)', group: 'Place' },
//       { id: 'place_rome_italy_001', label: 'Rome (Italy)', group: 'Place' },
//       { id: 'place_algeria_001', label: 'Algeria', group: 'Place' },

//       // EVENTS (Group: 'Event')
//       {
//         id: 'event_syrianDurresShipment_01',
//         label: 'Durres → Rome Cannabis Shipment',
//         group: 'Event'
//       },
//       {
//         id: 'event_syrianStorageTorBella_01',
//         label: 'Storage at Tor Bella Monaca',
//         group: 'Event'
//       },
//       {
//         id: 'event_kurdishEquipShipment_01',
//         label: 'Izmir → Genoa Equipment Shipment',
//         group: 'Event'
//       },
//       {
//         id: 'event_tunisianCaptagonShipment_01',
//         label: 'Sfax → Palermo → Rome Captagon Shipment',
//         group: 'Event'
//       },

//       // OBJECTS (Group: 'Object')
//       { id: 'obj_cannabis_01', label: 'Cannabis', group: 'Object' },
//       { id: 'obj_rubberBoats_01', label: 'Rubber Boats', group: 'Object' },
//       { id: 'obj_engines_01', label: 'Various Engines', group: 'Object' },
//       { id: 'obj_lifeJackets_01', label: 'Life Jackets', group: 'Object' },
//       { id: 'obj_captagon_01', label: 'Captagon Pills', group: 'Object' },
//       { id: 'obj_variousDrugs_01', label: 'Other Various Drugs', group: 'Object' }
//     ],
//     links: [
//       // LINKING CASE STUDIES TO EVENTS
//       { source: 'case_study_1', target: 'event_syrianDurresShipment_01', label: 'includes_event' },
//       { source: 'case_study_1', target: 'event_syrianStorageTorBella_01', label: 'includes_event' },
//       { source: 'case_study_2', target: 'event_kurdishEquipShipment_01', label: 'includes_event' },
//       { source: 'case_study_3', target: 'event_tunisianCaptagonShipment_01', label: 'includes_event' },

//       // CASE STUDY 1: Syrian Operation
//       { source: 'person_syrianGang_01', target: 'org_syrianGang_rome_001', label: 'member_of' },
//       { source: 'person_albanianSupplier_01', target: 'obj_cannabis_01', label: 'supplies' },
//       { source: 'person_nigerianYouth_01', target: 'org_syrianGang_rome_001', label: 'assists_distribution' },

//       { source: 'org_syrianGang_rome_001', target: 'obj_cannabis_01', label: 'stores' },
//       { source: 'obj_cannabis_01', target: 'place_torBella_rome_001', label: 'stored_at' },

//       // Durres → Rome cannabis shipment
//       { source: 'event_syrianDurresShipment_01', target: 'obj_cannabis_01', label: 'involves' },
//       { source: 'event_syrianDurresShipment_01', target: 'org_syrianGang_rome_001', label: 'participants' },
//       { source: 'event_syrianDurresShipment_01', target: 'person_albanianSupplier_01', label: 'participants' },
//       { source: 'event_syrianDurresShipment_01', target: 'place_durresPort_albania_001', label: 'location' },
//       { source: 'event_syrianDurresShipment_01', target: 'place_rome_ports_001', label: 'location' },

//       // Storage at Tor Bella Monaca
//       { source: 'event_syrianStorageTorBella_01', target: 'org_syrianGang_rome_001', label: 'participants' },
//       { source: 'event_syrianStorageTorBella_01', target: 'obj_cannabis_01', label: 'involves' },
//       { source: 'event_syrianStorageTorBella_01', target: 'place_torBella_rome_001', label: 'location' },

//       // Gang base in Rome
//       { source: 'org_syrianGang_rome_001', target: 'place_rome_italy_001', label: 'based_in' },

//       // CASE STUDY 2: Iraqi Kurdish Network
//       { source: 'person_nihadKhoshnaw_01', target: 'org_kurdishOCN_001', label: 'leads' },
//       { source: 'person_nihadKhoshnaw_01', target: 'org_goska_001', label: 'owns' },
//       { source: 'person_kurdishAssociates_01', target: 'org_kurdishOCN_001', label: 'member_of' },

//       { source: 'org_kurdishOCN_001', target: 'event_kurdishEquipShipment_01', label: 'orchestrates' },
//       { source: 'event_kurdishEquipShipment_01', target: 'place_izmirPort_turkey_001', label: 'location' },
//       { source: 'event_kurdishEquipShipment_01', target: 'place_genoaPort_italy_001', label: 'location' },
//       { source: 'event_kurdishEquipShipment_01', target: 'obj_rubberBoats_01', label: 'involves' },
//       { source: 'event_kurdishEquipShipment_01', target: 'obj_engines_01', label: 'involves' },
//       { source: 'event_kurdishEquipShipment_01', target: 'obj_lifeJackets_01', label: 'involves' },

//       { source: 'org_kurdishOCN_001', target: 'org_goska_001', label: 'uses_for_shipping' },
//       { source: 'org_kurdishOCN_001', target: 'place_france_001', label: 'distributes_equipment' },
//       { source: 'org_kurdishOCN_001', target: 'place_belgium_001', label: 'distributes_equipment' },
//       { source: 'org_goska_001', target: 'place_istanbul_turkey_001', label: 'located_in' },

//       // CASE STUDY 3: Tunisian Operation
//       { source: 'org_tunisianGroup_001', target: 'person_tunisianGroup_01', label: 'has_members' },
//       { source: 'person_algerianGang_01', target: 'obj_variousDrugs_01', label: 'supplies' },
//       { source: 'obj_variousDrugs_01', target: 'org_tunisianGroup_001', label: 'owned_by' },

//       { source: 'org_tunisianGroup_001', target: 'event_tunisianCaptagonShipment_01', label: 'participants' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'place_sfax_tunisia_001', label: 'location' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'place_palermo_italy_001', label: 'location' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'place_rome_italy_001', label: 'location' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'obj_captagon_01', label: 'involves' },

//       { source: 'obj_captagon_01', target: 'place_sfax_tunisia_001', label: 'stored_at' },
//       { source: 'org_tunisianGroup_001', target: 'obj_variousDrugs_01', label: 'obtains' },
//       { source: 'person_algerianGang_01', target: 'place_algeria_001', label: 'based_in' },
//       { source: 'org_tunisianGroup_001', target: 'place_sfax_tunisia_001', label: 'based_in' }
//     ]
//   };

//   // --------------------------------------------------------------------------------
//   // 3. Colouring logic: node colours by group
//   // --------------------------------------------------------------------------------
//   const getNodeColor = (node) => {
//     switch (node.group) {
//       case 'CaseStudy':
//         return '#A9A9A9'; // Dark Gray
//       case 'Person':
//         return '#FF6B6B'; // Red
//       case 'Organisation':
//         return '#1E90FF'; // Blue
//       case 'Place':
//         return '#FFD700'; // Gold
//       case 'Event':
//         return '#BA55D3'; // Purple
//       case 'Object':
//         return '#32CD32'; // LimeGreen
//       default:
//         return '#AAAAAA';
//     }
//   };

//   // --------------------------------------------------------------------------------
//   // 4. linkCanvasObject: Renders relationship labels on the canvas midpoint
//   // --------------------------------------------------------------------------------
//   const drawLinkLabel = (link, ctx, globalScale) => {
//     if (!link.label) return;
//     const start = link.source;
//     const end = link.target;
//     if (!start || !end) return;
//     // Midpoint
//     const midX = (start.x + end.x) / 2;
//     const midY = (start.y + end.y) / 2;
//     // Label style
//     const fontSize = 10 / globalScale;
//     ctx.font = `${fontSize}px Sans-Serif`;
//     ctx.fillStyle = '#555';
//     ctx.fillText(link.label, midX, midY);
//   };

//   // --------------------------------------------------------------------------------
//   // 5. Legend: Node type colours + instructions
//   // --------------------------------------------------------------------------------
//   const legend = (
//     <div
//       style={{
//         marginLeft: '1rem',
//         width: '220px',
//         fontSize: '0.875rem',
//         lineHeight: '1.5'
//       }}
//     >
//       <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Legend</h4>
//       {/* CaseStudy */}
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span
//           style={{
//             display: 'inline-block',
//             width: 14,
//             height: 14,
//             backgroundColor: '#A9A9A9',
//             marginRight: 8
//           }}
//         />
//         Case Study
//       </div>
//       {/* Person */}
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span
//           style={{
//             display: 'inline-block',
//             width: 14,
//             height: 14,
//             backgroundColor: '#FF6B6B',
//             marginRight: 8
//           }}
//         />
//         Person
//       </div>
//       {/* Organisation */}
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span
//           style={{
//             display: 'inline-block',
//             width: 14,
//             height: 14,
//             backgroundColor: '#1E90FF',
//             marginRight: 8
//           }}
//         />
//         Organisation
//       </div>
//       {/* Place */}
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span
//           style={{
//             display: 'inline-block',
//             width: 14,
//             height: 14,
//             backgroundColor: '#FFD700',
//             marginRight: 8
//           }}
//         />
//         Place
//       </div>
//       {/* Event */}
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span
//           style={{
//             display: 'inline-block',
//             width: 14,
//             height: 14,
//             backgroundColor: '#BA55D3',
//             marginRight: 8
//           }}
//         />
//         Event
//       </div>
//       {/* Object */}
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
//         <span
//           style={{
//             display: 'inline-block',
//             width: 14,
//             height: 14,
//             backgroundColor: '#32CD32',
//             marginRight: 8
//           }}
//         />
//         Object
//       </div>
//       <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.8rem' }}>
//         Drag & lock nodes in place. Edge labels show relationships.
//       </p>
//     </div>
//   );

//   // --------------------------------------------------------------------------------
//   // 6. Render
//   // --------------------------------------------------------------------------------
//   return (
//     <div style={{ display: 'flex', margin: '0 auto', maxWidth: '1200px' }}>
//       {/* LEFT: Graph & Heading */}
//       <div style={{ flex: 1 }}>
//         <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
//           Network Graph Visualisation
//         </h3>

//         {/* Container for the ForceGraph, sized responsively */}
//         <div
//           ref={containerRef}
//           style={{
//             width: '100%',
//             height: '70vh',
//             border: '2px solid #ccc',
//             borderRadius: '8px',
//             backgroundColor: '#fff',
//             position: 'relative',
//             overflow: 'hidden'
//           }}
//         >
//           <ForceGraph2D
//             graphData={data}
//             width={dimensions.width}
//             height={dimensions.height}
//             // Expand spacing by increasing link distance
//             d3Force={'link'}
//             d3ForceConfig={{ link: { distance: 200 } }}
//             // Lock nodes after drag
//             onNodeDragEnd={(node) => {
//               node.fx = node.x;
//               node.fy = node.y;
//             }}
//             // Draw relationship labels on the canvas
//             linkCanvasObjectMode={() => 'after'}
//             linkCanvasObject={(link, ctx, globalScale) => drawLinkLabel(link, ctx, globalScale)}
//             linkLabel={(link) => link.label}
//             linkColor={() => '#999'}
//             linkDirectionalArrowLength={4}
//             linkDirectionalArrowRelPos={1}
//             nodeCanvasObject={(node, ctx, globalScale) => {
//               // Draw node circle
//               ctx.beginPath();
//               ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI, false);
//               ctx.fillStyle = getNodeColor(node);
//               ctx.fill();

//               // Node label: attempt to place text in the centre of the circle if short
//               const label = node.label;
//               const fontSize = 12 / globalScale;
//               ctx.font = `${fontSize}px Sans-Serif`;
//               ctx.textAlign = 'center';
//               ctx.textBaseline = 'middle';

//               // If the text is short enough, we can print it in white inside the circle
//               const textWidth = ctx.measureText(label).width;
//               if (textWidth < 16) {
//                 ctx.fillStyle = '#fff';
//                 ctx.fillText(label, node.x, node.y);
//               } else {
//                 // If it's longer, place it below in black
//                 ctx.fillStyle = '#000';
//                 ctx.textBaseline = 'top';
//                 ctx.fillText(label, node.x, node.y + 10);
//               }
//             }}
//             nodeLabel={(node) => `${node.label} [${node.group}]`}
//             zoomToFit={true}
//           />
//         </div>
//       </div>

//       {/* RIGHT: Legend */}
//       {legend}
//     </div>
//   );
// }

// export default NetworkGraph;













// import React, { useRef, useState, useEffect } from 'react';
// import { ForceGraph2D } from 'react-force-graph';

// function NetworkGraph() {
//   // ------------------------------------------------------------------
//   // 1. Responsive container logic
//   // ------------------------------------------------------------------
//   const containerRef = useRef(null);
//   const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

//   useEffect(() => {
//     function handleResize() {
//       if (containerRef.current) {
//         setDimensions({
//           width: containerRef.current.clientWidth,
//           height: containerRef.current.clientHeight
//         });
//       }
//     }
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // ------------------------------------------------------------------
//   // 2. Full Dataset: Nodes + Links (All Case Studies)
//   // ------------------------------------------------------------------
//   const data = {
//     nodes: [
//       // CASE STUDY NODES
//       { id: 'case_study_1', label: 'Case Study 1: Syrian Operation', group: 'CaseStudy' },
//       { id: 'case_study_2', label: 'Case Study 2: Iraqi Kurdish Network', group: 'CaseStudy' },
//       { id: 'case_study_3', label: 'Case Study 3: Tunisian Operation', group: 'CaseStudy' },

//       // PEOPLE
//       { id: 'person_syrianGang_01', label: 'Syrian Gang Member(s)', group: 'Person' },
//       { id: 'person_albanianSupplier_01', label: 'Albanian Supplier', group: 'Person' },
//       { id: 'person_nigerianYouth_01', label: 'Nigerian Youth(s)', group: 'Person' },
//       { id: 'person_nihadKhoshnaw_01', label: 'Nihad Khoshnaw (Sheikh Nihad)', group: 'Person' },
//       { id: 'person_kurdishAssociates_01', label: 'Iraqi Kurdish Associates', group: 'Person' },
//       { id: 'person_tunisianGroup_01', label: 'Tunisian Group Member(s)', group: 'Person' },
//       { id: 'person_algerianGang_01', label: 'Algerian Gang(s)', group: 'Person' },

//       // ORGANISATIONS
//       { id: 'org_syrianGang_rome_001', label: 'Syrian Gang (Rome)', group: 'Organisation' },
//       { id: 'org_kurdishOCN_001', label: 'Iraqi Kurdish OCN', group: 'Organisation' },
//       { id: 'org_goska_001', label: 'GOSKA OTOMOTIV VE INSAAT', group: 'Organisation' },
//       { id: 'org_tunisianGroup_001', label: 'Tunisian Criminal Group', group: 'Organisation' },

//       // PLACES
//       { id: 'place_torBella_rome_001', label: 'Tor Bella Monaca (Rome)', group: 'Place' },
//       { id: 'place_durresPort_albania_001', label: 'Durres Port (Albania)', group: 'Place' },
//       { id: 'place_rome_ports_001', label: 'Small Ports near Rome', group: 'Place' },
//       { id: 'place_istanbul_turkey_001', label: 'Istanbul / Aksaray (Turkey)', group: 'Place' },
//       { id: 'place_izmirPort_turkey_001', label: 'Izmir Port (Turkey)', group: 'Place' },
//       { id: 'place_genoaPort_italy_001', label: 'Genoa Port (Italy)', group: 'Place' },
//       { id: 'place_france_001', label: 'France', group: 'Place' },
//       { id: 'place_belgium_001', label: 'Belgium', group: 'Place' },
//       { id: 'place_sfax_tunisia_001', label: 'Sfax (Tunisia)', group: 'Place' },
//       { id: 'place_palermo_italy_001', label: 'Palermo (Italy)', group: 'Place' },
//       { id: 'place_rome_italy_001', label: 'Rome (Italy)', group: 'Place' },
//       { id: 'place_algeria_001', label: 'Algeria', group: 'Place' },

//       // EVENTS
//       {
//         id: 'event_syrianDurresShipment_01',
//         label: 'Durres → Rome Cannabis Shipment',
//         group: 'Event'
//       },
//       {
//         id: 'event_syrianStorageTorBella_01',
//         label: 'Storage at Tor Bella Monaca',
//         group: 'Event'
//       },
//       {
//         id: 'event_kurdishEquipShipment_01',
//         label: 'Izmir → Genoa Equipment Shipment',
//         group: 'Event'
//       },
//       {
//         id: 'event_tunisianCaptagonShipment_01',
//         label: 'Sfax → Palermo → Rome Captagon Shipment',
//         group: 'Event'
//       },

//       // OBJECTS
//       { id: 'obj_cannabis_01', label: 'Cannabis', group: 'Object' },
//       { id: 'obj_rubberBoats_01', label: 'Rubber Boats', group: 'Object' },
//       { id: 'obj_engines_01', label: 'Various Engines', group: 'Object' },
//       { id: 'obj_lifeJackets_01', label: 'Life Jackets', group: 'Object' },
//       { id: 'obj_captagon_01', label: 'Captagon Pills', group: 'Object' },
//       { id: 'obj_variousDrugs_01', label: 'Other Various Drugs', group: 'Object' }
//     ],
//     links: [
//       // CASE STUDY to EVENT LINKS
//       { source: 'case_study_1', target: 'event_syrianDurresShipment_01', label: 'includes_event' },
//       { source: 'case_study_1', target: 'event_syrianStorageTorBella_01', label: 'includes_event' },
//       { source: 'case_study_2', target: 'event_kurdishEquipShipment_01', label: 'includes_event' },
//       { source: 'case_study_3', target: 'event_tunisianCaptagonShipment_01', label: 'includes_event' },

//       // CASE STUDY 1: Syrian Operation
//       { source: 'person_syrianGang_01', target: 'org_syrianGang_rome_001', label: 'member_of' },
//       { source: 'person_albanianSupplier_01', target: 'obj_cannabis_01', label: 'supplies' },
//       { source: 'person_nigerianYouth_01', target: 'org_syrianGang_rome_001', label: 'assists_distribution' },
//       { source: 'org_syrianGang_rome_001', target: 'obj_cannabis_01', label: 'stores' },
//       { source: 'obj_cannabis_01', target: 'place_torBella_rome_001', label: 'stored_at' },
//       { source: 'event_syrianDurresShipment_01', target: 'obj_cannabis_01', label: 'involves' },
//       { source: 'event_syrianDurresShipment_01', target: 'org_syrianGang_rome_001', label: 'participants' },
//       { source: 'event_syrianDurresShipment_01', target: 'person_albanianSupplier_01', label: 'participants' },
//       { source: 'event_syrianDurresShipment_01', target: 'place_durresPort_albania_001', label: 'location' },
//       { source: 'event_syrianDurresShipment_01', target: 'place_rome_ports_001', label: 'location' },
//       { source: 'event_syrianStorageTorBella_01', target: 'org_syrianGang_rome_001', label: 'participants' },
//       { source: 'event_syrianStorageTorBella_01', target: 'obj_cannabis_01', label: 'involves' },
//       { source: 'event_syrianStorageTorBella_01', target: 'place_torBella_rome_001', label: 'location' },
//       { source: 'org_syrianGang_rome_001', target: 'place_rome_italy_001', label: 'based_in' },

//       // CASE STUDY 2: Iraqi Kurdish Network
//       { source: 'person_nihadKhoshnaw_01', target: 'org_kurdishOCN_001', label: 'leads' },
//       { source: 'person_nihadKhoshnaw_01', target: 'org_goska_001', label: 'owns' },
//       { source: 'person_kurdishAssociates_01', target: 'org_kurdishOCN_001', label: 'member_of' },
//       { source: 'org_kurdishOCN_001', target: 'event_kurdishEquipShipment_01', label: 'orchestrates' },
//       { source: 'event_kurdishEquipShipment_01', target: 'place_izmirPort_turkey_001', label: 'location' },
//       { source: 'event_kurdishEquipShipment_01', target: 'place_genoaPort_italy_001', label: 'location' },
//       { source: 'event_kurdishEquipShipment_01', target: 'obj_rubberBoats_01', label: 'involves' },
//       { source: 'event_kurdishEquipShipment_01', target: 'obj_engines_01', label: 'involves' },
//       { source: 'event_kurdishEquipShipment_01', target: 'obj_lifeJackets_01', label: 'involves' },
//       { source: 'org_kurdishOCN_001', target: 'org_goska_001', label: 'uses_for_shipping' },
//       { source: 'org_kurdishOCN_001', target: 'place_france_001', label: 'distributes_equipment' },
//       { source: 'org_kurdishOCN_001', target: 'place_belgium_001', label: 'distributes_equipment' },
//       { source: 'org_goska_001', target: 'place_istanbul_turkey_001', label: 'located_in' },

//       // CASE STUDY 3: Tunisian Operation
//       { source: 'org_tunisianGroup_001', target: 'person_tunisianGroup_01', label: 'has_members' },
//       { source: 'person_algerianGang_01', target: 'obj_variousDrugs_01', label: 'supplies' },
//       { source: 'obj_variousDrugs_01', target: 'org_tunisianGroup_001', label: 'owned_by' },
//       { source: 'org_tunisianGroup_001', target: 'event_tunisianCaptagonShipment_01', label: 'participants' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'place_sfax_tunisia_001', label: 'location' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'place_palermo_italy_001', label: 'location' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'place_rome_italy_001', label: 'location' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'obj_captagon_01', label: 'involves' },
//       { source: 'obj_captagon_01', target: 'place_sfax_tunisia_001', label: 'stored_at' },
//       { source: 'org_tunisianGroup_001', target: 'obj_variousDrugs_01', label: 'obtains' },
//       { source: 'person_algerianGang_01', target: 'place_algeria_001', label: 'based_in' },
//       { source: 'org_tunisianGroup_001', target: 'place_sfax_tunisia_001', label: 'based_in' }
//     ]
//   };

//   // ------------------------------------------------------------------
//   // 3. Colour logic: node by group
//   // ------------------------------------------------------------------
//   const getNodeColor = (node) => {
//     switch (node.group) {
//       case 'CaseStudy':
//         return '#A9A9A9'; // Dark Gray
//       case 'Person':
//         return '#FF6B6B'; // Red
//       case 'Organisation':
//         return '#1E90FF'; // Blue
//       case 'Place':
//         return '#FFD700'; // Gold
//       case 'Event':
//         return '#BA55D3'; // Purple
//       case 'Object':
//         return '#32CD32'; // LimeGreen
//       default:
//         return '#AAAAAA';
//     }
//   };

//   // ------------------------------------------------------------------
//   // 4. Legend: Node type colours and instructions
//   // ------------------------------------------------------------------
//   const legend = (
//     <div
//       style={{
//         marginLeft: '1rem',
//         width: '220px',
//         fontSize: '0.875rem',
//         lineHeight: '1.5'
//       }}
//     >
//       <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Legend</h4>

//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span style={{ display: 'inline-block', width: 14, height: 14, backgroundColor: '#A9A9A9', marginRight: 8 }} />
//         Case Study
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span style={{ display: 'inline-block', width: 14, height: 14, backgroundColor: '#FF6B6B', marginRight: 8 }} />
//         Person
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span style={{ display: 'inline-block', width: 14, height: 14, backgroundColor: '#1E90FF', marginRight: 8 }} />
//         Organisation
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span style={{ display: 'inline-block', width: 14, height: 14, backgroundColor: '#FFD700', marginRight: 8 }} />
//         Place
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span style={{ display: 'inline-block', width: 14, height: 14, backgroundColor: '#BA55D3', marginRight: 8 }} />
//         Event
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
//         <span style={{ display: 'inline-block', width: 14, height: 14, backgroundColor: '#32CD32', marginRight: 8 }} />
//         Object
//       </div>

//       <p style={{ marginTop: '1rem', fontSize: '0.8rem', fontStyle: 'italic' }}>
//         Drag & lock nodes in place for clarity.
//       </p>
//     </div>
//   );

//   // ------------------------------------------------------------------
//   // 5. Final Render
//   // ------------------------------------------------------------------
//   return (
//     <div style={{ display: 'flex', margin: '0 auto', maxWidth: '1200px' }}>
//       {/* LEFT: Title + Graph */}
//       <div style={{ flex: 1 }}>
//         <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
//           Network Graph Visualisation
//         </h3>

//         <div
//           ref={containerRef}
//           style={{
//             width: '100%',
//             height: '70vh',
//             border: '2px solid #ccc',
//             borderRadius: '8px',
//             backgroundColor: '#fff',
//             position: 'relative',
//             overflow: 'hidden'
//           }}
//         >
//           <ForceGraph2D
//             graphData={data}
//             width={dimensions.width}
//             height={dimensions.height}
//             // Spread the nodes out
//             d3Force="link"
//             d3ForceConfig={{ link: { distance: 200 } }}
//             // Lock nodes after drag
//             onNodeDragEnd={(node) => {
//               node.fx = node.x;
//               node.fy = node.y;
//             }}
//             linkColor={() => '#999'}
//             linkDirectionalArrowLength={4}
//             linkDirectionalArrowRelPos={1}
//             nodeCanvasObject={(node, ctx, globalScale) => {
//               // Draw a circle for the node
//               ctx.beginPath();
//               ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI, false);
//               ctx.fillStyle = getNodeColor(node);
//               ctx.fill();

//               // Node label
//               const label = node.label;
//               const fontSize = 12 / globalScale;
//               ctx.font = `${fontSize}px Sans-Serif`;
//               ctx.textAlign = 'center';
//               ctx.textBaseline = 'middle';

//               // If the label fits inside the circle, show it in white
//               const textWidth = ctx.measureText(label).width;
//               if (textWidth < 16) {
//                 ctx.fillStyle = '#fff';
//                 ctx.fillText(label, node.x, node.y);
//               } else {
//                 // Otherwise, place it below the node in black
//                 ctx.fillStyle = '#000';
//                 ctx.textBaseline = 'top';
//                 ctx.fillText(label, node.x, node.y + 10);
//               }
//             }}
//             // Display label on hover (tooltip) if desired
//             nodeLabel={(node) => `${node.label} [${node.group}]`}
//             zoomToFit={true}
//           />
//         </div>
//       </div>

//       {/* RIGHT: Legend */}
//       {legend}
//     </div>
//   );
// }

// export default NetworkGraph;











// import React, { useRef, useState, useEffect } from 'react';
// import { ForceGraph2D } from 'react-force-graph';

// function NetworkGraph() {
//   // -------------------------------------------------------------------------
//   // 1. Responsive Container Logic
//   // -------------------------------------------------------------------------
//   const containerRef = useRef(null);
//   const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

//   useEffect(() => {
//     function handleResize() {
//       if (containerRef.current) {
//         setDimensions({
//           width: containerRef.current.clientWidth,
//           height: containerRef.current.clientHeight
//         });
//       }
//     }
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // -------------------------------------------------------------------------
//   // 2. Full Dataset: Nodes + Links (Three Case Studies)
//   // -------------------------------------------------------------------------
//   const data = {
//     nodes: [
//       // CASE STUDY NODES
//       { id: 'case_study_1', label: 'Case Study 1: Syrian Operation', group: 'CaseStudy' },
//       { id: 'case_study_2', label: 'Case Study 2: Iraqi Kurdish Network', group: 'CaseStudy' },
//       { id: 'case_study_3', label: 'Case Study 3: Tunisian Operation', group: 'CaseStudy' },

//       // PEOPLE
//       { id: 'person_syrianGang_01', label: 'Syrian Gang Member(s)', group: 'Person' },
//       { id: 'person_albanianSupplier_01', label: 'Albanian Supplier', group: 'Person' },
//       { id: 'person_nigerianYouth_01', label: 'Nigerian Youth(s)', group: 'Person' },
//       { id: 'person_nihadKhoshnaw_01', label: 'Nihad Khoshnaw (Sheikh Nihad)', group: 'Person' },
//       { id: 'person_kurdishAssociates_01', label: 'Iraqi Kurdish Associates', group: 'Person' },
//       { id: 'person_tunisianGroup_01', label: 'Tunisian Group Member(s)', group: 'Person' },
//       { id: 'person_algerianGang_01', label: 'Algerian Gang(s)', group: 'Person' },

//       // ORGANISATIONS
//       { id: 'org_syrianGang_rome_001', label: 'Syrian Gang (Rome)', group: 'Organisation' },
//       { id: 'org_kurdishOCN_001', label: 'Iraqi Kurdish OCN', group: 'Organisation' },
//       { id: 'org_goska_001', label: 'GOSKA OTOMOTIV VE INSAAT', group: 'Organisation' },
//       { id: 'org_tunisianGroup_001', label: 'Tunisian Criminal Group', group: 'Organisation' },

//       // PLACES
//       { id: 'place_torBella_rome_001', label: 'Tor Bella Monaca (Rome)', group: 'Place' },
//       { id: 'place_durresPort_albania_001', label: 'Durres Port (Albania)', group: 'Place' },
//       { id: 'place_rome_ports_001', label: 'Small Ports near Rome', group: 'Place' },
//       { id: 'place_istanbul_turkey_001', label: 'Istanbul / Aksaray (Turkey)', group: 'Place' },
//       { id: 'place_izmirPort_turkey_001', label: 'Izmir Port (Turkey)', group: 'Place' },
//       { id: 'place_genoaPort_italy_001', label: 'Genoa Port (Italy)', group: 'Place' },
//       { id: 'place_france_001', label: 'France', group: 'Place' },
//       { id: 'place_belgium_001', label: 'Belgium', group: 'Place' },
//       { id: 'place_sfax_tunisia_001', label: 'Sfax (Tunisia)', group: 'Place' },
//       { id: 'place_palermo_italy_001', label: 'Palermo (Italy)', group: 'Place' },
//       { id: 'place_rome_italy_001', label: 'Rome (Italy)', group: 'Place' },
//       { id: 'place_algeria_001', label: 'Algeria', group: 'Place' },

//       // EVENTS
//       {
//         id: 'event_syrianDurresShipment_01',
//         label: 'Durres → Rome Cannabis Shipment',
//         group: 'Event'
//       },
//       {
//         id: 'event_syrianStorageTorBella_01',
//         label: 'Storage at Tor Bella Monaca',
//         group: 'Event'
//       },
//       {
//         id: 'event_kurdishEquipShipment_01',
//         label: 'Izmir → Genoa Equipment Shipment',
//         group: 'Event'
//       },
//       {
//         id: 'event_tunisianCaptagonShipment_01',
//         label: 'Sfax → Palermo → Rome Captagon Shipment',
//         group: 'Event'
//       },

//       // OBJECTS
//       { id: 'obj_cannabis_01', label: 'Cannabis', group: 'Object' },
//       { id: 'obj_rubberBoats_01', label: 'Rubber Boats', group: 'Object' },
//       { id: 'obj_engines_01', label: 'Various Engines', group: 'Object' },
//       { id: 'obj_lifeJackets_01', label: 'Life Jackets', group: 'Object' },
//       { id: 'obj_captagon_01', label: 'Captagon Pills', group: 'Object' },
//       { id: 'obj_variousDrugs_01', label: 'Other Various Drugs', group: 'Object' }
//     ],
//     links: [
//       // CASE STUDY → EVENT
//       { source: 'case_study_1', target: 'event_syrianDurresShipment_01', label: 'includes_event' },
//       { source: 'case_study_1', target: 'event_syrianStorageTorBella_01', label: 'includes_event' },
//       { source: 'case_study_2', target: 'event_kurdishEquipShipment_01', label: 'includes_event' },
//       { source: 'case_study_3', target: 'event_tunisianCaptagonShipment_01', label: 'includes_event' },

//       // CASE STUDY 1: Syrian Operation
//       { source: 'person_syrianGang_01', target: 'org_syrianGang_rome_001', label: 'member_of' },
//       { source: 'person_albanianSupplier_01', target: 'obj_cannabis_01', label: 'supplies' },
//       { source: 'person_nigerianYouth_01', target: 'org_syrianGang_rome_001', label: 'assists_distribution' },
//       { source: 'org_syrianGang_rome_001', target: 'obj_cannabis_01', label: 'stores' },
//       { source: 'obj_cannabis_01', target: 'place_torBella_rome_001', label: 'stored_at' },
//       { source: 'event_syrianDurresShipment_01', target: 'obj_cannabis_01', label: 'involves' },
//       { source: 'event_syrianDurresShipment_01', target: 'org_syrianGang_rome_001', label: 'participants' },
//       { source: 'event_syrianDurresShipment_01', target: 'person_albanianSupplier_01', label: 'participants' },
//       { source: 'event_syrianDurresShipment_01', target: 'place_durresPort_albania_001', label: 'location' },
//       { source: 'event_syrianDurresShipment_01', target: 'place_rome_ports_001', label: 'location' },
//       { source: 'event_syrianStorageTorBella_01', target: 'org_syrianGang_rome_001', label: 'participants' },
//       { source: 'event_syrianStorageTorBella_01', target: 'obj_cannabis_01', label: 'involves' },
//       { source: 'event_syrianStorageTorBella_01', target: 'place_torBella_rome_001', label: 'location' },
//       { source: 'org_syrianGang_rome_001', target: 'place_rome_italy_001', label: 'based_in' },

//       // CASE STUDY 2: Iraqi Kurdish Network
//       { source: 'person_nihadKhoshnaw_01', target: 'org_kurdishOCN_001', label: 'leads' },
//       { source: 'person_nihadKhoshnaw_01', target: 'org_goska_001', label: 'owns' },
//       { source: 'person_kurdishAssociates_01', target: 'org_kurdishOCN_001', label: 'member_of' },
//       { source: 'org_kurdishOCN_001', target: 'event_kurdishEquipShipment_01', label: 'orchestrates' },
//       { source: 'event_kurdishEquipShipment_01', target: 'place_izmirPort_turkey_001', label: 'location' },
//       { source: 'event_kurdishEquipShipment_01', target: 'place_genoaPort_italy_001', label: 'location' },
//       { source: 'event_kurdishEquipShipment_01', target: 'obj_rubberBoats_01', label: 'involves' },
//       { source: 'event_kurdishEquipShipment_01', target: 'obj_engines_01', label: 'involves' },
//       { source: 'event_kurdishEquipShipment_01', target: 'obj_lifeJackets_01', label: 'involves' },
//       { source: 'org_kurdishOCN_001', target: 'org_goska_001', label: 'uses_for_shipping' },
//       { source: 'org_kurdishOCN_001', target: 'place_france_001', label: 'distributes_equipment' },
//       { source: 'org_kurdishOCN_001', target: 'place_belgium_001', label: 'distributes_equipment' },
//       { source: 'org_goska_001', target: 'place_istanbul_turkey_001', label: 'located_in' },

//       // CASE STUDY 3: Tunisian Operation
//       { source: 'org_tunisianGroup_001', target: 'person_tunisianGroup_01', label: 'has_members' },
//       { source: 'person_algerianGang_01', target: 'obj_variousDrugs_01', label: 'supplies' },
//       { source: 'obj_variousDrugs_01', target: 'org_tunisianGroup_001', label: 'owned_by' },
//       { source: 'org_tunisianGroup_001', target: 'event_tunisianCaptagonShipment_01', label: 'participants' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'place_sfax_tunisia_001', label: 'location' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'place_palermo_italy_001', label: 'location' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'place_rome_italy_001', label: 'location' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'obj_captagon_01', label: 'involves' },
//       { source: 'obj_captagon_01', target: 'place_sfax_tunisia_001', label: 'stored_at' },
//       { source: 'org_tunisianGroup_001', target: 'obj_variousDrugs_01', label: 'obtains' },
//       { source: 'person_algerianGang_01', target: 'place_algeria_001', label: 'based_in' },
//       { source: 'org_tunisianGroup_001', target: 'place_sfax_tunisia_001', label: 'based_in' }
//     ]
//   };

//   // -------------------------------------------------------------------------
//   // 3. Colour Logic: Node by group
//   // -------------------------------------------------------------------------
//   const getNodeColor = (node) => {
//     switch (node.group) {
//       case 'CaseStudy':
//         return '#A9A9A9'; // Dark Gray
//       case 'Person':
//         return '#FF6B6B'; // Red
//       case 'Organisation':
//         return '#1E90FF'; // Blue
//       case 'Place':
//         return '#FFD700'; // Gold
//       case 'Event':
//         return '#BA55D3'; // Purple
//       case 'Object':
//         return '#32CD32'; // LimeGreen
//       default:
//         return '#AAAAAA';
//     }
//   };

//   // -------------------------------------------------------------------------
//   // 4. linkCanvasObject: Render link labels at the midpoint of each edge
//   // -------------------------------------------------------------------------
//   const drawLinkLabel = (link, ctx, globalScale) => {
//     if (!link.label) return;
//     const start = link.source;
//     const end = link.target;
//     if (!start || !end) return;

//     // Midpoint calculation
//     const midX = (start.x + end.x) / 2;
//     const midY = (start.y + end.y) / 2;

//     // Font setup
//     const fontSize = 10 / globalScale;
//     ctx.font = `${fontSize}px Sans-Serif`;
//     ctx.fillStyle = '#555';
//     ctx.fillText(link.label, midX, midY);
//   };

//   // -------------------------------------------------------------------------
//   // 5. Legend: Node type colours + short instructions
//   // -------------------------------------------------------------------------
//   const legend = (
//     <div
//       style={{
//         marginLeft: '1rem',
//         width: '220px',
//         fontSize: '0.875rem',
//         lineHeight: '1.5'
//       }}
//     >
//       <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Legend</h4>

//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span style={{ width: 14, height: 14, backgroundColor: '#A9A9A9', marginRight: 8 }} />
//         Case Study
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span style={{ width: 14, height: 14, backgroundColor: '#FF6B6B', marginRight: 8 }} />
//         Person
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span style={{ width: 14, height: 14, backgroundColor: '#1E90FF', marginRight: 8 }} />
//         Organisation
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span style={{ width: 14, height: 14, backgroundColor: '#FFD700', marginRight: 8 }} />
//         Place
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//         <span style={{ width: 14, height: 14, backgroundColor: '#BA55D3', marginRight: 8 }} />
//         Event
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
//         <span style={{ width: 14, height: 14, backgroundColor: '#32CD32', marginRight: 8 }} />
//         Object
//       </div>


//     </div>
//   );

//   // -------------------------------------------------------------------------
//   // 6. Render the Final UI
//   // -------------------------------------------------------------------------
//   return (
//     <div style={{ display: 'flex', margin: '0 auto', maxWidth: '1200px' }}>
//       {/* LEFT: Title + Graph */}
//       <div style={{ flex: 1 }}>
//         <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
//           Network Graph Visualisation
//         </h3>

//         <div
//           ref={containerRef}
//           style={{
//             width: '100%',
//             height: '70vh',
//             border: '2px solid #ccc',
//             borderRadius: '8px',
//             backgroundColor: '#fff',
//             position: 'relative',
//             overflow: 'hidden'
//           }}
//         >
//           <ForceGraph2D
//             graphData={data}
//             width={dimensions.width}
//             height={dimensions.height}
//             // Spread nodes out more
//             d3Force="link"
//             d3ForceConfig={{ link: { distance: 200 } }}
//             // Lock node positions on drag release
//             onNodeDragEnd={(node) => {
//               node.fx = node.x;
//               node.fy = node.y;
//             }}
//             linkColor={() => '#999'}
//             linkDirectionalArrowLength={4}
//             linkDirectionalArrowRelPos={1}
//             // Render edge labels on the canvas
//             linkCanvasObjectMode={() => 'after'}
//             linkCanvasObject={(link, ctx, globalScale) => drawLinkLabel(link, ctx, globalScale)}
//             // Node rendering
//             nodeCanvasObject={(node, ctx, globalScale) => {
//               // Draw a circle for the node
//               ctx.beginPath();
//               ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI, false);
//               ctx.fillStyle = getNodeColor(node);
//               ctx.fill();

//               // Node label text
//               const label = node.label;
//               const fontSize = 12 / globalScale;
//               ctx.font = `${fontSize}px Sans-Serif`;
//               ctx.textAlign = 'center';
//               ctx.textBaseline = 'middle';

//               // If label fits, place in white inside node
//               const textWidth = ctx.measureText(label).width;
//               if (textWidth < 16) {
//                 ctx.fillStyle = '#fff';
//                 ctx.fillText(label, node.x, node.y);
//               } else {
//                 // Otherwise, place in black below
//                 ctx.fillStyle = '#000';
//                 ctx.textBaseline = 'top';
//                 ctx.fillText(label, node.x, node.y + 10);
//               }
//             }}
//             nodeLabel={(node) => `${node.label} [${node.group}]`}
//             zoomToFit={true}
//           />
//         </div>
//       </div>

//       {/* RIGHT: Legend */}
//       {legend}
//     </div>
//   );
// }

// export default NetworkGraph;





















// import React, { useRef, useState, useEffect } from 'react';
// import { ForceGraph2D } from 'react-force-graph';

// function NetworkGraph() {
//   // --------------------------------------------------------------------------------
//   // 1. Responsive Container Logic
//   // --------------------------------------------------------------------------------
//   const containerRef = useRef(null);
//   const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

//   useEffect(() => {
//     function handleResize() {
//       if (containerRef.current) {
//         setDimensions({
//           width: containerRef.current.clientWidth,
//           height: containerRef.current.clientHeight
//         });
//       }
//     }
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // --------------------------------------------------------------------------------
//   // 2. Full Data: All Nodes + Links (Three Case Studies)
//   // --------------------------------------------------------------------------------
//   const data = {
//     nodes: [
//       // CASE STUDY NODES
//       { id: 'case_study_1', label: 'Case Study 1: Syrian Operation', group: 'CaseStudy' },
//       { id: 'case_study_2', label: 'Case Study 2: Iraqi Kurdish Network', group: 'CaseStudy' },
//       { id: 'case_study_3', label: 'Case Study 3: Tunisian Operation', group: 'CaseStudy' },

//       // PEOPLE
//       { id: 'person_syrianGang_01', label: 'Syrian Gang Member(s)', group: 'Person' },
//       { id: 'person_albanianSupplier_01', label: 'Albanian Supplier', group: 'Person' },
//       { id: 'person_nigerianYouth_01', label: 'Nigerian Youth(s)', group: 'Person' },
//       { id: 'person_nihadKhoshnaw_01', label: 'Nihad Khoshnaw (Sheikh Nihad)', group: 'Person' },
//       { id: 'person_kurdishAssociates_01', label: 'Iraqi Kurdish Associates', group: 'Person' },
//       { id: 'person_tunisianGroup_01', label: 'Tunisian Group Member(s)', group: 'Person' },
//       { id: 'person_algerianGang_01', label: 'Algerian Gang(s)', group: 'Person' },

//       // ORGANISATIONS
//       { id: 'org_syrianGang_rome_001', label: 'Syrian Gang (Rome)', group: 'Organisation' },
//       { id: 'org_kurdishOCN_001', label: 'Iraqi Kurdish OCN', group: 'Organisation' },
//       { id: 'org_goska_001', label: 'GOSKA OTOMOTIV VE INSAAT', group: 'Organisation' },
//       { id: 'org_tunisianGroup_001', label: 'Tunisian Criminal Group', group: 'Organisation' },

//       // PLACES
//       { id: 'place_torBella_rome_001', label: 'Tor Bella Monaca (Rome)', group: 'Place' },
//       { id: 'place_durresPort_albania_001', label: 'Durres Port (Albania)', group: 'Place' },
//       { id: 'place_rome_ports_001', label: 'Small Ports near Rome', group: 'Place' },
//       { id: 'place_istanbul_turkey_001', label: 'Istanbul / Aksaray (Turkey)', group: 'Place' },
//       { id: 'place_izmirPort_turkey_001', label: 'Izmir Port (Turkey)', group: 'Place' },
//       { id: 'place_genoaPort_italy_001', label: 'Genoa Port (Italy)', group: 'Place' },
//       { id: 'place_france_001', label: 'France', group: 'Place' },
//       { id: 'place_belgium_001', label: 'Belgium', group: 'Place' },
//       { id: 'place_sfax_tunisia_001', label: 'Sfax (Tunisia)', group: 'Place' },
//       { id: 'place_palermo_italy_001', label: 'Palermo (Italy)', group: 'Place' },
//       { id: 'place_rome_italy_001', label: 'Rome (Italy)', group: 'Place' },
//       { id: 'place_algeria_001', label: 'Algeria', group: 'Place' },

//       // EVENTS
//       {
//         id: 'event_syrianDurresShipment_01',
//         label: 'Durres → Rome Cannabis Shipment',
//         group: 'Event'
//       },
//       {
//         id: 'event_syrianStorageTorBella_01',
//         label: 'Storage at Tor Bella Monaca',
//         group: 'Event'
//       },
//       {
//         id: 'event_kurdishEquipShipment_01',
//         label: 'Izmir → Genoa Equipment Shipment',
//         group: 'Event'
//       },
//       {
//         id: 'event_tunisianCaptagonShipment_01',
//         label: 'Sfax → Palermo → Rome Captagon Shipment',
//         group: 'Event'
//       },

//       // OBJECTS
//       { id: 'obj_cannabis_01', label: 'Cannabis', group: 'Object' },
//       { id: 'obj_rubberBoats_01', label: 'Rubber Boats', group: 'Object' },
//       { id: 'obj_engines_01', label: 'Various Engines', group: 'Object' },
//       { id: 'obj_lifeJackets_01', label: 'Life Jackets', group: 'Object' },
//       { id: 'obj_captagon_01', label: 'Captagon Pills', group: 'Object' },
//       { id: 'obj_variousDrugs_01', label: 'Other Various Drugs', group: 'Object' }
//     ],
//     links: [
//       // CASE STUDY to EVENT
//       { source: 'case_study_1', target: 'event_syrianDurresShipment_01', label: 'includes_event' },
//       { source: 'case_study_1', target: 'event_syrianStorageTorBella_01', label: 'includes_event' },
//       { source: 'case_study_2', target: 'event_kurdishEquipShipment_01', label: 'includes_event' },
//       { source: 'case_study_3', target: 'event_tunisianCaptagonShipment_01', label: 'includes_event' },

//       // CASE STUDY 1: Syrian Operation
//       { source: 'person_syrianGang_01', target: 'org_syrianGang_rome_001', label: 'member_of' },
//       { source: 'person_albanianSupplier_01', target: 'obj_cannabis_01', label: 'supplies' },
//       { source: 'person_nigerianYouth_01', target: 'org_syrianGang_rome_001', label: 'assists_distribution' },
//       { source: 'org_syrianGang_rome_001', target: 'obj_cannabis_01', label: 'stores' },
//       { source: 'obj_cannabis_01', target: 'place_torBella_rome_001', label: 'stored_at' },
//       { source: 'event_syrianDurresShipment_01', target: 'obj_cannabis_01', label: 'involves' },
//       { source: 'event_syrianDurresShipment_01', target: 'org_syrianGang_rome_001', label: 'participants' },
//       { source: 'event_syrianDurresShipment_01', target: 'person_albanianSupplier_01', label: 'participants' },
//       { source: 'event_syrianDurresShipment_01', target: 'place_durresPort_albania_001', label: 'location' },
//       { source: 'event_syrianDurresShipment_01', target: 'place_rome_ports_001', label: 'location' },
//       { source: 'event_syrianStorageTorBella_01', target: 'org_syrianGang_rome_001', label: 'participants' },
//       { source: 'event_syrianStorageTorBella_01', target: 'obj_cannabis_01', label: 'involves' },
//       { source: 'event_syrianStorageTorBella_01', target: 'place_torBella_rome_001', label: 'location' },
//       { source: 'org_syrianGang_rome_001', target: 'place_rome_italy_001', label: 'based_in' },

//       // CASE STUDY 2: Iraqi Kurdish Network
//       { source: 'person_nihadKhoshnaw_01', target: 'org_kurdishOCN_001', label: 'leads' },
//       { source: 'person_nihadKhoshnaw_01', target: 'org_goska_001', label: 'owns' },
//       { source: 'person_kurdishAssociates_01', target: 'org_kurdishOCN_001', label: 'member_of' },
//       { source: 'org_kurdishOCN_001', target: 'event_kurdishEquipShipment_01', label: 'orchestrates' },
//       { source: 'event_kurdishEquipShipment_01', target: 'place_izmirPort_turkey_001', label: 'location' },
//       { source: 'event_kurdishEquipShipment_01', target: 'place_genoaPort_italy_001', label: 'location' },
//       { source: 'event_kurdishEquipShipment_01', target: 'obj_rubberBoats_01', label: 'involves' },
//       { source: 'event_kurdishEquipShipment_01', target: 'obj_engines_01', label: 'involves' },
//       { source: 'event_kurdishEquipShipment_01', target: 'obj_lifeJackets_01', label: 'involves' },
//       { source: 'org_kurdishOCN_001', target: 'org_goska_001', label: 'uses_for_shipping' },
//       { source: 'org_kurdishOCN_001', target: 'place_france_001', label: 'distributes_equipment' },
//       { source: 'org_kurdishOCN_001', target: 'place_belgium_001', label: 'distributes_equipment' },
//       { source: 'org_goska_001', target: 'place_istanbul_turkey_001', label: 'located_in' },

//       // CASE STUDY 3: Tunisian Operation
//       { source: 'org_tunisianGroup_001', target: 'person_tunisianGroup_01', label: 'has_members' },
//       { source: 'person_algerianGang_01', target: 'obj_variousDrugs_01', label: 'supplies' },
//       { source: 'obj_variousDrugs_01', target: 'org_tunisianGroup_001', label: 'owned_by' },
//       { source: 'org_tunisianGroup_001', target: 'event_tunisianCaptagonShipment_01', label: 'participants' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'place_sfax_tunisia_001', label: 'location' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'place_palermo_italy_001', label: 'location' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'place_rome_italy_001', label: 'location' },
//       { source: 'event_tunisianCaptagonShipment_01', target: 'obj_captagon_01', label: 'involves' },
//       { source: 'obj_captagon_01', target: 'place_sfax_tunisia_001', label: 'stored_at' },
//       { source: 'org_tunisianGroup_001', target: 'obj_variousDrugs_01', label: 'obtains' },
//       { source: 'person_algerianGang_01', target: 'place_algeria_001', label: 'based_in' },
//       { source: 'org_tunisianGroup_001', target: 'place_sfax_tunisia_001', label: 'based_in' }
//     ]
//   };

//   // --------------------------------------------------------------------------------
//   // 3. Colour Logic by Group
//   // --------------------------------------------------------------------------------
//   const getNodeColor = (node) => {
//     switch (node.group) {
//       case 'CaseStudy':
//         return '#A9A9A9'; // Dark Gray
//       case 'Person':
//         return '#FF6B6B'; // Red
//       case 'Organisation':
//         return '#1E90FF'; // Blue
//       case 'Place':
//         return '#FFD700'; // Gold
//       case 'Event':
//         return '#BA55D3'; // Purple
//       case 'Object':
//         return '#32CD32'; // LimeGreen
//       default:
//         return '#AAAAAA';
//     }
//   };

//   // --------------------------------------------------------------------------------
//   // 4. linkCanvasObject: Draw Edge Labels at Midpoint
//   // --------------------------------------------------------------------------------
//   const drawLinkLabel = (link, ctx, globalScale) => {
//     if (!link.label) return;
//     const start = link.source;
//     const end = link.target;
//     if (!start || !end) return;

//     // Midpoint
//     const midX = (start.x + end.x) / 2;
//     const midY = (start.y + end.y) / 2;

//     // Font
//     const fontSize = 10 / globalScale;
//     ctx.font = `${fontSize}px Sans-Serif`;
//     ctx.fillStyle = '#555';
//     ctx.fillText(link.label, midX, midY);
//   };

//   // --------------------------------------------------------------------------------
//   // 5. Legend: Node type colours + instructions, placed below the graph
//   // --------------------------------------------------------------------------------
//   const Legend = () => {
//     return (
//       <div
//         style={{
//           marginTop: '1rem',
//           fontSize: '0.875rem',
//           lineHeight: '1.5'
//         }}
//       >
//         <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Legend</h4>

//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//           <span style={{ width: 14, height: 14, backgroundColor: '#A9A9A9', marginRight: 8 }} />
//           Case Study
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//           <span style={{ width: 14, height: 14, backgroundColor: '#FF6B6B', marginRight: 8 }} />
//           Person
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//           <span style={{ width: 14, height: 14, backgroundColor: '#1E90FF', marginRight: 8 }} />
//           Organisation
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//           <span style={{ width: 14, height: 14, backgroundColor: '#FFD700', marginRight: 8 }} />
//           Place
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
//           <span style={{ width: 14, height: 14, backgroundColor: '#BA55D3', marginRight: 8 }} />
//           Event
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
//           <span style={{ width: 14, height: 14, backgroundColor: '#32CD32', marginRight: 8 }} />
//           Object
//         </div>
//       </div>
//     );
//   };

//   // --------------------------------------------------------------------------------
//   // 6. Render: Left-Aligned Heading, Graph Container, Legend Below
//   // --------------------------------------------------------------------------------
//   return (
//     <div style={{ width: '100%' }}>
//       {/* Title */}
//       <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem',marginTop: '1rem' }}>
//         Network Graph Visualisation
//       </h3>

//       {/* Graph Container */}
//       <div
//         ref={containerRef}
//         style={{
//           width: '100%',
//           height: '70vh',
//           border: '2px solid #ccc',
//           borderRadius: '8px',
//           backgroundColor: '#fff',
//           position: 'relative',
//           overflow: 'hidden'
//         }}
//       >
//         <ForceGraph2D
//           graphData={data}
//           width={dimensions.width}
//           height={dimensions.height}
//           // Spread-out layout
//           d3Force="link"
//           d3ForceConfig={{ link: { distance: 200 } }}
//           // Lock node after drag
//           onNodeDragEnd={(node) => {
//             node.fx = node.x;
//             node.fy = node.y;
//           }}
//           linkColor={() => '#999'}
//           linkDirectionalArrowLength={4}
//           linkDirectionalArrowRelPos={1}
//           // Edge labels
//           linkCanvasObjectMode={() => 'after'}
//           linkCanvasObject={(link, ctx, globalScale) => drawLinkLabel(link, ctx, globalScale)}
//           // Node drawing
//           nodeCanvasObject={(node, ctx, globalScale) => {
//             ctx.beginPath();
//             ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI, false);
//             ctx.fillStyle = getNodeColor(node);
//             ctx.fill();

//             const label = node.label;
//             const fontSize = 12 / globalScale;
//             ctx.font = `${fontSize}px Sans-Serif`;
//             ctx.textAlign = 'center';
//             ctx.textBaseline = 'middle';

//             const textWidth = ctx.measureText(label).width;
//             if (textWidth < 16) {
//               ctx.fillStyle = '#fff';
//               ctx.fillText(label, node.x, node.y);
//             } else {
//               ctx.fillStyle = '#000';
//               ctx.textBaseline = 'top';
//               ctx.fillText(label, node.x, node.y + 10);
//             }
//           }}
//           nodeLabel={(node) => `${node.label} [${node.group}]`}
//           zoomToFit
//         />
//       </div>

//       {/* Legend Underneath */}
//       <Legend />
//     </div>
//   );
// }

// export default NetworkGraph;












import React, { useRef, useState, useEffect } from 'react';
import { ForceGraph2D } from 'react-force-graph';

function NetworkGraph() {
  // --------------------------------------------------------------------------------
  // 1. Responsive Container Logic
  // --------------------------------------------------------------------------------
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  // REFERENCE FOR THE FORCE GRAPH
  const forceRef = useRef(null); // <-- ADD THIS

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --------------------------------------------------------------------------------
  // 2. Full Data: All Nodes + Links (Three Case Studies)
  // --------------------------------------------------------------------------------
  const data = {
    nodes: [
      // CASE STUDY NODES
      { id: 'case_study_1', label: 'Case Study 1: Syrian Operation', group: 'CaseStudy' },
      { id: 'case_study_2', label: 'Case Study 2: Iraqi Kurdish Network', group: 'CaseStudy' },
      { id: 'case_study_3', label: 'Case Study 3: Tunisian Operation', group: 'CaseStudy' },

      // PEOPLE
      { id: 'person_syrianGang_01', label: 'Syrian Gang Member(s)', group: 'Person' },
      { id: 'person_albanianSupplier_01', label: 'Albanian Supplier', group: 'Person' },
      { id: 'person_nigerianYouth_01', label: 'Nigerian Youth(s)', group: 'Person' },
      { id: 'person_nihadKhoshnaw_01', label: 'Nihad Khoshnaw (Sheikh Nihad)', group: 'Person' },
      { id: 'person_kurdishAssociates_01', label: 'Iraqi Kurdish Associates', group: 'Person' },
      { id: 'person_tunisianGroup_01', label: 'Tunisian Group Member(s)', group: 'Person' },
      { id: 'person_algerianGang_01', label: 'Algerian Gang(s)', group: 'Person' },

      // ORGANISATIONS
      { id: 'org_syrianGang_rome_001', label: 'Syrian Gang (Rome)', group: 'Organisation' },
      { id: 'org_kurdishOCN_001', label: 'Iraqi Kurdish OCN', group: 'Organisation' },
      { id: 'org_goska_001', label: 'GOSKA OTOMOTIV VE INSAAT', group: 'Organisation' },
      { id: 'org_tunisianGroup_001', label: 'Tunisian Criminal Group', group: 'Organisation' },

      // PLACES
      { id: 'place_torBella_rome_001', label: 'Tor Bella Monaca (Rome)', group: 'Place' },
      { id: 'place_durresPort_albania_001', label: 'Durres Port (Albania)', group: 'Place' },
      { id: 'place_rome_ports_001', label: 'Small Ports near Rome', group: 'Place' },
      { id: 'place_istanbul_turkey_001', label: 'Istanbul / Aksaray (Turkey)', group: 'Place' },
      { id: 'place_izmirPort_turkey_001', label: 'Izmir Port (Turkey)', group: 'Place' },
      { id: 'place_genoaPort_italy_001', label: 'Genoa Port (Italy)', group: 'Place' },
      { id: 'place_france_001', label: 'France', group: 'Place' },
      { id: 'place_belgium_001', label: 'Belgium', group: 'Place' },
      { id: 'place_sfax_tunisia_001', label: 'Sfax (Tunisia)', group: 'Place' },
      { id: 'place_palermo_italy_001', label: 'Palermo (Italy)', group: 'Place' },
      { id: 'place_rome_italy_001', label: 'Rome (Italy)', group: 'Place' },
      { id: 'place_algeria_001', label: 'Algeria', group: 'Place' },

      // EVENTS
      {
        id: 'event_syrianDurresShipment_01',
        label: 'Durres → Rome Cannabis Shipment',
        group: 'Event'
      },
      {
        id: 'event_syrianStorageTorBella_01',
        label: 'Storage at Tor Bella Monaca',
        group: 'Event'
      },
      {
        id: 'event_kurdishEquipShipment_01',
        label: 'Izmir → Genoa Equipment Shipment',
        group: 'Event'
      },
      {
        id: 'event_tunisianCaptagonShipment_01',
        label: 'Sfax → Palermo → Rome Captagon Shipment',
        group: 'Event'
      },

      // OBJECTS
      { id: 'obj_cannabis_01', label: 'Cannabis', group: 'Object' },
      { id: 'obj_rubberBoats_01', label: 'Rubber Boats', group: 'Object' },
      { id: 'obj_engines_01', label: 'Various Engines', group: 'Object' },
      { id: 'obj_lifeJackets_01', label: 'Life Jackets', group: 'Object' },
      { id: 'obj_captagon_01', label: 'Captagon Pills', group: 'Object' },
      { id: 'obj_variousDrugs_01', label: 'Other Various Drugs', group: 'Object' }
    ],
    links: [
      // CASE STUDY to EVENT
      { source: 'case_study_1', target: 'event_syrianDurresShipment_01', label: 'includes_event' },
      { source: 'case_study_1', target: 'event_syrianStorageTorBella_01', label: 'includes_event' },
      { source: 'case_study_2', target: 'event_kurdishEquipShipment_01', label: 'includes_event' },
      { source: 'case_study_3', target: 'event_tunisianCaptagonShipment_01', label: 'includes_event' },

      // CASE STUDY 1: Syrian Operation
      { source: 'person_syrianGang_01', target: 'org_syrianGang_rome_001', label: 'member_of' },
      { source: 'person_albanianSupplier_01', target: 'obj_cannabis_01', label: 'supplies' },
      { source: 'person_nigerianYouth_01', target: 'org_syrianGang_rome_001', label: 'assists_distribution' },
      { source: 'org_syrianGang_rome_001', target: 'obj_cannabis_01', label: 'stores' },
      { source: 'obj_cannabis_01', target: 'place_torBella_rome_001', label: 'stored_at' },
      { source: 'event_syrianDurresShipment_01', target: 'obj_cannabis_01', label: 'involves' },
      { source: 'event_syrianDurresShipment_01', target: 'org_syrianGang_rome_001', label: 'participants' },
      { source: 'event_syrianDurresShipment_01', target: 'person_albanianSupplier_01', label: 'participants' },
      { source: 'event_syrianDurresShipment_01', target: 'place_durresPort_albania_001', label: 'location' },
      { source: 'event_syrianDurresShipment_01', target: 'place_rome_ports_001', label: 'location' },
      { source: 'event_syrianStorageTorBella_01', target: 'org_syrianGang_rome_001', label: 'participants' },
      { source: 'event_syrianStorageTorBella_01', target: 'obj_cannabis_01', label: 'involves' },
      { source: 'event_syrianStorageTorBella_01', target: 'place_torBella_rome_001', label: 'location' },
      { source: 'org_syrianGang_rome_001', target: 'place_rome_italy_001', label: 'based_in' },

      // CASE STUDY 2: Iraqi Kurdish Network
      { source: 'person_nihadKhoshnaw_01', target: 'org_kurdishOCN_001', label: 'leads' },
      { source: 'person_nihadKhoshnaw_01', target: 'org_goska_001', label: 'owns' },
      { source: 'person_kurdishAssociates_01', target: 'org_kurdishOCN_001', label: 'member_of' },
      { source: 'org_kurdishOCN_001', target: 'event_kurdishEquipShipment_01', label: 'orchestrates' },
      { source: 'event_kurdishEquipShipment_01', target: 'place_izmirPort_turkey_001', label: 'location' },
      { source: 'event_kurdishEquipShipment_01', target: 'place_genoaPort_italy_001', label: 'location' },
      { source: 'event_kurdishEquipShipment_01', target: 'obj_rubberBoats_01', label: 'involves' },
      { source: 'event_kurdishEquipShipment_01', target: 'obj_engines_01', label: 'involves' },
      { source: 'event_kurdishEquipShipment_01', target: 'obj_lifeJackets_01', label: 'involves' },
      { source: 'org_kurdishOCN_001', target: 'org_goska_001', label: 'uses_for_shipping' },
      { source: 'org_kurdishOCN_001', target: 'place_france_001', label: 'distributes_equipment' },
      { source: 'org_kurdishOCN_001', target: 'place_belgium_001', label: 'distributes_equipment' },
      { source: 'org_goska_001', target: 'place_istanbul_turkey_001', label: 'located_in' },

      // CASE STUDY 3: Tunisian Operation
      { source: 'org_tunisianGroup_001', target: 'person_tunisianGroup_01', label: 'has_members' },
      { source: 'person_algerianGang_01', target: 'obj_variousDrugs_01', label: 'supplies' },
      { source: 'obj_variousDrugs_01', target: 'org_tunisianGroup_001', label: 'owned_by' },
      { source: 'org_tunisianGroup_001', target: 'event_tunisianCaptagonShipment_01', label: 'participants' },
      { source: 'event_tunisianCaptagonShipment_01', target: 'place_sfax_tunisia_001', label: 'location' },
      { source: 'event_tunisianCaptagonShipment_01', target: 'place_palermo_italy_001', label: 'location' },
      { source: 'event_tunisianCaptagonShipment_01', target: 'place_rome_italy_001', label: 'location' },
      { source: 'event_tunisianCaptagonShipment_01', target: 'obj_captagon_01', label: 'involves' },
      { source: 'obj_captagon_01', target: 'place_sfax_tunisia_001', label: 'stored_at' },
      { source: 'org_tunisianGroup_001', target: 'obj_variousDrugs_01', label: 'obtains' },
      { source: 'person_algerianGang_01', target: 'place_algeria_001', label: 'based_in' },
      { source: 'org_tunisianGroup_001', target: 'place_sfax_tunisia_001', label: 'based_in' }
    ]
  };

  // --------------------------------------------------------------------------------
  // 3. Colour Logic by Group
  // --------------------------------------------------------------------------------
  const getNodeColor = (node) => {
    switch (node.group) {
      case 'CaseStudy':
        return '#A9A9A9'; // Dark Gray
      case 'Person':
        return '#FF6B6B'; // Red
      case 'Organisation':
        return '#1E90FF'; // Blue
      case 'Place':
        return '#FFD700'; // Gold
      case 'Event':
        return '#BA55D3'; // Purple
      case 'Object':
        return '#32CD32'; // LimeGreen
      default:
        return '#AAAAAA';
    }
  };

  // --------------------------------------------------------------------------------
  // 4. linkCanvasObject: Draw Edge Labels at Midpoint
  // --------------------------------------------------------------------------------
  const drawLinkLabel = (link, ctx, globalScale) => {
    if (!link.label) return;
    const start = link.source;
    const end = link.target;
    if (!start || !end) return;

    // Midpoint
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2;

    // Font
    const fontSize = 10 / globalScale;
    ctx.font = `${fontSize}px Sans-Serif`;
    ctx.fillStyle = '#555';
    ctx.fillText(link.label, midX, midY);
  };

  // --------------------------------------------------------------------------------
  // 5. Legend: Node type colours + instructions, placed below the graph
  // --------------------------------------------------------------------------------
  const Legend = () => {
    return (
      <div
        style={{
          marginTop: '1rem',
          fontSize: '0.875rem',
          lineHeight: '1.5'
        }}
      >
        <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Legend</h4>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
          <span style={{ width: 14, height: 14, backgroundColor: '#A9A9A9', marginRight: 8 }} />
          Case Study
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
          <span style={{ width: 14, height: 14, backgroundColor: '#FF6B6B', marginRight: 8 }} />
          Person
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
          <span style={{ width: 14, height: 14, backgroundColor: '#1E90FF', marginRight: 8 }} />
          Organisation
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
          <span style={{ width: 14, height: 14, backgroundColor: '#FFD700', marginRight: 8 }} />
          Place
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
          <span style={{ width: 14, height: 14, backgroundColor: '#BA55D3', marginRight: 8 }} />
          Event
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span style={{ width: 14, height: 14, backgroundColor: '#32CD32', marginRight: 8 }} />
          Object
        </div>
      </div>
    );
  };

  // --------------------------------------------------------------------------------
  // 6. Render: Left-Aligned Heading, Graph Container, Legend Below, + Reset Button
  // --------------------------------------------------------------------------------
  return (
    <div style={{ width: '100%' }}>
      {/* Title */}
      <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '1rem' }}>
        Network Graph Visualisation
      </h3>

      {/* 
        RESET VIEW BUTTON 
        Place wherever is most convenient. 
        Calls forceRef.current.zoomToFit(400) to reset the graph layout.
      */}
      <button
        onClick={() => {
          if (forceRef.current) {
            forceRef.current.zoomToFit(400);
          }
        }}
        style={{
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          fontSize: '0.9rem',
          cursor: 'pointer'
        }}
      >
        Reset View
      </button>

      {/* Graph Container */}
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '70vh',
          border: '2px solid #ccc',
          borderRadius: '8px',
          backgroundColor: '#fff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <ForceGraph2D
          // Using the ref so we can call zoomToFit
          ref={forceRef}
          graphData={data}
          width={dimensions.width}
          height={dimensions.height}
          // Spread-out layout
          d3Force="link"
          d3ForceConfig={{ link: { distance: 200 } }}
          // Lock node after drag
          onNodeDragEnd={(node) => {
            node.fx = node.x;
            node.fy = node.y;
          }}
          linkColor={() => '#999'}
          linkDirectionalArrowLength={4}
          linkDirectionalArrowRelPos={1}
          // Edge labels
          linkCanvasObjectMode={() => 'after'}
          linkCanvasObject={(link, ctx, globalScale) => drawLinkLabel(link, ctx, globalScale)}
          // Node drawing
          nodeCanvasObject={(node, ctx, globalScale) => {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI, false);
            ctx.fillStyle = getNodeColor(node);
            ctx.fill();

            const label = node.label;
            const fontSize = 12 / globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            const textWidth = ctx.measureText(label).width;
            if (textWidth < 16) {
              ctx.fillStyle = '#fff';
              ctx.fillText(label, node.x, node.y);
            } else {
              ctx.fillStyle = '#000';
              ctx.textBaseline = 'top';
              ctx.fillText(label, node.x, node.y + 10);
            }
          }}
          nodeLabel={(node) => `${node.label} [${node.group}]`}
          zoomToFit
        />
      </div>

      {/* Legend Underneath */}
      <Legend />
    </div>
  );
}

export default NetworkGraph;
