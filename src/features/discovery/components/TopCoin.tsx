import Image from "next/image";

export default function TopCoin() {
	return (
		<div className="flex-[.5] flex gap-6 p-[6px] shadow-main">
			<Image src="/top_coin.png" alt="Top Coin Image" width="188" height="188" />

			<div className="h-full flex flex-col gap-4">
				<div
					className="py-[3px] pl-[3px] pr-[9px] flex items-center gap-3"
					style={{
						background: `linear-gradient(90deg, #008000 0%, #FF0 100%)`,
					}}
				>
					<Image src="/tree.png" alt="Tree" width="32" height="32" />
					<p className="text-white !text-button-size leading-3 font-normal">King of the hill</p>
				</div>

				<div className="flex flex-col gap-[3px]">
					<h2 className="text-black-copy leading-3 font-normal text-sm">Dark Pepe</h2>
					<p className="base-text">$SUNKOI</p>
				</div>

				<p className="base-text">Dark Pepe is the mischievous meme coin bringing chaos and humor to the crypto world, where Pepe rules the shadows.</p>

				<div className="flex items-center gap-4 base-text">
					<p>Replies: 1456</p>
					<p>Market Cap: $9.42K (9.4%)</p>
					<p>0x23...E9N01</p>
				</div>
			</div>
		</div>
	);
}
