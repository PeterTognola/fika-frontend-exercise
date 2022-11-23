import React from 'react';
import { render } from '@testing-library/react-native';
import FilmItem from '../FilmItem';

it('functions as a film item', () => {
  const title = 'Test Title';
  const posterPath = '123.png';

  const out = render(
    <FilmItem title={title} posterPath={posterPath} genres={[]} />,
  );

  expect(out.getByText(title)).toBeTruthy();
  // expect Has genre(s). not quite sure how to display.
});
