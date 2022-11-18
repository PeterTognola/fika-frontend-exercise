import React from 'react';
import { render } from '@testing-library/react-native';
import FilmItem from '../FilmItem';

it('functions as a film item', () => {
  const out = render(<FilmItem />);

  // expect Has title.
  // expect Has genre(s).
  // function expects query.
});
