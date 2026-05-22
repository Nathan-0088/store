export interface IProduto {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;

  rating: {
    rate: number;
  };
}
