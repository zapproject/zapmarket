import Button from "@/components/ui/button";
import TextBox from "@/components/ui/textbox";
import { ButtonIcon } from "@/util/Icons";

export default function SearchSection() {
	return (
		<div className="flex items-center justify-between">
			<TextBox />

			<Button>
				<span>Market Cap</span>
				<ButtonIcon />
			</Button>
		</div>
	);
}
