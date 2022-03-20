import React from 'react';
import { render } from '@testing-library/react-native';

import image from '../assets/clients/green.png';
import ClientCard from '../src/components/ClientCard';
import { Client } from '../src/interfaces/client.model';

describe('Client Card component', () => {
  const client: Client = {
    distance: 1000,
    id: 1,
    image: image,
    name: 'client name',
    stars: 2,
  };

  it('should create component with all client data in card', async () => {
    const { findByText } = render(<ClientCard client={client} />);

    await findByText('client name');
    await findByText('1000m');
  });
});
