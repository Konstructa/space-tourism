import { Title, TitleContainer } from './styles'

interface PageTitleProps {
    title: string,
    number: string
}

export const PageTitle = ({ title, number }: PageTitleProps) => {
  return (
    <TitleContainer>
        <Title> <span> {number} </span> { } {title}</Title>
    </TitleContainer>

  )
}
