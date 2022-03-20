import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import * as api from '../src/services/loadFakeData';
import Header from '../src/components/Header';

describe('Header component', () => {
  it('renders correctly', async () => {
    jest.spyOn(api, 'getHeader').mockReturnValue(
      new Promise(resolve => {
        resolve({ welcomeMessage: 'welcome message', info: 'info' });
      }),
    );

    const { findByText } = render(<Header />);

    await findByText('welcome message');
    await findByText('info');
  });
});
