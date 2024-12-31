import {
  TouchableOpacity,
  type TouchableOpacityProps,
  Text,
  type TextProps,
  ActivityIndicator,
} from 'react-native'

import { Plus, type LucideProps as LucideIconProps } from 'lucide-react-native'

import { tv, type VariantProps } from 'tailwind-variants'
import clsx from 'clsx'

import { colors } from '@/styles/theme'

const button = tv({
  base: 'flex flex-row items-center justify-center rounded-lg ring-offset-2 ring-offset-black focus-visible:ring-2',

  variants: {
    variant: {
      primary:
        'bg-violet-500 text-violet-50 hover:bg-violet-600 ring-violet-500',
      secondary: 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 ring-zinc-900',
    },

    size: {
      default: 'px-4 py-3.5',
      sm: 'px-3 py-2.5',
      xs: 'px-2 py-1.5',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

type ButtonProps = TouchableOpacityProps &
  VariantProps<typeof button> & {
    isLoading?: boolean
    className?: string | undefined
  }

type IconProps = {
  icon: React.ComponentType<LucideIconProps>
  size: number | string | undefined
  className: string | undefined
}

function Button({
  children,
  style,
  isLoading = false,
  className,
  variant,
  size,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={isLoading}
      className={clsx(
        button({ variant, size, className }),
        isLoading && 'w-40'
      )}
      style={[style]}
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

function Title({ children }: TextProps) {
  return (
    <Text className="text-zinc-100 text-sm font-medium outline-none tracking-tight">
      {children}
    </Text>
  )
}

function Icon({ icon: Icon, size, className, ...rest }: IconProps) {
  return <Icon size={size} className="mr-2" {...rest} />
}

Button.Title = Title
Button.Icon = Icon

export { Button }
