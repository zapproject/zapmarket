import Divider from "@/components/ui/divider";
import Image from "next/image";
import { Fragment } from "react";

export default function Trades() {
	return (
		<div className="flex flex-col gap-[18px] py-6 px-3 shadow-main">
			<div className="grid grid-cols-6">
				<div>
					<p className="base-text">Account</p>
				</div>

				<div>
					<p className="base-text">Type</p>
				</div>

				<div>
					<p className="base-text">SOL</p>
				</div>

				<div>
					<p className="base-text">$SUNKOI</p>
				</div>

				<div>
					<p className="base-text">Date</p>
				</div>

				<div>
					<p className="base-text">Transaction</p>
				</div>
			</div>

			<div className="flex flex-col gap-[18px]">
				{Array.from({ length: 8 }).fill(0).map((_, i) => (
					<Fragment key={i}>
						<Trade />
						<Divider orientation="horizontal" className="last-of-type:hidden" />
					</Fragment>
				))}
			</div>
		</div>
	);
}

function Trade() {
	return (
		<div className="grid grid-cols-6">
			<div className="flex items-center gap-1">
				<Image src="/top_coin.png" alt="Top Coin" width={16} height={16} className="w-4 h-4" />
				<span className="base-text">0x23...E9</span>
			</div>

			<div>
				<p className="base-text" style={{ color: "#F00" }}>Sell</p>
			</div>

			<div>
				<p className="base-text">121</p>
			</div>

			<div>
				<p className="base-text">23145</p>
			</div>

			<div>
				<p className="base-text">3s ago</p>
			</div>

			<div>
				<p className="base-text">0x23...E9</p>
			</div>
		</div>
	);
}
