import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PreLoader from './Pages/PreLoader';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Profile from './Pages/Profile';
import Prepare from './Pages/Prepare';
import Recommended from './Pages/Recommended';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Main Content with space */}
        <main className="flex-grow my-8 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<PreLoader />} />
            <Route path="/contact" element={<PreLoader />} />
            <Route path="/prepare" element={<Prepare />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/recommended' element={<Recommended/>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
