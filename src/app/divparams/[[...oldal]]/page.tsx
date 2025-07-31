import DivParamsClient from '@/components/divparams/DivParamsClient';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Divek',
    description: 'Learn more about our awesome project',
};

export default function Page() {
    return <DivParamsClient />;
}
