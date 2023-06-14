import { Details, P, H5 } from './styles'

interface DetailProps {
    title: String,
    detail: String
}

export const Detail = ({ title, detail }: DetailProps) => {
  return (
    <Details>
        <H5>{title}</H5>
        <P>{detail}</P>
    </Details>
  )
}
