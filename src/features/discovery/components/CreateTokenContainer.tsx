import CreateNewTokenDialog from "@/features/discovery/components/dialog/CreateNewTokenDialog";

export default function CreateTokenContainer() {
	return (
		<div className="flex-[.5] flex flex-col justify-center gap-6 base-text">
			<h2 style={{ fontSize: "24px" }}>Zap Meme Maker</h2>
			<p style={{ fontSize: "14px" }}>Home of the first EVM bonding curve launchpad </p>
			<CreateNewTokenDialog />
		</div>
	);
}
