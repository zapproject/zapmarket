import { cn } from "@/util/utils";

interface DividerProps {
	orientation: "horizontal" | "vertical";
	thickness?: number;
	className?: string;
}

export default function Divider(props: DividerProps) {
	const orientation = props.orientation;
	const thickness = props.thickness || 1.5;
	const _className = props.className || "";

	return (
		<div className={cn(
			"flex",
			orientation === "horizontal" ? "flex-col w-full" : "flex-row h-full",
			_className,
		)}
		>
			<div
				className="bg-[#808080]"
				style={
					orientation === "horizontal"
						? { height: `${thickness}px`, width: "100%" }
						: { width: `${thickness}px`, height: "100%" }
				}
			/>
			<div
				className="bg-white"
				style={
					orientation === "horizontal"
						? { height: `${thickness}px`, width: "100%" }
						: { width: `${thickness}px`, height: "100%" }
				}
			/>
		</div>
	);
}
