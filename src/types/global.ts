export interface Image {
  image: string;
}
export interface Category {
  category: string;
  id: number;
}

export interface Product {
  name: string;
  description: string;
  categories: Category[];
  category?: string;
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
