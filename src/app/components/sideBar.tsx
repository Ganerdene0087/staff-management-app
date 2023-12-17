import Link from 'next/link';

const Sidebar = () => {
	return (
		<div className='bg-gray-800 text-white h-screen w-1/5 p-4'>
			<Link href='/home/personal'>
				<button className='block w-full py-2 px-4 hover:bg-gray-700 text-left'>
					Personal Info
				</button>
			</Link>
			<Link href='/home/staffList'>
				<button className='block text-left w-full py-2 px-4 hover:bg-gray-700'>
					Staff List
				</button>
			</Link>
		</div>
	);
};

export default Sidebar;
