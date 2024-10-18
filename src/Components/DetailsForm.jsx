import React, { useState } from 'react';

const DetailsForm = () => {
  // State to manage form fields
  const [buildingName, setBuildingName] = useState('');
  const [className, setClassName] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [isOccupied, setIsOccupied] = useState('empty');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      buildingName,
      className,
      timeSlot,
      isOccupied
    });
    alert("Details added!");
    // Reset form after submission
    setBuildingName('');
    setClassName('');
    setTimeSlot('');
    setIsOccupied('empty');
  };

  return (
    <div className="p-5 w-[30vw] mx-auto shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="flex flex-col  gap-5 drop-shadow-md">
        <div>
          <label className="block text-orange-500 font-extrabold text-3xl mb-2 ">Building Name:</label>
          <input
            type="text"
            value={buildingName}
            onChange={(e) => setBuildingName(e.target.value)}
            placeholder="Enter building name"
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
        </div>
        <div>
          <label className="block text-orange-500 font-extrabold text-3xl mb-2 ">Class Name:</label>
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder="Enter class name"
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
        </div>
        <div>
          <label className="block text-orange-500 font-extrabold text-3xl mb-2 ">Time Slot:</label>
          <select
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
            placeholder="Select"
            required
          >
            <option className='text-black' value="">Select a time slot</option>
            <option className='text-black' value="9:00am to 10:00am">9:00am to 10:00am</option>
            <option className='text-black' value="10:00am to 11:00am">10:00am to 11:00am</option>
            <option className='text-black' value="11:00am to 12:00pm">11:00am to 12:00pm</option>
            <option className='text-black' value="12:00pm to 1:00pm">12:00pm to 1:00pm</option>
            <option className='text-black' value="1:00pm to 2:00pm">1:00pm to 2:00pm</option>
            <option className='text-black' value="2:00pm to 3:00pm">2:00pm to 3:00pm</option>
            <option className='text-black' value="3:00pm to 4:00pm">3:00pm to 4:00pm</option>
            <option className='text-black' value="4:00pm to 5:00pm">4:00pm to 5:00pm</option>
          </select>
        </div>
        <div>
          <label className="block text-orange-500 font-extrabold text-3xl mb-2 ">Occupied:</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center ">
              <input
                type="radio"
                value="occupied"
                checked={isOccupied === 'occupied'}
                onChange={() => setIsOccupied('occupied')}
                className="mr-2 text-black"
              />
              Occupied
            </label>
            <label className="flex items-center ">
              <input
                type="radio"
                value="empty"
                checked={isOccupied === 'empty'}
                onChange={() => setIsOccupied('empty')}
                className="mr-2 text-black"
              />
              Empty
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white  font-extrabold text-2xl py-2 rounded hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default DetailsForm;
