import { ChartMixedSvgComponent } from '../components/svgs/chart-mixed-svg/chart-mixed-svg.component';
import { MessagesSvgComponent } from '../components/svgs/messages-svg/messages-svg.component';
import { PenNibSvgComponent } from '../components/svgs/pen-nib-svg/pen-nib-svg.component';
import { StoreSvgComponent } from '../components/svgs/store-svg/store-svg.component';
import { TruckSvgComponent } from '../components/svgs/truck-svg/truck-svg.component';
import { FooterItem, Region, Store } from '../models/dashboard.models';

export const STORES: Store[] = [
  {
    id: 1,
    storeName: 'Tesco Extra - Manchester',
    region: 'North West England',
    orders: 2150,
    lastOrder: '2025-07-20T18:00:00Z',
    supermarket: true,
  },
  {
    id: 2,
    storeName: 'Corner Shop Express - Islington',
    region: 'Greater London',
    orders: 980,
    lastOrder: '2025-07-21T09:30:00Z',
    supermarket: false,
  },
  {
    id: 3,
    storeName: 'Asda Superstore - Glasgow',
    region: 'Scotland',
    orders: 1700,
    lastOrder: '2025-07-19T14:15:00Z',
    supermarket: true,
  },
  {
    id: 4,
    storeName: 'Local Grocer - Cardiff',
    region: 'Wales',
    orders: 850,
    lastOrder: '2025-07-22T10:00:00Z',
    supermarket: false,
  },
  {
    id: 5,
    storeName: 'Morrisons - Birmingham',
    region: 'West Midlands',
    orders: 1520,
    lastOrder: '2025-07-18T16:45:00Z',
    supermarket: true,
  },
  {
    id: 6,
    storeName: 'Quick Stop & Go - Bristol',
    region: 'South West England',
    orders: 1100,
    lastOrder: '2025-07-20T11:00:00Z',
    supermarket: false,
  },
  {
    id: 7,
    storeName: 'Aldi - Leeds',
    region: 'Yorkshire and the Humber',
    orders: 1300,
    lastOrder: '2025-07-21T13:30:00Z',
    supermarket: true,
  },
  {
    id: 8,
    storeName: 'Waitrose & Partners - Edinburgh',
    region: 'Scotland',
    orders: 650,
    lastOrder: '2025-07-17T09:00:00Z',
    supermarket: true,
  },
  {
    id: 10,
    storeName: 'Daily Essentials - Belfast',
    region: 'Northern Ireland',
    orders: 550,
    lastOrder: '2025-07-22T08:00:00Z',
    supermarket: false,
  },
];

export const REGIONS: Region[] = [
  { id: 3, region: 'Greater London' },
  { id: 5, region: 'North West England' },
  { id: 6, region: 'Northern Ireland' },
  { id: 7, region: 'Scotland' },
  { id: 10, region: 'South West England' },
  { id: 11, region: 'Wales' },
  { id: 12, region: 'West Midlands' },
  { id: 13, region: 'Yorkshire and the Humber' },
];

export const FOOTER_ITEMS: FooterItem[] = [
  {
    iconComponent: StoreSvgComponent,
    iconStyles: 'w-5 h-5 fill-green-600',
    barStyles: 'w-16 h-3.5 bg-green-100',
  },
  {
    iconComponent: TruckSvgComponent,
    iconStyles: 'w-5 h-5 fill-gray-600',
    barStyles: 'w-16 h-3.5 bg-gray-200',
  },
  {
    iconComponent: PenNibSvgComponent,
    iconStyles: 'w-5 h-5 fill-gray-600',
    barStyles: 'w-16 h-3.5 bg-gray-200',
  },
  {
    iconComponent: ChartMixedSvgComponent,
    iconStyles: 'w-5 h-5 fill-gray-600',
    barStyles: 'w-12 h-3.5 bg-gray-200',
  },
  {
    iconComponent: MessagesSvgComponent,
    iconStyles: 'w-5 h-5 fill-gray-600',
    barStyles: 'w-8 h-3.5 bg-gray-200',
  },
];
