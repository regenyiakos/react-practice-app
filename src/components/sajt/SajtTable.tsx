import { CheeseTableModel } from '@/models/sajt/types';

import ChromeIcon from '../icons/ChromeIcon';

type CheeseTableProps = {
    cheeseData: CheeseTableModel[];
};
export const SajtTable = ({ cheeseData }: CheeseTableProps) => {
    return (
        <table className='cheese-table'>
            <thead>
                <tr className='cheese-header'>
                    <th>Cheese Name</th>
                    <th>Type</th>
                    <th>Country of Origin</th>
                    <th>Texture</th>
                    <th>Description</th>
                    <th></th>
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
                        <td className='actions'>
                            <a
                                href={`https://www.google.com/search?q=${cheese.cheeseName}`}
                                target='_blank'
                            >
                                <ChromeIcon
                                    className='chrome-icon'
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default SajtTable;
