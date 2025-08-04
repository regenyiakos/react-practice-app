import FormsClient from '@/components/forms/FormsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Formok oldal',
    description: 'Learn more about our awesome project',
};

export default function Page() {
    return <FormsClient />;
}
