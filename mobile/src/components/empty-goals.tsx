import { View, Text, Image } from 'react-native'
import { Plus } from 'lucide-react-native'

import { Button } from '@/components/ui/button'
import { router } from 'expo-router'

export function EmptyGoals() {
  return (
    <View className="flex-1 flex-col justify-center items-center gap-8 max-w-80 ">
      <Image
        source={require('@/assets/logo-in-orbit.png')}
        className="w-32 h-10"
      />
      <Image
        source={require('@/assets/lets-start-illustration.png')}
        className="flex max-w-80"
      />
      <View className="flex flex-col max-w-80 justify-center items-center leading-relaxed">
        <Text className="text-center text-zinc-300">
          Você ainda não cadastrou nenhuma meta,{'\n'} que tal cadastrar um
          agora mesmo?
        </Text>
      </View>
      <View className="flex flex-col justify-center items-center max-w-80">
        <Button isLoading={false} onPress={() => router.navigate('/summary')}>
          <Button.Icon icon={Plus} size={16} className="text-zinc-100" />
          <Button.Title>Cadastrar meta</Button.Title>
        </Button>
      </View>
    </View>
  )
}
