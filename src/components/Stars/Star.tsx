import React, { FC } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import star from '../../../assets/star.png';
import blankStar from '../../../assets/gray-star.png';

interface StarProps {
  onPress: any;
  disabled?: boolean;
  filled: boolean;
  bigger?: boolean;
}

const Star: FC<StarProps> = ({ onPress, disabled = true, filled, bigger = false }) => {
  const styles = stylesHandler(bigger);

  const getStar = () => {
    if (filled) {
      return star;
    }

    return blankStar;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Image style={styles.star} source={getStar()} />
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
