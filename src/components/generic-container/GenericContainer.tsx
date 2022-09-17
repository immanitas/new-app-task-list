import { Container, Box } from '@mui/material';
import { useState } from 'react';
import { DrawerList } from '../drawer-list/DrawerList';
import { Drawer, DRAWER_WIDTH } from '../drawer/Drawer';
import { Header } from '../header/Header';
import { GenericContainerProps } from './GenericContainerProps';

export const GenericContainer: React.FC<GenericContainerProps> = ({ children }) => {
  const [isDrawerOpen, triggerDrawer] = useState<boolean>(false)

  return (
    <Container data-testid="wrapper" maxWidth={false}>
      <Header
        isMenuOpen={isDrawerOpen}
        onDrawerClick={() => triggerDrawer(!isDrawerOpen)}
      />
      <Drawer isOpen={isDrawerOpen}>
        <DrawerList />
      </Drawer>
      <Box
        data-testid="content-wrapper"
        sx={{
          flexGrow: 1, mt: theme => ({
            xs: `${theme.variables.components.AppBar.height.xs}px`,
            sm: `${theme.variables.components.AppBar.height.sm}px`,
            lg: `${theme.variables.components.AppBar.height.lg}px`,
            md: `${theme.variables.components.AppBar.height.md}px`,
          }),
          transform: `translate(${isDrawerOpen ? DRAWER_WIDTH : 0}px)`,
          transition: theme => theme.transitions.create('transform')
        }}
      >
        {children}
      </Box>
    </Container>
  )
}
