import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Timer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/Login");
    }, 8000); // 8000 milliseconds = 4 seconds

    return () => clearTimeout(timerId); // Cleanup the timer on component unmount
  }, [navigate]);

  return null;
}

export default Timer;