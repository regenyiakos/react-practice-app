import SajtClient from '@/components/sajt/SajtClient';

export const metadata = {
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
