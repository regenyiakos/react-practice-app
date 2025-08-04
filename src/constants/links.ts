import { LinkModel } from '@/models/navigation/types';

export const LINKS1: LinkModel = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Sajt', url: '/sajt' },
    { name: 'Cica', url: '/cica' },
    { name: 'Malac', url: '/malac' },
    {
        name: 'Kutya',
        url: '/kutya',
        subLinks: [
            {
                name: 'Kutya 1',
                url: '/kutya',
                subLinks: [
                    { name: 'Kutya 1.1', url: '/kutya1' },
                    { name: 'Kutya 1.2', url: '/kutya2' },
                ],
            },
            {
                name: 'Kutya 2',
                url: '/kutya',
                subLinks: [
                    { name: 'Kutya 2.1', url: '/kutya1' },
                    { name: 'Kutya 2.2', url: '/kutya2' },
                ],
            },
        ],
    },
    {
        name: 'Divek',
        url: '',
        subLinks: [
            {
                name: 'Divek 1',
                url: '/divparams/1',
            },
            {
                name: 'Divek 2',
                url: '/divparams/2',
            },
        ],
    },
    { name: 'Forms', url: '/forms' },
];

const LINKS2: LinkModel = [
    { name: 'asd', url: '/' },
    { name: 'dsa', url: '/about' },
    { name: 'aaaaa', url: '/sajt' },
];
