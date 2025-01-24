import Divider from "@/components/ui/divider";
import Image from "next/image";

export default function SearchResults() {
	return (
		<div className="flex items-center gap-[13px]">
			{
				Array.from({ length: 6 }).fill(0).map((_, idx) => (
					<SearchCard key={idx} />
				))
			}
		</div>
	);
}

function SearchCard() {
	return (
		<div className="flex flex-col gap-[6px] p-[6px] shadow-main">
			<p className="base-text">Replies:1456</p>

			<Divider orientation="horizontal" thickness={1} />

			<div className="w-[188px] h-[188px] relative">
				<Image src="/search_card.jpeg" alt="Search Result Image" width={188} height={188} className="relative z-10 w-full h-full object-cover" />
				<div className="absolute inset-0 z-20 shadow-textbox " />
			</div>

			<div className="flex flex-col gap-[3px]">
				<p className="base-text" style={{ fontSize: "14px" }}>Toaster</p>
				<p className="base-text">$TOAST</p>
			</div>

			<Divider orientation="horizontal" thickness={1} />

			<div className="flex flex-col gap-[6px]">
				<p className="base-text">Market Cap</p>
				<p className="base-text" style={{ fontSize: "14px" }}>$9.42K (9.4%)</p>
			</div>
		</div>
	);
}
