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

const finaldata=JSON.parse(localStorage.getItem("employee_data")) || []
console.log(finaldata)

    return (
        <div className='employee_main_div'>
            <div className='employees_div'>
                <FontAwesomeIcon  onClick={AddTask} style={{height:'8vh'}} icon={faPlus} />
            </div>
        </div>
    );
}

export default EmployeesPage;
