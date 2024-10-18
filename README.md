Here’s the markdown version of the updated README for your "Class Tracker" project:

markdown
# **Class Tracker**

[**Live Demo**](https://class-tracker.netlify.app/) | [**GitHub Repository**](https://github.com/HarshitSahu01/class-tracker)

## **Overview**

Class Tracker is a web application designed to help users easily track the real-time availability of rooms in various buildings on a college campus. The application features a machine learning model that utilizes camera feeds to automatically detect whether classrooms are empty or occupied. This helps provide an accurate status of room availability without manual intervention.

The platform also includes an admin panel that allows authorized personnel to manage rooms and prevent unauthorized access. Built with YOLO for object detection and OpenCV for image processing, the backend is powered by Firebase to handle data and authentication securely.

---

## **Features**

- **Machine Learning-Based Room Detection**: The system uses cameras to monitor classrooms in real-time, determining whether they are occupied or empty.
- **YOLO and OpenCV Integration**: The application uses YOLO (You Only Look Once) for object detection and OpenCV for real-time video stream processing, providing accurate results.
- **Firebase Backend**: Firebase is used for backend services, including data storage and user authentication, ensuring secure access and smooth integration with the ML model.
- **Real-Time Room Availability**: The system updates room availability data based on the machine learning model and manual inputs from the admin panel.
- **Admin Panel**: Administrators can manage room data and control access to the system, preventing unauthorized users from making changes.
- **Building-wise Filter**: Easily filter room availability by selecting specific buildings.
- **Responsive Design**: Accessible on mobile, tablet, and desktop devices.

---

## **Supported Buildings**

Currently, the Class Tracker system covers the following buildings:

- Digital Tower
- First Year Building
- Civil-Mechanical Building
- Electronics and Communication-Biomedical Building
- IT Building
- MCA Building
- MBA Building

We are continuously working on expanding coverage to include more buildings in the near future.

---

## **Technologies Used**

- **Frontend**: React.js
- **Machine Learning**: YOLO (You Only Look Once) for object detection, OpenCV for real-time video and image processing
- **Backend**: Firebase (Authentication, Realtime Database, Storage)
- **Styling**: CSS
- **Deployment**: Netlify
- **Version Control**: Git and GitHub

---

## **Machine Learning Model**

The machine learning model uses:

- **YOLO**: For object detection to identify the presence of students or other objects in classrooms.
- **OpenCV**: For capturing and processing video frames from cameras installed in classrooms.
- **Firebase**: The backend stores the processed data and updates the room availability status in real-time. It also handles authentication for admin users.

The machine learning model has been trained to detect objects commonly found in classrooms and can distinguish between occupied and empty rooms with high accuracy.

---

## **Setup Instructions**

Follow these steps to run the project locally:

1. Clone the repository:
   bash
   git clone https://github.com/HarshitSahu01/class-tracker.git
   

2. Navigate to the project directory:
   bash
   cd class-tracker
   

3. Install the dependencies:
   bash
   npm install
   

4. Start the development server:
   bash
   npm start
   

5. Open your browser and visit:
   
   http://localhost:3000
   

For the machine learning and backend integration, ensure that you have the proper environment setup for YOLO, OpenCV, and Firebase. Detailed setup for those components is provided in the respective folders in the GitHub repository.

---

## **Admin Panel**

The platform includes an **Admin Panel** where authorized users can manage room data and control system access. Unauthorized users are restricted from making changes or viewing sensitive information. The admin panel features user authentication powered by Firebase, ensuring that only registered users can make updates.

---

## **Contributing**

We welcome contributions to improve the Class Tracker application. To contribute:

1. Fork the repository.
2. Create a new branch:
   bash
   git checkout -b feature/your-feature-name
   

3. Commit your changes:
   bash
   git commit -m "Add new feature"
   

4. Push your branch:
   bash
   git push origin feature/your-feature-name
   

5. Submit a pull request.

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Contact**

For any queries or suggestions, feel free to reach out:

- **Developer**: Harshit Sahu
- **GitHub**: [HarshitSahu01](https://github.com/HarshitSahu01)

---


This markdown format is ready to be added to your GitHub repository as the README.md file! Let me know if you'd like to adjust anything further.
