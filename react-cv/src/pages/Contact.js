import React from 'react';
import Navigation from '../components/Navigation';


const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header">
          <div className="contactBox">
            <h1>Me contacter</h1>
            <ul>
              <li>
                Habite à Vandoeuvre-les-Nancy
              </li>
              <li>               
                Tel : 06 45 77 37 48               
              </li>
              <li>
                Mail : jonathan.fleurentin@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;