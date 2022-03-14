import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Routes
  
} from "react-router-dom";
import Home from './components/Home';
import Pet from './components/Pet';
import Contact from './components/Contact';
import House from './components/House';

function App() {
  return (
    <div class="content">
      <header> 
	      <img src="logostellar.jpg" alt="Logo image of a house enclosing the letter S." class="logo center" />
        <h1>Stellar Sitting Services   </h1>
      </header>
      <BrowserRouter>
      <nav>
        <ul>
          <li> Home  </li>
          <li> <Link to ="/">Home</Link></li>
          <li> <Link to ="/house">House Sitting</Link></li>
          <li> <Link to ="/pet">Pet Sitting</Link> </li>
          <li> <Link to ="/contact">Contact Us</Link> </li>
        </ul>
      </nav>
      <Routes>
          <Route path="/house" element={<House />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pet" element={<Pet />} />
          <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
      <h2>About Stellar Sitting Services</h2>  
      <p>
        At Stellar, we take pride in our exceptional customer service. We began our business with one employee - Janie Stellar, owner and founder. Janie's reputation for trustworthy and caring service grew over the years, as did the company. Stellar now employs over 300 sitters.
      </p>
      <p>
        Every one of our sitters has completed extensive security checks, along with intensive training on pet care, home care, and security/emergency procedures. You can trust a Stellar sitter!
      </p>
      
      <footer> 
        &copy; Copyright 2007 Stellar Sitting Services, LLC
      </footer>
     </div>
  );
}

export default App;
