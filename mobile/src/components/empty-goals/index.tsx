import { View, Text, Image } from 'react-native'
import { Plus } from 'lucide-react-native'

import { s } from './styles'

import { Button } from '@/components/ui/button'
import { router } from 'expo-router'

export function EmptyGoals() {
  return (
    <View className="flex flex-col justify-center items-center">
      <Image source={require('@/assets/logo-in-orbit.png')} style={s.logo} />
      <Image
        source={require('@/assets/lets-start-illustration.png')}
        style={s.illustration}
      />

      <Text style={s.text}>
        Você ainda não cadastrou nenhuma meta,{'\n'} que tal cadastrar um agora
        mesmo?
      </Text>

      <Button isLoading={false} onPress={() => router.navigate('/summary')}>
        <Button.Icon icon={Plus} />
        <Button.Title>Cadastrar meta</Button.Title>
      </Button>
    </View>
  )
}
