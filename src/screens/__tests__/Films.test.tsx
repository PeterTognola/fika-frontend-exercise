import React from 'react';
import { render } from '@testing-library/react-native';
import { Films } from '../Films';
import FilmItem from '../../components/FilmItem';

it('renders film items', () => {
  const push = jest.fn();

  const filmItems: string[] = []; // todo model.

  // Ignoring the next line as we are not testing
  // the props but the films and search.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const out = render(<Films navigation={{ push }} />);

  // todo list is displaying film items.
  filmItems.map(x =>
    expect(out.getByText(x).parent?.parent).toBeInstanceOf(FilmItem),
  );
});
