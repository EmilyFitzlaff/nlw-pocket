import { Dialog } from "./components/ui/dialog";
import { CreateGoal } from "./components/CreateGoal";
import { Summary } from "./components/Summary";

export function App() {
	return (
		<Dialog>
			<Summary />
			{/* <EmptyGoals /> */}
			<CreateGoal />
		</Dialog>
	);
}
