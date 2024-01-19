import logo from './logo.svg';
import './App.css';
import Welcomepage from './components/welcome_file/Welcomepage';
import './components/welcome_file/welcome.css'
import { Route, Router, Routes } from 'react-router-dom';
import EmployeeId from './components/Employee-ID/Employee_id';
import EmployeesPage from './components/Employess_page/Employees_page';
function App() {
  return (
    <div className="App">

    <Routes>
    <Route path='/' element={<Welcomepage/>}></Route>
      <Route  path='/employee_id' element={<EmployeeId/>}></Route>
      <Route path='/employee_page' element={<EmployeesPage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
