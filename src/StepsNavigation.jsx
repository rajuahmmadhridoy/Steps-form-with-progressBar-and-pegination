import React from "react";
import Steps from './Steps';

const StepsNavigation = (props) => {
    return (
        <div className="stepWrapper">
            {
                props.labelArray.map((item,index)=><Steps selected={props.currentSteps === index + 1} updateStep={props.updateStep} index={index} label={item} key={index}  />)
            }
            
        </div>
    );
};

export default StepsNavigation;