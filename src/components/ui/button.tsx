import type { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from "react";
import { cn } from "@/util/utils";

type ButtonProps = PropsWithChildren & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button(props: ButtonProps) {
	const _className = props.className;
	const children = props.children;

	return (
		<button
			type="button"
			{...props}
			className={cn(
				"p-[6px] flex items-center gap-1 bg-primary shadow-main !text-button-size text-black-copy font-normal leading-3",
				"active:scale-95",
				_className,
			)}
		>
			{children}
		</button>
	);
}
