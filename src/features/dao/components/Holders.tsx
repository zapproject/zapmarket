import Divider from "@/components/ui/divider";
import Image from "next/image";

export default function Holders() {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="base-text" style={{ fontSize: "16px" }}>Holders</h2>

			<Divider orientation="horizontal" />

			{
				Array.from({ length: 4 }).map((_, i) => (
					<div key={i} className="flex items-center justify-between">
						<div className="flex items-center gap-[10px]">
							<span className="text-black text-sm font-medium">
								{i + 1}
								.
							</span>

							<div className="flex items-center gap-[10px]">
								<Image src="/top_coin.png" alt="Top Coin" width={34} height={34} className="w-[34px] h-[34px]" />
								<span className="text-black text-sm font-medium">Bonding curve</span>
							</div>
						</div>

						<div>
							<p className="text-black text-sm font-medium">90.24%</p>
						</div>
					</div>
				))
			}
		</div>
	);
}
