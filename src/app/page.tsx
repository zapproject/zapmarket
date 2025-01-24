import AppLayout from "@/components/AppLayout";
import DaoPage from "@/features/dao";
import DiscoveryPage from "@/features/discovery";
import { TABS } from "@/util/constants";

export default async function Home(props: { searchParams: Promise<{ tab: string }> }) {
	const searchParams = await (props.searchParams);
	const tab = searchParams.tab;

	return (
		<AppLayout>
			{
				tab === TABS[0].tab && (
					<DiscoveryPage />
				)
			}

			{
				tab === TABS[1].tab && (
					<div>Leaderboard Tab</div>
				)
			}

			{
				tab === TABS[2].tab && (
					<DaoPage />
				)
			}
		</AppLayout>
	);
}
