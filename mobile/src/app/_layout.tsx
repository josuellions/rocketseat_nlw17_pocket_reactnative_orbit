import { Stack } from 'expo-router'
import { StatusBar, SafeAreaView, Platform, View } from 'react-native'
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
import React from 'react'

export default function Layout() {
  const queryClient = new QueryClient()
  const statusBarHeight = Math.round(
    Number(Platform.OS === 'android' ? StatusBar.currentHeight : 0) / 4
  )

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
      <GestureHandlerRootView>
        <SafeAreaView className="bg-transparent flex-1 antialiased">
          <StatusBar barStyle={'light-content'} />
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: colors.zinc[950] },
            }}
          />
        </SafeAreaView>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}
