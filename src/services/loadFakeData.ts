import headerConfig from '../mocks/header';
import clients from '../mocks/clients';

export const getClients = () => {
  return Promise.resolve(clients);
};

export const getHeader = () => {
  return Promise.resolve(headerConfig);
};
