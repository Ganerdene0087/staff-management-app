'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
	const router = useRouter();
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		router.push('/home/personal');
	};
	return (
		<div className='flex items-center justify-center min-h-screen'>
			<form
				onSubmit={handleSubmit}
				className='bg-white p-8 shadow-md rounded-md w-1/3'>
				<h2 className='text-2xl font-semibold mb-6'>Login</h2>
				<div className='mb-4'>
					<label
						htmlFor='username'
						className='block text-sm font-medium text-gray-600'>
						Username
					</label>
					<input
						type='text'
						id='username'
						name='username'
						className='mt-1 p-2 w-full border rounded-md'
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='password'
						className='block text-sm font-medium text-gray-600'>
						Password
					</label>
					<input
						type='password'
						id='password'
						name='password'
						className='mt-1 p-2 w-full border rounded-md'
					/>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					<div>
						<button
							type='submit'
							className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>
							Sign In
						</button>
					</div>
					<div>
						<Link href='/signup'>
							<button className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>
								Sign Up
							</button>
						</Link>
					</div>
					<div>
						<button className='text-blue-500 p-2 rounded-md hover:text-blue-600 focus:outline-none focus:ring focus:border-grey-300'>
							Forgot password?
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
