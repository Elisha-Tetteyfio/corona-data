import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home';
import { fetchData } from './store/getData';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const dd = useSelector((da) => da.data);
  console.log(dd[0]);
  return (
    <div className="App">
      <Home />
      <h1>Corona Data</h1>
    </div>
  );
};

export default App;
