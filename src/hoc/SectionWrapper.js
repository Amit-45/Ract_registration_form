import React from 'react';

const SectionWrapper = (Component) => {
  function HOC() {
    return (
      
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Component/>
      </div>
      
    );
  }
  
  return HOC;
}

export default SectionWrapper;


