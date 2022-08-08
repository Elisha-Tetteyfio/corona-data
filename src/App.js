import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import { fetchData } from './store/getData';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
