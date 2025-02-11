// import React from 'react';

// function PersonsOfInterestTable() {
//   // Generate 20 placeholder rows
//   const rows = Array.from({ length: 20 }, (_, i) => ({
//     image: i % 2 === 0 ? '/images/1.png' : '/images/2.png',
//     caseStudy: `Case Study ${((i % 3) + 1)}`, // cycles 1, 2, 3
//     role: 'Placeholder Role',
//     nationality: 'Placeholder Nationality',
//     name: 'Placeholder Name'
//   }));

//   return (
//     // Light grey container with slightly rounded corners
//     <div
//       style={{
//         backgroundColor: '#f3f4f6', // Light grey
//         borderRadius: '8px',
//         padding: '1rem',
//         width: '100%'
//       }}
//     >
//       <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem'}}>
//         Persons of Interest
//       </h3>

//       {/* Responsive table container */}
//       <div style={{ width: '100%', overflowX: 'auto' }}>
//         <table
//           style={{
//             width: '100%',
//             borderCollapse: 'collapse',
//             minWidth: '600px'
//           }}
//         >
//           <thead>
//             <tr>
//               {/* IMAGE COLUMN (150×180 px images) */}
//               <th
//                 style={{
//                   width: '220px',
//                   padding: '12px',
//                   borderBottom: '2px solid #ccc',
//                   backgroundColor: '#f9f9f9',
//                   textAlign: 'left'
//                 }}
//               >
//                 Image
//               </th>
//               {/* Other columns, right-aligned */}
//               <th
//                 style={{
//                   padding: '12px',
//                   borderBottom: '2px solid #ccc',
//                   backgroundColor: '#f9f9f9',
//                   textAlign: 'right'
//                 }}
//               >
//                 Case study
//               </th>
//               <th
//                 style={{
//                   padding: '12px',
//                   borderBottom: '2px solid #ccc',
//                   backgroundColor: '#f9f9f9',
//                   textAlign: 'right'
//                 }}
//               >
//                 Role
//               </th>
//               <th
//                 style={{
//                   padding: '12px',
//                   borderBottom: '2px solid #ccc',
//                   backgroundColor: '#f9f9f9',
//                   textAlign: 'right'
//                 }}
//               >
//                 Nationality
//               </th>
//               <th
//                 style={{
//                   padding: '12px',
//                   borderBottom: '2px solid #ccc',
//                   backgroundColor: '#f9f9f9',
//                   textAlign: 'right'
//                 }}
//               >
//                 Name
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((row, index) => (
//               <tr key={index}>
//                 {/* IMAGE CELL */}
//                 <td
//                   style={{
//                     padding: '10px',
//                     borderBottom: '1px solid #ddd',
//                     verticalAlign: 'middle'
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: '150px',
//                       height: '180px',
//                       overflow: 'hidden',
//                       borderRadius: '4px'
//                     }}
//                   >
//                     <img
//                       src={row.image}
//                       alt="Person"
//                       style={{
//                         width: '150px',
//                         height: '180px',
//                         objectFit: 'cover'
//                       }}
//                     />
//                   </div>
//                 </td>

//                 {/* OTHER COLUMNS, RIGHT-ALIGNED */}
//                 <td
//                   style={{
//                     padding: '10px',
//                     borderBottom: '1px solid #ddd',
//                     textAlign: 'right',
//                     verticalAlign: 'middle'
//                   }}
//                 >
//                   {row.caseStudy}
//                 </td>
//                 <td
//                   style={{
//                     padding: '10px',
//                     borderBottom: '1px solid #ddd',
//                     textAlign: 'right',
//                     verticalAlign: 'middle'
//                   }}
//                 >
//                   {row.role}
//                 </td>
//                 <td
//                   style={{
//                     padding: '10px',
//                     borderBottom: '1px solid #ddd',
//                     textAlign: 'right',
//                     verticalAlign: 'middle'
//                   }}
//                 >
//                   {row.nationality}
//                 </td>
//                 <td
//                   style={{
//                     padding: '10px',
//                     borderBottom: '1px solid #ddd',
//                     textAlign: 'right',
//                     verticalAlign: 'middle'
//                   }}
//                 >
//                   {row.name}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default PersonsOfInterestTable;































import React from 'react';

function PersonsOfInterestTable() {
  // Create placeholder data for 20 rows
  const placeholderData = [
    {
      image: '/images/1.png',
      caseStudy: 'Case Study 2',
      role: 'Coordinator',
      nationality: 'Unknown',
      location: 'Istanbul, TUR',
      name: 'Nined Noshnaw MOHSIN'
    },
    {
      image: '/images/2.png',
      caseStudy: 'Case Study 2',
      role: 'Facilitator',
      nationality: 'Unknown',
      location: 'Irag Turkey',
      name: 'Awat SAVIZA'
    },
    {
      image: '/images/3.png',
      caseStudy: 'Case Study 2',
      role: 'Facilitator',
      nationality: 'Unknown',
      location: 'Irag Turkey',
      name: 'Makan HARLITI'
    },
    {
      image: '/images/4.png',
      caseStudy: 'Case Study 2',
      role: 'Facilitator',
      nationality: 'Unknown',
      location: 'Irag Turkey',
      name: 'Rafa SHAQLAWAY'
    },
    {
      image: '/images/5.png',
      caseStudy: 'Case Study 2',
      role: 'Facilitator',
      nationality: 'Unknown',
      location: 'Istanbul, TUR',
      name: 'Big BAHROZ'
    },
    {
      image: '/images/6.png',
      caseStudy: 'Case Study 2',
      role: 'Agent',
      nationality: 'Unknown',
      location: 'Unknown',
      name: 'Kardo RARYAE'
    },
    {
      image: '/images/7.png',
      caseStudy: 'Case Study 2',
      role: 'Agent',
      nationality: 'Unknown',
      location: 'Unknown',
      name: 'Xareb HASAN'
    },
    {
      image: '/images/8.png',
      caseStudy: 'Case Study 2',
      role: 'Agent',
      nationality: 'Unknown',
      location: 'Unknown',
      name: 'Jeg Zewaly XO5HNAV'
    },
    {
      image: '/images/9.png',
      caseStudy: 'Case Study 2',
      role: 'Agent',
      nationality: 'Unknown',
      location: 'Unknown',
      name: 'UNKNOWN'
    },
    {
      image: '/images/10.png',
      caseStudy: 'Case Study 3',
      role: 'Smuggler',
      nationality: 'Syrian',
      location: 'Unknown',
      name: 'Hamza AL-ABD'
    },
    {
      image: '/images/11.png',
      caseStudy: 'Case Study 3',
      role: 'Unknown',
      nationality: 'Unknown 11',
      location: 'Unknown',
      name: 'Unknown'
    },
    {
      image: '/images/12.png',
      caseStudy: 'Case Study 3',
      role: 'Unknown',
      nationality: 'Unknown',
      location: 'Unknown',
      name: 'Unknown'
    },
    {
      image: '/images/13.png',
      caseStudy: 'Case Study 3',
      role: 'Unknown',
      nationality: 'Unknown',
      location: 'Unknown',
      name: 'Unknown13'
    },
    {
      image: '/images/14.png',
      caseStudy: 'Case Study 3',
      role: 'Smuggler',
      nationality: 'Unkown',
      location: 'Unknown',
      name: 'Tariq Muhammad Sheikh HAIDER'
    },
    {
      image: '/images/15.png',
      caseStudy: 'Case Study 3',
      role: 'Smuggler',
      nationality: 'Tunisian',
      location: 'Unknown',
      name: 'Aymen LABIDI'
    },
    {
      image: '/images/16.png',
      caseStudy: 'Case Study 3',
      role: 'Unknown',
      nationality: 'Kurd',
      location: 'Unknown',
      name: 'Sarkhil HAWRI'
    },
    {
      image: '/images/17.png',
      caseStudy: 'Case Study 3',
      role: 'Smuggler, transport facilitator',
      nationality: 'Unknown',
      location: 'Unknown',
      name: 'Unknown'
    },
    {
      image: '/images/18.png',
      caseStudy: 'Case Study 3',
      role: 'Unknown',
      nationality: 'Tunisian',
      location: 'Unknown',
      name: 'Mehdi BOUDHIBA'
    },
    {
      image: '/images/19.png',
      caseStudy: 'Case Study 3',
      role: 'Unknown',
      nationality: 'Kurd',
      location: 'Unknown',
      name: 'Kawa OTHMAN'
    },
    {
      image: '/images/20.png',
      caseStudy: 'Case Study 3',
      role: 'Unknown',
      nationality: 'Iraqi',
      location: 'Unknown',
      name: 'Biston AHMED'
    }
  ];

  return (
    <div
      style={{
        backgroundColor: '#f3f4f6', // Light grey
        borderRadius: '8px',
        padding: '1rem',
        width: '100%'
      }}
    >
      <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem'}}>
        Persons of Interest
      </h3>

      {/* Responsive table container */}
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '600px'
          }}
        >
          <thead>
            <tr>
              {/* IMAGE COLUMN (150×180 px images) */}
              <th
                style={{
                  width: '220px',
                  padding: '12px',
                  borderBottom: '2px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  textAlign: 'left'
                }}
              >
                Image
              </th>
              {/* Other columns, right-aligned */}
              <th
                style={{
                  padding: '12px',
                  borderBottom: '2px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  textAlign: 'right'
                }}
              >
                Case study
              </th>
              <th
                style={{
                  padding: '12px',
                  borderBottom: '2px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  textAlign: 'right'
                }}
              >
                Role
              </th>
              <th
                style={{
                  padding: '12px',
                  borderBottom: '2px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  textAlign: 'right'
                }}
              >
                Nationality
              </th>
              <th
                style={{
                  padding: '12px',
                  borderBottom: '2px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  textAlign: 'right'
                }}
              >
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {placeholderData.map((row, index) => (
              <tr key={index}>
                {/* IMAGE CELL */}
                <td
                  style={{
                    padding: '10px',
                    borderBottom: '1px solid #ddd',
                    verticalAlign: 'middle'
                  }}
                >
                  <div
                    style={{
                      width: '150px',
                      height: '180px',
                      overflow: 'hidden',
                      borderRadius: '4px'
                    }}
                  >
                    <img
                      src={row.image}
                      alt="Person"
                      style={{
                        width: '150px',
                        height: '180px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </td>

                {/* OTHER COLUMNS, RIGHT-ALIGNED */}
                <td
                  style={{
                    padding: '10px',
                    borderBottom: '1px solid #ddd',
                    textAlign: 'right',
                    verticalAlign: 'middle'
                  }}
                >
                  {row.caseStudy}
                </td>
                <td
                  style={{
                    padding: '10px',
                    borderBottom: '1px solid #ddd',
                    textAlign: 'right',
                    verticalAlign: 'middle'
                  }}
                >
                  {row.role}
                </td>
                <td
                  style={{
                    padding: '10px',
                    borderBottom: '1px solid #ddd',
                    textAlign: 'right',
                    verticalAlign: 'middle'
                  }}
                >
                  {row.nationality}
                </td>
                <td
                  style={{
                    padding: '10px',
                    borderBottom: '1px solid #ddd',
                    textAlign: 'right',
                    verticalAlign: 'middle'
                  }}
                >
                  {row.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PersonsOfInterestTable;
