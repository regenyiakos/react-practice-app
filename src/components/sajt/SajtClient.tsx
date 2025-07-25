import { CheeseTableModel } from '@/models/sajt/types';
import '../../styles/sajt/styles.css';
import SajtTable from './SajtTable';

export const SajtClient = () => {
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
    return (
        <div className='container'>
            <div className='header'>
                <h1 className='title'>Welcome to Our Site</h1>
                <p>
                    This <span className='sajtspan'>is</span> the page Sajt
                </p>
            </div>
            <div>
                <SajtTable cheeseData={cheeseData} />
            </div>
        </div>
    );
};
export default SajtClient;
