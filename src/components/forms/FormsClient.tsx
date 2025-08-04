'use client';

import { Button, TextField } from '@mui/material';
import { Eye } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';

type MyFormModel = {
    name: string;
    password: string;
};

export default function FormsClient() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState<MyFormModel>({
        name: '',
        password: '',
    });

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
        let valid = true;
        let errortext = '';
        //validáció
        if (!formData.name) {
            errortext += 'név, ';
            valid = false;
        }
        if (!formData.password) {
            errortext += 'jelszó, ';
            valid = false;
        }
        //tényleges küldés logika itt
        if (valid) {
            console.log('Form submitted:', formData);
        } else {
            console.log('Rossz mezők:', errortext);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleChangeSimple = (id: string, value: string) => {
        setFormData((sajt) => ({ ...sajt, [id]: value }));
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center mx-[28rem] gap-2'
            >
                <h1 className='font-bold mb-4'>Forms Page</h1>
                <TextField
                    id='name'
                    name='name'
                    label='Név'
                    value={formData.name}
                    onChange={handleChange}
                    error={isSubmitted && !formData.name}
                    helperText={
                        isSubmitted && !formData.name
                            ? 'Név megadása kötelező'
                            : ''
                    }
                />
                <div className='flex gap-2 items-center'>
                    <TextField
                        id='password'
                        label='Jelszó'
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <Eye onClick={() => setShowPassword(!showPassword)} />
                </div>
                <Button type='submit' variant='contained' className='mt-4'>
                    Küldés
                </Button>
            </form>
        </div>
    );
}
