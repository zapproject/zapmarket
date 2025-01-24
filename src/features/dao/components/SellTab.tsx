export default function SellTab() {
	return (
		<div className="py-6 px-3 flex flex-col gap-6 shadow-main">
			<div className="flex flex-col gap-3">
				<label htmlFor="you_pay" className="base-text">You pay</label>

				<div
					className="p-[6px] w-full max-w-[633px] h-[32px] bg-white flex items-center gap-[3px] shadow-textbox"
				>
					<input
						id="you_pay"
						type="text"
						placeholder="BTC"
						className="bg-transparent w-full h-full base-text"
					/>
				</div>
			</div>

			<div className="flex flex-col gap-3">
				<label htmlFor="you_get" className="base-text">You get</label>

				<div
					className="p-[6px] w-full max-w-[633px] h-[32px] bg-white flex items-center gap-[3px] shadow-textbox"
				>
					<input
						id="you_get"
						type="text"
						placeholder="BTC"
						className="bg-transparent w-full h-full base-text"
						disabled
					/>
				</div>
			</div>
		</div>
	);
}
