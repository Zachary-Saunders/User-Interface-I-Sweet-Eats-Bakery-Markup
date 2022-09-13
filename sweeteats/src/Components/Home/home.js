import React from "react";
 

export default function Home (props) {
  return (
    <div className="home-wrapper">
        <nav>
            <button className="md-button home-button">Home</button>
            <button className="md-button about-button">About</button>
            <button className="md-button contact-button">Contact</button>
            <button className="md-button weddings-button">Weddings</button>
            <button className="md-button catering-button">Catering</button>
            <button className="md-button log-in-button">Log In</button>
        </nav>
       
    </div>
  )
}