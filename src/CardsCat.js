import React from 'react'
import "./CardsCat.css"

function CardsCat() {
    return (
      <div className='bodycard'>
      <div className="a-box">
      <div className="img-container">
        <div className="img-inner">
          <div className="inner-skew">
            <img className="img" src="https://images.unsplash.com/photo-1638913662584-731da41f5a59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"></img>
          </div>
        </div>
      </div>
      <div className="text-container">
        <h3>Design</h3>
        <div>
          Events related to designs
        </div>
      </div>
    
    </div>
    </div>
  
        
    );
}

export default CardsCat
