import { useState } from "react";
import MenuItem from "./MenuItem";
import { Menu } from "./styled";


export interface MenuDestinationProps {
    planetsName: string[];
    selectPlanet: (id: number) => void
}

const MenuDestination = ({ planetsName, selectPlanet }: MenuDestinationProps) => {

    const [selectedItem, setSelectedItem] = useState<string>('Moon');
  
    const handleClick = (name: string, id: number) => {
      setSelectedItem(name);
      selectPlanet(id)
    };

    return (
      <Menu>
        {planetsName.map((name, index) => (
          <MenuItem
            key={index}
            planet={name}
            isSelected={selectedItem === name}
            onClick={() => handleClick(name, index)}
          />
        ))}
      </Menu>
    );
  };

export default MenuDestination