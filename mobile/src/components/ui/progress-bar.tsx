import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { colors } from '@/styles/colors'

type ProgressBarProps = {
  percentage: number
}

export function ProgressBar({ percentage = 0 }: ProgressBarProps) {
  return (
    <View className="flex-1 items-center justify-center p-2">
      <LinearGradient
        // Background Linear Gradient
        colors={[colors.zinc[900], 'transparent']}
        className="absolute left-0 right-0 top-0 h-2.5 rounded-full"
      />
      <LinearGradient
        // Button Linear Gradient
        start={{ x: 0, y: 0 }}
        colors={[colors.pink[500], colors.pink[400], colors.violet[500]]}
        className="absolute left-0 right-0 top-0 items-center rounded-full h-1.5"
        style={{
          width: Number(`${percentage * 4}`),
          maxWidth: '100%',
        }}
      />
    </View>
  )
}
