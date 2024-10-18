import React, { useState, useEffect } from 'react';
import { db, storage } from '../firebase'; // Ensure storage is correctly imported
import { collection, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import CardL from '../Components/CardL';
import Navbar from '../Components/Navbar';

function ClassroomList() {
  const [classrooms, setClassrooms] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const classroomsRef = collection(db, 'buildings'); 
        const querySnapshot = await getDocs(classroomsRef);
        
        const classroomDataPromises = querySnapshot.docs.map(async (doc) => {
          const data = doc.data();
          const imageUrl = await getDownloadURL(ref(storage, `buildings/${data.image}`)); // Adjust the path as necessary

          return {
            id: doc.id,
            name: data.name,
            createdAt: data.createdAt,
            imageUrl // Add the downloaded URL to the classroom data
          };
        });

        const classroomData = await Promise.all(classroomDataPromises); // Wait for all promises to resolve

        setClassrooms(classroomData);
      } catch (error) {
        setError("Failed to fetch classrooms: " + error.message);
      }
    };

    fetchClassrooms();
  }, []);

  const handleViewClassroom = (classroomId) => {
    // Handle the 'View Classroom' button click here
    console.log(`View Classroom ID: ${classroomId}`);
  };

  return (
    <div>
        <Navbar/>
      <h2 className="text-2xl font-bold mb-4">All Classrooms</h2>
      {error && <p className="text-red-600">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classrooms.length > 0 ? (
          classrooms.map((classroom) => (
            <CardL
              key={classroom.id}
              imageUrl={classroom.imageUrl} 
              name={classroom.name}
              dateListed={classroom.createdAt.seconds * 1000} // Convert Firestore timestamp to milliseconds
              onViewClassroom={() => handleViewClassroom(classroom.id)}
            />
          ))
        ) : (
          <p>No classrooms available.</p>
        )}
      </div>
    </div>
  );
}

export default ClassroomList;
