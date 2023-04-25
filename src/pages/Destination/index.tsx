import Header from '../../components/Header'
import './styled.css'
import moon from '../../assets/destination/image-moon.png'

interface PlanetDestination {
    name: string,
    description: string,
    distance: string,
    time: string
}

const Destination = () => {
    return (
        <div className="destination">

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
                    <img src={moon} alt="" className="planet" />
                    
                    <div className="destination-information">
                        <div className="destination-menu">
                            <p>Moon</p>
                            <p>Moon</p>
                            <p>Moon</p>
                            <p>Moon</p>
                        </div>

                        <div className="planet-description">
                            <h1>Moon</h1>
                            <p> See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                        </div>

                        <div className="planet-distance">
                            <div className="distance-detail">
                                <h5>AVG. DISTANCE</h5>
                                <p>384,400 km</p> 
                            </div>
                            <div className="distance-detail">
                                <h5>Est. travel time</h5>
                                <p>3 days</p> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Destination