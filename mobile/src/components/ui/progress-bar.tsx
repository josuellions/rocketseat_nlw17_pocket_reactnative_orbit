import clsx from 'clsx'
import { View, Text } from 'react-native'

type ProgressBarProps = {
  percentage: number
}

export function ProgressBar({ percentage = 0 }: ProgressBarProps) {
  return (
    <View className="bg-zinc-900 rounded-full h-2">
      <View
        className="bg-violet-500 rounded-full h-2"
        style={{
          width: Number(`${percentage * 4}`),
          maxWidth: '100%',
        }}
      />
    </View>
  )
}
