"use client";

import TabButton from "@/components/ui/tab_button";
import { TABS } from "@/util/constants";
import { useRouter, useSearchParams } from "next/navigation";

export default function TabView() {
	const router = useRouter();
	const currentTab = useSearchParams().get("tab");

	const handleTabChange = (tab: string) => {
		router.replace(`/?tab=${tab}`);
	};

	return (
		<div className="flex px-6 max-h-8 bg-primary relative z-10">
			{TABS.map(tab => (
				<TabButton
					key={tab.tab}
					tab={tab.tab}
					onClick={() => handleTabChange(tab.tab)}
					icon={tab.icon}
					isSelected={currentTab === tab.tab}
				/>
			))}
		</div>
	);
};
