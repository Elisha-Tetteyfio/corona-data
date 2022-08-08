import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import Details from './pages/Details';
import Home from './pages/Home';
import { fetchData } from './store/getData';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const countries = useSelector((data) => data.data);

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      {countries.map((country) => (
        <Route path={`/details/${country.name}`} exact key={uuidv4()}>
          <Details name={country.name} latest_data={country.latest_data} />
        </Route>
      ))}

    </Switch>
  );
};

export default App;
