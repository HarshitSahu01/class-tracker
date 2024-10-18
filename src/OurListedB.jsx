import React, { useState, useEffect } from 'react';
import { auth, db, storage } from '../firebase'; // Ensure auth, db, and storage are correctly imported
import { collection, query, where, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import CardL from '../Components/CardL';

function OurListedB() {
  const [buildings, setBuildings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchListedBuildings = async () => {
      try {
        const currentUser = auth.currentUser;

        if (!currentUser) {
          setError("User is not authenticated.");
          return;
        }

        const userUid = currentUser.uid; 
        const buildingsRef = collection(db, 'buildings');
        const q = query(buildingsRef, where('uid', '==', userUid));
        const querySnapshot = await getDocs(q);

        const userBuildings = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const buildingData = doc.data();

          
            const imageRef = ref(storage, `buildings/${buildingData.image}`);
            const imageUrl = await getDownloadURL(imageRef);

            return {
              id: doc.id,
              name: buildingData.name,
              number: buildingData.number,
              imageUrl, 
              createdAt: buildingData.createdAt
            };
          })
        );

        setBuildings(userBuildings);
      } catch (error) {
        setError("Failed to fetch buildings: " + error.message);
      }
    };

    fetchListedBuildings();
  }, []);

  const handleViewClassroom = (buildingId) => {
    
    console.log(`View Classroom for Building ID: ${buildingId}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Listed Buildings</h2>
      {error && <p className="text-red-600">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {buildings.length > 0 ? (
          buildings.map((building) => (
            <CardL
              key={building.id}
              imageUrl={building.imageUrl}
              name={building.name}
              dateListed={building.createdAt.seconds * 1000} // Convert to milliseconds
              onViewClassroom={() => handleViewClassroom(building.id)}
            />
          ))
        ) : (
          <p>No buildings listed by you yet.</p>
        )}
      </div>
    </div>
  );
}

export default OurListedB;
