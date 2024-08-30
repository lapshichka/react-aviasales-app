export interface Detail {
  title: string;
  text: string;
}

export interface Flight {
  id: number,
  price: number;
  airline: string;
  details: Detail[][];
}
