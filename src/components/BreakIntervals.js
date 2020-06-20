import React from 'react';
 function BreakIntervals(props) {
     function decreaseCounter(){
  
        if(props.breakIntervals===1){
           
            return;  
        } 
        props.decreaseBreak();  

     }
     function increaseCounter(){
        if(props.breakIntervals===60){
            return;
        }
      props.increaseBreak();
     }
    return (
    <section >
        <h4>Break Length</h4>
      <section className="interval-container">
          <button disabled={props.isPlay===true ? "disabled": ""} onClick={decreaseCounter}>Down</button>
          <p className="interval-lenght">{props.breakIntervals}</p>
          <button disabled={props.isPlay===true ? "disabled": ""} onClick={increaseCounter}>Up</button>
          
      </section>
  </section>
    );
}
export default BreakIntervals;