"use client";

import TabButton from "@/components/ui/tab_button";
import BuyTab from "@/features/dao/components/BuyTab";
import SellTab from "@/features/dao/components/SellTab";
import { DiscoverIcon, LeaderBoardIcon } from "@/util/Icons";
import { useState } from "react";

const TABS = [
	{
		icon: DiscoverIcon,
		tab: "Buy",
	},
	{
		icon: LeaderBoardIcon,
		tab: "Sell",
	},
];

export default function BuySellTabs() {
	const [currentTab, setCurrentTab] = useState(TABS[0].tab);

	function handleTabChange(tab: string) {
		setCurrentTab(tab);
	}

	return (
		<div className="flex flex-col">
			<div className="flex max-h-8 bg-primary relative z-10">
				{TABS.map(tab => (
					<TabButton
						key={tab.tab}
						tab={tab.tab}
						icon={tab.icon}
						isSelected={tab.tab === currentTab}
						onClick={() => {
							handleTabChange(tab.tab);
						}}
					/>
				))}
			</div>

			{
				currentTab === TABS[0].tab && (
					<BuyTab />
				)
			}

			{
				currentTab === TABS[1].tab && (
					<SellTab />
				)
			}
		</div>
	);
}
