"use client";

import TabButton from "@/components/ui/tab_button";
import Threads from "@/features/dao/components/Threads";
import Trades from "@/features/dao/components/Trades";
import { DiscoverIcon, LeaderBoardIcon } from "@/util/Icons";
import { useState } from "react";

const TABS = [
	{
		icon: DiscoverIcon,
		tab: "Threads",
	},
	{
		icon: LeaderBoardIcon,
		tab: "Trades",
	},
];

export default function DaoTabs() {
	const [currentTab, setCurrentTab] = useState(TABS[0].tab);

	function handleTabChange(tab: string) {
		setCurrentTab(tab);
	}

	return (
		<div className="flex flex-col">
			<div className="flex max-h-8 max-w-fit bg-primary relative z-10">
				{TABS.map(tab => (
					<TabButton
						key={tab.tab}
						onClick={() => handleTabChange(tab.tab)}
						tab={tab.tab}
						icon={tab.icon}
						isSelected={tab.tab === currentTab}
					/>
				))}
			</div>

			{
				currentTab === TABS[0].tab && (
					<Threads />
				)
			}

			{
				currentTab === TABS[1].tab && (
					<Trades />
				)
			}
		</div>
	);
}
