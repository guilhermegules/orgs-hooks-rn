import green from '../../assets/clients/green.png';
import salad from '../../assets/clients/salad.png';
import jennyJack from '../../assets/clients/jenny-jack.png';
import grow from '../../assets/clients/grow.png';
import potager from '../../assets/clients/potager.png';

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const clients = {
  title: 'Produtores',
  list: [
    {
      id: 1,
      name: 'Green',
      image: green,
      distance: `${randomNumber(1, 500)}m`,
      stars: randomNumber(1, 5),
    },
    {
      id: 2,
      name: 'Salad',
      image: salad,
      distance: `${randomNumber(1, 500)}m`,
      stars: randomNumber(1, 5),
    },
    {
      id: 3,
      name: 'Jenny Jack Farm',
      image: jennyJack,
      distance: `${randomNumber(1, 500)}m`,
      stars: randomNumber(1, 5),
    },
    {
      id: 4,
      name: 'Grow',
      image: grow,
      distance: `${randomNumber(1, 500)}m`,
      stars: randomNumber(1, 5),
    },
    {
      id: 5,
      name: 'Potager',
      image: potager,
      distance: `${randomNumber(1, 500)}m`,
      stars: randomNumber(1, 5),
    },
    ,
  ],
};

export default clients;
