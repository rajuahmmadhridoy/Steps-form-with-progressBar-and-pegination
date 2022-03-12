import React, { useState } from 'react';

const Form1 = ({data,setFormDataFun}) => {
    const [nameData,setNameData] = useState({
        name:'',
        lastname:''
    })
    const onChangeFunName = (e)=>{
        setFormDataFun('name',nameData)
        setNameData({...nameData,[e.target.name]: e.target.value})
    }
    console.log(nameData,'nameData');
    return (
        <div>
            <label htmlFor="name">{data.name}</label>
            <input name="name" onChange={onChangeFunName} type="text" />
            <input name="lastname" onChange={onChangeFunName} type="text" />
        </div>
    );
};

export default Form1;