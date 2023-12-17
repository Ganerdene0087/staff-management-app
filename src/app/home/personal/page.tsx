'use client';
import Layout from '../../components/layOut';
import PersonalInfo from './personalInfo';
import SecuritySettings from './securitySettings';
import React, { useState } from 'react';

const PersonalInfoPage = () => {
	const tabs = [
		{ id: 'personalInfo', label: 'Personal Info' },
		{ id: 'securitySettings', label: 'Security Settings' },
	];
	const [activeTab, setActiveTab] = useState(tabs[0].id);
	return (
		<Layout>
			{/* <Tabs tabs={tabs} /> */}
			<div className='flex mb-4'>
				{tabs.map((tab) => (
					<button
						key={tab.id}
						className={`mr-4 py-2 px-4 hover:bg-gray-700 ${
							activeTab === tab.id
								? 'bg-gray-700 text-white'
								: 'text-gray-600'
						}`}
						onClick={() => setActiveTab(tab.id)}>
						{tab.label}
					</button>
				))}
			</div>
			{activeTab === 'personalInfo' ? (
				<PersonalInfo />
			) : (
				<SecuritySettings />
			)}
		</Layout>
	);
};

export default PersonalInfoPage;
