import { SearchIcon } from "@/util/Icons";

export default function TextBox() {
	return (
		<div className="p-[6px] w-full max-w-[633px] h-[28px] bg-white flex items-center gap-[3px] shadow-textbox">
			<SearchIcon />
			<input type="text" placeholder="Search for token" className="bg-transparent w-full h-full base-text" />
		</div>
	);
}
