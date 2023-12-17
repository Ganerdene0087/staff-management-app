// pages/staff-list.tsx
import Layout from '../../components/layOut';
import StaffList from './staffList';

const StaffListPage = () => {
	return (
		<Layout>
			<h1>List of users</h1>
			<StaffList />
		</Layout>
	);
};

export default StaffListPage;
