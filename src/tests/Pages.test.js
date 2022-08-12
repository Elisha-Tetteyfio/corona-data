import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Details from '../pages/Details';
import store from '../store/index';
import Home from '../pages/Home';

describe('Testing pages', () => {
  it('test Details page', () => {
    const tree = renderer
      .create(
        <Router>
          <Details />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test Home page', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Home />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
