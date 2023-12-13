import Headers from "./components/Header/Header"
import Home from './components/Home/Home';
import CartDetails from './components/CartDetails/CartDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import About from "./pages/About/About"
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Hero2 from './components/Hero2/Hero2';
import Hero3 from './components/Hero3/Hero3';
import Hero4 from './components/Hero4/Hero4';
import Hero5 from './components/Hero5/Hero5';
import Hero6 from './components/Hero6/Hero6'
import NewArrival from './pages/NewArrival/NewArrival';
import Login from "./pages/Login/Login";
import toast from 'react-hot-toast';


function App() {
  return (
    <>
     <Headers />
     <Navbar />
     <Routes>
      <Route  path='/Products' element={<Home />}/>
      <Route path='/Home' element={
        <>
        { " "}
        <Hero />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero5 />
        <Hero6 />
        </>
      }
      />
      <Route path="/NewArrival" element={<NewArrival />} />
      <Route path="/About" element={<About />} />
      <Route path="/Login" element={<Login />} />
      <Route  path='/cart' element={<CartDetails />}/>
     </Routes>
     <Footer /> 
     <toast />
    </>
  );
}

export default App;
