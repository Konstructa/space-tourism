import { Text } from './styles'

interface BodyTextProps {
  text: string
}

export const BodyText = ({ text }: BodyTextProps) => {
  return (
    <Text> {text} </Text>
  )
}
