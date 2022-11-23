import { fireEvent, render } from '@testing-library/react-native';
import SearchBar from '../SearchBar';

it('functions as a search bar', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  const out = render(<SearchBar />);

  const searchBar = out.getByPlaceholderText('Search');

  // We have a search bar.
  expect(searchBar).toBeTruthy();

  // Fire off search event.
  fireEvent.changeText(searchBar, 'test');

  // Expect search to be the value above.
  expect(searchBar.props.value);

  // User can enter query.
  // Query returned matches query.
});
