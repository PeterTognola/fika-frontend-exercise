import { render } from '@testing-library/react-native';
import SearchBar from '../SearchBar';

it('functions as a search bar', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  const out = render(<SearchBar />);

  // User can enter query.
  // Query returned matches query.
});
