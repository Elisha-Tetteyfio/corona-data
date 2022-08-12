import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../store/index';
import CountryCard from '../components/CountryCard';

describe('Testing the components', () => {
  it('test CountryCard', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CountryCard />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
