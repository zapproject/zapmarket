import Divider from "@/components/ui/divider";
import DaoTabs from "@/features/dao/components/DaoTabs";
import TradeKeys from "@/features/dao/components/TradeKeys";
import Image from "next/image";

export default function DaoPage() {
	return (
		<div className="flex gap-6 p-6 bg-primary shadow-main">
			<div className="flex-[.5] flex flex-col gap-6">
				<Image
					src="/chart.png"
					alt="Market Chart"
					width={570}
					height={349}
					className="min-w-[570px] min-h-[349px] object-cover"
				/>

				<DaoTabs />
			</div>

			<Divider orientation="vertical" className="h-auto" />

			<div className="flex-[.5]">
				<TradeKeys />
			</div>
		</div>
	);
}
