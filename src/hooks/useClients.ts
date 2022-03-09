import { useEffect, useState } from 'react';

import { Client } from '../interfaces/client.model';
import { getClients } from '../services/loadFakeData';

const useClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [title, setTitle] = useState<string>();

  useEffect(() => {
    getClients().then(response => {
      setClients(response.list as Client[]);
      setTitle(response.title);
    });

    setClients(clients.sort((actual, next) => actual.distance - next.distance));
  }, [clients]);

  return { clients, title };
};

export default useClients;
