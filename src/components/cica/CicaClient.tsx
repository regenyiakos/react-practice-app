'use client';
import '../../styles/cica/styles.css';
import '../../styles/cica/table.css';

export const CicaClient = () => {
    return (
        <div className='cica-container'>
            <h1 className='cica-h1'>Cica Page</h1>
            <p>This is the Cica page content.</p>
            <table className='cica-table'>
                <thead>
                    <tr>
                        <th>Breed</th>
                        <th>Origin</th>
                        <th>Coat</th>
                        <th>Personality</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Maine Coon</td>
                        <td>USA</td>
                        <td>Long</td>
                        <td>Gentle, playful, sociable</td>
                    </tr>
                    <tr>
                        <td>Siamese</td>
                        <td>Thailand</td>
                        <td>Short</td>
                        <td>Vocal, affectionate, intelligent</td>
                    </tr>
                    <tr>
                        <td>Persian</td>
                        <td>Iran</td>
                        <td>Long</td>
                        <td>Calm, quiet, sweet</td>
                    </tr>
                    <tr>
                        <td>Bengal</td>
                        <td>USA</td>
                        <td>Short</td>
                        <td>Active, curious, energetic</td>
                    </tr>
                    <tr>
                        <td>Sphynx</td>
                        <td>Canada</td>
                        <td>Hairless</td>
                        <td>Friendly, lively, affectionate</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default CicaClient;
