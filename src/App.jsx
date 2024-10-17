import './App.css'
import reactLogo from './assets/react.svg'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  return (
    <>
      <img src={reactLogo} alt="meow" />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
