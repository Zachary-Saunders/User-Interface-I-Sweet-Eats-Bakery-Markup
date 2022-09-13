import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Components/Home/home';
import Weddings from './Components/Weddings/weddings';
import Footer from './Components/Footer/footer';
import Contact from './Components/Contact/contact';
import Catering from './Components/Catering/catering';
import './App.css';

function App() {
  return (
    <div className="App">
     <nav>
        <h1 className="conatainer">Sweet Eats Bakery</h1>
        <img
          src="https://media.istockphoto.com/photos/wedding-cake-picture-id869089576?k=6&m=869089576&s=612x612&w=0&h=ep38ktR_24XVPYuS_0lUihyCMpuw2OarTBLtG-BiO9I="
          alt="woodsey wedding cake"
        />
        <div className="nav-links">
          {/*Link is a component from React Router. Use this instead of <a> tag 
          to integrate your navigation with React Routing. */}

          <Link to="/">
            <Home />
          </Link>
          
          {/* <Link to="/shop">Sign-Up</Link> */}
        </div>
      </nav>
      <Routes>
        <Route path="/" exact component={Home} />
      </Routes>
         <Weddings /> 
        <Footer />
        <Contact/>
        <Catering/> 
   
    </div>
  );
}


export default App;
