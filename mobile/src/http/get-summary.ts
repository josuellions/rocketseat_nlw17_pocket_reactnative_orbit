import { api } from "@/services/api";

type GoalsPerDayProps = Record<
	string,
	{
		id: string;
		title: string;
		completedAt: string;
	}[]
>;

interface SummaryProps {
	completed: number;
	total: number;
	goalsPerDay: GoalsPerDayProps;
}

export async function getSummary(): Promise<SummaryProps> {
	const { data } = await api.get("/summary");

	return data?.summary;
}
