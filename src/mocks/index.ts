// Interfaces
import { END_POINT } from '@/constants';
import { IPortfolio, IProduct, IProject } from '@/interface';

export const itemDropdown = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
];

export const mockImages: IPortfolio[] = [
  {
    id: '1',
    name: 'Project One',
    image: '/background-hero.webp',
    date: '2020-03-10T09:30:00.000Z',
    detail: 'This is a detailed description of project one.',
    view: 120,
    favorite: 45,
    comment: 12
  },
  {
    id: '2',
    name: 'Project Two',
    image: '/background-hero.webp',
    date: '2020-03-10T09:30:00.000Z',
    detail: 'This is a detailed description of project two',
    view: 85,
    favorite: 32,
    comment: 7
  },
  {
    id: '3',
    name: 'Project Three',
    image: '/background-hero.webp',
    date: '2020-03-10T09:30:00.000Z',
    detail: 'This is a detailed description of project three',
    view: 445,
    favorite: 632,
    comment: 71
  }
];

export const mockProduct: IProduct[] = [
  {
    id: '1',
    name: 'Project One',
    image: '/background-hero.webp',
    view: 120,
    users: ['User A', 'User B']
  },
  {
    id: '2',
    name: 'Project Two',
    image: '/background-hero.webp',
    view: 85,
    users: ['User C', 'User D']
  },
  {
    id: '3',
    name: 'Project Three',
    image: '/background-hero.webp',
    view: 445,
    users: ['User E', 'User F']
  }
];

export const mockProject: IProject[] = [
  {
    id: '1',
    name: 'Project One',
    image: '/background-hero.webp',
    category: 'Category-A',
    comment: 1232,
    favorite: 444,
    views: 81532
  },
  {
    id: '2',
    name: 'Project Two',
    image: '/background-hero.webp',
    category: 'Category-A',
    comment: 1232,
    favorite: 444,
    views: 81532
  },
  {
    id: '3',
    name: 'Project Three',
    image: '/background-hero.webp',
    category: 'Category-A',
    comment: 1232,
    favorite: 444,
    views: 81532
  }
];

export const mockCategories = ['CategoryA', 'CategoryB', 'CategoryC', 'CategoryD']

