import React, { FC, useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import { Client } from '../../interfaces/client.model';
import { getClients } from '../../services/loadFakeData';

interface ClientsProps {
  header: FC;
}

const Clients: FC<ClientsProps> = ({ header: Header }) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [title, setTitle] = useState<string>();

  useEffect(() => {
    getClients().then(response => {
      setClients(response.list as Client[]);
      setTitle(response.title);
    });
  }, []);

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
      renderItem={({ item }) => (
        <View>
          <Image source={item?.image} />
          <View>
            <Text>{item?.name}</Text>
            <Text>{item?.stars}</Text>
          </View>
          <Text>{item?.distance}</Text>
        </View>
      )}
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
