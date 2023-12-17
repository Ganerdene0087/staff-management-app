'use client';
import { useState } from 'react';

interface Tab {
	id: string;
	label: string;
}
interface TabsProps {
	tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(tabs[0].id);

	return (
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
	);
};

export default Tabs;
