import Hero from "./components/Hero";
import HeaderTwo from "./components/HeaderTwo";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
// import ComingSoon from 'react-coming-soon'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Services from "./components/Services";
import Form from "./components/Form";


const HomeApp = () => {
  return (
    <>
      <Hero/>
      <Card/>
      <Slider/>
      <Form/>
    </>
  )
}


function App() {
  return (
      <Router>
         <HeaderTwo/>
        <Routes>
          <Route path="/" element={<HomeApp/>}/>
          {/* <Route path="/about" element={<Footer/>}/> */}
          <Route path="/services" element={<Services/>}/>
          <Route path="*" element={<HomeApp/>}/>
        </Routes>
        <Footer/> 
      </Router>
  );
}

export default App;
