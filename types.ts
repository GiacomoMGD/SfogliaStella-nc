export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}

export enum BookingMode {
  TABLE = 'TABLE',
  ORDER = 'ORDER'
}
