import { React, useState } from "react";
import logo2 from "../assets/door.svg"
import free_rooms_logo from "../assets/free_rooms_logo.svg"
import { useSpring, animated, useTrail } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineSort } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HowWeWork from '../Components/HowWeWork'
import building from '../assets/svgbuilding.png'
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isFirstLogo, setIsFirstLogo] = useState(true);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    setIsFirstLogo(!isFirstLogo);
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const text = "Unlock spaces, own your time, with Class Tracker";
  const letters = text.split("");

  const trail = useTrail(letters.length, {
    from: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    config: { mass: 1, tension: 200, friction: 15 },
  });


  const faqs = [
    {
      question: "What is a key advantage of using this system?",
      answer:
        "It offers an easy-to-understand visual tool for students to locate quiet study spots based on real-time data.",
    },
    {
      question: "Can the system integrate with existing campus infrastructure?",
      answer:
        "Yes, it can pull data from current systems like Wi-Fi networks and room booking platforms for real-time insights.",
    },
    {
      question: "Is my location tracked for this service?",
      answer:
        "No, the website tracks aggregated data from campus systems, not individual student locations.",
    },
    {
      question: "What happens if somebody is in a free room?",
      answer:
        "While Freerooms can tell you anything you want to know about when a room is booked, there isn't much we can do if a person decides to take an unbooked room.",
    },
    {
      question: "How do I find an available room?",
      answer:
        "Simply visit the home page and select the building you are interested in. A list of rooms with their current availability status will be displayed.",
    },
    {
      question: "Is this service available for all college buildings?",
      answer: "Currently, the service covers the following buildings: Digital Tower, First Year Building, Civil-Mechanical Building, Electronics and Communication-Biomedical Building, IT Building, MCA Building, and MBA Building. We are working on expanding coverage to include more buildings in the near future.",
    },
  ];

  return (
    <>
      {/* Logo Section */}
      <Navbar/>
      <div className="flex flex-col items-center justify-center p-8 bg-background">
        <img
          aria-hidden="true"
          alt="door-icon"
          src={isFirstLogo ? free_rooms_logo : logo2}
          className="mt-4 h-24 w-24 sm:h-36 sm:w-36 cursor-pointer"
          onClick={handleLogoClick}
        />
        <p className="mt-4 text-3xl sm:text-4xl font-bold text-primary text-center">
          {trail.map((props, index) => (
            <animated.span key={index} style={props}>
              {letters[index] === " " ? "\u00A0" : letters[index]}
            </animated.span>
          ))}
        </p>
      </div>
     

      {/* Header Section */}
      <div className="p-4 sm:p-6 bg-background flex flex-col justify-center items-center">
          <div className="svg-img opacity-70">
            <img src={building} alt="error" />
          </div>

        {/* Building List */}
  

          <button className="flex flex-row justify-center items-center gap-4 px-2 sm:px-10" onClick={()=>{
            navigate('/available')
          }}>
          <span className="text-3xl font-bold text-orange-400 hover:text-orange-500 transition-all my-12 ">Checkout Available Rooms...</span>
          <div className="arr text-3xl text-orange-400 hover:translate-x-2 transition-all">
          <FaArrowRight />
          </div>
          </button>
      </div>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-background">
        <h2 className="text-center text-4xl sm:text-4xl font-extrabold mb-8">Our Features</h2>
        <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex text-orange-600">
              <SiHiveBlockchain className="h-12 w-12" />
              <h2 className="text-xl font-bold ml-4">Browse Buildings</h2>
            </div>
            <p className="mt-4 text-lg">
              Efficiently browse a complete list of available rooms and buildings, with customizable filters for quick and easy searching.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex text-orange-600">
              <FaMap className="h-12 w-12" />
              <h2 className="text-xl font-bold ml-4">Map</h2>
            </div>
            <p className="mt-4 text-lg">
              Explore an interactive map showcasing building availability near your location, allowing you to quickly find the perfect spot for your next study session.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex text-orange-600">
              <IoTimeSharp className="h-12 w-12" />
              <h2 className="text-xl font-bold ml-4">Timetable</h2>
            </div>
            <p className="mt-4 text-lg">
              Get instant access to real-time room schedule information, ensuring you're always in the right place at the right time.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto p-6 flex flex-col justify-center items-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 text-black">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-orange-600 rounded-lg p-4">
              <div
                className="flex justify-between text-xl font-semibold items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span className="text-orange-600 text-2xl transition-all duration-1000">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-md text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <HowWeWork />
      
      <Footer />
    </>
  );
}
