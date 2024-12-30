import React, { useMemo, useRef, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { View, Text, useWindowDimensions } from 'react-native'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { useQueryClient } from '@tanstack/react-query'
import { Save } from 'lucide-react-native'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RadioGroup } from '@/components/ui/radio-group'

import { createGoal } from '@/http/create-goal'

interface DayWeekProps {
  amount: number
  title: string
  icon: string
}

interface createGoalForm {
  title: string
  desiredWeeklyFrequency: number
}

interface GoalProps {
  isCreateGoal: boolean
}

export function CreateGoal({ isCreateGoal }: GoalProps) {
  const queryClient = useQueryClient()
  const { control, register, handleSubmit, reset } = useForm<createGoalForm>()
  const dimensions = useWindowDimensions()
  const bottomSheetRef = useRef<BottomSheet>(null)

  const limitMaxTop = 128

  const snapPoints = {
    min: isCreateGoal ? dimensions.height - limitMaxTop : limitMaxTop,
    max: dimensions.height - limitMaxTop,
  }

  const daysWeek = useMemo<DayWeekProps[]>(() => {
    return [
      {
        title: '1x na semana',
        icon: '🥱',
        amount: 1,
      },
      {
        title: '2x na semana',
        icon: '🙂',
        amount: 2,
      },
      {
        title: '3x na semana',
        icon: '😎',
        amount: 3,
      },
      {
        title: '4x na semana',
        icon: '🤪',
        amount: 4,
      },
      {
        title: '5x na semana',
        icon: '😜',
        amount: 5,
      },
      {
        title: '6x na semana',
        icon: '🤯',
        amount: 6,
      },
      {
        title: 'Todos os dias da semana ',
        icon: '🔥',
        amount: 7,
      },
    ]
  }, [])

  async function handleCreateGoal(data: createGoalForm) {
    await createGoal({
      title: data.title,
      desiredWeeklyFrequency: data.desiredWeeklyFrequency,
    })

    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
    queryClient.invalidateQueries({ queryKey: ['summary'] })

    data.title = ''
    data.desiredWeeklyFrequency = 1
    //reset();
  }

  const [selectedValue, setSelectedValue] = useState(1)

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      //handleIndicatorStyle={s.indicator}
      //backgroundStyle={s.container}
      //keyboardBlurBehavior="restore"
      enableContentPanningGesture={false}
      enableOverDrag={false}
    >
      <View className="flex-1 flex-col px-4 py-2.5">
        <View className="flex flex-col h-56">
          <View className="flex-col justify-between h-52">
            <Text className="text-2xl font-semiBold">Cadastrar meta</Text>
            <Text className="text-md font-normal text-zinc-400">
              Adicione atividades que te fazem bem e que você {'\n'}quer
              continuar praticando toda semana.
            </Text>
            <Text className="text-lg font-semiBold">Qual atividade?</Text>
            <Controller
              name={'title'}
              control={control}
              defaultValue={''}
              render={({ field }) => (
                <Input
                  // autoFocus
                  onChangeText={field.onChange}
                  // value={String(field.value)}
                  // {...register("title")}
                  placeholder="Praticar exercícios, meditar, etc..."
                />
              )}
            />

            <Text className="text-lg font-semiBold">
              Quantas vezes na Semana?
            </Text>
          </View>
        </View>

        <View className="flex flex-col  h-96">
          <Controller
            name={'desiredWeeklyFrequency'}
            control={control}
            defaultValue={1}
            render={({ field }) => (
              <RadioGroup
                options={daysWeek}
                amount={selectedValue}
                //onValueChange={field.onChange}
                value={String(field.value)}
                onChange={(amount: number) => [
                  field.onChange(amount),
                  setSelectedValue(amount),
                ]}
                //selected={item.amount === selectedValue}
              />
            )}
          />
          <View className="flex flex-col h-36 items-center justify-center">
            <Button className="w-full" onPress={handleSubmit(handleCreateGoal)}>
              <Button.Icon icon={Save} size={16} className="text-zinc-100" />
              <Button.Title>Salvar</Button.Title>
            </Button>
          </View>
        </View>
      </View>
    </BottomSheet>
  )
}
