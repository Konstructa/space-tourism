import HomeDestop from '../assets/home/background-home-desktop.jpg'
import HomeTablet from '../assets/home/background-home-tablet.jpg'
import HomeMobile from '../assets/home/background-home-mobile.jpg'

import DestinationDesktop from '../assets/destination/background-destination-desktop.jpg'
import DestinationTablet from '../assets/destination/background-destination-tablet.jpg'
import DestinationMobile from '../assets/destination/background-destination-mobile.jpg'

import CrewDesktop from '../assets/crew/background-crew-desktop.jpg'
import CrewTablet from '../assets/crew/background-crew-tablet.jpg'
import CrewMobile from '../assets/crew/background-crew-mobile.jpg'

import TechnologyDesktop from '../assets/technology/background-technology-desktop.jpg'
import TechnologyTablet from '../assets/technology/background-technology-tablet.jpg'
import TechnologyMobile from '../assets/technology/background-technology-mobile.jpg'



export const background = {
    home: {
        mobile: HomeMobile,
        tablet: HomeTablet,
        desktop: HomeDestop
    },
    destination: {
        mobile:  DestinationMobile,
        tablet:  DestinationTablet,
        desktop: DestinationDesktop
    },
    crew: {
        mobile: CrewMobile,
        tablet: CrewTablet,
        desktop: CrewDesktop
    },
    technology: {
        mobile:  TechnologyMobile,
        tablet: TechnologyTablet,
        desktop: TechnologyDesktop
    }
}
