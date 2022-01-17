import React from 'react';
import Navigation from '../components/Navigation';
import Languages from '../components/knowledges/Languages';
import Experience from '../components/knowledges/Experience';
import Skills from '../components/knowledges/Skills';
import Interests from '../components/knowledges/Interests';

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Experience />
        <Skills />
        <Interests />
      </div>
    </div>
  );
}

export default Knowledges;