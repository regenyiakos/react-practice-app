import SajtClient from '@/components/sajt/SajtClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sajt oldal',
    description: 'Learn more about our awesome project',
};

export default function Page() {
    return (
        <div className='p-0'>
            <SajtClient />
        </div>
    );
}
