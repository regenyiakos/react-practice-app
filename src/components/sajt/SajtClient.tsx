import { CheeseTableModel } from '@/models/sajt/types';
import '../../styles/sajt/styles.css';

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
                <p>This is the page Sajt</p>
            </div>
            <table className='cheese-table'>
                <thead>
                    <tr className='cheese-header'>
                        <th>Cheese Name</th>
                        <th>Type</th>
                        <th>Country of Origin</th>
                        <th>Texture</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {cheeseData.map((cheese, index) => (
                        <tr key={index} className='cheese-row'>
                            <td>{cheese.cheeseName}</td>
                            <td>{cheese.type}</td>
                            <td>{cheese.countryOfOrigin}</td>
                            <td>{cheese.texture}</td>
                            <td>{cheese.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default SajtClient;
