import React, { FC } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import star from '../../../assets/star.png';
import blankStar from '../../../assets/gray-star.png';

interface StarProps {
  onPress: any;
  disabled?: boolean;
  filled: boolean;
  bigger?: boolean;
  testID?: string;
}

const Star: FC<StarProps> = ({
  onPress,
  disabled = true,
  filled,
  bigger = false,
  testID = 'star-touchable-opacity',
}) => {
  const styles = stylesHandler(bigger);

  const getStar = () => {
    if (filled) {
      return star;
    }

    return blankStar;
  };

  return (
    <TouchableOpacity testID={testID} onPress={onPress} disabled={disabled}>
      <Image testID="star-image" style={styles.star} source={getStar()} />
    </TouchableOpacity>
  );
};

const stylesHandler = (bigger: boolean) =>
  StyleSheet.create({
    star: {
      width: bigger ? 36 : 12,
      height: bigger ? 36 : 12,
      marginRight: 2,
    },
  });

export default Star;
