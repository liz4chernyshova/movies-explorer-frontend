import React from 'react'
import './Preloader.css'

const Preloader = (props) => {
  return (
    <div className={`preloader ${props.isOpen ? ('preloader__open') : ''}`}>
      <div className="preloader__container">Ещё</div>
    </div>
  )
};

export default Preloader;