'use client';
import { Button } from '@mui/material';

export default function AboutClient() {
    return (
        <main className='flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50'>
            <h1 className='text-5xl font-bold mb-4'>About Us</h1>
            <Button variant='contained' className='tw-bg-blue-600'>
                MUI Button styled with Tailwind
            </Button>
            <p className='text-lg text-gray-700 mb-6'>
                This is a practice page built with Next.js, TypeScript, and
                Tailwind.
            </p>
            <button className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 animate-wiggle duration-500'>
                Let's go!
            </button>
        </main>
    );
}
