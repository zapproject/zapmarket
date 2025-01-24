import Button from "@/components/ui/button";
import { ButtonIcon, Logo } from "@/util/Icons";
import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-primary w-full px-6 py-3 flex items-center justify-between shadow-main">
			<Link href="/">
				<Logo />
			</Link>

			<Button>
				<ButtonIcon />
				<span>Connect wallet</span>
			</Button>
		</header>
	);
}
