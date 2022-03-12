import React from 'react';

const Form3 = ({data}) => {
    // console.log(data,'data');
    return (
        <div>
            <label htmlFor="num">{data.name}</label>
            <input naem="age" type="number" />
        </div>
    );
};

export default Form3;