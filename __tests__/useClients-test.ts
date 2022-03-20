import useClients from '../src/hooks/useClients';

const mockReturn = {
  clients: [
    {
      distance: 100,
      id: 1,
      image: 'test',
      name: 'Name',
      stars: 2,
    },
  ],
  title: 'Hello test',
};

jest.mock('../src/hooks/useClients', () => {
  return jest.fn(() => mockReturn);
});

describe('useClients', () => {
  it('should return the clients and one title', () => {
    expect(useClients()).toEqual(mockReturn);
  });
});
