import { api } from '@/services/api'

type PendingGoalsProps = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

export async function getPendingGoals(): Promise<PendingGoalsProps> {
  const { data } = await api.get('/goals/pending-goals')

  return data?.pendingGoals
}
