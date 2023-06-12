export interface Image {
  image: string;
}

export interface Product {
  name: string;
  description: string;
  category: string;
  images: Image[];
  price: number;
  id: number;
}

export interface ProductTableProps {
  list?: Product[];
}

export interface Store {
  products?: Product[];
}
