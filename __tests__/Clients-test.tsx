import 'react-native';
import React, { FC } from 'react';
import { render } from '@testing-library/react-native';
import { Text, View } from 'react-native';

import useClients from '../src/hooks/useClients';
import Clients from '../src/components/Clients';

const MockHeader: FC = () => (
  <View>
    <Text>Mocked header</Text>
  </View>
);

jest.mock('../src/hooks/useClients', () => {
  return jest.fn(() => ({
    clients: [],
    title: 'Hello test',
  }));
});

describe('Clients component', () => {
  it('should renders correctly', async () => {
    const { findByText } = render(<Clients header={MockHeader} />);

    await findByText('Hello test');
    expect(useClients).toHaveBeenCalledTimes(1);
  });
});
