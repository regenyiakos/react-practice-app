import { MalacType } from '@/models/malac/types';

// 10 példányos malac konstans tömb a MalacType alapján
export const MALACOK: MalacType[] = [
    {
        species: 'Mangalica',
        color: 'szőke',
        averageWeight: 100,
        location: 'Magyarország',
        description: 'Magyar őshonos, göndör szőrű sertés.',
    },
    {
        species: 'Duroc',
        color: 'vörös',
        averageWeight: 200,
        location: 'USA',
        description: 'Gyorsan növő, hússertés fajta.',
    },
    {
        species: 'Landrace',
        color: 'fehér',
        averageWeight: 300,
        location: 'Dánia',
        description: 'Hosszú testű, kiváló anyai tulajdonságokkal.',
    },
    {
        species: 'Pietrain',
        color: 'foltos',
        averageWeight: 400,
        location: 'Belgium',
        description: 'Izmos, alacsony zsírtartalmú hús.',
    },
    {
        species: 'Berkshire',
        color: 'fekete-fehér',
        averageWeight: 500,
        location: 'Anglia',
        description: 'Ízletes, márványozott hús.',
    },
    {
        species: 'Hampshire',
        color: 'fekete fehér övvel',
        averageWeight: 600,
        location: 'USA',
        description: 'Jó húsminőség, jellegzetes fehér öv.',
    },
    {
        species: 'Large White',
        color: 'fehér',
        averageWeight: 700,
        location: 'Anglia',
        description: 'Nagytestű, kiváló szaporaságú fajta.',
    },
    {
        species: 'Tamworth',
        color: 'vörös',
        averageWeight: 800,
        location: 'Anglia',
        description: 'Ősi, szívós, szabadtartásra alkalmas.',
    },
    {
        species: 'Meishan',
        color: 'fekete',
        averageWeight: 900,
        location: 'Kína',
        description: 'Nagyon szapora, zsírosabb hús.',
    },
    {
        species: 'Yorkshire',
        color: 'fehér',
        averageWeight: 1000,
        location: 'Anglia',
        description: 'Világszerte elterjedt, jó húsminőség.',
    },
];
