import React, { Component , useState, useEffect}  from 'react'
import {Link} from 'react-router-dom'
import Example from "./DropDown";
import DatePicker from 'react-date-picker';

function AddNew(props) {
    const [value, onChange] = useState(new Date());
    return (
        <>
      <div>
           <Example />

                <DatePicker
                    onChange={onChange}
                    value={value}
                />
                
                </div>
        </>
    )
}

export default AddNew