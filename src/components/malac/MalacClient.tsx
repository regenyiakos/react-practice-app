'use client';

import { MenuItem, TextField } from '@mui/material';
import { MALACOK } from './malacok';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export const MalacClient = () => {
    const searchParams = useSearchParams();
    const locationParam = searchParams.get('location');
    const colorParam = searchParams.get('color');
    const [filterLocation, setFilterLocation] = useState<string>(
        locationParam ? locationParam : ''
    );
    const [filterColor, setFilterColor] = useState<string>(
        colorParam ? colorParam : ''
    );
    const locations = () => {
        let uniqueLocations: string[] = [];
        MALACOK.forEach((malac) => {
            if (!uniqueLocations.includes(malac.location)) {
                uniqueLocations.push(malac.location);
            }
        });
        return uniqueLocations;
    };
    const filterMalac = () => {
        return MALACOK.filter(
            (malac) =>
                malac.location
                    .toLocaleLowerCase()
                    .includes(filterLocation.toLocaleLowerCase()) &&
                malac.color
                    .toLocaleLowerCase()
                    .includes(filterColor.toLocaleLowerCase())
        );
    };
    return (
        <div className='p-4'>
            <h1>Malac client</h1>
            <div className='flex gap-4'>
                <TextField
                    id='outlined-basic'
                    select
                    variant='outlined'
                    label='Előfordulás'
                    value={filterLocation}
                    onChange={(e) => setFilterLocation(e.target.value)}
                    className='w-[200px]'
                >
                    <MenuItem value='' className='italic'>
                        Válassz előfordulást
                    </MenuItem>
                    {locations().map((option, idx) => (
                        <MenuItem key={idx} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id='outlined-basic'
                    variant='outlined'
                    label='Szín'
                    value={filterColor}
                    onChange={(e) => setFilterColor(e.target.value)}
                    className='w-[200px]'
                ></TextField>
            </div>
            <div className='flex gap-4 flex-wrap mt-4'>
                {filterMalac().map((malac, index) => (
                    <div
                        className='border-[blue] border-solid rounded-[20px] p-4 w-1/5 max-w-[200px] min-w-[200px]'
                        key={index}
                    >
                        <p>Fajta: {malac.species}</p>
                        <p>Szín: {malac.color}</p>
                        <p>Átlagos súly: {malac.averageWeight}</p>
                        <p>Előfordulás: {malac.location}</p>
                        <p>Leírás: {malac.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MalacClient;

// TODO: Constasba kiszedni a filter értéket, filterelni a malacokat az előfordulásra. Szorgalmi: színre is külön input. Brutál szorgalmi: Az előfordulás szűrő legördülő menüben, csak az legyen benne ami létezik a tömbben
