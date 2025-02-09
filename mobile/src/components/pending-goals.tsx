import { FlatList, View, Text } from 'react-native'
import { Plus } from 'lucide-react-native'
import { useQuery, useQueryClient } from '@tanstack/react-query'

import { ButtonOutline } from './ui/button-outline'

import { Loading } from '@/components/ui/loading'

import { getPendingGoals } from '@/http/get-pending-goals'
import { createGoalCompletion } from '@/http/create-goal-completion'

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60, //60 segundos
  })

  async function handlerCompletedGoal(goalId: string) {
    await createGoalCompletion(goalId)

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }

  if (!data) {
    return <Loading />
  }

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={item => item.id}
        contentContainerStyle={{ alignItems: 'center', gap: 18 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ButtonOutline
            onPress={() => handlerCompletedGoal(item.id)}
            disabled={item.completionCount === item.desiredWeeklyFrequency}
          >
            <ButtonOutline.Icon
              icon={Plus}
              disabled={item.completionCount === item.desiredWeeklyFrequency}
            />
            <ButtonOutline.Title
              disabled={item.completionCount === item.desiredWeeklyFrequency}
            >
              {item.title}
            </ButtonOutline.Title>
          </ButtonOutline>
        )}
      />
    </View>
  )
}
