// import React, { useState } from 'react';
// import Service1 from './Service1';
// import StepsNavigation from './StepsNavigation';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import FormAllSingleItems from "./components/FormAllSingleItems";
import Home from "./pages/Home";
import {createContext, useState } from 'react';
export const UserContext = createContext()
const Main = () => {
  const [showPerPage,setShowPerPage] = useState(1);
      
  // eslint-disable-next-line no-unused-vars
  // const [currentSteps,updateSteps] = useState(1)
  // const service = {
  //   name: 'demo service',
  //   steps: [
  //     {name: 'What is your name?', type: 'text'},
  //     {name: 'What is your gender?', type: 'options', options: ['male', 'female', 'donot want to tell']},
  //     {name: 'What is your age?', type: 'number'},
  //     {name: 'What type of service you want?', type: 'options', options: [{name: 'ser 1', img: 'jfdjfk'}]},
  //   ]
  // }
  // const labelArray = ['setp 1','setp 2','setp 3','setp 4','setp 5']
  // const updateStep = (step)=>{
  //   updateSteps(step)
  // }
  // const incrise =()=>{
  //   if(labelArray.length === currentSteps){

  //     updateSteps(currentSteps)
  //   }else{
  //     updateSteps(currentSteps + 1)

  //   }
  // }
  return (
    <UserContext.Provider value={[showPerPage,setShowPerPage]}>
      {/* <StepsNavigation currentSteps={currentSteps} updateStep={updateStep} labelArray={labelArray} />
            <Service1 service={service} />
            <span>{currentSteps}</span>
            <br />
            <button onClick={()=>updateSteps(currentSteps - 1)}>previous</button>
            <button onClick={incrise}>next</button> */}
        <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/header/:id" element={<FormAllSingleItems />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>,
    </UserContext.Provider>
  );
};

export default Main;
