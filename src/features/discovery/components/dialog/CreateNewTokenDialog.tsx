import Button from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import TextBox from "@/components/ui/textbox";
import { ButtonIcon } from "@/util/Icons";

export default function CreateNewTokenDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="max-w-[125px]">
					<ButtonIcon />
					<span>Create new coin</span>
				</Button>
			</DialogTrigger>

			<DialogContent className="bg-primary flex flex-col gap-[10px] !rounded-none p-[10px]">
				<DialogTitle className="bg-[#000080] flex items-center justify-between p-1">
					<p className="text-xs text-white font-normal leading-[13px]">Create new token</p>
					<Button>
						<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0 0H2V1.14286H3V2.28571H5V1.14286H6V0H8V1.14286H7V2.28571H6V3.42857H5V4.57143H6V5.71429H7V6.85714H8V8H6V6.85714H5V5.71429H3V6.85714H2V8H0V6.85714H1V5.71429H2V4.57143H3V3.42857H2V2.28571H1V1.14286H0V0Z"
								fill="black"
							/>
						</svg>
					</Button>
				</DialogTitle>

				<div className="flex flex-col gap-[10px]">
					<div className="flex flex-col gap-[10px]">
						<label htmlFor="" className="text-sm font-normal text-black-copy leading-3">Name</label>
						<TextBox />
					</div>

					<div className="flex flex-col gap-[10px]">
						<label htmlFor="" className="text-sm font-normal text-black-copy leading-3">Description</label>
						<TextBox />
					</div>

					<div className="flex flex-col gap-[10px]">
						<label htmlFor="" className="text-sm font-normal text-black-copy leading-3">Description</label>
						<TextBox />
					</div>

					<div className="flex flex-col gap-[10px]">
						<label htmlFor="" className="text-sm font-normal text-black-copy leading-3">Image</label>
						<TextBox />
					</div>

					<div className="flex flex-col gap-[10px]">
						<label htmlFor="" className="text-sm font-normal text-black-copy leading-3">First buy</label>
						<TextBox />
					</div>
				</div>

				<DialogFooter>
					<Button className="w-full active:!scale-[.99]">
						<p className="w-full text-center">Create token</p>
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
