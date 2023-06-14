import { Detail } from "./Detail"
import { PlanetDistance } from "./styles"

interface DistanceProps {
    distance: string,
    travel: string
}

export const Distance = ({ distance, travel}: DistanceProps) => {
  return (
    <PlanetDistance>
        <Detail title="AVG. DISTANCE" detail={distance} />
        <Detail title="EST. TRAVEL TIME" detail={travel} />
    </PlanetDistance>
  )
}
