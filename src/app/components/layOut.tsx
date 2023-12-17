// components/Layout.tsx
import Sidebar from './sideBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex'>
			<Sidebar />
			<main className='flex-1 p-4'>{children}</main>
		</div>
	);
};

export default Layout;
