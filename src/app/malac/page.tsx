import MalacClient from '@/components/malac/MalacClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Malac oldal',
    description: 'Malacos oldal leírása',
};

export default function MalacPage() {
    return <MalacClient />;
}
