import React from 'react';
import "../Employess_page/employeesPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const EmployeesPage = () => {
const navigate=useNavigate()
const AddTask=()=>{
    console.log('hi')
navigate("/addtask")
}

function handleskip(){
    navigate("/challengelist")
}

    return (
        <div className='employee_main_div'>
        <h1>Create Your own Challenge</h1><br></br>
            <div className='employees_div'>
                <FontAwesomeIcon  onClick={AddTask} style={{height:'8vh'}} icon={faPlus} />
            </div><br/><br/><br/>   
            <button className='skip' onClick={handleskip}>SKIP</button>
              
            
        </div>
    );
}

export default EmployeesPage;
