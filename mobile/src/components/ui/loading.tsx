import { ActivityIndicator } from 'react-native'

import { colors } from '@/styles/colors'

export function Loading() {
  return (
    <ActivityIndicator
      color={colors.violet[500]}
      //style={s.container}
      className="flex-1 justify-center items-center bg-transparent"
      size={32}
    />
  )
}
