import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {countries.map((country) => {
          const linkName = country.name.replace(/ /gi, '%20');
          return (
            <Route
              path={`/details/${linkName}`}
              key={uuidv4()}
              element={(
                <Details
                  name={country.name}
                  latest_data={country.latest_data}
                  population={country.population}
                />
            )}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
