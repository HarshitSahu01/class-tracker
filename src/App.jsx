import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import RegisterPage from './Pages/StudentRegistration'
import StudentLogin from './Pages/StudentLogin'
import ManagmentRegister from './Pages/ManagmentRegister'
import ManagmentLogin from './Pages/ManagmentLogin'
import Home1 from './Pages/Home1'
import BuildingForm from './Pages/Form'
import FormClassRoom from './Pages/FormClassRoom'
import OurListedB from './Pages/OurListedB'
import AvailableClassRoom from './Pages/AvailableClassRoom'
import ClassroomList from './Pages/AvailableClassRoom'

function App() {
  return (
    <>
      
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home1" element={<Home1 />} />
        <Route path="/StudentRegistration" element={<RegisterPage />} />
        <Route path="/StudentLogin" element={<StudentLogin />} />
        <Route path="/ManagmentRegistration" element={<ManagmentRegister />} />
        <Route path="/ManagmentLogin" element={<ManagmentLogin />} />
        <Route path="/formb" element={<BuildingForm />} />
        <Route path="/formc" element={<FormClassRoom />} />
        <Route path="/available" element={<ClassroomList/>} />
      </Routes> 
      

    </>
  )
}

export default App
