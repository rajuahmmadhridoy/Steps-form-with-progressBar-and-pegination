import React from 'react';

const Form2 = ({data,setFormDataFun}) => {
    return (
        <div>
            <label htmlFor="">{data.name}</label>
            <select onChange={(e)=>setFormDataFun('gender',e.target.value)}  id="">
                {data.options.map(data=><option name="gender"  value={data}>{data}</option>)}
            </select>
        </div>
    );
};

export default Form2;