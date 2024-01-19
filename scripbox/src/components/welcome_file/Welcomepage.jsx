import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../welcome_file/welcome.css'
const WelcomePage = () => {
  const navigate = useNavigate();
  const [flash, setFlash] = useState(true);

  useEffect(() => {
    const flashInterval = setInterval(() => {
      setFlash((prevFlash) => !prevFlash);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      clearInterval(flashInterval);
      navigate('/employee_id');
    }, 5000);

    return () => {
      clearInterval(flashInterval);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div className='main_page'>
 <div className={`welcome-page ${flash ? 'flash' : ''}`}>
      <h1>WELCOME TO HACK IDEAS</h1>
    </div>
    </div>
   
  );
};

export default WelcomePage;
