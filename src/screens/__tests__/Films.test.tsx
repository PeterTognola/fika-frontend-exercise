import React from 'react';
import { render } from '@testing-library/react-native';

import { Films } from '../Films';
import SearchBar from "../../components/SearchBar";
import FilmItem from "../../components/FilmItem";

it('renders film items', () => {
  const push = jest.fn();
  // @ts-ignore
  // Ignoring the next line as we are not testing
  // the props but the films and search.
  const out = render(<Films navigation={{ push }} />);

  // todo list is displaying film items.
  expect(out.getByType(FilmItem)).toBeTruthy();
  expect(out.getByType(SearchBar)).toBeTruthy();
});

it('renders film search', () => {
  // User can search for films.

  // Films displayed
});
