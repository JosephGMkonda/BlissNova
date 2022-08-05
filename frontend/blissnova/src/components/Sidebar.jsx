import React from 'react'
import {Box,List,ListItem,ListItemText,ListItemIcon,ListItemButton} from '@mui/material'
import {Home,Settings,PublicOff,Notifications,Mail,AccountBox} from '@mui/icons-material'

function Sidebar() {
  return (
    <Box 
    flex={2}
     p={2}
     sx={{ display: {xs:"none",sm:"block"}}}
     >
      <Box position="fixed">

      
       <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Home/>
                </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <PublicOff/>
                </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Mail/>
                </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Notifications/>
                </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <AccountBox/>
                </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Settings/>
                </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

        </List>

        </Box>
        
    </Box>
  )
}

export default Sidebar