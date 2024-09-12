import { Dialog } from "./components/ui/dialog";
import { Summary } from "./components/Summary";
import { EmptyGoals } from "./components/EmptyGoals";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "./http/get-summary";
import { CreateGoal } from "./components/CreateGoal";

export function App() {
	const { data } = useQuery({
		queryKey: ["summary"],
		queryFn: getSummary,
		staleTime: 1000 * 60, // 60 seconds
	});

	return (
		<Dialog>
			{data && data?.total > 0 ? <Summary /> : <EmptyGoals />}
			<CreateGoal />
		</Dialog>
	);
}
