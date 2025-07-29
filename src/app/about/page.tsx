import AboutClient from '@/components/about/AboutClient';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn more about our awesome project',
};

export default function AboutPage() {
    return <AboutClient />;
}
