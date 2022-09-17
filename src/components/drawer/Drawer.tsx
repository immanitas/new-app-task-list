import { Box, Drawer as MuiDrawer } from '@mui/material';
import { useCallback, useState } from 'react';

const ANCHOR = "left"
export const DRAWER_WIDTH = 240;

interface DrawerProps {
  children?: React.ReactNode;
  isOpen?: boolean
}

export const Drawer: React.FC<DrawerProps> = ({ children, isOpen }) => {
  const handleCloseDrawer = useCallback(() => {
  }, [])

  return (
    <MuiDrawer
      variant="persistent"
      PaperProps={{
        sx: {
          pt: theme => ({
            xs: `${theme.variables.components.AppBar.height.xs}px`,
            sm: `${theme.variables.components.AppBar.height.sm}px`,
            lg: `${theme.variables.components.AppBar.height.lg}px`,
            md: `${theme.variables.components.AppBar.height.md}px`,
          })
        }
      }}
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: DRAWER_WIDTH, boxSizing: 'border-box' },
      }}
      data-testid="drawer"
      anchor={ANCHOR}
      open={isOpen}
      onClose={handleCloseDrawer}
    >

      {children}
    </MuiDrawer>
  )
}