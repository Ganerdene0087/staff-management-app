'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignUp = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		email: '',
		name: '',
		phone: '',
		address: '',
		birthDate: '',
		sex: '',
		role: 'staff',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		router.push('/login');
	};

	return (
		<div className='max-w-md mx-auto mt-10  text-black  p-4 bg-white shadow-lg rounded-md'>
			<h1 className='text-2xl font-bold mb-6'>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<div className='mb-4'>
					<label
						htmlFor='email'
						className='block text-sm font-medium text-gray-600'>
						Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						className='mt-1 p-2 w-full border rounded-md'
						required
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='name'
						className='block text-sm font-medium text-gray-600'>
						Name
					</label>
					<input
						type='string'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
						className='mt-1 p-2 w-full border rounded-md'
						required
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='phone'
						className='block text-sm font-medium text-gray-600'>
						Phone
					</label>
					<input
						type='number'
						id='phone'
						name='phone'
						value={formData.phone}
						onChange={handleChange}
						className='mt-1 p-2 w-full border rounded-md'
						required
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='address'
						className='block text-sm font-medium text-gray-600'>
						Address
					</label>
					<input
						type='string'
						id='address'
						name='address'
						value={formData.address}
						onChange={handleChange}
						className='mt-1 p-2 w-full border rounded-md'
						required
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='birthDate'
						className='block text-sm font-medium text-gray-600'>
						Date of Birth
					</label>
					<input
						type='date'
						id='birthDate'
						name='birthDate'
						value={formData.birthDate}
						onChange={handleChange}
						className='mt-1 p-2 w-full border rounded-md'
						required
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-sm font-medium text-gray-600'>
						Sex
					</label>
					<div className='flex'>
						<label className='mr-4'>
							<input
								type='radio'
								name='sex'
								value='male'
								checked={formData.sex === 'male'}
								onChange={handleChange}
							/>
							<span className='ml-2'>Male</span>
						</label>
						<label className='mr-4'>
							<input
								type='radio'
								name='sex'
								value='female'
								checked={formData.sex === 'female'}
								onChange={handleChange}
							/>
							<span className='ml-2'>Female</span>
						</label>
						<label>
							<input
								type='radio'
								name='sex'
								value='others'
								checked={formData.sex === 'others'}
								onChange={handleChange}
							/>
							<span className='ml-2'>Others</span>
						</label>
					</div>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='role'
						className='block text-sm font-medium text-gray-600'>
						Role
					</label>
					<select
						id='role'
						name='role'
						value={formData.role}
						onChange={handleChange}
						className='mt-1 p-2 w-full border rounded-md'>
						<option value='admin'>Admin</option>
						<option value='staff'>Staff</option>
					</select>
				</div>
				<button
					type='submit'
					className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default SignUp;
