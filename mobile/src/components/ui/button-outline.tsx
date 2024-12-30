import {
  TouchableOpacity,
  type TouchableOpacityProps,
  Text,
  type TextProps,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'
import clsx from 'clsx'

import { Plus, type LucideProps as LucideIconProps } from 'lucide-react-native'

import { colors } from '@/styles/theme'

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}

type IconProps = {
  disabled: boolean
  icon: React.ComponentType<LucideIconProps>
}

function ButtonOutline({
  children,
  style,
  isLoading = false,
  ...rest
}: ButtonProps) {
  const s = StyleSheet.create({
    container: {
      gap: 4,
      borderWidth: 2,
      borderColor: colors.zinc[800],
      borderStyle: 'dashed',
    },
  })

  return (
    <TouchableOpacity
      className="flex flex-row justify-center items-center bg-transparent rounded-full leading-3 px-3 py-3"
      activeOpacity={0.8}
      style={[s.container, style]}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.zinc[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}

function Title({ children, disabled }: TextProps) {
  return (
    <Text
      className={clsx(
        'text-sm font-regular text-zinc-100',
        disabled && 'text-zinc-600 disabled'
      )}
    >
      {children}
    </Text>
  )
}

function Icon({ icon: Icon, disabled }: IconProps) {
  return (
    <Icon
      size={16}
      className={clsx(disabled ? 'color-zinc-600' : 'color-zinc-100')}
    />
  )
}

ButtonOutline.Title = Title
ButtonOutline.Icon = Icon

export { ButtonOutline }
