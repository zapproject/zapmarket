import Button from "@/components/ui/button";
import { cn } from "@/util/utils";

type TabButtonProps = {
	icon?: any;
	tab: string;
	isSelected: boolean;
	onClick: () => void;
	className?: string;
};

export default function TabButton(props: TabButtonProps) {
	const Icon = props.icon || <></>;
	const tab = props.tab;
	const isSelected = props.isSelected;
	const onClick = props.onClick;
	const _className = props.className || "";

	return (
		<Button
			onClick={onClick}
			className={cn(
				"relative shadow-selected",
				_className,
			)}
		>
			{Icon && <Icon />}
			<span className="capitalize">{tab}</span>

			{isSelected && <div className="absolute -bottom-[2px] inset-x-[2px] w-[calc(100%-3px)] border-b-[2px] border-primary" />}
		</Button>
	);
}
