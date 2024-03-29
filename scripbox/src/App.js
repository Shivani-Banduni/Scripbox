import logo from './logo.svg';
import './App.css';
import Welcomepage from './components/welcome_file/Welcomepage';
import './components/welcome_file/welcome.css'
import { Route, Router, Routes } from 'react-router-dom';
import EmployeeId from './components/Employee-ID/Employee_id';
import EmployeesPage from './components/Employess_page/Employees_page';
import Addtask from './components/Add task/Addtask';
import ChallengeList from './components/Challenge_List/Challenge_list';
function App() {
  return (
    <div className="App">

    <Routes>
    <Route path='/' element={<Welcomepage/>}></Route>
      <Route  path='/employee_id' element={<EmployeeId/>}></Route>
      <Route path='/employee_page' element={<EmployeesPage/>}></Route>
      <Route path='/addtask' element={<Addtask/>}></Route>
      <Route path='/challengelist' element={<ChallengeList/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
