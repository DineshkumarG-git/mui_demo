import { AccountBox, Group, Home, ModeNight, Pages, Person, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import {Feed} from './Feed'


export const Sidebar = ({setMode,Moder}) => {
  return (

    <Box
    flex={1}
    p={2}
    sx={{display:{xs:"none",sm:"block"} }}
     >
      <Box position="fixed">
    <List>
    <ListItem >
      <ListItemButton component="a" href="#home" disablePadding>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </ListItem>
    <ListItem >
      <ListItemButton >
        <ListItemIcon>
          <Pages />
        </ListItemIcon>
        <ListItemText primary="pages" />
      </ListItemButton>
    </ListItem>
    <ListItem >
      <ListItemButton >
        <ListItemIcon>
          <Group />
        </ListItemIcon>
        <ListItemText primary="Groups" />
      </ListItemButton>
    </ListItem>
    <ListItem >
      <ListItemButton >
        <ListItemIcon>
          <Storefront />
        </ListItemIcon>
        <ListItemText primary="Market" />
      </ListItemButton>
    </ListItem>
    <ListItem >
      <ListItemButton >
        <ListItemIcon>
          <Person></Person>
        </ListItemIcon>
        <ListItemText primary="person" />
      </ListItemButton>
    </ListItem>
    <ListItem >
      <ListItemButton >
        <ListItemIcon>
          <AccountBox></AccountBox>
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
    </ListItem>
    <ListItem >
      <ListItemButton >
        <ListItemIcon>
          <ModeNight></ModeNight>
        </ListItemIcon>
        <Switch onChange={(e)=>setMode(Moder==="light"? "dark":"light")}></Switch>
      </ListItemButton>
    </ListItem>
    </List>
    </Box>

    </Box>
   
  )
}
