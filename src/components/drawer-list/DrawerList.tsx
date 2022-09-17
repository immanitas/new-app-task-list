import { Box, List, ListItem, ListItemText } from "@mui/material"
import { LinkBehavior } from "../link/LinkBehavior"

export const DrawerList: React.FC<{}> = () => {
  return (
    <List component="nav" dense={true}>
      <ListItem>
        <LinkBehavior href="/">
          <ListItemText>Home</ListItemText>
        </LinkBehavior>
      </ListItem>
      <ListItem>
        <LinkBehavior href="/tasks">
          <ListItemText>Tasks</ListItemText>
        </LinkBehavior>
      </ListItem>
    </List>
  )
}