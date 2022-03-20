import React, { FC, useReducer, useMemo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Client } from '../../interfaces/client.model';
import Stars from '../Stars';

interface ClientCardProps {
  client: Client;
}

const distanceInMeters = (distance: number) => `${distance}m`;

const ClientCard: FC<ClientCardProps> = ({ client }) => {
  const [selected, invertSelection] = useReducer(isSelected => !isSelected, false);

  const distanceInText = useMemo(
    () => distanceInMeters(Number(client.distance)),
    [client.distance],
  );

  return (
    <TouchableOpacity testID="client-card" style={styles.card} onPress={invertSelection}>
      <Image style={styles.cardImage} source={client?.image} accessibilityLabel={client?.name} />
      <View style={styles.information}>
        <View>
          <Text style={styles.informationName}>{client?.name}</Text>
          <Stars quantity={client?.stars} editable={selected} bigger={selected} />
        </View>
        <Text style={styles.informationDistance}>{distanceInText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f6f6f6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',

    // Android
    elevation: 4,

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  cardImage: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  information: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  informationName: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  informationDistance: {
    fontSize: 12,
    lineHeight: 19,
  },
});

export default ClientCard;
