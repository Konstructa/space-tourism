import './styled.css'
import * as Styled from './styled'
import { useState } from 'react'
import { planets } from './planet'
import { Distance } from '../../components/destination/Distance';
import MenuDestination from '../../components/destination/Menu';
import { PageTitle } from '../../components/comum/titles/page-title';
import { PageContent } from '../../components/comum/container/Page';
import { ContentTitle } from '../../components/comum/titles/content-title';
import { BodyText } from '../../components/BodyText';

interface PlanetDestination {
    name: string;
    image: string;
    description: string;
    distance: string;
    travel: string;
}

const Destination = () => {
    const [planet, setPlanet] = useState<PlanetDestination>(planets[0])

    const selectPlanet = (id: number) => {
        setPlanet(planets[id])
    }

    const planetsName = planets.map(planet => planet.name);

    return (
        <PageContent>
            <PageTitle title="Pick your destination" number="01" />

            <div className="destination-planet">
                <img src={planet.image} alt="" className="planet" />

                <div className="destination-information">

                    <MenuDestination
                        planetsName={planetsName}
                        selectPlanet={selectPlanet}
                    />

                    <Styled.PlanetDescription>
                        <ContentTitle title={planet?.name} />
                        <BodyText text={planet?.description}/> 
                    </Styled.PlanetDescription>

                    <Distance
                        distance={planet.distance}
                        travel={planet.travel}
                    />
                </div>
            </div>
        </PageContent>
    )
}

export default Destination