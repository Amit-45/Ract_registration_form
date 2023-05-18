import React from 'react';
import RegistrationForm from './RegistrationForm';
import SectionWrapper from './hoc/SectionWrapper';

function App() {
  return (
   
      <>
      <RegistrationForm/>
      </>
      
   
  );
}

export default SectionWrapper(App);
