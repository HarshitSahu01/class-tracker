// import React from 'react';
// import greenDot from "../assets/green_dot.png";

// const ScheduleCard = ({ buildingName, buildingImage, dateListed, onToggleSchedule }) => {
//   return (
//     <div className="max-w-sm min-h-[400px] rounded overflow-hidden shadow-lg bg-white border border-gray-300"> {/* Set a minimum height */}
//       <img className="w-full h-12 object-cover" src={buildingImage} alt={buildingName} /> {/* Set height to 50px (12 class corresponds to 3rem or 48px) */}
//       <div className="px-6 py-4">
//         <h3 className="font-bold text-xl mb-2 text-[#1e2d4c]">{buildingName}</h3>
//         <p className="text-gray-600 text-sm mb-4">
//           Listed on: {new Date(dateListed).toLocaleDateString()}
//         </p>
//         <div className="flex items-center justify-between mb-4">
//           <button
//             onClick={onToggleSchedule}
//             className="flex items-center gap-2 w-full bg-[#d3613a] text-white font-bold py-2 rounded-lg hover:bg-[#1e2d4c] transition-colors"
//           >
//             <img src={greenDot} alt="Available" className="w-5 " />
//             <span>10 rooms available</span>
//           </button>
//         </div>
//         <button
//           onClick={onToggleSchedule}
//           className="block w-full select-none rounded-lg bg-orange-600 py-3.5 px-7 text-center align-middle font-sans text-sm font-medium uppercase text-white shadow-md transition-all duration-300 hover:shadow-lg hover:bg-orange-700 hover:-translate-y-1 hover:scale-105"
//         >
//           <h3 className="font-bold text-sm">
//             View Schedule
//           </h3>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ScheduleCard;
import React from 'react';
import greenDot from "../assets/green_dot.png";

const ScheduleCard = ({ buildingName, buildingImage, dateListed, onToggleSchedule }) => {
  return (
    <div className="w-80 h-90 rounded-lg overflow-hidden shadow-lg bg-white border border-gray-300 transition-transform duration-300 transform hover:scale-105">
      <img className="w-full h-40 object-cover" src={buildingImage} alt={buildingName} />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2 text-[#1e2d4c]">{buildingName}</h3>
        <p className="text-gray-600 text-sm mb-4">
          Listed on: {dateListed ? new Date(dateListed).toLocaleDateString() : 'N/A'}
        </p>
        <div className="flex items-center justify-between mb-4">
          
        </div>
        <button
          onClick={onToggleSchedule}
          className="block w-full rounded-lg bg-orange-600 py-2 text-center font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:bg-orange-700"
        >
          <h3 className="font-bold text-sm">View Schedule</h3>
        </button>
      </div>
    </div>
  );
};

export default ScheduleCard;