import React from 'react'
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'

import { BottomSheetFlatList } from '@gorhom/bottom-sheet'

import { CheckCircle2, Circle } from 'lucide-react-native'
import { colors } from '@/styles/colors'
import clsx from 'clsx'

type RadioButtonProps = TouchableOpacityProps & {
  icon: string
  title: string
  amount: number
  selected: boolean
  onPress: (amount: number) => void
}

function Button({
  icon,
  title,
  amount,
  selected,
  onPress,
  ...rest
}: RadioButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={clsx(
        'flex flex-row justify-between items-center mb-4 py-2 px-2 border border-zinc-800 rounded-lg h-12',
        selected && 'border-pink-500 border-2 bg-zinc-800'
      )}
      onPress={() => onPress(amount)}
      {...rest}
    >
      {selected ? (
        <CheckCircle2 size={16} color={colors.pink[600]} />
      ) : (
        <Circle size={16} color={colors.zinc[500]} />
      )}
      <Text className="text-md text-zinc-100">{title}</Text>
      <Text className="text-xl">{icon}</Text>
    </TouchableOpacity>
  )
}

type RadioGroupProps = TouchableOpacityProps & {
  title: string
  amount: number
  selected: boolean
  options: RadioButtonProps[]
  onChange: (amount: number) => void
}

function RadioGroup({
  options,
  amount,
  title,
  onChange,
  selected,
  ...rest
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
}: any) {
  return (
    <BottomSheetFlatList
      data={options}
      key={amount}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item: RadioButtonProps) => String(item.amount)}
      renderItem={({ item }) => (
        <Button
          key={amount}
          title={item.title}
          amount={amount}
          selected={amount === item.amount}
          onPress={() => onChange(item.amount)}
          icon={item.icon}
          {...rest}
        />
      )}
    />
  )
}

export { RadioGroup }
