import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import BuySellTabs from "@/features/dao/components/BuySellTabs";
import Holders from "@/features/dao/components/Holders";
import Image from "next/image";

export default function TradeKeys() {
	return (
		<div className="w-full shadow-main flex flex-col gap-4 py-4 px-[6px]">
			<h2 className="base-text" style={{ fontSize: "16px" }}>Trade Keys</h2>

			<Divider orientation="horizontal" />

			<BuySellTabs />

			<div className="flex justify-between">
				<div className="flex flex-col gap-[6px]">
					<h4 className="base-text">Current price</h4>
					<p className="base-text" style={{ fontSize: "14px" }}>0.02 BTC($20.50)</p>
				</div>

				<Button className="bg-[#052798]">
					<span className="text-white">Sell Stock</span>
				</Button>
			</div>

			<Divider orientation="horizontal" />

			<div className="flex-[.5] flex gap-[6px]">
				<Image src="/top_coin.png" alt="Top Coin Image" width="188" height="188" />

				<div className="h-full flex flex-col self-center  gap-4">
					<div className="flex flex-col gap-[3px]">
						<h2 className="text-black-copy leading-3 font-normal text-sm">Dark Pepe</h2>
						<p className="base-text">$SUNKOI</p>
					</div>

					<p className="base-text">
						Dark Pepe is the mischievous meme coin bringing chaos and humor to the
						crypto world, where Pepe rules the shadows.
					</p>

					<div className="flex items-center gap-4 base-text">
						<p>Replies: 1456</p>
						<p>Market Cap: $9.42K (9.4%)</p>
						<p>0x23...E9N01</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-3">
				<h4 className="base-text" style={{ fontSize: "16px" }}>Market Cap: $9.42K (9.4%)</h4>

				<div className="bg-white relative h-[20px] z-[99]">
					<div
						className="absolute inset-y-0 w-[80%] h-full z-[98]"
						style={{ background: "linear-gradient(90deg, #003A80 0%, #C800FF 100%)" }}
					/>

					<div className="shadow-textbox absolute inset-0 z-[100]" />
				</div>
			</div>

			<Holders />
		</div>
	);
}
