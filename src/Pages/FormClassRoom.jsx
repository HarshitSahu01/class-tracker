import React, { useState } from 'react';
import Navbar from '../Components/Navbar2';
import { db } from '../firebase'; 
import { updateDoc, arrayUnion, doc } from 'firebase/firestore';

function FormClassRoom() {
    const [className, setClassName] = useState("");
    const [buildingNumber, setBuildingNumber] = useState("");
    const [timeSlots, setTimeSlots] = useState({
        "9-10 AM": { occupied: false, nonOccupied: true },
        "10-11 AM": { occupied: false, nonOccupied: true },
        "11-12 PM": { occupied: false, nonOccupied: true },
        "12-1 PM": { occupied: false, nonOccupied: true },
        "1-2 PM": { occupied: false, nonOccupied: true },
        "2-3 PM": { occupied: false, nonOccupied: true },
        "3-4 PM": { occupied: false, nonOccupied: true },
        "4-5 PM": { occupied: false, nonOccupied: true },
    });

    const handleCheckboxChange = (time, type) => {
        setTimeSlots((prev) => ({
            ...prev,
            [time]: {
                occupied: type === 'occupied' ? !prev[time].occupied : prev[time].occupied,
                nonOccupied: type === 'nonOccupied' ? !prev[time].nonOccupied : prev[time].nonOccupied,
            },
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const classroomData = {
                className,
                timeSlots,
            };

           
            const buildingRef = doc(db, "buildings", buildingNumber);

           
            await updateDoc(buildingRef, {
                classes: arrayUnion(classroomData),
            });

            alert('Classroom registered successfully');
            setClassName("");
            setBuildingNumber("");
            setTimeSlots({
                "9-10 AM": { occupied: false, nonOccupied: true },
                "10-11 AM": { occupied: false, nonOccupied: true },
                "11-12 PM": { occupied: false, nonOccupied: true },
                "12-1 PM": { occupied: false, nonOccupied: true },
                "1-2 PM": { occupied: false, nonOccupied: true },
                "2-3 PM": { occupied: false, nonOccupied: true },
                "3-4 PM": { occupied: false, nonOccupied: true },
                "4-5 PM": { occupied: false, nonOccupied: true },
            });
        } catch (error) {
            console.error("Error registering classroom:", error);
            alert('Failed to register classroom: ' + error.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
                <div className="w-full max-w-3xl p-10 bg-white shadow-lg rounded-lg border border-gray-300">
                    <h2 className="text-3xl font-bold text-center text-[#d3613a] mb-8">Classroom Registration</h2>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="className">
                                    Class Name
                                </label>
                                <input
                                    type="text"
                                    id="className"
                                    placeholder="Enter Class Name"
                                    value={className}
                                    onChange={(e) => setClassName(e.target.value)}
                                    required
                                    className="mt-1 block w-full border-gray-300 shadow-sm rounded-md px-4 py-3 focus:ring-[#d3613a] focus:border-[#d3613a] transition duration-200 ease-in-out"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="buildingNumber">
                                    Building Number
                                </label>
                                <input
                                    type="text"
                                    id="buildingNumber"
                                    placeholder="Enter Building Number"
                                    value={buildingNumber}
                                    onChange={(e) => setBuildingNumber(e.target.value)}
                                    required
                                    className="mt-1 block w-full border-gray-300 shadow-sm rounded-md px-4 py-3 focus:ring-[#d3613a] focus:border-[#d3613a] transition duration-200 ease-in-out"
                                />
                            </div>
                        </div>

                        <div className="text-center mb-4">
                            <h3 className="text-xl font-semibold">Time Slots</h3>
                        </div>

                        {Object.keys(timeSlots).map((time) => (
                            <div key={time} className="flex items-center space-x-4">
                                <label className="font-medium text-gray-800">{time}</label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={timeSlots[time].occupied}
                                        onChange={() => handleCheckboxChange(time, 'occupied')}
                                    />
                                    <span>Occupied</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={timeSlots[time].nonOccupied}
                                        onChange={() => handleCheckboxChange(time, 'nonOccupied')}
                                    />
                                    <span>Non-Occupied</span>
                                </label>
                            </div>
                        ))}

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#d3613a] hover:bg-[#1e2d4c] text-white font-bold py-2 px-6 rounded-lg shadow transition-colors"
                            >
                                Register Classroom
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default FormClassRoom;
