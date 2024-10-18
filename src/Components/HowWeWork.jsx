import React from 'react';
import '../index.css';
import work from '../assets/work.svg';
import work1 from '../assets/work1.svg';

const HeroSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between py-12 px-6 max-w-5xl mx-auto" style={{ fontFamily: 'Google Sans, sans-serif' }}>

            <div className="flex flex-col items-start md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl font-bold text-left mb-6 text-orange-600 flex items-center">
                    <img src={work1} alt="work" className="h-10 mr-2" />
                    HOW WE WORK
                </h1>

                <ul className="text-lg text-justify mb-6 list-disc pl-5 space-y-4">
                    <li><span className="font-bold">Data Collection:</span> Aggregate real-time data from Wi-Fi, schedules, and room bookings.</li>
                    <li><span className="font-bold">Interactive Map:</span> Use Leaflet.js or Google Maps API to build a dynamic campus heatmap.</li>
                    <li><span className="font-bold">Real-time Updates:</span> Ensure continuous updates reflecting current campus room usage.</li>
                    <li><span className="font-bold">Recommendations:</span> Suggest less crowded study spots based on heatmap data.</li>
                </ul>
            </div>

            <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
                <img 
                    src={work} 
                    alt="About Section Illustration" 
                    className="w-full max-w-md transition-transform duration-500 transform hover:scale-105 hover:rotate-1"
                />
            </div>

        </div>
    );
};

export default HeroSection;
