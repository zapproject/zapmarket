import type { PropsWithChildren } from "react";
import Header from "@/components/common/Header";
import TabView from "@/components/common/TabView";

export default function AppLayout({ children }: PropsWithChildren) {
	return (
		<div className="flex flex-col w-full h-auto">
			<Header />
			{/* <div className="relative"> */}
			<TabView />
			{/* <div className="relative -top-[2px] inset-x-0 z-20 w-full"> */}
			{children}
			{/* </div> */}
			{/* </div> */}
		</div>
	);
}
