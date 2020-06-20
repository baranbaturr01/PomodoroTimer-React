import React from 'react'

 function SessionLenght(props) {
    function decreaseCounter(){
  
        if(props.sessionLenght===1){
            return;

        } 
        props.decreaseSession();

     }
     function increaseCounter(){
        if(props.sessionLenght===60){
            return;
        }
      props.increaseSession();
     }
 
    return (
    <section>
        <h4>Session Length</h4>
       <section className="interval-container">
           <button disabled={props.isPlay===true ? "disabled": ""} onClick={decreaseCounter}>Down</button>
           <p className="interval-lenght">{props.sessionLenght}</p>
           <button disabled={props.isPlay===true ? "disabled": ""} onClick={increaseCounter}>Up</button>
        </section>
    </section>
    )
}
export default SessionLenght;