import { useParams } from 'react-router-dom';
import Pagination from './pagination/Pagination';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import Form1 from './form/Form1';
import Form2 from './form/Form2';
import Form3 from './form/Form3';
import ProgressBar from 'react-bootstrap/ProgressBar';
const FormAllSingleItems = () => {

    const {id} = useParams();
    const [showPerPage,setShowPerPage] = useContext(UserContext)
    const [paginate, setPaginate] = useState({
        start: 0,
        end: showPerPage,
    });
    const [formData,setFormData] = useState({
        name:{},
        gender:'',
        age:''
    })
    const setFormDataFun = (type,newData)=>{
      setFormData((data)=>{
        return{
          ...data,[type]: newData
        }
      })
    }
    const onPaginationChange = (start, end) => {
      setPaginate({ start: start, end: end });
  };
    const service = [{
        name: "demo service1",
        id: 1 ,
        steps: [
          { name: "What is your name1?", type: "text" },
          {
            name: "What is your gender1?",
            type: "options",
            options: ["male", "female", "donot want to tell"],
          },
          { name: "What is your age1?", type: "number" },
          {
            name: "What type of service you want1?",
            type: "options",
            options: [{ name: "ser 1", img: "jfdjfk" }],
          },
        ],
      },
      {
        name: "demo service1",
        id: 2 ,
        steps: [
          {
            name: "What is your gender1?",
            type: "options",
            options: ["male", "female", "donot want to tell"],
          },
          { name: "What is your name1?", type: "text" },
          { name: "What is your age1?", type: "number" },
          {
            name: "What type of service you want1?",
            type: "options",
            options: [{ name: "ser 1", img: "jfdjfk" }],
          },
        ],
      },
      {
        name: "demo service2",
        id: 3,
        steps: [
          { name: "What is your name?", type: "text" },
          // {
          //   name: "What is your gender?",
          //   type: "options",
          //   options: ["male", "female", "donot want to tell"],
          // },
          { name: "What is your age?", type: "number" },
          {
            name: "What type of service you want?",
            type: "options",
            options: [{ name: "ser 1", img: "jfdjfk" }],
          },
        ],
      }
    ];
const fil = service.find(data => data.id == id)
// const len = fil.steps.length;
// const per = len / 10
console.log(formData,'paginate');

const [numberOfButtons, setNumberOfButtons] = useState(Math.ceil(fil.steps.length / showPerPage));
const n = numberOfButtons - 1;
const per = 100 / n;
const [progressBar,setProgressBar] = useState(per)
const progressBarFun = (persent)=>{
  setProgressBar(persent)
}
    return (
        <div>
          <div>
          <ProgressBar  now={progressBar} />
          </div>
            {fil.steps.slice(paginate.start, paginate.end)
                        .map((data) => {
                          if(data.type === "text") return <Form1  setFormDataFun={setFormDataFun} data={data} />
                          else if(data.type === "options") return <Form2  setFormDataFun={setFormDataFun} data={data} />
                          else if(data.type === "number") return <Form3  setFormDataFun={setFormDataFun} data={data}  />
                       } )}
            <Pagination onPaginationChange={onPaginationChange}
                        total={fil.steps.length} progressBarFun={progressBarFun} progressBar={progressBar} per={per}/>
        </div>
    );
};

export default FormAllSingleItems;