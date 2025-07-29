import KutyaMain from '@/components/kutya/KutyaMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kutya oldal',
    description: 'Learn more about our awesome project',
};

export default function KutyaPage() {
    return <KutyaMain />;
}
