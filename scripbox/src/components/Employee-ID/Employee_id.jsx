import React from 'react';
import '../Employee-ID/employee_id.css'
import { useNavigate } from 'react-router-dom';
const EmployeeId = () => {
    const [ID,setID]=React.useState('')


    const  navigate=useNavigate()
    const handleclick=()=>{
        console.log(ID,'ID')
navigate("/employee_page")

       
    }
    return (
        <div className='main'>
         <h1>Use Your Employee ID </h1>
        <div className='main_id'>
       
            <input onChange={(e)=>setID(e.target.value)} defaultValue={"ID"+ID} type='text' placeholder='Enter Your Employee ID'/> 
            <button disabled={ID.trim() === ''} onClick={handleclick}>Submit</button>
        </div>
        </div>
    );
}

export default EmployeeId;
