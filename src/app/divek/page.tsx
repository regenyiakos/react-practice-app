import DivekClient from '@/components/divek/DivekClient';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Divek',
    description: 'Learn more about our awesome project',
};

export default function Page() {
    return <DivekClient />;
}
