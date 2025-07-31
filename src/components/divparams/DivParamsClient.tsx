'use client';
import { useParams, useSearchParams } from 'next/navigation';
import '../../styles/divek/styles.css';
import DivekClient from '../divek/DivekClient';
import Divek2Client from '../divek2/Divek2Client';

export default function DivParamsClient() {
    const params = useParams();
    const searchParams = useSearchParams();
    console.log(searchParams.get('cim'));
    console.log(searchParams.get('masik'));
    //console.log(params);
    const param1 = params.oldal ? params.oldal[0] : null;
    const cim = searchParams.get('cim') || 'nincs cím';
    return (
        <div className='divek-container flex flex-col items-center'>
            <h1 className='divek-h1'>{cim}</h1>
            {!param1 && <div>Sajnos nem lett div kiválasztva :/</div>}
            {param1 === '1' && <DivekClient />}
            {param1 === '2' && <Divek2Client />}
        </div>
    );
}
