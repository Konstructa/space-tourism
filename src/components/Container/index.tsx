
import * as Styled from './styles'

interface ContainerProps {
  children: any,
  background: string
}

const Container = ({ children, background}: ContainerProps) => {
  return (
    <Styled.Container background={background}>
        {children}
    </Styled.Container>
  )
}


export default Container