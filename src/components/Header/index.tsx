import React, { FC, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import logo from '../../../assets/logo.png';
import { getHeader } from '../../services/loadFakeData';

interface HeaderData {
  welcomeMessage: string;
  info: string;
}

const Header: FC = () => {
  const [header, setHeader] = useState<HeaderData>({ info: '', welcomeMessage: '' });

  useEffect(() => {
    getHeader().then(headerConfig => {
      setHeader(headerConfig);
    });
  }, []);

  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.welcome}>{header.welcomeMessage}</Text>
      <Text style={styles.info}>{header.info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  info: {
    fontSize: 16,
    lineHeight: 26,
    color: '#a3a3a3',
  },
});

export default Header;
