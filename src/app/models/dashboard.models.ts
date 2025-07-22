export interface Store {
  id: number;
  storeName: string;
  region: string;
  orders: number;
  lastOrder: string;
  supermarket: boolean;
}

export interface Region {
  id: number;
  region: string;
}

export interface FooterItem {
  iconComponent: any;
  iconStyles: string;
  barStyles: string;
}
