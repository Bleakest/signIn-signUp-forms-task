'use client'

import { onSubmitFunc } from '@/types/types';
import InputField from '@/ui/InputField';
import React, { useState } from 'react';

const SignIn = ({ onSubmit }: { onSubmit: onSubmitFunc }) => {
    const [inputs, setInputs] = useState({ email: '', password: '' });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!emailRegex.test(inputs.email)) {
            alert('Введите корректный email');
            return;
        }

        if (!passwordRegex.test(inputs.password)) {
            alert('Пароль должен содержать минимум 8 символов, включая буквы и цифры');
            return;
        }

        onSubmit(inputs)
    };

    return (
        <div className='flex justify-center items-center  mt-12 '>
            <form className='border-2 flex flex-col justify-center items-center p-4 rounded-lg w-[700px]' onSubmit={handleSubmit}>
                <h1 className='mb-4 text-2xl'>Логин</h1>
                <div className='w-full max-w-md space-y-3'>
                    <InputField
                        name="email"
                        type="text"
                        value={inputs.email}
                        onChange={handleChange}
                        placeholder="Введите email"
                    />
                    <InputField
                        name="password"
                        type="password"
                        value={inputs.password}
                        onChange={handleChange}
                        placeholder="Введите пароль"
                    />
                    <button className='border-2 py-2 px-4 my-2' type="submit">Войти</button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;