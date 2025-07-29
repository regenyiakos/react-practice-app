import CicaClient from '@/components/cica/CicaClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cica oldal',
    description: 'Learn more about our awesome project',
};

export default function CicaPage() {
    return <CicaClient />;
}
