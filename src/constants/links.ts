import { LinkModel } from '@/models/navigation/types';

export const LINKS1: LinkModel = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Sajt', url: '/sajt' },
    { name: 'Cica', url: '/cica' },
    {
        name: 'Kutya',
        url: '/kutya',
        subLinks: [{ name: 'Kutya 1', url: '/kutya' }],
    },
    {
        name: 'Divek',
        url: '',
        subLinks: [
            { name: 'Divek 1', url: '/divek' },
            { name: 'Divek 2', url: '/divek2' },
        ],
    },
];

const LINKS2: LinkModel = [
    { name: 'asd', url: '/' },
    { name: 'dsa', url: '/about' },
    { name: 'aaaaa', url: '/sajt' },
];
