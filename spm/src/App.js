import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './Container/AboutUs/AboutUs';
import ContactUs from './Container/ContactUs/ContactUs';
import Header from './Container/Header/Header';
import Products from './Container/Products/Products';
import Services from './Container/Services/Services';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Products/>
      <AboutUs/>
     <Services/>
     <ContactUs/>
    </div>
  );
}

export default App;
