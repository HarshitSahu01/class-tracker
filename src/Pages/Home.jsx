import { React, useState } from "react";
import free_rooms_logo from "../public/images/free_rooms_logo.svg";
import logo2 from "../public/images/logo2.svg"
import { useSpring, animated, useTrail } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineSort } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";
import { FaMap } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import Navbar from "../Components/Navbar";
import Navbarmain from "../Components/Navbarmain"

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isFirstLogo, setIsFirstLogo] = useState(true);

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

  const buildings = [
    {
      name: "AGSM",
      availableRooms: 7,
      imageUrl: "https://placehold.co/300x200?text=AGSM",
    },
    {
      name: "Ainsworth Building",
      availableRooms: 15,
      imageUrl: "https://placehold.co/300x200?text=Ainsworth",
    },
    {
      name: "Another Building",
      availableRooms: 1,
      imageUrl: "https://placehold.co/300x200?text=Another",
    },
    {
      name: "AGSM",
      availableRooms: 7,
      imageUrl: "https://placehold.co/300x200?text=AGSM",
    },
    {
      name: "Ainsworth Building",
      availableRooms: 15,
      imageUrl: "https://placehold.co/300x200?text=Ainsworth",
    },
    {
      name: "Another Building",
      availableRooms: 1,
      imageUrl: "https://placehold.co/300x200?text=Another",
    },
  ];

  const faqs = [
    {
      question: "Can I book a room using Freerooms?",
      answer:
        "While Freerooms can tell you anything you want to know about when a room is booked, there isn't much we can do if a person decides to take an unbooked room.",
    },
    {
      question: "Why isn't my booking showing up?",
      answer:
        "To make sure you are this person, keep an eye out for rooms marked 'Available Soon' and get in there before anyone else can!",
    },
    {
      question: "How can I get involved?",
      answer:
        "You can get involved by signing up for our newsletter and checking our website for updates.",
    },
    {
      question: "What happens if somebody is in a free room?",
      answer:
        "While Freerooms can tell you anything you want to know about when a room is booked, there isn't much we can do if a person decides to take an unbooked room.",
    },
    {
      question: "Why are some rooms not on Freerooms?",
      answer:
        "Some rooms may not be listed due to various reasons including maintenance or availability.",
    },
    {
      question: "Is there a mobile version of Freerooms?",
      answer: "Yes, Freerooms is fully optimized for mobile use.",
    },
  ];

  return (
    <>
    <Navbarmain />
      {/* Logo Section */}
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
      <div className="p-4 sm:p-6 bg-background">
        <header className=" px-6 flex flex-col sm:flex-row sm:justify-between items-center mb-4">
          <div className="flex items-center w-full">
            {/* Filter Button (Left Side) */}
            <button className="flex items-center px-4 py-2 rounded-lg mb-2 sm:mb-0 mr-0 sm:mr-4 font-semibold text-xl border border-orange-600 text-orange-600">
              <FontAwesomeIcon icon={faFilter} className="mr-2 text-orange-600" />
              Filters
            </button>

            {/* Search Input (Middle, takes most of the space) */}
            <input
              type="text"
              placeholder="Search for a building..."
              className="flex-grow border border-border rounded-md p-2 mb-2 sm:mb-0 sm:mr-4 w-full sm:w-auto"
            />

            {/* Sort Button (Right Side) */}
            <button className="flex items-center px-4 py-2 gap-2 rounded-lg font-semibold text-xl border border-orange-600 text-orange-600">
              <MdOutlineSort />
              Sort
            </button>
          </div>
        </header>

        {/* Building List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-10">
          {buildings.map((building, index) => (
            <div key={index} className="relative border border-border rounded-lg overflow-hidden">
              <img
                src={building.imageUrl}
                alt={building.name}
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-4 flex justify-between items-center">
                <span className="font-semibold">{building.name}</span>
                <span className={`text-green-600 font-bold`}>
                  {building.availableRooms} rooms available
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-background">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-8">Our Features</h2>
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
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-extrabold mb-4 text-orange-600">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-orange-600 rounded-lg p-4">
              <div
                className="flex justify-between text-xl font-semibold items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span className="text-orange-600 text-2xl">
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
    </>
  );
}
