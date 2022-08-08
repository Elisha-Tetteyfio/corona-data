import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import { fetchData } from './store/getData';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/details" exact>
        <Details />
      </Route>
    </Switch>
  );
};

export default App;
