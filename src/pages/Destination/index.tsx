import './styled.css'
import * as Styled from './styled'
import { useState } from 'react'
import { planets } from './planet'
import { Distance } from '../../components/destination/Distance';

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

    return (
        <Styled.Destination>
            <div className="destination-content">
                <div className="title">
                    <h3 style={{ color: 'rgb(255, 255, 255, 0.75)', fontWeight: 'bold'}}>
                        O1
                    </h3>
                    <h3>
                        Pick your destination
                    </h3>
                </div>

                <div className="destination-planet">
                    <img src={planet.image} alt="" className="planet" />
                    
                    <div className="destination-information">
                        <div className="destination-menu">
                            <p onClick={() => selectPlanet(0)}>Moon</p>
                            <p onClick={() => selectPlanet(1)}>Mars</p>
                            <p onClick={() => selectPlanet(2)}>Europa</p>
                            <p onClick={() => selectPlanet(3)}>Titan</p>
                        </div>

                        <div className="planet-description">
                            <h1>{planet?.name}</h1>
                            <p> {planet?.description}</p>
                        </div>

                        <Distance distance={planet.distance} travel={planet.travel}/>
                    </div>
                </div>
            </div>
        </Styled.Destination>
    )
}

export default Destination