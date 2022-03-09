import React, { FC } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import useClients from '../../hooks/useClients';

import ClientCard from '../ClientCard';

interface ClientsProps {
  header: FC;
}

const Clients: FC<ClientsProps> = ({ header: Header }) => {
  const { title, clients } = useClients();

  const listHeader = () => {
    return (
      <>
        <Header />
        <Text style={styles.title}>{title}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={clients}
      keyExtractor={client => `${client?.id}`}
      ListHeaderComponent={listHeader}
      renderItem={({ item }) => {
        return item ? <ClientCard client={item} /> : null;
      }}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});

export default Clients;
