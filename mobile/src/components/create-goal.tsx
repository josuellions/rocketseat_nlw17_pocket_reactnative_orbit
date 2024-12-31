import React, { useMemo, useRef, useState } from 'react'
import { View, Text, useWindowDimensions, Alert } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import BottomSheet from '@gorhom/bottom-sheet'
import { Save } from 'lucide-react-native'

import { z } from 'zod'

import { RadioGroup } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { createGoal } from '@/http/create-goal'

import { colors } from '@/styles/theme'

interface DayWeekProps {
  amount: number
  title: string
  icon: string
}

interface GoalProps {
  isCreateGoal: boolean
}

const createGoalForm = z.object({
  title: z.string().min(1, 'Informe a atividade que deseja cadastrar!'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

type createGoalForm = z.infer<typeof createGoalForm>

export function CreateGoal({ isCreateGoal }: GoalProps) {
  const queryClient = useQueryClient()
  const dimensions = useWindowDimensions()
  const bottomSheetRef = useRef<BottomSheet>(null)
  const { control, register, handleSubmit, formState, reset } =
    useForm<createGoalForm>({
      resolver: zodResolver(createGoalForm),
    })

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

    Alert.alert('Success', `Meta "${data.title}" foi criada com sucesso!`)

    reset()
  }

  const [selectedValue, setSelectedValue] = useState(1)

  return (
    <BottomSheet
      ref={bottomSheetRef}
      //index={-1} //define aberto ou fechado
      snapPoints={[snapPoints.min, snapPoints.max]}
      //handleIndicatorStyle={s.indicator}
      //backgroundStyle={s.container}
      //keyboardBlurBehavior="restore"
      enableContentPanningGesture={false}
      enableOverDrag={false}
      backgroundStyle={{
        backgroundColor: colors.zinc[950],
        borderColor: colors.zinc[100],
        borderWidth: 2,
      }}
      handleStyle={{
        backgroundColor: colors.zinc[100],
        borderColor: colors.zinc[100],
        borderWidth: 2,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomWidth: 0,
      }}
    >
      <View className="flex-1 flex-col px-4 py-2.5">
        <View className="flex flex-col h-56">
          <View className="flex-col justify-between h-52">
            <Text className="text-2xl font-semiBold text-zinc-100">
              Cadastrar meta
            </Text>
            <Text className="text-md font-normal text-zinc-400">
              Adicione atividades que te fazem bem e que você {'\n'}quer
              continuar praticando toda semana.
            </Text>
            <Text className="text-lg font-semiBold text-zinc-100">
              Qual atividade?
            </Text>
            <Controller
              name={'title'}
              control={control}
              defaultValue={''}
              render={({ field }) => (
                <>
                  <Input
                    id="title"
                    onChangeText={field.onChange}
                    value={String(field.value)}
                    {...register('title')}
                    placeholder="Praticar exercícios, meditar, etc..."
                  />

                  {formState.errors.title && (
                    <Text className="text-red-500 text-sm">
                      {formState.errors.title.message}
                    </Text>
                  )}
                </>
              )}
            />

            <Text className="text-lg font-semiBold text-zinc-100">
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
                onValueChange={field.onChange}
                value={String(field.value)}
                snapPoints={snapPoints}
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
