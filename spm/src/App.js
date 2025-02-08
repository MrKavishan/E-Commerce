import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './Container/AboutUs/AboutUs';
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
    </div>
  );
}

export default App;
