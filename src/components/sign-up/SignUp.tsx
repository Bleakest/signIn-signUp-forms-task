'use client'

import { onSubmitSignUpFunc } from '@/types/types';
import InputField from '@/ui/InputField';
import React, { useState } from 'react';
import Image from 'next/image'
import vercelImg from '@/images/vercel.png';

const SignUp = ({ onSubmit }: { onSubmit: onSubmitSignUpFunc }) => {
    const [inputs, setInputs] = useState({
        name: '',
        username: '',
        email: '',
        gender: '',
        password: '',
        confirmPassword: ''
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({ ...prev, gender: e.target.value }));
        console.log(e.target.value);
        
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

        if (!inputs.name.trim()) {
            alert('Имя обязательно')
            return
        }

        if (!inputs.gender.trim()) {
            alert('Укажите пол')
            return
        }

        if (!usernameRegex.test(inputs.username)) {
            alert('Ник должен быть 4-20 символов (буквы, цифры, _)');
            return;
        }

        if (inputs.password !== inputs.confirmPassword) {
            alert('Пароли не совпадают');
            return
        }

        onSubmit(inputs)
    };

    return (
        <div className='flex justify-center items-center mt-12'>
            <form
                className='border-2 flex flex-col justify-center items-center p-4 rounded-lg w-[700px]'
                onSubmit={handleSubmit}
            >
                <h1 className='mb-4 text-2xl'>Регистрация</h1>
                <div className="w-full max-w-md space-y-3">
                    <div>
                        <InputField
                            name="name"
                            type="text"
                            value={inputs.name}
                            onChange={handleChange}
                            placeholder="Имя"
                        />

                    </div>

                    <div>
                        <InputField
                            name="username"
                            type="text"
                            value={inputs.username}
                            onChange={handleChange}
                            placeholder="Никнейм"
                            icon={<Image
                                src={vercelImg}
                                alt="Иконка"
                                width={20}
                                height={20}
                            />}
                        />

                    </div>

                    <div>
                        <InputField
                            name="email"
                            type="email"
                            value={inputs.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />

                    </div>

                    <div className="flex items-center space-x-4">
                        <label className="inline-flex items-center">
                            <InputField
                                type="radio"
                                name="gender"
                                value='Мужской'
                                onChange={handleGenderChange}
                                placeholder="Пол мужской"
                            />
                            Мужской
                        </label>
                        <label className="inline-flex items-center">
                            <InputField
                                type="radio"
                                name="gender"
                                value='Женский'
                                onChange={handleGenderChange}
                                placeholder="Пол женский"
                            />
                            Женский
                        </label>

                    </div>

                    <div>
                        <InputField
                            name="password"
                            type="password"
                            value={inputs.password}
                            onChange={handleChange}
                            placeholder="Пароль"
                        />

                    </div>

                    <div>
                        <InputField
                            name="confirmPassword"
                            type="password"
                            value={inputs.confirmPassword}
                            onChange={handleChange}
                            placeholder="Повторите пароль"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 w-full hover:bg-blue-600 transition mt-4"
                    >
                        Зарегистрироваться
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;