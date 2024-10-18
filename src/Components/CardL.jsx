import React from 'react';

function CardL({ imageUrl, name, dateListed, onViewClassroom }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-300">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-[#1e2d4c]">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">
          Listed on: {new Date(dateListed).toLocaleDateString()}
        </p>
        <button
          onClick={onViewClassroom}
          className="w-full bg-[#d3613a] text-white font-bold py-2 rounded-lg hover:bg-[#1e2d4c] transition-colors"
        >
          View Classroom
        </button>
      </div>
    </div>
  );
}

export default CardL;
