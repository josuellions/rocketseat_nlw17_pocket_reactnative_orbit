import { EmptyGoals } from "@/components/empty-goals";
import { router } from "expo-router";
import Summary from "./summary";

export default function Index() {
	const summaryTotal: number = 0;
	return <>{summaryTotal > 0 ? <Summary /> : <EmptyGoals />}</>;
}
