import React, { useState } from 'react';
import Navbar from '../Components/Navbar2';
import { db, storage } from '../firebase'; 
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';

const BuildingForm = () => {
    const [buildingName, setBuildingName] = useState("");
    const [buildingNumber, setBuildingNumber] = useState(""); 
    const [buildingImage, setBuildingImage] = useState(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 2 * 1024 * 1024) { 
            setError("File size should not exceed 2MB");
            setBuildingImage(null);
        } else {
            setError("");
            setBuildingImage(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!buildingName || !buildingNumber || !buildingImage) {
            setError("Please fill in all fields.");
            return;
        }

        try {
            
            const imageRef = ref(storage, `buildings/${buildingImage.name}`);
            await uploadBytes(imageRef, buildingImage);

         
            await setDoc(doc(db, "buildings", buildingNumber), {
                name: buildingName,
                number: buildingNumber, 
                image: buildingImage.name, 
                createdAt: new Date(),
            });

            setSuccess(true);
            setBuildingName("");
            setBuildingNumber(""); 
            setBuildingImage(null);
        } catch (error) {
            setError("Failed to register building: " + error.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
                <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-extrabold text-center text-[#d3613a] mb-8">Building Registration</h2>
                    {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
                    {success && <p className="text-green-600 text-sm mb-4">Building registered successfully!</p>}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700" htmlFor="buildingName">Building Name</label>
                            <input
                                type="text"
                                id="buildingName"
                                placeholder="Enter Building Name"
                                value={buildingName}
                                onChange={(e) => setBuildingName(e.target.value)}
                                required
                                className="mt-1 block w-full border-gray-300 shadow-sm rounded-md px-4 py-2 focus:ring-[#d3613a] focus:border-[#d3613a] transition duration-200 ease-in-out"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700" htmlFor="buildingNumber">Building Number / Code</label>
                            <input
                                type="text"
                                id="buildingNumber"
                                placeholder="Enter Building Number"
                                value={buildingNumber}
                                onChange={(e) => setBuildingNumber(e.target.value)}
                                required
                                className="mt-1 block w-full border-gray-300 shadow-sm rounded-md px-4 py-2 focus:ring-[#d3613a] focus:border-[#d3613a] transition duration-200 ease-in-out"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700" htmlFor="buildingImage">Upload Building Image (max 2MB)</label>
                            <input
                                type="file"
                                id="buildingImage"
                                accept="image/*"
                                onChange={handleImageChange}
                                required
                                className="mt-1 block w-full border-gray-300 shadow-sm rounded-md px-4 py-2 focus:ring-[#d3613a] focus:border-[#d3613a] transition duration-200 ease-in-out"
                            />
                            {buildingImage && (
                                <p className="mt-2 text-gray-500 text-sm">Selected file: {buildingImage.name}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#d3613a] text-white font-bold py-2 rounded-lg shadow hover:bg-[#1e2d4c] transition-colors"
                        >
                            Register Building
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BuildingForm;
