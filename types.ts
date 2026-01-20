
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'Starter' | 'Main' | 'Dessert' | 'Drink';
  image: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface NavLink {
  label: string;
  href: string;
}
