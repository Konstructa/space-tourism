import { createContext, useState } from 'react'
import { theme } from '../styles/theme';

interface BackgroundProps {
    backgroundImage: string
    changeBackgroundImage: (image: string) => void
}

const BackgroundContext = createContext<BackgroundProps>({
    backgroundImage: theme.background.home.desktop,
    changeBackgroundImage: () => { }
})

export const BackgroundProvider = ({ children }: any) => {
    const [backgroundImage, setBackgroundImage] = useState<string>('');

    const changeBackgroundImage = (image: string) => {
        setBackgroundImage(image);
    };

    return (
        <BackgroundContext.Provider value={{ backgroundImage, changeBackgroundImage }}>
            {children}
        </BackgroundContext.Provider>
    )
}

export default BackgroundContext;