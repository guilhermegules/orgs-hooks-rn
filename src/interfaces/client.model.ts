import { ImageSourcePropType } from 'react-native';

export interface Client {
  name: string;
  image: ImageSourcePropType;
  distance: number;
  stars: number;
  id: number;
}
