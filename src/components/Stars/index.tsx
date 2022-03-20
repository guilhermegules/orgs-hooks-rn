import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Star from './Star';

interface StarsProps {
  quantity: number;
  editable?: boolean;
  bigger?: boolean;
}

const Stars: FC<StarsProps> = ({ quantity: originalQuantity, editable = true, bigger = false }) => {
  const [quantity, setQuantity] = useState(originalQuantity);

  const starRender = () =>
    Array.from({ length: 5 }, (_, index) => (
      <Star
        testID={`star-${index}`}
        key={index}
        onPress={() => setQuantity(index + 1)}
        disabled={!editable}
        filled={index < quantity}
        bigger={bigger}
      />
    ));

  return (
    <View style={styles.starContainer}>
      <>{starRender()}</>
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
  },
});

export default Stars;
