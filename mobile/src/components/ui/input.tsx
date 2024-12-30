import { TextInput, type TextInputProps } from 'react-native'

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex px-4 h-12  border border-zinc-200 rounded-lg placeholder-zinc-400 outline-none text-sm"
      {...rest}
    />
  )
}
