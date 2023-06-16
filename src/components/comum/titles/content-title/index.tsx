import { Title } from "./styles"

interface ContentTitle {
    title: string
}

export const ContentTitle = ({ title }: ContentTitle) => {
  return (
    <Title>{title}</Title>
  )
}
