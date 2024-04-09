export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type CarItem = Guitar & {
  quantity: number;
};

// export type GuitarId = Guitar['id'];

// export type GuitarId = Pick<Guitar, 'id'>;

// export type CarItem = Pick<Guitar, 'id' | 'name' | 'price'> & {
//   quantity: number;
// };

// export type CarItem = Omit<Guitar, 'id' | 'name' | 'price'> & {
//   quantity: number;
// };
