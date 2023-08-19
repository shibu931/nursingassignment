import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0
  }, [location]);

  return null; 
}

export default ScrollToTop;