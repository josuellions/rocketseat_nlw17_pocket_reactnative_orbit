import { useState } from 'react'
import { View, Text, Image, ScrollView, Dimensions } from 'react-native'
import { Plus, CheckCircleIcon, ChevronDown } from 'lucide-react-native'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'

import { Button } from '@/components/ui/button'
import { Loading } from '@/components/loading'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from '@/http/get-summary'
import { Separator } from '@/components/ui/separator'
import { CreateGoal } from '@/components/create-goal'
import { PendingGoals } from '@/components/pending-goals'
import { ProgressBar } from '@/components/ui/progress-bar'

import { colors } from '@/styles/colors'

dayjs.locale(ptBR)

export default function Summary() {
  const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM')
  const [createGoal, setCreateGoal] = useState(false)

  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, //60 segundos
  })

  if (!data) {
    return <Loading />
  }

  const completePercentage = Math.round((data.completed * 100) / data.total)
  const screenHeight = Dimensions.get('window').height
  const scrollViewHeight = screenHeight * 0.7 // 70% da altura da tela

  return (
    <>
      <View className="flex-1 flex-col py-3 px-3 gap-6">
        <View className="flex flex-row justify-between items-center">
          <View className="flex flex-row items-center gap-3">
            <Image source={require('@/assets/icon.png')} className="w-8 h-8" />
            <Text className="text-zinc-100 font-semiBold capitalize">{`${firstDayOfWeek} - ${lastDayOfWeek}`}</Text>
          </View>
          <Button
            size="sm"
            isLoading={false}
            onPress={() => setCreateGoal(!createGoal)}
          >
            <Button.Icon
              icon={!createGoal ? Plus : ChevronDown}
              className="text-zinc-100"
              size={16}
            />
            <Button.Title>
              {!createGoal ? 'Cadastrar meta' : 'Fechar cadastro'}
            </Button.Title>
          </Button>
        </View>

        <View className="flex flex-col">
          <View className="flex flex-col gap-1">
            <ProgressBar percentage={completePercentage} />
            <View className="flex flex-row justify-between items-center">
              <View className="flex flex-row justify-start items-center gap-1">
                <Text className="text-sm font-normal text-zinc-400">
                  Você completou
                </Text>
                <Text className="text-sm font-normal text-zinc-100">
                  {data.completed}
                </Text>
                <Text className="text-sm font-normal text-zinc-400">de</Text>
                <Text className="text-sm font-normal text-zinc-100">
                  {data.total}
                </Text>
                <Text className="text-sm font-normal text-zinc-400">
                  metas nessa semana.
                </Text>
              </View>

              <Text className="text-sm font-normal text-zinc-100">
                {completePercentage}%
              </Text>
            </View>
          </View>

          <Separator />

          <PendingGoals />

          <View className="flex flex-col py-6">
            <Text className="text-zinc-100 text-lg font-semiBold">
              Sua semana
            </Text>
            <ScrollView
              contentContainerStyle={{ gap: 24, paddingBottom: 168, zIndex: 1 }}
              showsVerticalScrollIndicator={false}
              style={[{ height: scrollViewHeight }]}
            >
              {Object.entries(data.goalsPerDay).map(([date, goals]) => (
                <View key={String(date)} className="flex flex-col gap-3 py-3">
                  <View className="flex">
                    <View className="flex flex-row gap-1 items-center">
                      <Text className="text-zinc-100 text-sm font-medium capitalize">
                        {dayjs(date).format('dddd')}
                      </Text>
                      <Text className="text-zinc-400 font-normal text-xs">
                        ({dayjs(date).format('D[ de ] MMMM')})
                      </Text>
                    </View>
                  </View>

                  <View className="flex flex-col">
                    {goals.map((goal, index) => (
                      <View
                        className="flex flex-row gap-2 mb-2"
                        key={String(index)}
                      >
                        <CheckCircleIcon size={16} color={colors.violet[600]} />
                        <Text className="text-zinc-400 font-normal text-sm">
                          Você completou
                        </Text>
                        <Text className="text-zinc-100 font-normal text-sm">
                          "{goal.title}"
                        </Text>
                        <Text className="text-zinc-400 font-normal text-sm">
                          às
                        </Text>
                        <Text className="text-zinc-100 font-normal text-sm">
                          {dayjs(goal.completedAt).format('HH:mm')}h
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
      <CreateGoal isCreateGoal={createGoal} />
    </>
  )
}
