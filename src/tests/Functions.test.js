import { fetchData } from '../store/getData';

describe('Testing the fetch function', () => {
  it('fetchData should return a promise', () => {
    expect(fetchData()).toEqual(expect.any(Function));
  });
});
