import clsx from 'clsx'
import { forwardRef, useState } from 'react'
import { TextInput, type TextInputProps } from 'react-native'

import { colors } from '@/styles/theme'

interface CustomInputProps extends TextInputProps {}

const Input = forwardRef<TextInput, CustomInputProps>((rest, ref) => {
  const [isFocused, setIsFocused] = useState<boolean | null>(false)

  return (
    <TextInput
      className={clsx(
        'flex px-4 h-12 text-black border border-zinc-200 rounded-lg  outline-none text-sm',
        isFocused && 'border-2 border-pink-500'
      )}
      placeholderTextColor={colors.zinc[400]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      ref={ref}
      {...rest}
    />
  )
})

export { Input }
