import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Clients() {
  const navigate = useNavigate();

  useEffect(() => {
    // Immediately redirect to client login
    navigate('/client/login');
  }, [navigate]);

  // Return null since this component will immediately redirect
  return null;
}

export default Clients;