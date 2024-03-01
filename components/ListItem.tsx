import styles from './ListItem.module.css';
import ListItemMUI from '@mui/material/ListItem';

interface ListItemProps {
  title: string;
  onClick: () => void;
  isFocused: boolean;
}

function ListItem({ title, onClick, isFocused }: ListItemProps) {
  return (
    <ListItemMUI
      onClick={onClick}
      className={isFocused?styles.listItemFocused:styles.listItem}
    >
      {title}
    </ListItemMUI>
  );
}

export default ListItem;
