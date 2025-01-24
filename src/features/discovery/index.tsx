import Divider from "@/components/ui/divider";
import CreateTokenContainer from "@/features/discovery/components/CreateTokenContainer";
import SearchResults from "@/features/discovery/components/SearchResults";
import SearchSection from "@/features/discovery/components/SearchSection";
import TopCoin from "@/features/discovery/components/TopCoin";

export default function DiscoveryPage() {
	return (
		<div className="h-screen flex flex-col gap-3 p-6 bg-primary shadow-main">
			<div className="flex items-center gap-6">
				<CreateTokenContainer />
				<Divider orientation="vertical" />
				<TopCoin />
			</div>

			<Divider orientation="horizontal" />
			<SearchSection />
			<Divider orientation="horizontal" />

			<SearchResults />
		</div>
	);
}
