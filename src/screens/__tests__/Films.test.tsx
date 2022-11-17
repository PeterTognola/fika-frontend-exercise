import React from 'react';
import { render } from '@testing-library/react-native';

import { Films } from '../Films';

it('renders film items', () => {
  const push = jest.fn();
  // @ts-ignore
  // Ignoring the next line as we are not testing
  // the props but the films and search.
  const out = render(<Films navigation={{ push }} />);

  // Films displayed
  // Has title
  // Has genre(s)


  // Separate tests:
  // User can search for films.
  // Queried list of films displayed.
});
