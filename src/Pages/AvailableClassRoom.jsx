// import React, { useState } from 'react';
// import ScheduleCard from '../Components/ScheduleCard';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

// // Import the images for the buildings
// import dt from '../assets/dt.jpg';
// import mba from '../assets/mba.jpg';
// import fy from '../assets/fy.jpg';
// import bio from '../assets/bio.jpg';
// import mech from '../assets/mech.jpg';
// import it from '../assets/it.jpg';
// import mca from '../assets/mca.jpg';

// // Define the buildings data
// const buildings = [
//   {
//     name: 'Digital Tower',
//     image: dt,
//     schedule: [
//       { time: '11:00 AM - 12:00 PM', rooms: [{ number: '101', isAvailable: true }, { number: '102', isAvailable: false }] },
//       { time: '12:00 PM - 1:00 PM', rooms: [{ number: '101', isAvailable: false }, { number: '102', isAvailable: true }] },
//     ],
//   },
//   {
//     name: 'MBA Building',
//     image: mba,
//     schedule: [
//       { time: '11:00 AM - 12:00 PM', rooms: [{ number: '201', isAvailable: true }, { number: '202', isAvailable: true }] },
//       { time: '12:00 PM - 1:00 PM', rooms: [{ number: '201', isAvailable: false }, { number: '202', isAvailable: false }] },
//     ],
//   },
//   {
//     name: 'First-Year Block',
//     image: fy,
//     schedule: [
//       { time: '11:00 AM - 12:00 PM', rooms: [{ number: '301', isAvailable: true }, { number: '302', isAvailable: false }] },
//       { time: '12:00 PM - 1:00 PM', rooms: [{ number: '301', isAvailable: true }, { number: '302', isAvailable: true }] },
//     ],
//   },
//   {
//     name: 'Biomedical & ENCS Building',
//     image: bio,
//     schedule: [
//       { time: '11:00 AM - 12:00 PM', rooms: [{ number: '401', isAvailable: true }, { number: '402', isAvailable: false }] },
//       { time: '12:00 PM - 1:00 PM', rooms: [{ number: '401', isAvailable: true }, { number: '402', isAvailable: true }] },
//     ],
//   },
//   {
//     name: 'Mechanical Engineering Building',
//     image: mech,
//     schedule: [
//       { time: '11:00 AM - 12:00 PM', rooms: [{ number: '501', isAvailable: false }, { number: '502', isAvailable: true }] },
//       { time: '12:00 PM - 1:00 PM', rooms: [{ number: '501', isAvailable: true }, { number: '502', isAvailable: false }] },
//     ],
//   },
//   {
//     name: 'Computer Science & IT Building',
//     image: it,
//     schedule: [
//       { time: '11:00 AM - 12:00 PM', rooms: [{ number: '601', isAvailable: true }, { number: '602', isAvailable: true }] },
//       { time: '12:00 PM - 1:00 PM', rooms: [{ number: '601', isAvailable: false }, { number: '602', isAvailable: true }] },
//     ],
//   },
//   {
//     name: 'MCA Building',
//     image: mca,
//     schedule: [
//       { time: '11:00 AM - 12:00 PM', rooms: [{ number: '701', isAvailable: true }, { number: '702', isAvailable: true }] },
//       { time: '12:00 PM - 1:00 PM', rooms: [{ number: '701', isAvailable: false }, { number: '702', isAvailable: true }] },
//     ],
//   },
// ];

// function ClassroomList() {
//   const [expandedCardIndex, setExpandedCardIndex] = useState(null);

//   const handleShowSchedule = (index) => {
//     setExpandedCardIndex(expandedCardIndex === index ? null : index);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-wrap w-full p-4 gap-6 justify-center">
//         {buildings.map((building, index) => (
//           <ScheduleCard
//             key={index}
//             buildingName={building.name}
//             buildingImage={building.image}
//             onToggleSchedule={() => handleShowSchedule(index)}
//           />
//         ))}
//       </div>

//       {expandedCardIndex !== null && (
//         <div className="fixed right-0 top-20 h-full bg-white text-gray-900 rounded-lg p-4 w-80 shadow-lg overflow-y-auto">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold">{buildings[expandedCardIndex].name}</h2>
//             <button
//               className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
//               onClick={() => setExpandedCardIndex(null)}
//             >
//               ✕
//             </button>
//           </div>
//           <img
//             src={buildings[expandedCardIndex].image}
//             alt={buildings[expandedCardIndex].name}
//             className="rounded-lg mb-4 h-60 w-fit object-cover"
//           />
//           {buildings[expandedCardIndex].schedule.map((slot, index) => (
//             <div key={index} className="mb-2">
//               <strong className="block mb-2 text-gray-700">{slot.time}</strong>
//               {slot.rooms.map((room, idx) => (
//                 <div
//                   key={idx}
//                   className={`p-3 rounded-lg flex justify-between items-center mb-2 transition-all duration-300 
//                     ${room.isAvailable ? 'hover:border-green-600 border border-gray-300' : 'hover:border-red-600 border border-gray-300'}
//                     border-2`}
//                 >
//                   <span className="font-medium">{room.number}</span>
//                   <span className={room.isAvailable ? 'text-green-600' : 'text-red-600'}>
//                     {room.isAvailable ? 'Available' : 'Unavailable'}
//                   </span>
//                   <svg className="w-5 h-5 text-gray-500" /* Add your arrow icon here */ />
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}
//       <Footer />
//     </div>
//   );
// }

// export default ClassroomList;
import React, { useState } from 'react';
import ScheduleCard from '../Components/CardL';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import dt from '../assets/dt.jpg';
import mba from '../assets/mba.jpg';
import fy from '../assets/fy.jpg';
import bio from '../assets/bio.jpg';
import mech from '../assets/mech.jpg';
import it from '../assets/it.jpg';
import mca from '../assets/mca.jpg';

// Building data with schedules
const buildings = [
  {
    name: 'Digital Tower',
    image: dt,
    dateListed: '2024-10-01',
    schedule: [
      { time: '11:00 AM - 12:00 PM', rooms: [{ number: '101', isAvailable: true }, { number: '102', isAvailable: false }] },
      { time: '12:00 PM - 1:00 PM', rooms: [{ number: '101', isAvailable: false }, { number: '102', isAvailable: true }] },
    ],
  },
  {
    name: 'MBA Building',
    image: mba,
    dateListed: '2024-10-02',
    schedule: [
      { time: '11:00 AM - 12:00 PM', rooms: [{ number: '201', isAvailable: true }, { number: '202', isAvailable: true }] },
      { time: '12:00 PM - 1:00 PM', rooms: [{ number: '201', isAvailable: false }, { number: '202', isAvailable: false }] },
    ],
  },
  {
    name: 'First-Year Block',
    image: fy,
    dateListed: '2024-10-03',
    schedule: [
      { time: '11:00 AM - 12:00 PM', rooms: [{ number: '301', isAvailable: true }, { number: '302', isAvailable: false }] },
      { time: '12:00 PM - 1:00 PM', rooms: [{ number: '301', isAvailable: true }, { number: '302', isAvailable: true }] },
    ],
  },
  {
    name: 'Biomedical & ENCS Building',
    image: bio,
    dateListed: '2024-10-04',
    schedule: [
      { time: '11:00 AM - 12:00 PM', rooms: [{ number: '401', isAvailable: true }, { number: '402', isAvailable: false }] },
      { time: '12:00 PM - 1:00 PM', rooms: [{ number: '401', isAvailable: true }, { number: '402', isAvailable: true }] },
    ],
  },
  {
    name: 'Mechanical Engineering Building',
    image: mech,
    dateListed: '2024-10-05',
    schedule: [
      { time: '11:00 AM - 12:00 PM', rooms: [{ number: '501', isAvailable: false }, { number: '502', isAvailable: true }] },
      { time: '12:00 PM - 1:00 PM', rooms: [{ number: '501', isAvailable: true }, { number: '502', isAvailable: false }] },
    ],
  },
  {
    name: 'Computer Science & IT Building',
    image: it,
    dateListed: '2024-10-06',
    schedule: [
      { time: '11:00 AM - 12:00 PM', rooms: [{ number: '601', isAvailable: true }, { number: '602', isAvailable: true }] },
      { time: '12:00 PM - 1:00 PM', rooms: [{ number: '601', isAvailable: false }, { number: '602', isAvailable: true }] },
    ],
  },
  {
    name: 'MCA Building',
    image: mca,
    dateListed: '2024-10-07',
    schedule: [
      { time: '11:00 AM - 12:00 PM', rooms: [{ number: '701', isAvailable: true }, { number: '702', isAvailable: true }] },
      { time: '12:00 PM - 1:00 PM', rooms: [{ number: '701', isAvailable: false }, { number: '702', isAvailable: true }] },
    ],
  },
];

const ClassroomList = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const handleShowSchedule = (index) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  return (
    <>
      <Navbar/>
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <div
        className={`flex flex-wrap gap-6 p-4 justify-center transition-all duration-300 ${
          expandedCardIndex !== null ? 'w-4/5' : 'w-full'
        }`}
        >
        {buildings.map((building, index) => (
          <ScheduleCard
          key={index}
            buildingName={building.name}
            buildingImage={building.image}
            onToggleSchedule={() => handleShowSchedule(index)}
          />
        ))}
      </div>

      {expandedCardIndex !== null && (
        <div className="fixed right-0 top-0 h-full bg-white text-gray-900 rounded-lg p-4 w-1/5 shadow-lg overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{buildings[expandedCardIndex].name}</h2>
            <button
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
              onClick={() => setExpandedCardIndex(null)}
              >
              ✕
            </button>
          </div>
          <img
            src={buildings[expandedCardIndex].image}
            alt={buildings[expandedCardIndex].name}
            className="rounded-lg mb-4 h-60 w-full object-cover"
            />
          {buildings[expandedCardIndex].schedule.map((slot, index) => (
            <div key={index} className="mb-2">
              <strong className="block mb-2 text-gray-700">{slot.time}</strong>
              {slot.rooms.map((room, idx) => (
                <div
                key={idx}
                className={`p-3 rounded-lg flex justify-between items-center mb-2 transition-all duration-300 
                  ${room.isAvailable ? 'hover:border-green-600 border border-gray-300' : 'hover:border-red-600 border border-gray-300'}
                    border-2`}
                    >
                  <span className="font-medium">{room.number}</span>
                  <span className={room.isAvailable ? 'text-green-600' : 'text-red-600'}>
                    {room.isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                  <svg className="w-5 h-5 text-gray-500" /* Add your arrow icon here */ />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
      <Footer/>
      </>
  );
};

export default ClassroomList;