import { Planet } from './styled';


interface MenuItemProps {
  planet: string;
  isSelected: boolean;
  onClick: () => void;
}

const MenuItem= ({ planet, isSelected, onClick }: MenuItemProps) => {
  return (
    <Planet isSelected={isSelected} onClick={onClick}>
      {planet}
    </Planet>
  );
};

export default MenuItem;
