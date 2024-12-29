import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import {
  useFonts,
  Rubik_700Bold,
  Rubik_500Medium,
  Rubik_400Regular,
  Rubik_600SemiBold,
} from '@expo-google-fonts/rubik'

import { colors } from '@/styles/colors'
import { Loading } from '@/components/loading'

export default function Layout() {
  const queryClient = new QueryClient()

  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle={'light-content'} />
      <GestureHandlerRootView className="flex-1">
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.zinc[950] },
          }}
        />
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}
