import React from 'react';
import { render } from '@testing-library/react-native';
import Star from '../src/components/Stars/Star';

describe('Star component', () => {
  it('should render the default component', async () => {
    const { findByTestId } = render(<Star onPress={() => {}} filled={true} />);

    const starImage = await findByTestId('star-image');

    expect(starImage.props.style.width).toBe(12);
    expect(starImage.props.style.height).toBe(12);
  });
  it('should render the bigger component', async () => {
    const { findByTestId } = render(<Star onPress={() => {}} filled={true} bigger={true} />);

    const starImage = await findByTestId('star-image');

    expect(starImage.props.style.width).toBe(36);
    expect(starImage.props.style.height).toBe(36);
  });
  it('should render the component disabled', async () => {
    const { findByTestId } = render(<Star onPress={() => {}} filled={true} disabled={true} />);

    const touchableOpacityElement = await findByTestId('star-touchable-opacity');

    expect(touchableOpacityElement.props.accessibilityState.disabled).toBe(true);
  });
});
