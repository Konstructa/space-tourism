
import * as Styled from './styles'
import { useContext  } from 'react'
import BackgroundContext from '../../context/BackgroundContext';


interface ContainerProps {
  children: any,
}

const Container = ({ children }: ContainerProps) => {

  const { backgroundImage } = useContext(BackgroundContext);

  return (
    <Styled.Container background={backgroundImage}>
        {children}
    </Styled.Container>
  )
}


export default Container