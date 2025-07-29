import Divek2Client from '@/components/divek2/Divek2Client';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Divek2',
    description: 'Learn more about our awesome project',
};

export default function Page() {
    return <Divek2Client />;
}
