export interface ProductItem {
  id: number;
  name: string;
  type: 'Повседневные' | 'Беговые' | 'Дизайнерские' | 'Кеды' | 'Треккинговые' | 'Горные';
  price: number;
  size: number[];
  photos: string[];
  gender?: 'male' | 'female';
  color?: string;
  description?: string;
  composition?: string[];
  country?: string;
}