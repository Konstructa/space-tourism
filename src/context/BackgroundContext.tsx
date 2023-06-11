import { createContext, useState } from 'react'


interface BackgroundProps {
    backgroundImage: string
    changeBackgroundImage: (image: string) => void
}

const BackgroundContext = createContext<BackgroundProps>({
    backgroundImage: '',
    changeBackgroundImage: () => { }
})

export const BackgroundProvider = ({ children }: any) => {
    const [backgroundImage, setBackgroundImage] = useState<string>('home');

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