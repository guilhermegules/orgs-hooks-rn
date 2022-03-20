import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import Stars from '../src/components/Stars';

describe('Stars component', () => {
  it('should render only first star filled', async () => {
    const { findByTestId } = render(<Stars quantity={5} />);

    const firstStar = await findByTestId('star-0');
    const secondStar = await findByTestId('star-1');

    fireEvent.press(firstStar);

    expect(secondStar.props.children[0].props.source).toEqual({
      testUri: '../../../assets/gray-star.png',
    });
    expect(firstStar.props.children[0].props.source).toEqual({
      testUri: '../../../assets/star.png',
    });
  });
});
