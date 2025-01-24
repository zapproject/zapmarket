import Divider from "@/components/ui/divider";
import Image from "next/image";
import { Fragment } from "react";

export default function Threads() {
	return (
		<div className="flex flex-col gap-[18px] py-6 px-3 shadow-main">
			<div className="flex items-center gap-[6px]">
				<div className="w-[100px] h-[100px] relative">
					<Image
						src="/top_coin.png"
						alt="Search Result Image"
						width={100}
						height={100}
						className="relative z-10 w-full h-full object-cover"
					/>
					<div className="absolute inset-0 z-20 shadow-textbox " />
				</div>

				<div className="flex flex-col gap-[6px]">
					<h2 className="base-text" style={{ fontSize: "14px" }}>Dark Pepe</h2>
					<p className="base-text">$SUNKOI</p>
				</div>
			</div>

			<Divider orientation="vertical" />

			{
				Array.from({ length: 3 }).map((_, idx) => (
					<Fragment key={idx}>
						<Thread />
						<Divider orientation="horizontal" className="last-of-type:hidden" />
					</Fragment>
				))
			}
		</div>
	);
}

function Thread() {
	return (
		<div className="flex flex-col gap-[10px]">
			<div className="flex items-center gap-[10px]">
				<Image src="/top_coin.png" alt="Top Coin" width={34} height={34} className="w-[34px] h-[34px]" />
				<span className="text-black text-xs font-medium">0x23...E9N01</span>
				<span className="text-black text-xs font-medium">9/11/2024</span>
				<span className="text-black text-xs font-medium">2:41:41 AM</span>
			</div>

			<p className="text-black text-xs font-normal">Dark Pepe is the mischievous meme coin bringing chaos and humor to the crypto world, where Pepe rules the shadows.</p>
		</div>
	);
}
