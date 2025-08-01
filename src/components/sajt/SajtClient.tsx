'use client';
import { CheeseTableModel } from '@/models/sajt/types';
import '../../styles/sajt/styles.css';
import SajtTable from './SajtTable';
import { useParams } from 'next/dist/client/components/navigation';
import { useState } from 'react';

export const SajtClient = () => {
    const params = useParams();
    const textureParam = params.texture ? params.texture[0] : null;

    const cheeseData: CheeseTableModel[] = [
        {
            cheeseName: 'Cheddar',
            type: 'Hard',
            countryOfOrigin: 'England',
            texture: 'Firm',
            description:
                'Sharp, nutty flavor, popular for snacking and cooking.',
        },
        {
            cheeseName: 'Brie',
            type: 'Soft',
            countryOfOrigin: 'France',
            texture: 'Creamy',
            description: 'Mild, buttery, and creamy with an edible rind.',
        },
        {
            cheeseName: 'Gorgonzola',
            type: 'Blue',
            countryOfOrigin: 'Italy',
            texture: 'Crumbly',
            description: 'Tangy, strong flavor with blue veins.',
        },
        {
            cheeseName: 'Feta',
            type: 'Brined',
            countryOfOrigin: 'Greece',
            texture: 'Crumbly',
            description: 'Salty, tangy, and crumbly, often used in salads.',
        },
        {
            cheeseName: 'Parmesan',
            type: 'Hard',
            countryOfOrigin: 'Italy',
            texture: 'Granular',
            description: 'Rich, savory, and granular, ideal for grating.',
        },
    ];

    const filterCheese = () => {
        if (textureParam) {
            return cheeseData.filter(
                (cheese) =>
                    cheese.texture.toLocaleLowerCase() ===
                    textureParam.toLocaleLowerCase()
            );
        } else {
            return cheeseData;
        }
    };
    return (
        <div className='container'>
            <div className='header'>
                <h1 className='title'>Welcome to Our Site</h1>
                <p>
                    This <span className='sajtspan'>is</span> the page Sajt
                </p>
            </div>
            {textureParam && (
                <div>
                    <a href='/sajt'>Összes mutatása</a>
                </div>
            )}

            <div>
                <SajtTable cheeseData={filterCheese()} />
            </div>
        </div>
    );
};
export default SajtClient;
